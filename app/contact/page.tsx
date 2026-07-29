import { buildMetadata } from "@/app/utils/metadata";
import { CONTACT_INFO } from "@/data/contact-info";
import { ContactSection } from "./ContactSection";

export const metadata = buildMetadata({
  title: "Contact",
  description: `Get in touch with ${CONTACT_INFO.name}, ${CONTACT_INFO.role} based in ${CONTACT_INFO.location}. Available for software development mostly probably backend, AI agent integration, workflow automation, and end-to-end product delivery.`,
  path: "/contact",
  keywords: [
    "contact Om J Patel",
    "hire backend engineer India",
    "hire Node.js developer Surat",
    "freelance NestJS developer",
    "AI agent integration freelancer",
    "AI workflow automation consultant",
    "Om J Patel contact information",
    "Om J Patel email",
    "Om J Patel phone number",
  ],
});

export default function ContactPage() {
  return <ContactSection />;
}
