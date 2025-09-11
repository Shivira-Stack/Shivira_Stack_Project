import { mailer } from "../config/mailer.js";
import dotenv from "dotenv";

dotenv.config();

/**
 * Send email wrapper
 */
export async function sendMail(to, subject, htmlContent) {
  try {
    const info = await mailer.sendMail({
      from: `"Shivira Stack" <${process.env.MAIL_USER}>`,
      to,
      subject,
      html: htmlContent,
    });

    console.log("📩 Mail sent:", info.messageId);
    return info;
  } catch (err) {
    console.error("❌ Mail sending error:", err.message);
    throw err;
  }
}
