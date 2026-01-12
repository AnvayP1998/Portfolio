"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { Github, Linkedin } from "lucide-react";

const nav = [
  { href: "/#home", label: "Home" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#about", label: "About" },
  { href: "/#resume", label: "Resume" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="
    sticky top-0 z-50 backdrop-blur
    border-b border-border
    bg-background/80">

      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link href="/#home" className="font-semibold tracking-tight">
          AP
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/AnvayP1998"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card hover:bg-muted transition"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>

          <a
            href="https://linkedin.com/in/anvayparalikar"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card hover:bg-muted transition"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>

          <ThemeToggle />
        </div>
      </div>

      {/* Mobile quick link */}
      <div className="mx-auto max-w-6xl px-5 pb-3 md:hidden">
        <Link
          href="/#projects"
          className="inline-block rounded-full px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition"
        >
          Projects
        </Link>
      </div>
    </header>
  );
}
