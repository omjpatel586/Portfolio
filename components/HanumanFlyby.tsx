import Image from "next/image";

// Ambient hero background: Hanuman glides across, exits, pauses, then loops.
export function HanumanFlyby() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
      <div className="animate-hanuman-flyby absolute left-0 top-0">
        <Image
          src="/images/home/hanuman.png"
          alt=""
          width={300}
          height={450}
          priority
          className="h-auto w-[clamp(180px,24vw,360px)] opacity-25 drop-shadow-[0_22px_55px_rgba(0,0,0,0.55)]"
        />
      </div>
    </div>
  );
}
