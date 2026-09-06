import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { GraduationCap, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Home" },
  { to: "/courses", label: "Courses" },
  { to: "/live-classes", label: "Live Classes" },
  { to: "/practice", label: "Practice" },
  { to: "/mentors", label: "Mentors" },
  { to: "/about", label: "About" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-5 py-3 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="bg-brand flex size-10 items-center justify-center rounded-2xl text-primary-foreground shadow-glow">
            <GraduationCap className="size-5" />
          </span>
          <span className="font-display text-xl font-semibold tracking-tight">
            Edu<span className="text-gradient">Spark</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "bg-secondary text-secondary-foreground" }}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button asChild variant="ghost" className="rounded-full font-semibold">
            <Link to="/dashboard">Login</Link>
          </Button>
          <Button asChild className="bg-brand rounded-full font-semibold shadow-soft hover:opacity-90">
            <Link to="/dashboard">Sign Up</Link>
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex size-10 items-center justify-center rounded-xl border border-border lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-5 pb-5 lg:hidden">
          <nav className="flex flex-col py-2">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="flex gap-2 pt-2">
            <Button asChild variant="outline" className="flex-1 rounded-full">
              <Link to="/dashboard" onClick={() => setOpen(false)}>
                Login
              </Link>
            </Button>
            <Button asChild className="bg-brand flex-1 rounded-full">
              <Link to="/dashboard" onClick={() => setOpen(false)}>
                Sign Up
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
