import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, MentorsSection } from "@/components/sections";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/mentors")({
  head: () => ({
    meta: [
      { title: "Meet the Mentors | EduSpark" },
      {
        name: "description",
        content:
          "EduSpark mentors are educators, doctors and engineers who guide a batch through the full season with feedback, reviews and 1:1 sessions.",
      },
      { property: "og:title", content: "EduSpark Mentors" },
      {
        property: "og:description",
        content: "Subject experts who stay with your batch through the whole exam season.",
      },
    ],
  }),
  component: MentorsPage,
});

function MentorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Mentors"
        title="People, not just playlists"
        subtitle="Our mentors teach live, review your answers, and check in every week — because the hardest part of prep is rarely the syllabus."
      />
      <MentorsSection />
      <CtaBand />
    </>
  );
}
