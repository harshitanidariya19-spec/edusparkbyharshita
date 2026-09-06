import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PracticeSection } from "@/components/sections";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/practice")({
  head: () => ({
    meta: [
      { title: "Mock Tests, Quizzes & Coding Practice | EduSpark" },
      {
        name: "description",
        content:
          "Practise with EduSpark mock tests, daily quizzes, previous year questions and a coding ladder — all tracked in one progress picture.",
      },
      { property: "og:title", content: "EduSpark Practice Hub" },
      {
        property: "og:description",
        content: "Mock tests, daily quizzes, PYQs and coding practice with detailed analytics.",
      },
    ],
  }),
  component: PracticePage,
});

function PracticePage() {
  return (
    <>
      <PageHero
        eyebrow="Practice Hub"
        title="Marks come from attempts, not intentions"
        subtitle="Mock tests, daily quizzes, a decade of previous year papers and a coding ladder — all feeding one honest progress report."
      />
      <PracticeSection />
      <CtaBand />
    </>
  );
}
