import { skillCategories } from "@/data/skills";

type SkillsProps = {
  standalone?: boolean;
};

export function Skills({ standalone = false }: SkillsProps) {
  return (
    <section className="py-20" id="skills">
      <div className="mx-auto w-[min(100%-2rem,1180px)]">
        <div className="mb-8 flex flex-col gap-2">
          <span className="text-xs uppercase tracking-eyebrow text-brand-soft">Technical Skills</span>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] leading-none font-semibold text-brand">
            The stack I build with.
          </h2>
          <p className="max-w-[42rem] text-base leading-7 text-brand-light/85">
            {standalone
              ? "A full breakdown of the languages, frameworks, and tools I work with day to day."
              : "Languages, frameworks, and tools I use to ship scalable backend and full-stack products."}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <article
              key={category.title}
              className="rounded-3xl border border-brand bg-gradient-to-b from-brand/12 to-brand/5 p-6"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-brand/30 bg-brand/10 text-brand">
                  <i className={category.icon} />
                </span>
                <h3 className="text-base font-semibold text-brand">{category.title}</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium text-brand-light/85"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
