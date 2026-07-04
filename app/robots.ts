import type { MetadataRoute } from "next";
import { CONTACT_INFO } from "@/data/contact-info";

// Served at /robots.txt — allows all crawlers and points them at the sitemap.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${CONTACT_INFO.siteUrl}/sitemap.xml`,
  };
}
