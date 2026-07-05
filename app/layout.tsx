import { Footer } from "@/components/Footer";
import { HanumanFlyby } from "@/components/HanumanFlyby";
import { Header } from "@/components/Header";
import { NightSky } from "@/components/NightSky";
import { CONTACT_INFO } from "@/data/contact-info";
import type { Metadata, Viewport } from "next";
import "./globals.css";

const ABOUT_ME_DESCRIPTION = `${CONTACT_INFO.name} is a skilled Senior Backend & DevOps Engineer with expertise in building robust and scalable softwares. With a passion for technology and problem-solving, Om has contributed to various projects, demonstrating proficiency in backend development, database management, and API design, AI development. Connect with Om to explore innovative solutions and collaborate on exciting ventures and new opportunities.`;

export const metadata: Metadata = {
  metadataBase: new URL(CONTACT_INFO.siteUrl),
  title: {
    default: `${CONTACT_INFO.name} | ${CONTACT_INFO.role}`,
    template: `%s | ${CONTACT_INFO.name}`,
  },
  description: ABOUT_ME_DESCRIPTION,
  icons: {
    icon: [{ url: "/favicon.webp", type: "image/webp", sizes: "256x256" }],
    shortcut: "/favicon.webp",
    apple: "/favicon.webp",
  },
  keywords: [
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
  ],
  authors: [{ name: CONTACT_INFO.name, url: CONTACT_INFO.socialMedia.linkedin }],
  creator: CONTACT_INFO.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `Om Jayeshbhai Patel | ${CONTACT_INFO.role}`,
    description: ABOUT_ME_DESCRIPTION,
    url: CONTACT_INFO.siteUrl,
    siteName: "Om Jayeshbhai Patel Portfolio",
    images: [
      {
        url: `${CONTACT_INFO.siteUrl}/images/about/profile-image.webp`,
        width: 640,
        height: 640,
        alt: `${CONTACT_INFO.name} — ${CONTACT_INFO.role}`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `${CONTACT_INFO.name} | ${CONTACT_INFO.role}`,
    description: ABOUT_ME_DESCRIPTION,
    images: [`${CONTACT_INFO.siteUrl}/images/about/profile-image.webp`],
  },
};

const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: CONTACT_INFO.name,
  alternateName: ["Om Patel", "Om Jayeshbhai Patel", "Om Jasoliya", "Om Jayeshbhai Jasoliya"],
  url: CONTACT_INFO.siteUrl,
  image: `${CONTACT_INFO.siteUrl}/images/about/profile-image.webp`,
  jobTitle: CONTACT_INFO.role,
  email: `mailto:${CONTACT_INFO.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Surat",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  sameAs: [
    CONTACT_INFO.socialMedia.github,
    CONTACT_INFO.socialMedia.linkedin,
    CONTACT_INFO.socialMedia.twitter,
    CONTACT_INFO.socialMedia.facebook,
  ],
  knowsAbout: [
    "Backend Development",
    "Node.js",
    "NestJS",
    "NX monolithic architecture",
    "TypeScript",
    "Python",
    "MongoDB",
    "AI Agent Integration",
    "AI Development",
    "DevOps",
    "REST APIs",
  ],
};

export const viewport: Viewport = {
  themeColor: "#f47c20",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_SCHEMA) }}
        />
      </head>
      <body className="relative min-h-screen bg-ink text-brand-light antialiased">
        {/* Site-wide night background, fixed behind all content */}
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
          <NightSky />
          <HanumanFlyby />
        </div>
        <div className="relative z-10">
          <Header />
          <main className="min-h-[calc(100vh-144px)]">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
