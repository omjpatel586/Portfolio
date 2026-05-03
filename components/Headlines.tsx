"use client";

import Link from "next/link";
import { ReactTyped } from "react-typed";

export function Headlines() {
  const myHeadlines = [
    "Software Engineer",
    "Digital Business Catalyst",
    "Problem Solver",
    "Open Source Collaborator",
    "Lifelong Reader",
  ];

  return (
    <div className="mx-auto grid w-[min(100%-2rem,1180px)] gap-5">
      <span className="text-xs uppercase tracking-hero text-brand-soft">Surat, India</span>
      <h1 className="text-[clamp(2rem,4vw,3.5rem)] leading-[0.92] font-semibold text-brand">
        Hi There!
      </h1>
      <div className="min-h-8 text-[clamp(1.2rem,2vw,1.5rem)] font-bold text-brand-soft">
        I Am a{" "}
        <ReactTyped strings={myHeadlines} typeSpeed={42} backSpeed={24} backDelay={1400} loop />
      </div>
      <p className="max-w-[42rem] text-base leading-8 text-brand-light/85">
        Turning backend logic into business magic with AI agents that actually get things done. If
        it’s complex, I simplify it. If it’s manual, I automate it.
      </p>
      <div className="mt-2 flex flex-wrap gap-4">
        <Link
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand px-5 text-sm font-medium text-ink transition hover:-translate-y-0.5"
          href="/contact"
        >
          Contact Me
        </Link>
        <Link
          className="inline-flex min-h-12 items-center justify-center rounded-full border border-brand bg-brand/10 px-5 text-sm font-medium text-brand-light transition hover:-translate-y-0.5"
          href="/self-projects"
        >
          Explore Projects
        </Link>
      </div>
    </div>
  );
}
