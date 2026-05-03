import { educationItems, IEducationItem, IMediaItem } from "@/data/education";
import Link from "next/link";

// ─── Types ───────────────────────────────────────────────────────────────────

type EducationProps = {
  standalone?: boolean;
};

// ─── Media Thumbnail Card ─────────────────────────────────────────────────────

function MediaCard({ item }: { item: IMediaItem }) {
  return (
    <Link href={item.url} target="_blank" rel="noopener noreferrer">
      <div className="flex items-start gap-3 rounded-xl border border-brand/20 bg-brand/5 p-3 hover:bg-brand/10 transition-colors cursor-pointer">
        {/* Thumbnail */}
        <div className="relative flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden bg-brand/20">
          {item.thumbnail ? (
            <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover" />
          ) : (
            /* Fallback gradient placeholder matching LinkedIn photo style */
            <div className="w-full h-full bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-600 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white/70"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          )}
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-brand leading-snug line-clamp-2">{item.title}</p>
          {item.description && (
            <p className="mt-0.5 text-xs text-brand-light/70 line-clamp-2 leading-relaxed">
              {item.description}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}

// ─── Education Card ───────────────────────────────────────────────────────────

function EducationCard({ item }: { item: IEducationItem }) {
  return (
    <article className="rounded-3xl border border-brand bg-gradient-to-b from-brand/12 to-brand/5 p-6">
      {/* Header */}
      <div className="text-xs uppercase tracking-[0.12em] text-brand">{item.date}</div>
      <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
      <p className="mt-1 text-brand-light">{item.school}</p>
      <p className="mt-2 leading-7 text-brand-light/85">{item.description}</p>

      {/* Skills pill */}
      {item.skills && item.skills.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {item.skills.map((skill) => (
            <span
              key={skill}
              className="inline-flex items-center rounded-full border border-brand/30 bg-brand/10 px-3 py-0.5 text-xs font-medium text-brand"
            >
              {skill}
            </span>
          ))}
        </div>
      )}

      {/* Media section — LinkedIn style */}
      {item.media && item.media.length > 0 && (
        <div className="mt-5 space-y-2">
          {item.media.map((m) => (
            <MediaCard key={m.id} item={m} />
          ))}
        </div>
      )}
    </article>
  );
}

// ─── Education Section ────────────────────────────────────────────────────────

export function Education({ standalone = false }: EducationProps) {
  return (
    <section className="py-20">
      <div className="mx-auto w-[min(100%-2rem,1180px)]">
        {/* Heading */}
        <div className="mb-8 flex flex-col gap-2">
          <span className="text-xs uppercase tracking-eyebrow text-brand-soft">Education</span>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] leading-none font-semibold text-brand">
            Academic foundations that support practical delivery.
          </h2>
          <p className="max-w-[42rem] text-base leading-7 text-brand-light/85">
            {standalone
              ? "Standalone education route created from the migration guide."
              : "Homepage summary of the education timeline."}
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6">
          {educationItems.map((item) => (
            <EducationCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
