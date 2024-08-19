import { sendEmail } from "@/lib/mail.utlis";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email: from, name, subject, message ,phone} = await request.json();

    await sendEmail({
      from,
      subject: ` ${subject}`,
      message: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${from}</p>
      <p><strong>phone:</strong>${phone}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>`,
    });

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to send email", error: error?.message },
      { status: 500 }
    );
  }
}
