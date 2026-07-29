import { ABOUT_ME_DESCRIPTION, buildMetadata } from "@/app/utils/metadata";
import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Headlines } from "@/components/Headlines";
import { Project } from "@/components/Project";
import { SectionBreak } from "@/components/SectionBreak";
import { Skills } from "@/components/Skills";
import { Testimonials } from "@/components/Testimonials";
import { CONTACT_INFO } from "@/data/contact-info";

export const metadata = buildMetadata({
  title: `${CONTACT_INFO.name} | ${CONTACT_INFO.role}`,
  absoluteTitle: true,
  description: ABOUT_ME_DESCRIPTION,
  path: "/",
  ogType: "profile",
});

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden">
        {/* Vignette keeps the centered hero text readable over the night background */}
        <div className="pointer-events-none absolute inset-0 z-20 bg-[radial-gradient(circle_at_center,rgba(5,5,5,0.6),transparent_72%)]" />
        <div className="relative z-30 flex min-h-screen items-center justify-center">
          <Headlines />
        </div>
      </section>
      <SectionBreak />
      <About />
      <SectionBreak />
      <Skills />
      <SectionBreak />
      <Testimonials />
      <SectionBreak />
      <Experience />
      <SectionBreak />
      <Project mode="self" />
      <SectionBreak />
      <Project mode="industry" />
      <SectionBreak />
      <Education />
    </>
  );
}
