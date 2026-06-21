"use client";

import { useState } from "react";
import { sendContactForm } from "../utils/contact-us";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  async function handleSubmit() {
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }
    setStatus("sending");
    await sendContactForm({
      name: formData.name,
      email: formData.email,
      message: formData.message,
    });
    alert("Message sent! I'll get back to you soon.");
    setStatus("sent");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
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

          <form className="grid gap-4 rounded-3xl border border-brand bg-gradient-to-b from-brand/12 to-brand/5 p-6">
            <input
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full rounded-2xl border border-brand bg-brand/10 px-4 py-4 text-brand-light outline-none"
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full rounded-2xl border border-brand bg-brand/10 px-4 py-4 text-brand-light outline-none"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className="min-h-40 w-full rounded-2xl border border-brand bg-brand/10 px-4 py-4 text-brand-light outline-none"
            />
            <button
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand px-5 text-sm font-medium text-ink transition hover:-translate-y-0.5 cursor-pointer"
              type="submit"
              disabled={status === "sending"}
              onClick={() => handleSubmit()}
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
