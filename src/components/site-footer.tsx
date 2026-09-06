import { Link } from "@tanstack/react-router";
import {
  GraduationCap,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";

const quickLinks = [
  { to: "/courses", label: "Courses" },
  { to: "/live-classes", label: "Live Classes" },
  { to: "/practice", label: "Practice" },
  { to: "/mentors", label: "Mentors" },
  { to: "/dashboard", label: "Student Dashboard" },
  { to: "/about", label: "About" },
] as const;

const courseLinks = [
  "JEE Preparation",
  "NEET Preparation",
  "UPSC Foundation",
  "GATE Preparation",
  "B.Tech Computer Science",
  "Class 10 & 12 Boards",
];

const socials = [
  { icon: Twitter, label: "Twitter" },
  { icon: Instagram, label: "Instagram" },
  { icon: Youtube, label: "YouTube" },
  { icon: Linkedin, label: "LinkedIn" },
];

export function SiteFooter() {
  return (
    <footer className="bg-deep mt-24 text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex size-10 items-center justify-center rounded-2xl bg-white/12 backdrop-blur">
              <GraduationCap className="size-5" />
            </span>
            <span className="font-display text-xl font-semibold">EduSpark</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-foreground/70">
            EduSpark is an independent learning platform built for Indian students — structured
            courses, live mentorship and relentless practice in one calm, focused place.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="flex size-10 items-center justify-center rounded-xl bg-white/10 transition-all hover:-translate-y-1 hover:bg-white/20"
              >
                <s.icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide uppercase">Quick Links</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-ink-foreground/70">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-ink-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide uppercase">Courses</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-ink-foreground/70">
            {courseLinks.map((c) => (
              <li key={c}>
                <Link to="/courses" className="transition-colors hover:text-ink-foreground">
                  {c}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide uppercase">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-ink-foreground/70">
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 size-4 shrink-0" /> hello@eduspark.example
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 size-4 shrink-0" /> +91 90000 12345
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0" />
              Level 4, Aurora Works, Indiranagar, Bengaluru 560038
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-ink-foreground/60 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© 2026 EduSpark Learning Labs. All rights reserved.</p>
          <p>Illustrative platform with fictional courses, mentors and student stories.</p>
        </div>
      </div>
    </footer>
  );
}
