import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export async function verifyCaptcha(token) {
  try {
    const secretKey = process.env.RE_CAPTCHA_SECRET_KEY; // from .env
    const googleURL = "https://www.google.com/recaptcha/api/siteverify";

    const res = await axios.post(
      googleURL,
      {},
      {
        params: {
          secret: secretKey,
          response: token,
        },
      }
    );

    // Google returns: { success: true/false, score, action, challenge_ts, hostname }
    return res.data.success;
  } catch (err) {
    console.error("❌ reCAPTCHA verification failed:", err.message);
    return false;
  }
}