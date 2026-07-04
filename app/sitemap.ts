import { CONTACT_INFO } from "@/data/contact-info";
import type { MetadataRoute } from "next";

// Served at /sitemap.xml — routes ordered by how much they change and matter.
export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { path: string; changeFrequency: "weekly" | "monthly" | "yearly"; priority: number }[] = [
    { path: "", changeFrequency: "weekly", priority: 1 },
    { path: "/#about", changeFrequency: "yearly", priority: 1 },
    { path: "/self-projects", changeFrequency: "monthly", priority: 0.8 },
    { path: "/industry-projects", changeFrequency: "monthly", priority: 0.8 },
    { path: "/experience", changeFrequency: "monthly", priority: 0.7 },
    { path: "/education", changeFrequency: "yearly", priority: 0.5 },
    { path: "/contact", changeFrequency: "yearly", priority: 0.6 },
  ];

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${CONTACT_INFO.siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
