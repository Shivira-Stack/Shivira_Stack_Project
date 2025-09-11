import pool from "../../config/db.js";
import bcrypt from "bcrypt";
import { CreateAuthUserTable, CreateAuthOtpTable, CheckAuthUserRows } from "../../schema/tebles_init.js";
import { findAuthUserByEmail, createAuthUser, insertOTP, getLatestOtpRow, markOtpVerified, activateUserByEmail, updateUserPassword } from "../../modules/auth/authModules.js";
import { verifyCaptcha } from "../../utils/verify_captcha.js";
import { generateOTP } from "../../utils/otpGenerator.js";
import { sendMail } from "../../modules/mailerModule.js";

const OTP_TTL_MINUTES = 5;

// Check and create auth_user table if it does not exist
export async function checkAuthUserTable(req, res) {
  try {
    const conn = await pool.getConnection();

    // Step 1: Create table if not exists
    await conn.query(CreateAuthUserTable);
    await conn.query(CreateAuthOtpTable);

    // Step 2: Check if table has data
    const [rows] = await conn.query(CheckAuthUserRows);

    conn.release();

    // Step 3: Return result based on row count
    if (rows[0].count > 0) {
      return res.json({ message: "✅ Your table is ready to use.", hasData: true });
    } else {
      return res.json({ message: "✅ Your table is ready to use.", hasData: false });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "❌ The table couldn’t be created. If the problem continues." });
  }
}

// LogIn auth_user
export async function login(req, res) {
  const { email, password, captcha } = req.body;

  // ✅ Verify reCAPTCHA
  const isCaptchaValid = await verifyCaptcha(captcha);
  if (!isCaptchaValid) {
    return res.status(400).json({ error: "⚠️ reCAPTCHA verification failed. Try again to prove you’re not a robot." });
  }

  try {
    const user = await findAuthUserByEmail(email);

    if (!user) {
      return res.status(400).json({ error: "⚠️ We couldn’t find an account with those details. Please check and try again." });
    }

    // ✅ Compare entered password with hashed password in DB
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "⚠️ Oops! That password doesn’t match our records. Please try again." });
    }

    // ✅ Store user in session (avoid storing sensitive info like password)
    req.session.user = {
      id: user.id,
      email: user.email,
      role: user.role,
      status: user.status,
    };

    return res.json({ message: "✅ Welcome back! You’re now logged in.", user: req.session.user });
  } catch (err) {
    return res.status(500).json({ error: "⚠️ Oops! We’re having trouble on our side. Please try again in a moment." });
  }
}


// LogOut auth_user
export async function logout(req, res) {
  try {
    // destroy session
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ error: "⚠️ Oops! Logout failed. Please try again." });
      }

      // clear session cookie from browser
      res.clearCookie("login_session");
      return res.json({ message: "✅ Welcome back! You’re now logged in." });
    });
  } catch (err) {
    console.error("Logout error:", err);
    return res.status(500).json({ error: "⚠️ Oops! We’re having trouble on our side. Please try again in a moment." });
  }
}

// Create auth_user
export async function signup(req, res) {
  const { email, password, confirmPassword, captcha } = req.body;

  if (!email || !password || !confirmPassword || !captcha) {
    return res.status(400).json({ error: "⚠️ Don’t leave any fields empty. All fields are required." });
  }
  if (password !== confirmPassword) {
    return res.status(400).json({ error: "⚠️ Oops! The passwords you entered don’t match." });
  }

  try {
    const isCaptchaValid = await verifyCaptcha(captcha);
    if (!isCaptchaValid) return res.status(400).json({ error: "⚠️ reCAPTCHA verification failed. Try again to prove you’re not a robot." });

    const existingUser = await findAuthUserByEmail(email);
    if (existingUser) return res.status(400).json({ error: "⚠️ Looks like you already have an account with this email." });

    const passwordHash = await bcrypt.hash(password, 10);
    const userId = await createAuthUser(email, passwordHash, passwordHash);

    // ✅ Generate OTP
    const otp = generateOTP();

    // ✅ Insert OTP into DB
    await insertOTP(email, otp);

    // ✅ Send OTP via email
    const subject = "Your Shivira Stack Account OTP";
    const html = `<p>Hello,</p><p>Your OTP for account verification is: <b>${otp}</b></p>`;
    await sendMail(email, subject, html);

    res.status(201).json({
      message: `✅ Check your email for the OTP to verify your account. It will be valid for the next ${OTP_TTL_MINUTES} minutes.`,
      user: { id: userId, email },
    });
  } catch (err) {
    if (err.code === "ER_DUP_ENTRY") return res.status(400).json({ error: "⚠️ Looks like you already have an account with this email." });
    res.status(500).json({ error: "⚠️ Oops! We’re having trouble on our side. Please try again in a moment." });
  }
}

// Verify OTP
export async function verifyOtp(req, res) {
  const { email, otp } = req.body;
  if (!email || !otp) return res.status(400).json({ error: "⚠️ OTP is required. Don’t forget to enter it." });

  try {
    const row = await getLatestOtpRow(email);
    if (!row) return res.status(400).json({ error: "⚠️ We couldn’t find an OTP for this email. Try resending it." });

    if (row.verified_at) return res.status(400).json({ error: "⚠️ The OTP you entered has already been verified." });

    const createdAt = new Date(row.created_at);
    if ((Date.now() - createdAt) / (60 * 1000) > OTP_TTL_MINUTES) {
      return res.status(400).json({ error: "⚠️ The OTP is no longer valid. Send a new OTP to continue." });
    }

    if (String(row.otp).toLowerCase() !== String(otp).toLowerCase()) {
      return res.status(400).json({ error: "⚠️ Oops! That OTP doesn’t match. Please check and enter it again." });
    }

    // ✅ mark OTP as verified
    await markOtpVerified(row.id);

    // ✅ activate user
    await activateUserByEmail(email);

    return res.json({ message: "✅ Your OTP was successfully verified. You can now proceed." });
  } catch (err) {
    return res.status(500).json({ error: "⚠️ Oops! We’re having trouble on our side. Please try again in a moment." });
  }
}

// TResend OTP
export async function resendOtp(req, res) {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: "⚠️ Email is required. Don’t forget to enter it." });

  try {

    // Generate new OTP
    const otp = generateOTP(6);

    // Insert into DB
    await insertOTP(email, otp);

    // Optional: cleanup older OTPs if you want
    // await deleteOldOtps(email, 5);

    // Send mail
    const subject = "Your new Shivira Stack OTP";
    const html = `
      <p>Hello,</p>
      <p>Your new verification OTP is: <b>${otp}</b></p>
      <p>This code expires in ${OTP_TTL_MINUTES} minutes.</p>
    `;

    await sendMail(email, subject, html);

    return res.json({ message: `✅ Check your email for the OTP to verify your account. It will be valid for the next ${OTP_TTL_MINUTES} minutes.` });
  } catch (err) {
    return res.status(500).json({ error: "⚠️ Oops! We’re having trouble on our side. Please try again in a moment." });
  }
}

export async function forgotPassword(req, res) {
  const { email, captcha } = req.body;

  if (!email || !captcha) {
    return res.status(400).json({ error: "⚠️ Don’t leave any fields empty. All fields are required." });
  }

  try {
    const isCaptchaValid = await verifyCaptcha(captcha);
    if (!isCaptchaValid) return res.status(400).json({ error: "⚠️ reCAPTCHA verification failed. Try again to prove you’re not a robot." });

    const user = await findAuthUserByEmail(email);

    if (!user) {
      return res.status(400).json({ error: "⚠️ We couldn’t find an account with those details. Please check and try again." });
    }

    // ✅ Only allow active or inactive users
    if (!["active", "inactive"].includes(user.status)) {
      return res.status(403).json({
        error: "Password reset is not allowed for this account. Please contact the Super Admin.",
      });
    }

    // ✅ Generate OTP
    const otp = generateOTP();

    // ✅ Insert OTP into DB
    await insertOTP(email, otp);

    // ✅ Send OTP via email
    const subject = "Your Shivira Stack Account OTP";
    const html = `
      <p>Hello,</p>
      <p>Your OTP for resetting your account password is:</p>
      <h2>${otp}</h2>
      <p>This OTP will expire in ${OTP_TTL_MINUTES} minutes.</p>
    `;
    await sendMail(email, subject, html);

    return res.json({ message: `✅ Check your email for the OTP to verify your account. It will be valid for the next ${OTP_TTL_MINUTES} minutes.` });
  } catch (err) {
    return res.status(500).json({ error: "⚠️ Oops! We’re having trouble on our side. Please try again in a moment.. Please try again later." });
  }
}

export async function resetPassword(req, res) {
  const { email, newpassword, confirmpassword, captcha } = req.body;

  // ✅ Check required fields
  if (!email || !newpassword || !confirmpassword || !captcha) {
    return res.status(400).json({ error: "⚠️ Don’t leave any fields empty. All fields are required." });
  }

  // ✅ Match check
  if (newpassword !== confirmpassword) {
    return res.status(400).json({ error: "⚠️ Oops! The passwords you entered don’t match." });
  }

  try {
    // ✅ Verify captcha
    const isCaptchaValid = await verifyCaptcha(captcha);
    if (!isCaptchaValid) {
      return res.status(400).json({ error: "⚠️ reCAPTCHA verification failed. Try again to prove you’re not a robot." });
    }

    // ✅ Find user
    const user = await findAuthUserByEmail(email);
    if (!user) return res.status(404).json({ error: "⚠️ We couldn’t find an account with those details. Please check and try again." });

    // ✅ Allow ONLY active users to reset password
    if (user.status !== "active") {
      return res.status(403).json({
        error: "Password reset is only allowed for active accounts. Please contact the Super Admin.",
      });
    }

    // ✅ Compare with current password
    const isSameAsCurrent = await bcrypt.compare(newpassword, user.password);
    if (isSameAsCurrent) {
      return res.status(400).json({ error: "⚠️ Please choose a new password that’s different from your current one." });
    }

    // ✅ Compare with old password (if available)
    if (user.old_password) {
      const isSameAsOld = await bcrypt.compare(newpassword, user.old_password);
      if (isSameAsOld) {
        return res.status(400).json({ error: "⚠️ Please choose a new password that’s different from your previous one." });
      }
    }

    // ✅ Hash new password
    const hashedPassword = await bcrypt.hash(newpassword, 10);

    // ✅ Update DB (move current password → old_password, save new one, update timestamp)
    await updateUserPassword(email, hashedPassword);

    return res.json({ message: "✅ Your password has been reset successfully. You can now log in with your new password." });
  } catch (err) {
    return res.status(500).json({ error: "⚠️ Oops! We’re having trouble on our side. Please try again in a moment." });
  }
}

