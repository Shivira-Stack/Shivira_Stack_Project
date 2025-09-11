import pool from "../../config/db.js";
import { FindAuthUser, CreateAuthUser, CreateAuthUserOtp, LatestOtp, VerifiedOtp, ActiveAuthUser, AuthUserNewPassword } from "../../schema/tebles_init.js";

export async function findAuthUserByEmail(email) {
  const [rows] = await pool.query(FindAuthUser, [email]);
  return rows[0];
}

export async function createAuthUser(email, passwordHash, oldPasswordHash) {
  const [result] = await pool.query(CreateAuthUser, [email, passwordHash, oldPasswordHash]);
  return result.insertId;
}

export async function insertOTP(email, otp) {
  const [result] = await pool.query(CreateAuthUserOtp, [email, otp]);
  return result.insertId;
}

export async function getLatestOtpRow(email) {
  const [rows] = await pool.query(LatestOtp, [email]);
  return rows[0] || null;
}

export async function markOtpVerified(id) {
  const [result] = await pool.query(VerifiedOtp, [id]);
  return result.affectedRows > 0;
}

export async function activateUserByEmail(email) {
  const [result] = await pool.query(ActiveAuthUser, [email]);
  return result.affectedRows > 0;
}

export async function updateUserPassword(email, hashedPassword) {
  const [result] = await pool.query(AuthUserNewPassword, [hashedPassword, email]);
  return result.affectedRows > 0;
}