import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, LiveClassesSection } from "@/components/sections";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/live-classes")({
  head: () => ({
    meta: [
      { title: "Live Classes & Daily Sessions | EduSpark" },
      {
        name: "description",
        content:
          "Join EduSpark live classes for Physics, Biology, Polity, Chemistry, Maths and DSA — with live doubt windows, polls and same-day recordings.",
      },
      { property: "og:title", content: "EduSpark Live Classes" },
      {
        property: "og:description",
        content: "Daily interactive sessions with mentors, plus recordings within the hour.",
      },
    ],
  }),
  component: LiveClassesPage,
});

function LiveClassesPage() {
  return (
    <>
      <PageHero
        eyebrow="Live Classes"
        title="A timetable that keeps you accountable"
        subtitle="Two to five live sessions every day across exams, each with a doubt window at the end and a recording in your library within the hour."
      />
      <LiveClassesSection />
      <CtaBand />
    </>
  );
}
