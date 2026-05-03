"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    await new Promise((resolve) => setTimeout(resolve, 700));
    setStatus("sent");
    event.currentTarget.reset();
  }

  return (
    <section className="py-20">
      <div className="mx-auto w-[min(100%-2rem,1180px)]">
        <div className="mb-8 flex flex-col gap-2">
          <span className="text-xs uppercase tracking-eyebrow text-brand-soft">Contact</span>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] leading-none font-semibold text-brand">
            Start a useful conversation.
          </h2>
          <p className="max-w-[42rem] text-base leading-7 text-brand-light/85">
            This submission flow is a placeholder until the real email or Formspree endpoint is
            added.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-brand bg-gradient-to-b from-brand/12 to-brand/5 p-6">
            <h3 className="text-xl font-semibold text-brand">Surat, India</h3>
            <p className="mt-3 leading-7 text-brand-light/85">
              Available for software engineering, AI agent integration, and product delivery work.
            </p>
          </div>

          <form
            className="grid gap-4 rounded-3xl border border-brand bg-gradient-to-b from-brand/12 to-brand/5 p-6"
            onSubmit={handleSubmit}
          >
            <input
              name="name"
              placeholder="Your Name"
              required
              className="w-full rounded-2xl border border-brand bg-brand/10 px-4 py-4 text-brand-light outline-none"
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              required
              className="w-full rounded-2xl border border-brand bg-brand/10 px-4 py-4 text-brand-light outline-none"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="min-h-40 w-full rounded-2xl border border-brand bg-brand/10 px-4 py-4 text-brand-light outline-none"
            />
            <button
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand px-5 text-sm font-medium text-ink transition hover:-translate-y-0.5"
              type="submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
            {status === "sent" ? (
              <p className="text-sm text-brand-light/80">
                Message captured. Wire this form to your live endpoint.
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
