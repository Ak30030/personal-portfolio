import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import connectDB from "@/lib/db";
import ContactMessage from "@/models/ContactMessage";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Name, email, and message are all required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (message.length > 1000) {
      return NextResponse.json(
        { success: false, error: "Message is too long (max 1000 characters)." },
        { status: 400 }
      );
    }

    await connectDB();

    // Save to MongoDB first — this is the source of truth.
    // Even if the email notification below fails, the message is safe.
    await ContactMessage.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject ? subject.trim() : undefined,
      message: message.trim(),
    });

    // Send yourself a notification email. Wrapped separately so an
    // email-service hiccup never loses the already-saved message.
    try {
      await resend.emails.send({
        from: "Portfolio Contact Form <onboarding@resend.dev>",
        to: "awuntubafredrick@gmail.com",
        replyTo: email.trim(),
        subject: subject ? `New message: ${subject}` : `New message from ${name}`,
        html: `
          <div style="font-family: sans-serif; line-height: 1.6;">
            <h2>New contact form submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ""}
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, "<br>")}</p>
          </div>
        `,
      });
    } catch (emailError) {
      console.error("Email notification failed (message still saved):", emailError);
    }

    return NextResponse.json(
      { success: true, message: "Message sent successfully." },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving contact message:", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}