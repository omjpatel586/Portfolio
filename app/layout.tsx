import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Om J Patel | Software Developer",
    template: "%s | Om J Patel",
  },
  description: "Node.js, NestJS, AI agents, and full-stack product engineering.",
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
      <body className="min-h-screen bg-ink text-brand-light antialiased">
        <Header />
        <main className="min-h-[calc(100vh-144px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
