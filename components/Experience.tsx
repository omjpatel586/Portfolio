import { experienceItems } from "@/data/experience";

type ExperienceProps = {
  standalone?: boolean;
};

export function Experience({ standalone = false }: ExperienceProps) {
  return (
    <section className="py-20">
      <div className="mx-auto w-[min(100%-2rem,1180px)]">
        <div className="mb-8 flex flex-col gap-2">
          <span className="text-xs uppercase tracking-eyebrow text-brand-soft">Experience</span>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] leading-none font-semibold text-brand">
            Industry delivery, softwares thinking, and product execution.
          </h2>
          <p className="max-w-[42rem] text-base leading-7 text-brand-light/85">
            {standalone
              ? "Standalone experience route created from the migration guide."
              : "Experience summary."}
          </p>
        </div>

        <div className="grid gap-6">
          {experienceItems.map((item) => (
            <article
              key={item.id}
              className="rounded-3xl border border-brand bg-gradient-to-b from-brand/12 to-brand/5 p-6"
            >
              <div className="text-xs uppercase tracking-[0.12em] text-brand">{item.period}</div>
              <h3 className="mt-2 text-xl font-semibold">{item.role}</h3>
              <p className="mt-1 text-brand-light">{item.company}</p>
              <p className="mt-2 leading-7 text-brand-light/85">{item.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
