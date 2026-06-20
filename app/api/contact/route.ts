import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site-config";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  interest?: string;
  message?: string;
  website?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: ContactPayload;
  try {
    body = (await req.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Honeypot — silently accept and discard bot submissions.
  if (body.website && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const message = (body.message || "").trim();
  const phone = (body.phone || "").trim();
  const interest = (body.interest || "").trim();

  if (!name || name.length < 2) {
    return NextResponse.json({ error: "Please provide your name." }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }
  if (!message || message.length < 5) {
    return NextResponse.json({ error: "Please include a message." }, { status: 400 });
  }
  if (message.length > 4000) {
    return NextResponse.json({ error: "Message is too long." }, { status: 400 });
  }

  const submission = {
    receivedAt: new Date().toISOString(),
    name,
    email,
    phone,
    interest,
    message,
  };

  // Try Resend if configured; otherwise log so VPS pm2 logs capture it.
  const resendKey = process.env.RESEND_API_KEY;
  const inboxTo = process.env.CONTACT_INBOX || siteConfig.contact.email;

  if (resendKey) {
    try {
      const text = [
        `New enquiry via mhhocenter.com`,
        ``,
        `Name:     ${submission.name}`,
        `Email:    ${submission.email}`,
        `Phone:    ${submission.phone || "—"}`,
        `Interest: ${submission.interest || "—"}`,
        ``,
        `Message:`,
        submission.message,
      ].join("\n");

      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.CONTACT_FROM || "onboarding@resend.dev",
          to: [inboxTo],
          reply_to: submission.email,
          subject: `New enquiry: ${submission.interest || "General"} — ${submission.name}`,
          text,
        }),
      });
      if (!res.ok) {
        const detail = await res.text().catch(() => "");
        console.error("[contact] Resend failed", res.status, detail);
      }
    } catch (err) {
      console.error("[contact] Resend exception", err);
    }
  } else {
    console.log("[contact] new submission (no email transport configured)", submission);
  }

  return NextResponse.json({ ok: true });
}
