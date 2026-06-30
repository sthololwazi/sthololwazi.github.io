import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { SITE, NAV } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 lg:px-10">
        <Link to="/" className="flex items-center gap-3" aria-label={SITE.name}>
          <img
            src={SITE.logo}
            alt="Official website of Sthololwazi Projects"
            width={44}
            height={44}
            className="h-11 w-11 shrink-0"
          />
          <span className="leading-tight">
            <span className="block font-serif text-lg text-forest">Sthololwazi</span>
            <span className="block text-[0.62rem] tracking-[0.28em] text-muted-foreground">
              PROJECTS (PTY) LTD
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-foreground/80 transition-colors hover:text-forest"
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-forest font-medium" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden rounded-full bg-forest px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground transition hover:bg-forest-deep lg:inline-flex"
        >
          Request a Quote
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav aria-label="Mobile" className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm text-foreground/80 hover:bg-muted"
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-forest font-medium bg-muted" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center rounded-full bg-forest px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground"
            >
              Request a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
