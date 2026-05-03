import Image from "next/image";

export function GadaSpinner() {
  return (
    <div className="pointer-events-none select-none">
      <div className="relative flex h-36 w-36 items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-brand/20 blur-xl" />
        <div className="absolute animate-gada">
          <Image
            src="/images/home/gada-head.svg"
            alt="Gada icon"
            width={84}
            height={84}
            className="drop-shadow-[0_0_18px_rgba(244,124,32,0.8)]"
          />
        </div>
      </div>
    </div>
  );
}
