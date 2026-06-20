"use client";

import Link from "next/link";
import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const formEl = e.currentTarget;
    const fd = new FormData(formEl);
    const payload = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      interest: String(fd.get("interest") || ""),
      message: String(fd.get("message") || ""),
      website: String(fd.get("website") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Submission failed");
      }
      setStatus("success");
      formEl.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" required autoComplete="name" />
        <Field label="Email" name="email" type="email" required autoComplete="email" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Phone (optional)" name="phone" type="tel" autoComplete="tel" />
        <SelectField
          label="I'm interested in"
          name="interest"
          options={[
            "General enquiry",
            "Traditional Chinese Medicine",
            "Traditional Malay Medicine",
            "Traditional Indian Medicine",
            "Medical Qi Gong",
            "Osteopathy",
            "Sound Vibration Therapy",
            "Kinesiology",
            "Special needs care (adults or children)",
            "Practitioner partnership",
            "Media or research",
          ]}
        />
      </div>
      <Field
        label="Message"
        name="message"
        as="textarea"
        rows={5}
        required
        placeholder="Tell us briefly what you'd like to learn or address."
      />

      <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-1">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center rounded-full bg-sage-700 hover:bg-sage-800 disabled:bg-sage-700/60 transition-colors px-6 py-3 text-sm font-medium text-white"
        >
          {status === "submitting" ? "Sending…" : "Send message"}
        </button>
        <p className="text-xs text-foreground/60 leading-relaxed">
          We respond within 2 working days. By submitting, you agree to our{" "}
          <Link href="/privacy" className="underline hover:text-sage-700">Privacy Policy</Link>. We don&rsquo;t share your details with third parties for marketing.
        </p>
      </div>

      {status === "success" && (
        <div role="status" className="rounded-lg border border-sage-300 bg-sage-50 p-4 text-sm text-sage-900">
          Thank you — your message has been received. We will be in touch shortly.
        </div>
      )}
      {status === "error" && (
        <div role="alert" className="rounded-lg border border-clay-300 bg-clay-100/60 p-4 text-sm text-clay-600">
          {error || "We could not send your message. Please email us directly."}
        </div>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  as,
  rows,
  required,
  autoComplete,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  as?: "textarea";
  rows?: number;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
}) {
  const cn =
    "mt-1.5 w-full rounded-md border border-border bg-white px-3.5 py-2.5 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-sage-500/40 focus:border-sage-500";
  return (
    <label className="block text-sm font-medium text-foreground/85">
      {label} {required && <span className="text-clay-500" aria-hidden>*</span>}
      {as === "textarea" ? (
        <textarea
          name={name}
          rows={rows ?? 4}
          required={required}
          placeholder={placeholder}
          className={cn}
        />
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          autoComplete={autoComplete}
          placeholder={placeholder}
          className={cn}
        />
      )}
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <label className="block text-sm font-medium text-foreground/85">
      {label}
      <select
        name={name}
        defaultValue=""
        className="mt-1.5 w-full rounded-md border border-border bg-white px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-sage-500/40 focus:border-sage-500"
      >
        <option value="" disabled>Select an area…</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}
