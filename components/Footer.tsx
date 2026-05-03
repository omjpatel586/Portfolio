import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-brand bg-brand/5">
      <div className="mx-auto flex w-[min(100%-2rem,1180px)] flex-col justify-between gap-4 py-6 text-brand-light/80 md:flex-row md:items-center">
        <div>
          <strong className="text-brand">Om J Patel</strong>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/">Home</Link>
          <Link href="/contact">Contact</Link>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
      <div className="flex justify-center p-2">
        <p className="text-sm text-brand-light/80">
          © {new Date().getFullYear()} Om J Patel. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
