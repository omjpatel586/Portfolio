"use client";

import { Icon } from "@/components/Icon";
import { CONTACT_INFO } from "@/data/contact-info";
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
            Have a project in mind or a role to discuss? Send a message and I’ll get back to you.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="flex flex-col gap-5 rounded-3xl border border-brand bg-gradient-to-b from-brand/12 to-brand/5 p-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-3 py-1 text-xs font-medium text-brand-soft">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available for new projects
            </span>

            <div>
              <h3 className="text-xl font-semibold text-brand">Let’s build something</h3>
              <p className="mt-2 leading-7 text-brand-light/85">
                Available for software engineering, AI agent integration, and product delivery work.
              </p>
            </div>

            <ul className="grid gap-2.5">
              {[
                "Backend & API development — Node.js, NestJS, Python, FastAPI, Django, Flask",
                "AI agent integration & workflow automation",
                "End-to-end product delivery",
                "Any projects that require a full-stack engineer with a focus on AI and automation",
              ].map((service) => (
                <li
                  key={service}
                  className="flex items-start gap-3 text-sm leading-6 text-brand-light/85"
                >
                  <Icon name="check" className="mt-1 shrink-0 text-brand" />
                  {service}
                </li>
              ))}
            </ul>

            <div className="h-px bg-brand/20" />

            <ul className="grid gap-3 text-sm">
              <li>
                <a
                  className="flex items-center gap-3 text-brand-light/85 transition hover:text-brand"
                  href={`mailto:${CONTACT_INFO.email}`}
                >
                  <Icon name="envelope" className="w-5 shrink-0 text-brand" />
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-3 text-brand-light/85 transition hover:text-brand"
                  href={`tel:${CONTACT_INFO.phone.replace(/[^+\d]/g, "")}`}
                >
                  <Icon name="phone" className="w-5 shrink-0 text-brand" />
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-3 text-brand-light/85 transition hover:text-brand"
                  href={CONTACT_INFO.socialMedia.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="linkedin-in" className="w-5 shrink-0 text-brand" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-3 text-brand-light/85 transition hover:text-brand"
                  href={CONTACT_INFO.socialMedia.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="github" className="w-5 shrink-0 text-brand" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-3 text-brand-light/85 transition hover:text-brand"
                  href={CONTACT_INFO.socialMedia.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="x-twitter" className="w-5 shrink-0 text-brand" />
                  Twitter
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-3 text-brand-light/85 transition hover:text-brand"
                  href={CONTACT_INFO.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="facebook" className="w-5 shrink-0 text-brand" />
                  Facebook
                </a>
              </li>
              <li className="flex items-center gap-3 text-brand-light/85">
                <Icon name="location-dot" className="w-5 shrink-0 text-brand" />
                {CONTACT_INFO.location}
              </li>
            </ul>

            <p className="text-xs text-brand-light/60">
              <Icon name="clock" className="mr-1.5" />
              Typically responds within 24 hours.
            </p>
          </div>

          <form
            className="flex flex-col gap-5 self-start rounded-3xl border border-brand bg-gradient-to-b from-brand/12 to-brand/5 p-6 sm:p-8"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-xs font-medium uppercase tracking-eyebrow text-brand-soft"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full rounded-2xl border border-brand bg-brand/10 px-4 py-3 text-brand-light placeholder:text-brand-light/40 outline-none transition focus:border-brand-soft focus:bg-brand/15 focus:ring-2 focus:ring-brand/40"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-xs font-medium uppercase tracking-eyebrow text-brand-soft"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full rounded-2xl border border-brand bg-brand/10 px-4 py-3 text-brand-light placeholder:text-brand-light/40 outline-none transition focus:border-brand-soft focus:bg-brand/15 focus:ring-2 focus:ring-brand/40"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-xs font-medium uppercase tracking-eyebrow text-brand-soft"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project or role…"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={6}
                className="min-h-65 w-full resize-y rounded-2xl border border-brand bg-brand/10 px-4 py-3 text-brand-light placeholder:text-brand-light/40 outline-none transition focus:border-brand-soft focus:bg-brand/15 focus:ring-2 focus:ring-brand/40"
              />
            </div>

            <button
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand px-6 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-brand-soft disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer"
              type="submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending…" : "Send Message"}
            </button>
            {status === "sent" ? (
              <p className="text-sm text-brand-light/80">
                Thanks — your message has been sent. I’ll get back to you soon.
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
