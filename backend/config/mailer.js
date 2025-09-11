import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

/**
 * Returns a nodemailer transport based on provider from env
 */
function getMailerTransport() {
  const provider = (process.env.MAIL_PROVIDER).toLowerCase();
  console.log(provider);

  switch (provider) {
    case "gmail":
      return nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS,
        },
      });

    case "outlook":
    case "hotmail":
      return nodemailer.createTransport({
        service: "hotmail",
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS,
        },
      });

    case "yahoo":
      return nodemailer.createTransport({
        service: "yahoo",
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS,
        },
      });

    case "smtp":
      return nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: process.env.SMTP_SECURE === "true", // true = 465, false = 587
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

    default:
      throw new Error(`❌ Unsupported mail provider: ${provider}`);
  }
}

export const mailer = getMailerTransport();
