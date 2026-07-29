import { buildMetadata } from "@/app/utils/metadata";
import { Education } from "@/components/Education";
import { CONTACT_INFO } from "@/data/contact-info";

export const metadata = buildMetadata({
  title: "Education",
  description: `Academic background and certifications of ${CONTACT_INFO.name} — MSc IT in Computer Science and BCA from Saurashtra University, plus Full Stack JS Developer ISO certified from creative design and multimedia institute , LinkedIn AI Sales Mastery training.`,
  path: "/education",
  keywords: [
    "Om J Patel education",
    "Om J Patel qualifications",
    "MSc IT Computer Science",
    "BCA Computer Science",
    "Saurashtra University",
    "full stack JS ( Mern technology ) certification",
  ],
});

export default function EducationPage() {
  return <Education standalone />;
}
