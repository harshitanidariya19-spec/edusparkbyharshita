import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  Clock,
  Radio,
  Star,
  Users,
  Quote,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  courses,
  liveClasses,
  mentors,
  plans,
  practiceTracks,
  testimonials,
} from "@/lib/eduspark-data";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className="inline-flex items-center rounded-full border border-primary/25 bg-accent px-3.5 py-1.5 text-xs font-semibold tracking-wide text-accent-foreground uppercase">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-semibold text-balance sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 leading-relaxed text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

export function CoursesSection({ limit }: { limit?: number }) {
  const list = limit ? courses.slice(0, limit) : courses;
  return (
    <section className="section-pad" id="courses">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Courses"
          title="Structured tracks for every exam you're chasing"
          subtitle="Each track is built as a full syllabus journey — lessons, notes, practice sets and mentor checkpoints in a fixed weekly rhythm."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((course) => (
            <article
              key={course.slug}
              className="card-hover group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-card"
            >
              <div
                className={`relative flex h-40 items-end bg-gradient-to-br ${course.accent} p-5`}
              >
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                  {course.tag}
                </span>
                <BookOpen className="absolute top-5 right-5 size-9 text-white/40 transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold">{course.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {course.description}
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <BookOpen className="size-3.5" /> {course.lessons} lessons
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Users className="size-3.5" /> {course.learners}
                  </span>
                  <span className="rounded-full bg-secondary px-2.5 py-1 text-secondary-foreground">
                    {course.level}
                  </span>
                </div>
                <div className="mt-5 flex items-center justify-between border-t border-border pt-5">
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold">
                    <Star className="size-4 fill-amber text-amber" />
                    {course.rating}
                  </span>
                  <Button size="sm" className="bg-brand rounded-full font-semibold hover:opacity-90">
                    Enroll Now
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
        {limit && (
          <div className="mt-12 text-center">
            <Button asChild variant="outline" className="rounded-full font-semibold">
              <Link to="/courses">
                View all courses <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

export function LiveClassesSection({ limit }: { limit?: number }) {
  const list = limit ? liveClasses.slice(0, limit) : liveClasses;
  return (
    <section className="section-pad bg-soft" id="live">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Live Classes"
          title="Sit in the room with mentors, every single day"
          subtitle="Interactive sessions with live polls, doubt windows and recordings that land in your library within an hour."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {list.map((c) => (
            <article
              key={c.title}
              className="card-hover flex flex-col gap-5 rounded-3xl border border-border bg-card p-6 shadow-soft sm:flex-row sm:items-center"
            >
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
                      c.status === "Live now"
                        ? "bg-destructive/10 text-destructive"
                        : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    <Radio className="size-3" /> {c.status}
                  </span>
                  <span className="text-xs font-medium text-muted-foreground">{c.subject}</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold">{c.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">with {c.mentor}</p>
                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="size-3.5" /> {c.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="size-3.5" /> {c.time}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Users className="size-3.5" /> {c.seats}
                  </span>
                </div>
              </div>
              <Button className="bg-brand rounded-full font-semibold hover:opacity-90">
                Join Live
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PracticeSection() {
  return (
    <section className="section-pad" id="practice">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Practice"
          title="Practice that shows you exactly where marks leak"
          subtitle="Every attempt feeds one progress picture — accuracy, speed, topic gaps and what to revise tomorrow morning."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {practiceTracks.map((t) => (
            <article
              key={t.title}
              className="card-hover rounded-3xl border border-border bg-card p-7 shadow-soft"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {t.description}
                  </p>
                </div>
                <span className="font-display text-2xl font-semibold text-gradient">
                  {t.progress}%
                </span>
              </div>
              <div className="mt-6 h-2 overflow-hidden rounded-full bg-secondary">
                <div className="bg-brand h-full rounded-full" style={{ width: `${t.progress}%` }} />
              </div>
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs font-medium text-muted-foreground">{t.metric}</span>
                {t.title === "Coding Practice" ? (
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="rounded-full font-semibold"
                  >
                    <Link to="/coding-practice">
                      {t.action} <ArrowRight className="size-3.5" />
                    </Link>
                  </Button>
                ) : (
                  <Button variant="outline" size="sm" className="rounded-full font-semibold">
                    {t.action} <ArrowRight className="size-3.5" />
                  </Button>
                )}

              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MentorsSection({ limit }: { limit?: number }) {
  const list = limit ? mentors.slice(0, limit) : mentors;
  return (
    <section className="section-pad bg-soft" id="mentors">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Mentors"
          title="Learn from people who've done it, and taught it"
          subtitle="Educators, doctors and engineers who stay with a batch through the full season — not one-off guest lectures."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((m) => (
            <article
              key={m.name}
              className="card-hover rounded-3xl border border-border bg-card p-7 text-center shadow-soft"
            >
              <span className="bg-brand mx-auto flex size-20 items-center justify-center rounded-3xl font-display text-2xl font-semibold text-primary-foreground shadow-glow">
                {m.initials}
              </span>
              <h3 className="mt-5 text-lg font-semibold">{m.name}</h3>
              <p className="mt-1 text-sm font-medium text-primary">{m.subject}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.blurb}</p>
              <div className="mt-5 flex items-center justify-center gap-4 text-xs font-medium text-muted-foreground">
                <span>{m.experience}</span>
                <span className="inline-flex items-center gap-1">
                  <Star className="size-3.5 fill-amber text-amber" /> {m.rating}
                </span>
              </div>
              <Button variant="outline" className="mt-6 w-full rounded-full font-semibold">
                View Profile
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Success Stories"
          title="Students who turned steady effort into results"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="card-hover rounded-3xl border border-border bg-card p-7 shadow-soft"
            >
              <Quote className="size-7 text-primary/30" />
              <blockquote className="mt-4 leading-relaxed text-foreground/90">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span className="bg-brand flex size-11 items-center justify-center rounded-2xl text-sm font-semibold text-primary-foreground">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
                <span>
                  <span className="block text-sm font-semibold">{t.name}</span>
                  <span className="block text-xs text-muted-foreground">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PricingSection() {
  return (
    <section className="section-pad bg-soft" id="pricing">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title="One simple plan per stage of your prep"
          subtitle="Switch or cancel any month. Every plan includes lifetime access to notes you've already unlocked."
        />
        <div className="mt-14 grid items-start gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <article
              key={p.name}
              className={`card-hover relative flex flex-col rounded-3xl border p-8 ${
                p.popular
                  ? "bg-deep border-transparent text-ink-foreground shadow-glow lg:-mt-4 lg:pb-12"
                  : "border-border bg-card shadow-soft"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-8 rounded-full bg-amber px-3 py-1 text-xs font-bold tracking-wide text-[oklch(0.25_0.08_78)] uppercase">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p
                className={`mt-1 text-sm ${p.popular ? "text-ink-foreground/70" : "text-muted-foreground"}`}
              >
                {p.tagline}
              </p>
              <p className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-4xl font-semibold">{p.price}</span>
                <span
                  className={`text-sm ${p.popular ? "text-ink-foreground/70" : "text-muted-foreground"}`}
                >
                  {p.period}
                </span>
              </p>
              <ul className="mt-7 flex-1 space-y-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check
                      className={`mt-0.5 size-4 shrink-0 ${p.popular ? "text-mint" : "text-primary"}`}
                    />
                    <span className={p.popular ? "text-ink-foreground/85" : ""}>{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`mt-8 rounded-full font-semibold ${
                  p.popular
                    ? "bg-white text-[oklch(0.25_0.09_268)] hover:bg-white/90"
                    : "bg-brand hover:opacity-90"
                }`}
              >
                {p.cta}
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="mx-auto max-w-7xl px-5 lg:px-8">
      <div className="bg-deep relative overflow-hidden rounded-[2rem] px-8 py-14 text-center text-ink-foreground shadow-glow sm:px-16">
        <h2 className="text-3xl font-semibold text-balance sm:text-4xl">
          Your next rank starts with one focused hour today
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-ink-foreground/75">
          Join 50,000+ learners building their study routine on EduSpark. Start free, upgrade only
          when the habit sticks.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button
            asChild
            className="rounded-full bg-white font-semibold text-[oklch(0.25_0.09_268)] hover:bg-white/90"
          >
            <Link to="/courses">Explore Courses</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-white/30 bg-white/10 font-semibold text-ink-foreground hover:bg-white/20"
          >
            <Link to="/dashboard">Start Learning</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
