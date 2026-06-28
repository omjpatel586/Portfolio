// Night scene for the hero — dark sky, drifting clouds, twinkling stars, a soft moon.
// Layered behind the flying Hanuman (z-0).

const CLOUDS = [
  { top: "10%", left: "-6%", w: 380, opacity: 0.5, blur: 42, duration: "28s", delay: "0s" },
  { top: "28%", left: "54%", w: 470, opacity: 0.4, blur: 56, duration: "36s", delay: "-9s" },
  { top: "60%", left: "8%", w: 430, opacity: 0.46, blur: 50, duration: "32s", delay: "-16s" },
  { top: "74%", left: "62%", w: 400, opacity: 0.38, blur: 46, duration: "40s", delay: "-5s" },
];

export function NightSky() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {/* Night gradient with a faint warm horizon glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(60,42,18,0.5),transparent_46%),linear-gradient(180deg,#04060f_0%,#070611_48%,#0a0608_100%)]" />

      {/* Moon Hanuman flies toward */}
      <div className="absolute right-[14%] top-[12%] h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(255,238,205,0.95),rgba(255,202,135,0.3)_45%,transparent_70%)]" />

      {/* Twinkling star layers */}
      <div className="night-stars" />
      <div className="night-stars-2" />

      {/* Drifting night clouds */}
      {CLOUDS.map((cloud) => (
        <div
          key={`${cloud.top}-${cloud.left}`}
          className="animate-cloud-drift absolute rounded-full"
          style={{
            top: cloud.top,
            left: cloud.left,
            width: cloud.w,
            height: cloud.w * 0.42,
            opacity: cloud.opacity,
            filter: `blur(${cloud.blur}px)`,
            background: "radial-gradient(circle, rgba(28,34,56,0.9), rgba(12,14,24,0) 70%)",
            animationDuration: cloud.duration,
            animationDelay: cloud.delay,
          }}
        />
      ))}
    </div>
  );
}
