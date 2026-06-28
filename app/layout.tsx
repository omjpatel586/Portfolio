import { Footer } from "@/components/Footer";
import { HanumanFlyby } from "@/components/HanumanFlyby";
import { Header } from "@/components/Header";
import { NightSky } from "@/components/NightSky";
import { CONTACT_INFO } from "@/data/contact-info";
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${CONTACT_INFO.name} | ${CONTACT_INFO.role}`,
    template: `%s | ${CONTACT_INFO.name}`,
  },
  description: `${CONTACT_INFO.name} is a skilled Backend Engineer with expertise in building robust and scalable applications. With a passion for technology and problem-solving, Om has contributed to various projects, demonstrating proficiency in backend development, database management, and API design. Connect with Om to explore innovative solutions and collaborate on exciting ventures.`,
  icons: {
    icon: "https://www.omjpatel.dev/images/about/profile-image.png",
    shortcut: "https://www.omjpatel.dev/images/about/profile-image.png",
    apple: "https://www.omjpatel.dev/images/about/profile-image.png",
  },
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
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
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
