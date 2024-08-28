import { sendEmail } from "@/lib/mail.utlis";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email: from, name, subject, message, phone } = await request.json();

    await sendEmail({
      from,
      subject: ` ${subject}`,
      message: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${from}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>`,
    });

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    // Cast the error to have a 'message' property
    const errorMessage = (error as Error)?.message || "Unknown error";
    return NextResponse.json(
      { message: "Failed to send email", error: errorMessage },
      { status: 500 }
    );
  }
}
