"use client";

import { Icon } from "@/components/Icon";
import { CONTACT_INFO } from "@/data/contact-info";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Education", href: "/education" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];

type ProjectLink = { href: string; label: string };
type ProjectGroup = { label: string; links: ProjectLink[] };

const projectGroups: ProjectGroup[] = [
  {
    label: "Industry",
    links: [
      { href: "/projects/industry/asupxsuite", label: "Asupxsuite" },
      // { href: "/projects/industry/boultbox", label: "BoultBox" },
      // { href: "/projects/industry/quickmed", label: "QuickMed" },
      { href: "/industry-projects", label: "BoultBox" },
      { href: "/industry-projects", label: "QuickMed" },
    ],
  },
  {
    label: "Self",
    links: [
      // { href: "/projects/self/invoicely", label: "Invoicely" },
      // {
      //   href: "/projects/self/hospital-management-landing",
      //   label: "Hospital management landing page",
      // },
      // { href: "/projects/self/blogs-management-platform", label: "Blogs management platform" },
      // { href: "/projects/self/novira", label: "Novira" },
      { href: "/self-projects", label: "Invoicely" },
      {
        href: "/self-projects",
        label: "Hospital management landing page",
      },
      { href: "/self-projects", label: "Blogs management platform" },
      { href: "/self-projects", label: "Novira" },
    ],
  },
];

const legalLinks: ProjectLink[] = [
  { href: "/legal/privacy-policy", label: "Privacy Policy" },
  { href: "/legal/terms-of-service", label: "Terms of Service" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [legalOpen, setLegalOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const navRef = useRef<HTMLElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setSticky(window.scrollY > 24);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const { body } = document;
    const previous = {
      bodyOverflow: body.style.overflow,
      bodyOverscroll: body.style.overscrollBehavior,
      bodyTouchAction: body.style.touchAction,
    };

    body.style.overflow = "hidden";
    body.style.overscrollBehavior = "contain";
    body.style.touchAction = "none";

    return () => {
      body.style.overflow = previous.bodyOverflow;
      body.style.overscrollBehavior = previous.bodyOverscroll;
      body.style.touchAction = previous.bodyTouchAction;
    };
  }, [menuOpen]);

  // Close only on an actual outside click/tap — not on scroll.
  useEffect(() => {
    if (!menuOpen) return;

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (navRef.current?.contains(target)) return;
      if (toggleButtonRef.current?.contains(target)) return;

      setMenuOpen(false);
      setProjectsOpen(false);
      setLegalOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [menuOpen]);

  return (
    <header
      className={[
        "sticky top-0 z-60 border-b pt-[env(safe-area-inset-top)] transition-all duration-200",
        sticky ? "border-brand bg-black/80 backdrop-blur-md" : "border-transparent bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex min-h-[4.5rem] w-[min(100%-2rem,1180px)] items-center justify-between gap-4">
        <Link href="/" className="flex flex-col gap-1">
          <strong className="text-base tracking-[0.04em] text-brand">{CONTACT_INFO.name}</strong>
        </Link>

        <nav
          ref={navRef}
          className={[
            "items-center gap-5 text-sm text-brand-light/80 md:flex",
            menuOpen
              ? "absolute left-4 right-4 top-full flex flex-col items-start rounded-2xl border border-brand bg-black/95 p-4 md:static md:flex-row md:border-0 md:bg-transparent md:p-0"
              : "hidden md:flex",
          ].join(" ")}
        >
          {navLinks.slice(0, 2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-brand"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          {/* Projects — desktop hover mega menu + mobile click accordion */}
          <div
            className="w-full md:relative md:w-auto"
            onMouseEnter={() => setProjectsOpen(true)}
            onMouseLeave={() => setProjectsOpen(false)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node)) {
                setProjectsOpen(false);
              }
            }}
          >
            <button
              type="button"
              className="inline-flex w-full cursor-pointer items-center justify-between gap-1 py-2 hover:text-brand md:w-auto md:justify-start md:py-0"
              onClick={() => setProjectsOpen((value) => !value)}
              onKeyDown={(event) => {
                if (event.key === "Escape") setProjectsOpen(false);
              }}
              aria-expanded={projectsOpen}
              aria-haspopup="menu"
            >
              <span>Projects</span>
              <svg
                viewBox="0 0 512 512"
                className={[
                  "size-3.5 fill-current transition-transform duration-200 md:hidden",
                  projectsOpen ? "rotate-180" : "rotate-0",
                ].join(" ")}
              >
                <path d="M239 401c9.4 9.4 24.6 9.4 33.9 0L465 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L256 349.1 80.9 175c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L239 401z" />
              </svg>
            </button>

            {/* Mobile: inline accordion, no separate card/border, pushes items below it down */}
            <div
              className={[
                "grid overflow-hidden transition-all duration-200 md:hidden",
                projectsOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              ].join(" ")}
              role="menu"
            >
              <div className="flex min-h-0 flex-col gap-4 py-2 pl-3">
                {projectGroups.map((group) => (
                  <div key={group.label} className="flex flex-col gap-1">
                    <span className="text-xs font-semibold uppercase tracking-wide text-white/40">
                      {group.label}
                    </span>
                    {group.links.map((link) => (
                      <Link
                        key={`${group.label}-${link.label}`}
                        href={link.href}
                        className="cursor-pointer rounded-lg py-2 pl-2 hover:bg-brand/10 hover:text-brand"
                        onClick={() => {
                          setMenuOpen(false);
                          setProjectsOpen(false);
                        }}
                        role="menuitem"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop: absolutely positioned mega menu, hover-triggered */}
            <div
              className={[
                "absolute left-0 top-[calc(100%+1px)] hidden max-w-[calc(100vw-2rem)] flex-wrap gap-4 rounded-xl border border-brand bg-black/95 p-4 pt-6 shadow-lg md:flex-row",
                projectsOpen ? "md:flex" : "md:hidden",
              ].join(" ")}
              role="menu"
            >
              {projectGroups.map((group) => (
                <div key={group.label} className="flex min-w-32 flex-col gap-1">
                  <span className="px-3 text-xs font-semibold uppercase tracking-wide text-white/40">
                    {group.label}
                  </span>
                  {group.links.map((link) => (
                    <Link
                      key={`${group.label}-${link.label}`}
                      href={link.href}
                      className="cursor-pointer rounded-lg px-3 py-2 whitespace-normal hover:bg-brand/10 hover:text-brand"
                      onClick={() => {
                        setMenuOpen(false);
                        setProjectsOpen(false);
                      }}
                      role="menuitem"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Legal — desktop hover menu + mobile click accordion */}
          <div
            className="w-full md:relative md:w-auto"
            onMouseEnter={() => setLegalOpen(true)}
            onMouseLeave={() => setLegalOpen(false)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node)) setLegalOpen(false);
            }}
          >
            <button
              type="button"
              className="inline-flex w-full cursor-pointer items-center justify-between gap-1 py-2 hover:text-brand md:w-auto md:justify-start md:py-0"
              onClick={() => setLegalOpen((value) => !value)}
              onKeyDown={(event) => {
                if (event.key === "Escape") setLegalOpen(false);
              }}
              aria-expanded={legalOpen}
              aria-haspopup="menu"
            >
              <span>Legal</span>
              <svg viewBox="0 0 512 512" className={["size-3.5 fill-current transition-transform duration-200 md:hidden", legalOpen ? "rotate-180" : "rotate-0"].join(" ")}>
                <path d="M239 401c9.4 9.4 24.6 9.4 33.9 0L465 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L256 349.1 80.9 175c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L239 401z" />
              </svg>
            </button>

            <div className={["grid overflow-hidden transition-all duration-200 md:hidden", legalOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"].join(" ")} role="menu">
              <div className="flex min-h-0 flex-col gap-1 py-2 pl-3">
                {legalLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="cursor-pointer rounded-lg py-2 pl-2 hover:bg-brand/10 hover:text-brand"
                    onClick={() => {
                      setMenuOpen(false);
                      setLegalOpen(false);
                    }}
                    role="menuitem"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className={["absolute left-0 top-[calc(100%+1px)] hidden w-max max-w-[calc(100vw-2rem)] flex-wrap gap-1 rounded-xl border border-brand bg-black/95 p-3 shadow-lg md:flex-row", legalOpen ? "md:flex" : "md:hidden"].join(" ")} role="menu">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-2 whitespace-normal hover:bg-brand/10 hover:text-brand"
                  onClick={() => {
                    setMenuOpen(false);
                    setLegalOpen(false);
                  }}
                  role="menuitem"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {navLinks.slice(2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-brand"
              onClick={() => {
                setMenuOpen(false);
                setLegalOpen(false);
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          ref={toggleButtonRef}
          type="button"
          className="inline-flex rounded-full border border-brand bg-brand/10 px-4 py-2 text-brand-light md:hidden"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <Icon name={menuOpen ? "xmark" : "bars"} />
        </button>
      </div>
    </header>
  );
}
