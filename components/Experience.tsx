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
              <p className="mt-3 leading-7 text-brand-light/85">{item.intro}</p>

              {item.highlights && item.highlights.length > 0 && (
                <ul className="mt-4 grid gap-3">
                  {item.highlights.map((highlight) => (
                    <li key={highlight.title} className="flex gap-3">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                      <span className="leading-7 text-brand-light/85">
                        <strong className="font-semibold text-brand-light">
                          {highlight.title}:
                        </strong>{" "}
                        {highlight.detail}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              {item.outro && <p className="mt-4 leading-7 text-brand-light/75">{item.outro}</p>}

              {item.skills && item.skills.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
