import { buildMetadata } from "@/app/utils/metadata";
import { Project } from "@/components/Project";
import { CONTACT_INFO } from "@/data/contact-info";

export const metadata = buildMetadata({
  title: "Self Projects",
  description: `Personal builds and experiments by ${CONTACT_INFO.name} — hospital management software, invoicing platforms, cloud storage, and blog management systems built with Node.js, NestJS, TypeScript, and MongoDB, Python, MySQL.`,
  path: "/self-projects",
  keywords: [
    "Om J Patel projects",
    "Om J Patel personal projects",
    "Node.js side projects",
    "NestJS project portfolio",
    "MongoDB project examples",
    "full stack developer projects India",
    "Python personal projects",
    "MySQL project examples",
  ],
});

export default function SelfProjectsPage() {
  return <Project mode="self" standalone />;
}
