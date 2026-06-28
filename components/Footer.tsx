import { CONTACT_INFO } from "@/data/contact-info";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-brand bg-brand/5">
      <div className="mx-auto flex w-[min(100%-2rem,1180px)] flex-col justify-between gap-4 py-6 text-brand-light/80 md:flex-row md:items-center">
        <div>
          <strong className="text-brand">{CONTACT_INFO.name}</strong>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/">Home</Link>
          <Link href="/contact">Contact</Link>
          <a href={CONTACT_INFO.socialMedia.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={CONTACT_INFO.socialMedia.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={CONTACT_INFO.socialMedia.twitter} target="_blank" rel="noreferrer">
            Twitter
          </a>
          <a href={CONTACT_INFO.socialMedia.facebook} target="_blank" rel="noreferrer">
            Facebook
          </a>
        </div>
      </div>
      <div className="flex justify-center p-2">
        <p className="text-sm text-brand-light/80">
          © {new Date().getFullYear()} {CONTACT_INFO.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
