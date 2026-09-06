import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-learning.jpg";
import {
  CoursesSection,
  CtaBand,
  LiveClassesSection,
  MentorsSection,
  PracticeSection,
  PricingSection,
  TestimonialsSection,
} from "@/components/sections";
import { stats } from "@/lib/eduspark-data";
import BotpressChat from "@/components/BotpressChat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EduSpark — Learn Smarter. Build Your Future." },
      {
        name: "description",
        content:
          "EduSpark brings structured courses, daily live classes, mock tests and 1:1 mentorship together for JEE, NEET, UPSC, GATE, B.Tech and board students.",
      },
      {
        property: "og:title",
        content: "EduSpark — Learn Smarter. Build Your Future.",
      },
      {
        property: "og:description",
        content:
          "Structured courses, live classes, practice tests and mentorship for school, college and competitive exam students.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-40 -right-32 size-[34rem] rounded-full bg-accent blur-3xl" />
        <div className="pointer-events-none absolute -bottom-52 -left-40 size-[30rem] rounded-full bg-secondary blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pt-16 pb-20 lg:grid-cols-2 lg:px-8 lg:pt-24 lg:pb-28">
          <div className="animate-rise">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card px-4 py-2 text-xs font-semibold text-primary shadow-soft">
              <Sparkles className="size-3.5" /> New: adaptive mock analytics for 2026 batches
            </span>

            <h1 className="mt-6 text-4xl leading-[1.08] font-semibold text-balance sm:text-5xl lg:text-6xl">
              Learn Smarter. <span className="text-gradient">Build Your Future.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              EduSpark gives you structured courses, daily live classes, exam-grade practice tests
              and mentors who stay with you through the whole season — from Class 10 boards to JEE,
              NEET, UPSC, GATE and college placements.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="bg-brand rounded-full px-7 font-semibold shadow-glow hover:opacity-90"
              >
                <Link to="/courses">
                  Explore Courses <ArrowRight className="size-4" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-7 font-semibold"
              >
                <Link to="/dashboard">
                  <PlayCircle className="size-4" /> Start Learning
                </Link>
              </Button>
            </div>

            <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6">
              {stats.slice(0, 3).map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-3xl font-semibold text-gradient">
                    {s.value}
                  </dt>
                  <dd className="mt-1 text-xs font-medium text-muted-foreground">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="bg-brand absolute -inset-4 rounded-[2.5rem] opacity-15 blur-2xl" />

            <img
              src={heroImage}
              width={1200}
              height={1008}
              alt="Student learning on EduSpark with progress charts, formulas and a live lesson player"
              className="animate-float relative w-full rounded-[2rem] border border-border shadow-glow"
            />

            <div className="absolute -bottom-6 left-4 rounded-2xl border border-border bg-card px-5 py-4 shadow-card sm:left-8">
              <p className="text-xs font-medium text-muted-foreground">
                Today's streak
              </p>
              <p className="font-display text-xl font-semibold">
                26 days 🔥
              </p>
            </div>
          </div>
        </div>
      </section>

      <CoursesSection limit={6} />
      <LiveClassesSection limit={4} />
      <PracticeSection />
      <MentorsSection limit={3} />
      <TestimonialsSection />
      <PricingSection />

      <div className="pt-20">
        <CtaBand />
      </div>

      <BotpressChat />
    </>
  );
}
