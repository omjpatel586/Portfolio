import { buildMetadata } from "@/app/utils/metadata";
import { Project } from "@/components/Project";
import { CONTACT_INFO } from "@/data/contact-info";

export const metadata = buildMetadata({
  title: "Industry Projects",
  description: `Production-facing work shipped by ${CONTACT_INFO.name} for clients and employers — AI interview automation, music distribution, cloud storage, and medical appointment platforms built on Node.js, NestJS, and NX monorepos.`,
  path: "/industry-projects",
  keywords: [
    "Om J Patel industry projects",
    "production backend projects",
    "NestJS production applications",
    "AI agent automation projects",
    "enterprise Node.js developer India",
    "Om J Patel production software",
    "software architecture of asuprecords",
    "software architecture of asupxsuite",
    "software architecture of boultbox",
    "software architecture of quickmed",
    "backend architecture of asuprecords",
    "backend architecture of asupxsuite",
    "backend architecture of boultbox",
    "backend architecture of quickmed",
  ],
});

export default function IndustryProjectsPage() {
  return <Project mode="industry" standalone />;
}
