import Image from "next/image";
import { industrialProjects, selfProjects } from "@/data/projects";

type ProjectProps = {
  mode: "self" | "industry";
  standalone?: boolean;
};

export function Project({ mode, standalone = false }: ProjectProps) {
  const projects = mode === "self" ? selfProjects : industrialProjects;

  return (
    <section className="py-20">
      <div className="mx-auto w-[min(100%-2rem,1180px)]">
        <div className="mb-8 flex flex-col gap-2">
          <span className="text-xs uppercase tracking-eyebrow text-brand-soft">
            {mode === "self" ? "Self Projects" : "Industry Projects"}
          </span>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] leading-none font-semibold text-brand">
            {mode === "self" ? "Personal builds and experiments." : "Production-facing work."}
          </h2>
          <p className="max-w-[42rem] text-base leading-7 text-brand-light/85">
            {standalone
              ? "This route uses the same shared card component as the homepage section."
              : "The homepage shows a first-pass summary. Dedicated routes keep the same component structure."}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="overflow-hidden rounded-3xl border border-brand bg-gradient-to-b from-brand/12 to-brand/5"
            >
              <Image
                src={project.photo}
                alt={project.name}
                width={1280}
                height={720}
                className="h-auto w-full"
              />
              <div className="grid gap-4 p-5">
                <div className="text-xs uppercase tracking-[0.12em] text-brand">{project.date}</div>
                <h3 className="text-xl font-semibold text-brand">{project.name}</h3>
                <p className="leading-7 text-brand-light/85">{project.about}</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-brand bg-brand/10 px-3 py-1 text-xs text-brand-light/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <a
                  className="inline-flex min-h-12 w-fit items-center justify-center rounded-full border border-brand bg-brand/10 px-5 text-sm font-medium text-brand-light transition hover:-translate-y-0.5"
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Project
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
