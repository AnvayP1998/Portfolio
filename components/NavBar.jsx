import Link from "next/link";

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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link href="/#home" className="font-semibold tracking-tight text-white">
          AP
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1.5 text-sm text-white/70 hover:text-white hover:bg-white/5 transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile */}
        <div className="md:hidden">
          <Link
            href="/#projects"
            className="rounded-full px-3 py-1.5 text-sm text-white/70 hover:text-white hover:bg-white/5 transition"
          >
            Projects
          </Link>
        </div>
      </div>
    </header>
  );
}
