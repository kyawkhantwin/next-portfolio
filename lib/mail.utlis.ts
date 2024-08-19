import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

// Configure the transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
} as SMTPTransport.Options);

type SendEmailDto = {
  from: string;    // User's email address (for reply-to purposes)
  subject: string;
  message: string;
};

export const sendEmail = async (dto: SendEmailDto) => {
  const { from, subject, message } = dto;

  try {
    // Send email to your address with reply-to set
    return await transporter.sendMail({
      from: process.env.EMAIL, // Your email address (sender)
      to: process.env.EMAIL,   // Your email address (recipient)
      subject,
      html: message,
      text: message,
      replyTo: from,           // User's email address for replies
    });
  } catch (error) {
    throw new Error("Failed to send email.");
  }
};
