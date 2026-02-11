"use server";

import { Resend } from "resend";
import { SupportEmailTemplate } from "@/templates/apps/wakey/support-email-template";

const resend = new Resend(process.env.RESEND_API_KEY);
const SUPPORT_EMAIL = process.env.SUPPORT_EMAIL || "wael.fudlallah@gmail.com";

export async function sendSupportEmail(formData: FormData) {
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  if (!email?.trim() || !subject?.trim() || !message?.trim()) {
    return { error: "All fields are required." };
  }

  // TODO: Add rate limiting to prevent abuse
  // TODO: replace onboarding@resend.dev with a custom email address once we have one set up
  const { error } = await resend.emails.send({
    from: "Wakey Wakey Support <onboarding@resend.dev>",
    to: SUPPORT_EMAIL,
    replyTo: email,
    subject: `[Wakey Wakey] ${subject}`,
    react: SupportEmailTemplate({
      email: email,
      subject,
      issueDescription: message,
    }),
  });

  if (error) {
    return { error: "Something went wrong. Please try again." };
  }

  return { success: true };
}
