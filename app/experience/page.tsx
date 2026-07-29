import { buildMetadata } from "@/app/utils/metadata";
import { Experience } from "@/components/Experience";
import { CONTACT_INFO } from "@/data/contact-info";

export const metadata = buildMetadata({
  title: "Experience",
  description: `Professional experience of ${CONTACT_INFO.name} — Backend & DevOps Engineer at Transcodezy IT Solutions, Backend Engineer at Kmphitech Solutions, and Backend Engineer Intern at Codexial Technologies, delivering scalable & secure Node.js, NestJS, Python, and AI-powered softwares.`,
  path: "/experience",
  keywords: [
    "Om J Patel experience",
    "Om J Patel work history",
    "backend engineer experience India",
    "Transcodezy IT Solutions",
    "Kmphitech Solutions",
    "Codexial Technologies",
    "DevOps engineer Surat",
    "software engineer experience India",
    "Node.js backend engineer experience",
    "NestJS backend engineer experience",
    "Python backend engineer experience",
    "AI agent integration engineer experience",
  ],
});

export default function ExperiencePage() {
  return <Experience standalone />;
}
