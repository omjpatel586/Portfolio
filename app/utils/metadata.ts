import { CONTACT_INFO } from "@/data/contact-info";
import type { Metadata } from "next";

export const SITE_NAME = "Om Jayeshbhai Patel";

export const ABOUT_ME_DESCRIPTION = `${CONTACT_INFO.name} is a skilled Senior Backend & DevOps Engineer and Node.js AI agent backend engineer with expertise in building robust and scalable software using NestJS, NX monorepos, and MongoDB. With a passion for technology and problem-solving, Om has contributed to various projects, demonstrating proficiency in backend development, database management, API design, and AI agent integration. Connect with Om to explore innovative solutions and collaborate on exciting ventures and new opportunities.`;

/** Relative to `metadataBase` (set in the root layout), so Next resolves it to an absolute URL. */
export const OG_IMAGE = {
  url: "/images/about/profile-image.webp",
  width: 640,
  height: 640,
  alt: `${CONTACT_INFO.name} — ${CONTACT_INFO.role}`,
};

/** Applied to every page; page-specific keywords are appended to these. */
export const BASE_KEYWORDS = [
  "backend engineer",
  "software engineer",
  "backend developer",
  "software developer",
  "Om J Patel",
  "Om Patel",
  "Om Jayeshbhai Patel",
  "Om Jasoliya",
  "Om Jayeshbhai Jasoliya",
  "Om J Patel portfolio",
  "Om J Patel resume",
  "Backend Engineer Surat",
  "Backend Engineer in tarsamiya, bhavnagar",
  "Backend Developer India",
  "Backend Developer gujarat",
  "Node.js developer Surat",
  "NestJS developer India",
  "AI agent integration engineer",
  "AI developer India",
  "Node.js AI agent backend engineer",
  "Node.js AI agent backend engineer Surat",
  "NestJS NX monorepo backend engineer",
  "Om Patel AI engineer",
];

type BuildMetadataOptions = {
  /** Page title without the site suffix — the root layout template appends "| Om J Patel". */
  title: string;
  description: string;
  /** Route path starting with "/" — becomes the canonical URL and `og:url`. */
  path: string;
  /** Appended to `BASE_KEYWORDS`; duplicates are dropped. */
  keywords?: string[];
  /** Skip the title template. Used by the homepage, which is already the full brand title. */
  absoluteTitle?: boolean;
  ogType?: "website" | "profile";
};

/**
 * Builds a complete `Metadata` object for a route.
 *
 * Next.js merges metadata across segments *shallowly*, so a page that sets
 * `openGraph` replaces the layout's `openGraph` entirely. Every page therefore
 * needs the full nested objects — this keeps them consistent and, critically,
 * gives each route its own canonical URL instead of inheriting the layout's "/".
 */
export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
  absoluteTitle = false,
  ogType = "website",
}: BuildMetadataOptions): Metadata {
  const canonical = path === "/" ? "/" : path.replace(/\/+$/, "");
  const socialTitle = absoluteTitle ? title : `${title} | ${CONTACT_INFO.name}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords: Array.from(new Set([...BASE_KEYWORDS, ...keywords])),
    alternates: {
      canonical,
    },
    openGraph: {
      title: socialTitle,
      description,
      url: canonical,
      siteName: SITE_NAME,
      images: [OG_IMAGE],
      locale: "en_US",
      type: ogType,
    },
    twitter: {
      card: "summary",
      title: socialTitle,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
