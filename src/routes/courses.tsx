import { createFileRoute } from "@tanstack/react-router";
import { CoursesSection, CtaBand } from "@/components/sections";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Courses — JEE, NEET, UPSC, GATE & Boards | EduSpark" },
      {
        name: "description",
        content:
          "Browse EduSpark's structured course tracks for JEE, NEET, UPSC, GATE, B.Tech Computer Science and Class 10 & 12 boards, with lessons, levels and ratings.",
      },
      { property: "og:title", content: "EduSpark Courses for every exam" },
      {
        property: "og:description",
        content:
          "Six full syllabus tracks with lessons, practice sets and mentor checkpoints in a weekly rhythm.",
      },
    ],
  }),
  component: CoursesPage,
});

function CoursesPage() {
  return (
    <>
      <PageHero
        eyebrow="Course Library"
        title="Pick your track. We'll handle the plan."
        subtitle="Every EduSpark course is a full-season roadmap: video lessons, condensed notes, weekly practice sets, doubt windows and mentor checkpoints."
      />
      <CoursesSection />
      <CtaBand />
    </>
  );
}
