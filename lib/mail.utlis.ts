import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
} as SMTPTransport.Options);

type SendEmailDto = {
  from: string;
  subject: string;
  message: string;
};

export const sendEmail = async (dto: SendEmailDto) => {
  const { from, subject, message } = dto;

  try {
    return await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject,
      html: message,
      text: message,
      replyTo: from,
    });
  } catch (error: unknown) {
    let errorMessage = "Failed to send email.";
    if (error instanceof Error) {
      errorMessage += ` Error: ${error.message}`;
    }
    throw new Error(errorMessage);
  }
};
