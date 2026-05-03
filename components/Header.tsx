"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Self Projects", href: "/self-projects" },
  { label: "Industry Projects", href: "/industry-projects" },
  { label: "Education", href: "/education" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setMenuOpen(false);
      setSticky(window.scrollY > 24);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-60 border-b transition-all duration-200",
        sticky ? "border-brand bg-black/80 backdrop-blur-md" : "border-transparent bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex min-h-[4.5rem] w-[min(100%-2rem,1180px)] items-center justify-between gap-4">
        <Link href="/" className="flex flex-col gap-1">
          <strong className="text-base tracking-[0.04em] text-brand">Om J Patel</strong>
        </Link>

        <nav
          className={[
            "items-center gap-5 text-sm text-brand-light/80 md:flex",
            menuOpen
              ? "absolute left-4 right-4 top-full flex flex-col items-start rounded-2xl border border-brand bg-black/95 p-4 md:static md:flex-row md:border-0 md:bg-transparent md:p-0"
              : "hidden md:flex",
          ].join(" ")}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-brand"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex rounded-full border border-brand bg-brand/10 px-4 py-2 text-brand-light md:hidden"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`} />
        </button>
      </div>
    </header>
  );
}
