"use server";

import nodemailer from "nodemailer";

export type ContactFormState = {
  status: "idle" | "sent" | "error";
  message: string;
};

export async function sendMessage(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return { status: "error", message: "Please fill in all three fields." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "That email address doesn't look right." };
  }
  if (message.length > 5000) {
    return { status: "error", message: "Message is too long (5000 characters max)." };
  }

  const { SMTP_USER, SMTP_PASS, CONTACT_EMAIL } = process.env;
  if (!SMTP_USER || !SMTP_PASS) {
    console.error("Contact form: SMTP_USER / SMTP_PASS env vars are not set.");
    return {
      status: "error",
      message: "The contact form isn't configured yet — please email me directly instead.",
    };
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${SMTP_USER}>`,
      to: CONTACT_EMAIL || SMTP_USER,
      replyTo: `"${name.replace(/["\\]/g, "")}" <${email}>`,
      subject: `Portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });
    return { status: "sent", message: "Thanks — your message is on its way!" };
  } catch (err) {
    console.error("Contact form: failed to send mail.", err);
    return {
      status: "error",
      message: "Something went wrong sending your message — please email me directly.",
    };
  }
}
