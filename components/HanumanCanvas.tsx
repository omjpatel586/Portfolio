import dynamic from "next/dynamic";

const HanumanCanvasClient = dynamic(() => import("./HanumanCanvasClient"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center bg-black">
      <span className="text-sm tracking-[0.3em] text-[#f47c20]">Loading</span>
    </div>
  ),
});

export function HanumanCanvas() {
  return (
    <div className="absolute inset-0 z-[1]">
      <HanumanCanvasClient />
    </div>
  );
}
