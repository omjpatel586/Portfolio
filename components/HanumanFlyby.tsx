"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const HOME = "/images/home";

type Segment = {
  src: string;
  x0: number;
  y0: number;
  cx: number;
  cy: number;
  x1: number;
  y1: number;
  dur: number; // milliseconds
};

// Ground line, cruising altitude — kept as fractions so it scales to any screen.
const Y_GROUND = 0.92;
const Y_CRUISE = 0.36;
const CLIMB = 3800;
const CRUISE = 5200;
const DIVE = 3400;

const SEGMENTS: Segment[] = [
  // Leg 1 — left → right: take off, level out, dive to the right horizon.
  {
    src: `${HOME}/hanuman-phose-upward-flying-to-right.png`,
    x0: -0.18,
    y0: 0.82,
    cx: 0.02,
    cy: 0.5,
    x1: 0.32,
    y1: Y_CRUISE,
    dur: CLIMB,
  },
  {
    src: `${HOME}/hanuman-phose-straight-flying-to-right.png`,
    x0: 0.32,
    y0: Y_CRUISE,
    cx: 0.5,
    cy: 0.28,
    x1: 0.68,
    y1: 0.38,
    dur: CRUISE,
  },
  {
    src: `${HOME}/hanuman-phose-downward-coming-from-left-to-ground.png`,
    x0: 0.68,
    y0: 0.38,
    cx: 0.92,
    cy: 0.62,
    x1: 1.18,
    y1: Y_GROUND,
    dur: DIVE,
  },
  // Leg 2 — right → left: mirror of the above.
  {
    src: `${HOME}/hanuman-phose-upward-flying-to-left.png`,
    x0: 1.18,
    y0: 0.82,
    cx: 0.98,
    cy: 0.5,
    x1: 0.68,
    y1: Y_CRUISE,
    dur: CLIMB,
  },
  {
    src: `${HOME}/hanuman-phose-straight-flying-to-left.png`,
    x0: 0.68,
    y0: Y_CRUISE,
    cx: 0.5,
    cy: 0.28,
    x1: 0.32,
    y1: 0.38,
    dur: CRUISE,
  },
  {
    src: `${HOME}/hanuman-phose-downward-coming-from-right-to-ground.png`,
    x0: 0.32,
    y0: 0.38,
    cx: 0.08,
    cy: 0.62,
    x1: -0.18,
    y1: Y_GROUND,
    dur: DIVE,
  },
];

// Precompute each segment's [start, end] on the shared timeline.
const TIMED = SEGMENTS.reduce<{ start: number; end: number }[]>((acc, seg) => {
  const start = acc.length ? acc[acc.length - 1].end : 0;
  acc.push({ start, end: start + seg.dur });
  return acc;
}, []);
const TOTAL = TIMED[TIMED.length - 1].end;
const FADE = 260; // cross-fade half-window between poses (ms)

const clamp01 = (n: number) => (n < 0 ? 0 : n > 1 ? 1 : n);
const smooth = (n: number) => n * n * (3 - 2 * n); // smoothstep
const bezier = (p: number, a: number, c: number, b: number) => {
  const q = 1 - p;
  return q * q * a + 2 * q * p * c + p * p * b;
};

export function HanumanFlyby() {
  const spriteRef = useRef<HTMLDivElement>(null);
  const poseRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const sprite = spriteRef.current;
    if (!sprite) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dims = { w: window.innerWidth, h: window.innerHeight };
    const onResize = () => {
      dims.w = window.innerWidth;
      dims.h = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    // Reduced motion: one calm static pose, no loop.
    if (reduce) {
      sprite.style.transform = `translate3d(${0.62 * dims.w}px, ${
        0.4 * dims.h
      }px, 0) translate(-50%, -50%)`;
      poseRefs.current.forEach((el, i) => {
        if (el) el.style.opacity = i === 1 ? "1" : "0";
      });
      return () => window.removeEventListener("resize", onResize);
    }

    let raf = 0;
    let startTs = 0;

    const frame = (ts: number) => {
      if (!startTs) startTs = ts;
      const t = (ts - startTs) % TOTAL;

      // Which segment are we on?
      let seg = 0;
      while (seg < TIMED.length - 1 && t >= TIMED[seg].end) seg += 1;
      const { start, end } = TIMED[seg];
      const s = SEGMENTS[seg];
      const p = clamp01((t - start) / (end - start));

      // Position along the arc, plus a gentle buoyant bob and sway.
      const bob = Math.sin(t / 900) * 0.012;
      const fx = bezier(p, s.x0, s.cx, s.x1);
      const fy = bezier(p, s.y0, s.cy, s.y1) + bob;
      const scale = 0.8 + clamp01((fy - 0.3) / (Y_GROUND - 0.3)) * 0.3; // nearer the ground = closer/bigger
      const rot = Math.sin(t / 1100) * 2.5;

      sprite.style.transform = `translate3d(${fx * dims.w}px, ${
        fy * dims.h
      }px, 0) translate(-50%, -50%) rotate(${rot}deg) scale(${scale})`;

      // Cross-fade poses: each is centred on its own time window, fading in/out
      // across FADE at the seams so consecutive poses blend instead of popping.
      TIMED.forEach((win, i) => {
        const el = poseRefs.current[i];
        if (!el) return;
        const rise = smooth(clamp01((t - (win.start - FADE)) / (2 * FADE)));
        const fall = smooth(clamp01((t - (win.end - FADE)) / (2 * FADE)));
        el.style.opacity = String(rise * (1 - fall));
      });

      raf = requestAnimationFrame(frame);
    };

    raf = requestAnimationFrame(frame);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
      <div
        ref={spriteRef}
        className="absolute left-0 top-0 w-[clamp(180px,24vw,360px)] opacity-25 will-change-transform"
      >
        {SEGMENTS.map((seg, i) => (
          <div
            key={seg.src}
            ref={(el) => {
              poseRefs.current[i] = el;
            }}
            className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 opacity-0 will-change-[opacity]"
          >
            <Image
              src={seg.src}
              alt=""
              width={1024}
              height={1536}
              sizes="(max-width: 768px) 24vw, 360px"
              className="h-auto w-full"
              style={{
                filter:
                  "drop-shadow(0 0 26px rgba(244,124,32,0.3)) drop-shadow(0 20px 45px rgba(0,0,0,0.5))",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
