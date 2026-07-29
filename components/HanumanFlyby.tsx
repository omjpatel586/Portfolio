"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

// Background-removed, size-normalised cutouts (transparent 1200×1200, figure
// centred at a consistent scale) so poses cross-fade with no box, no size jump.
// Generated from the original poses; see public/images/home/flyby/.
const FLYBY = "/images/home/flyby";
const POSE_DOWN = `${FLYBY}/down.png`;
const POSE_STRAIGHT = `${FLYBY}/straight.png`;
const POSE_UP = `${FLYBY}/up.png`;

const X_START = -0.25; // off the left edge
const X_END = 1.25; // off the right edge
const Y_START = 0.22; // enters high on the left
const Y_END = 0.22; // exits high on the right
const CY = 1.05; // control point low — swoops DOWN through the centre (a valley)
const CX = (X_START + X_END) / 2; // control point x — mid-flight
const DURATION = 9000; // one full pass (ms)

const T1 = 0.33;
const T2 = 0.67;
const HALF = 0.12;

const clamp01 = (n: number) => (n < 0 ? 0 : n > 1 ? 1 : n);
const smooth = (n: number) => n * n * (3 - 2 * n); // smoothstep — eases the cross-fade
// A 0→1 ramp centred on `mid`, smooth across ± HALF.
const ramp = (p: number, mid: number) => smooth(clamp01((p - (mid - HALF)) / (2 * HALF)));
// Quadratic bézier: gives the single continuous arc.
const bezier = (p: number, a: number, c: number, b: number) => {
  const q = 1 - p;
  return q * q * a + 2 * q * p * c + p * p * b;
};

export function HanumanFlyby() {
  const spriteRef = useRef<HTMLDivElement>(null);
  const downRef = useRef<HTMLDivElement>(null);
  const straightRef = useRef<HTMLDivElement>(null);
  const upRef = useRef<HTMLDivElement>(null);

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

    // Reduced motion: one calm static pose (ascending) near the right, no loop.
    if (reduce) {
      sprite.style.transform = `translate3d(${0.7 * dims.w}px, ${
        0.32 * dims.h
      }px, 0) translate(-50%, -50%)`;
      if (downRef.current) downRef.current.style.opacity = "0";
      if (straightRef.current) straightRef.current.style.opacity = "0";
      if (upRef.current) upRef.current.style.opacity = "1";
      return () => window.removeEventListener("resize", onResize);
    }

    let raf = 0;
    let startTs = 0;

    const frame = (ts: number) => {
      if (!startTs) startTs = ts;
      const p = ((ts - startTs) % DURATION) / DURATION;

      // Position along the valley, plus a gentle buoyant bob. No rotation —
      // each pose glides exactly as the image is drawn.
      const bob = Math.sin((ts - startTs) / 900) * 0.012;
      const fx = bezier(p, X_START, CX, X_END);
      const fy = bezier(p, Y_START, CY, Y_END) + bob;
      sprite.style.transform = `translate3d(${fx * dims.w}px, ${
        fy * dims.h
      }px, 0) translate(-50%, -50%)`;

      // Blend the three poses. r1: down→straight, r2: straight→up. The weights
      // always sum to ~1 and change gradually, so there is never a hard switch.
      const r1 = ramp(p, T1);
      const r2 = ramp(p, T2);
      if (downRef.current) downRef.current.style.opacity = String(1 - r1);
      if (straightRef.current) straightRef.current.style.opacity = String(r1 * (1 - r2));
      if (upRef.current) upRef.current.style.opacity = String(r2);

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
        className="absolute left-0 top-0 w-[clamp(240px,32vw,480px)] opacity-25 will-change-transform"
      >
        {[
          { ref: downRef, src: POSE_DOWN },
          { ref: straightRef, src: POSE_STRAIGHT },
          { ref: upRef, src: POSE_UP },
        ].map(({ ref, src }) => (
          <div
            key={src}
            ref={ref}
            className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 opacity-0 will-change-[opacity]"
          >
            <Image
              src={src}
              alt=""
              width={1200}
              height={1200}
              quality={50}
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
