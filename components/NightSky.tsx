// Night scene for the hero — dark sky, drifting clouds, twinkling stars, a soft moon.
// Layered behind the flying Hanuman (z-0).

import Image from "next/image";

const CLOUD_SRC = "/images/home/cloud.png";
const CLOUD_W = 677;
const CLOUD_H = 369;
const CLOUDS = [
  { top: "11%", left: "-8%", w: 470, opacity: 0.22, duration: "80s", delay: "0s" },
  { top: "29%", left: "50%", w: 560, opacity: 0.17, duration: "100s", delay: "-30s" },
  { top: "58%", left: "3%", w: 520, opacity: 0.2, duration: "90s", delay: "-16s" },
  { top: "73%", left: "60%", w: 440, opacity: 0.15, duration: "110s", delay: "-45s" },
];

export function NightSky() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {/* Night gradient with a faint warm horizon glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(60,42,18,0.5),transparent_46%),linear-gradient(180deg,#04060f_0%,#070611_48%,#0a0608_100%)]" />

      {/* Moon Hanuman flies toward — real moon image over a soft warm halo */}
      <div className="absolute right-[14%] top-[12%] h-32 w-32">
        <div className="absolute inset-[-40%] rounded-full bg-[radial-gradient(circle,rgba(255,238,205,0.45),rgba(255,202,135,0.15)_45%,transparent_70%)]" />
        <Image
          src="/images/home/moon.png"
          alt=""
          width={148}
          height={148}
          className="relative h-full w-full object-contain"
          style={{ filter: "drop-shadow(0 0 24px rgba(255,224,180,0.35))" }}
        />
      </div>

      {/* Twinkling star layers */}
      <div className="night-stars" />
      <div className="night-stars-2" />

      {/* Drifting night clouds — real cloud image, faint and slow */}
      {CLOUDS.map((cloud) => (
        <div
          key={`${cloud.top}-${cloud.left}`}
          className="animate-cloud-drift absolute"
          style={{
            top: cloud.top,
            left: cloud.left,
            width: cloud.w,
            opacity: cloud.opacity,
            animationDuration: cloud.duration,
            animationDelay: cloud.delay,
          }}
        >
          <Image
            src={CLOUD_SRC}
            alt=""
            width={CLOUD_W}
            height={CLOUD_H}
            className="h-auto w-full"
          />
        </div>
      ))}
    </div>
  );
}
