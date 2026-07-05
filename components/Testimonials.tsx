"use client";

import { Icon } from "@/components/Icon";
import { testimonials } from "@/data/testimonials";
import { useCallback, useEffect, useMemo, useState } from "react";

const AUTO_ADVANCE_MS = 7000;

/** Scale the quote type to how much someone wrote, so short and long
 *  recommendations both fill the card without looking sparse or cramped. */
function messageClass(length: number): string {
  if (length < 300) return "text-xl leading-9 sm:text-2xl sm:leading-10"; // low
  if (length < 620) return "text-lg leading-8"; // medium
  return "text-base leading-7"; // high
}

function initials(name: string): string {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = testimonials.length;

  const next = useCallback(() => setActive((i) => (i + 1) % count), [count]);
  const prev = useCallback(() => setActive((i) => (i - 1 + count) % count), [count]);

  useEffect(() => {
    if (paused || count <= 1) return;
    const id = setInterval(next, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [paused, next, count]);

  const current = testimonials[active];
  const paragraphs = useMemo(
    () =>
      current.message
        .split(/\n{2,}/)
        .map((block) => block.trim())
        .filter(Boolean),
    [current.message]
  );

  return (
    <section className="py-20" id="testimonials">
      <div className="mx-auto w-[min(100%-2rem,1180px)]">
        <div className="mb-8 flex flex-col gap-2">
          <span className="text-xs uppercase tracking-eyebrow text-brand-soft">Testimonials</span>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] leading-none font-semibold text-brand">
            What people say — and why they trust me
          </h2>
          <p className="max-w-[42rem] text-base leading-7 text-brand-light/85">
            Words from founders, leaders, and mentors I&apos;ve built and shipped alongside.
          </p>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
          aria-roledescription="carousel"
          aria-label="Testimonials"
        >
          <article className="relative overflow-hidden rounded-3xl border border-brand bg-gradient-to-b from-brand/12 to-brand/5 p-8 sm:p-10">
            <Icon
              name="quote-right"
              className="pointer-events-none absolute right-8 top-6 h-12 w-12 text-brand/15 sm:h-14 sm:w-14"
            />

            {/* key re-mounts the content so the slide-in replays on every change */}
            <div
              key={active}
              className="motion-safe:animate-testimonial-in"
              aria-live="polite"
              aria-atomic="true"
            >
              <div className="flex min-h-[16rem] flex-col justify-center">
                <blockquote
                  className={`max-h-[15rem] overflow-y-auto pr-2 font-medium text-brand-light/90 ${messageClass(
                    current.message.length
                  )}`}
                >
                  {paragraphs.map((paragraph, index) => (
                    <p key={index} className={index > 0 ? "mt-4" : undefined}>
                      {paragraph}
                    </p>
                  ))}
                </blockquote>
              </div>

              <div className="mt-8 flex items-center gap-4 border-t border-brand/20 pt-6">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-brand/30 bg-brand/15 text-sm font-semibold text-brand">
                  {initials(current.name)}
                </span>
                <div className="min-w-0">
                  <p className="truncate font-semibold text-brand">{current.name}</p>
                  <p className="truncate text-sm text-brand-light/70">
                    {current.designation} · {current.company}
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2" role="tablist" aria-label="Select testimonial">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.name}
                  type="button"
                  role="tab"
                  aria-selected={index === active}
                  aria-label={`Show testimonial from ${testimonial.name}`}
                  onClick={() => setActive(index)}
                  className="group flex h-6 min-w-6 items-center justify-center"
                >
                  <span
                    className={`h-2 rounded-full transition-all ${
                      index === active ? "w-6 bg-brand" : "w-2 bg-brand/30 group-hover:bg-brand/60"
                    }`}
                  />
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <span className="text-sm tabular-nums text-brand-light/60">
                {String(active + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
              </span>
              <button
                type="button"
                onClick={prev}
                aria-label="Previous testimonial"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand bg-brand/10 text-brand-light transition hover:bg-brand hover:text-ink"
              >
                <Icon name="arrow-left" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next testimonial"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand bg-brand/10 text-brand-light transition hover:bg-brand hover:text-ink"
              >
                <Icon name="arrow-right" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
