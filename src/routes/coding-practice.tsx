import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Check,
  ChevronRight,
  CircleDot,
  Flame,
  Loader2,
  Play,
  RotateCcw,
  Send,
  Terminal,
  Trophy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import { cn } from "@/lib/utils";
import {
  codingProgress,
  languages,
  problems,
  type Difficulty,
  type Language,
} from "@/lib/coding-problems";

export const Route = createFileRoute("/coding-practice")({
  head: () => ({
    meta: [
      { title: "Coding Practice Editor — Solve & Run Code | EduSpark" },
      {
        name: "description",
        content:
          "Practise DSA on EduSpark: pick Easy, Medium or Hard problems, write C, C++, Python or Java in the browser editor, run sample tests and track your streak.",
      },
      { property: "og:title", content: "EduSpark Coding Practice" },
      {
        property: "og:description",
        content:
          "In-browser coding editor with curated problems, sample test cases and progress tracking.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CodingPracticePage,
});

const difficultyStyles: Record<Difficulty, string> = {
  Easy: "bg-mint/15 text-[oklch(0.42_0.12_165)]",
  Medium: "bg-amber/20 text-[oklch(0.48_0.12_78)]",
  Hard: "bg-destructive/12 text-destructive",
};

const filters = ["All", "Easy", "Medium", "Hard"] as const;

type RunState =
  | { status: "idle" }
  | { status: "running"; mode: "run" | "submit" }
  | { status: "done"; mode: "run" | "submit"; ok: boolean; lines: string[] };

function CodingPracticePage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [activeId, setActiveId] = useState(problems[0].id);
  const [language, setLanguage] = useState<Language>("cpp");
  const [drafts, setDrafts] = useState<Record<string, string>>({});
  const [run, setRun] = useState<RunState>({ status: "idle" });
  const [solved, setSolved] = useState<string[]>(
    problems.filter((p) => p.solved).map((p) => p.id),
  );

  const problem = useMemo(() => problems.find((p) => p.id === activeId)!, [activeId]);
  const list = useMemo(
    () => (filter === "All" ? problems : problems.filter((p) => p.difficulty === filter)),
    [filter],
  );

  const draftKey = `${problem.id}:${language}`;
  const code = drafts[draftKey] ?? problem.starter[language];

  const solvedCount = solved.length;
  const solvedByDifficulty = (d: Difficulty) =>
    codingProgress.solvedByDifficulty[d] +
    solved.filter((id) => {
      const p = problems.find((x) => x.id === id);
      return p?.difficulty === d && !p.solved;
    }).length;

  function selectProblem(id: string) {
    setActiveId(id);
    setRun({ status: "idle" });
  }

  function execute(mode: "run" | "submit") {
    setRun({ status: "running", mode });
    const meaningful = code.replace(/\/\/.*|#.*/g, "").trim().length > 40;
    window.setTimeout(() => {
      if (!meaningful) {
        setRun({
          status: "done",
          mode,
          ok: false,
          lines: [
            `$ eduspark ${mode} --lang ${language}`,
            "Compilation finished in 0.42s",
            "Test 1 ... failed (no output produced)",
            "Hint: your solution still contains only the starter template.",
          ],
        });
        return;
      }
      const lines = [
        `$ eduspark ${mode} --lang ${language}`,
        "Compilation successful in 0.61s",
        ...problem.examples.map(
          (ex, i) =>
            `Test ${i + 1} ... passed  (expected "${ex.output.replace(/\n/g, " ")}", got "${
              i === 0 ? problem.sampleRun : ex.output.replace(/\n/g, " ")
            }")`,
        ),
        mode === "submit"
          ? "All hidden test cases passed · runtime 0.09s · memory 12.4 MB"
          : "Sample test cases passed. Submit to run the hidden tests.",
      ];
      if (mode === "submit") setSolved((s) => (s.includes(problem.id) ? s : [...s, problem.id]));
      setRun({ status: "done", mode, ok: true, lines });
    }, 900);
  }

  return (
    <>
      <PageHero
        eyebrow="Coding Practice"
        title="Write it, run it, get it accepted"
        subtitle="Pick a problem, choose your language and code straight in the browser. Sample tests run instantly, and every accepted solution feeds your streak."
      />

      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          {/* Progress tracker */}
          <div className="grid gap-5 lg:grid-cols-[repeat(2,minmax(0,1fr))_1.4fr]">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
              <div className="flex items-center gap-3">
                <span className="bg-brand flex size-10 items-center justify-center rounded-2xl text-primary-foreground">
                  <Trophy className="size-5" />
                </span>
                <div>
                  <p className="text-sm text-muted-foreground">Problems solved</p>
                  <p className="font-display text-2xl font-semibold">{solvedCount + 62}</p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-2xl bg-amber/25 text-[oklch(0.45_0.12_78)]">
                  <Flame className="size-5" />
                </span>
                <div>
                  <p className="text-sm text-muted-foreground">Current streak</p>
                  <p className="font-display text-2xl font-semibold">
                    {codingProgress.streak} days
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
              <div className="space-y-3">
                {(["Easy", "Medium", "Hard"] as Difficulty[]).map((d) => {
                  const done = solvedByDifficulty(d);
                  const total = codingProgress.totalByDifficulty[d];
                  return (
                    <div key={d}>
                      <div className="flex items-center justify-between text-xs font-medium">
                        <span>{d}</span>
                        <span className="text-muted-foreground">
                          {done} / {total}
                        </span>
                      </div>
                      <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-secondary">
                        <div
                          className="bg-brand h-full rounded-full transition-all"
                          style={{ width: `${Math.round((done / total) * 100)}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-8 grid items-start gap-6 lg:grid-cols-[20rem_1fr]">
            {/* Problem list */}
            <aside className="rounded-3xl border border-border bg-card p-5 shadow-soft lg:sticky lg:top-24">
              <h2 className="font-display text-lg font-semibold">Problem set</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {filters.map((f) => (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setFilter(f)}
                    className={cn(
                      "rounded-full px-3 py-1.5 text-xs font-semibold transition-colors",
                      filter === f
                        ? "bg-brand text-primary-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-accent",
                    )}
                  >
                    {f}
                  </button>
                ))}
              </div>
              <ul className="mt-4 max-h-[26rem] space-y-1.5 overflow-y-auto pr-1">
                {list.map((p) => (
                  <li key={p.id}>
                    <button
                      type="button"
                      onClick={() => selectProblem(p.id)}
                      className={cn(
                        "w-full rounded-2xl border px-3.5 py-3 text-left transition-colors",
                        p.id === activeId
                          ? "border-primary/40 bg-accent"
                          : "border-transparent hover:bg-secondary",
                      )}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-semibold">{p.title}</span>
                        {solved.includes(p.id) ? (
                          <Check className="size-4 shrink-0 text-[oklch(0.55_0.14_165)]" />
                        ) : (
                          <CircleDot className="size-4 shrink-0 text-muted-foreground/50" />
                        )}
                      </div>
                      <div className="mt-2 flex items-center gap-2 text-[11px]">
                        <span
                          className={cn(
                            "rounded-full px-2 py-0.5 font-semibold",
                            difficultyStyles[p.difficulty],
                          )}
                        >
                          {p.difficulty}
                        </span>
                        <span className="text-muted-foreground">{p.topic}</span>
                        <span className="ml-auto text-muted-foreground">{p.acceptance}</span>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </aside>

            {/* Problem + editor */}
            <div className="space-y-6">
              <article className="rounded-3xl border border-border bg-card p-7 shadow-soft">
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="font-display text-2xl font-semibold">{problem.title}</h2>
                  <span
                    className={cn(
                      "rounded-full px-2.5 py-1 text-xs font-semibold",
                      difficultyStyles[problem.difficulty],
                    )}
                  >
                    {problem.difficulty}
                  </span>
                  <span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-semibold text-secondary-foreground">
                    {problem.topic}
                  </span>
                </div>
                <p className="mt-4 leading-relaxed text-muted-foreground">{problem.description}</p>

                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <div>
                    <h3 className="text-sm font-semibold">Input format</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {problem.inputFormat}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">Output format</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {problem.outputFormat}
                    </p>
                  </div>
                </div>

                <h3 className="mt-6 text-sm font-semibold">Example test cases</h3>
                <div className="mt-3 grid gap-4 sm:grid-cols-2">
                  {problem.examples.map((ex, i) => (
                    <div key={i} className="rounded-2xl bg-surface p-4">
                      <p className="text-xs font-semibold text-muted-foreground">Example {i + 1}</p>
                      <pre className="mt-2 font-mono text-xs whitespace-pre-wrap">
                        <span className="text-muted-foreground">Input</span>
                        {"\n"}
                        {ex.input}
                        {"\n\n"}
                        <span className="text-muted-foreground">Output</span>
                        {"\n"}
                        {ex.output}
                      </pre>
                      {ex.explanation && (
                        <p className="mt-2 text-xs text-muted-foreground">{ex.explanation}</p>
                      )}
                    </div>
                  ))}
                </div>

                <h3 className="mt-6 text-sm font-semibold">Constraints</h3>
                <ul className="mt-2 space-y-1.5">
                  {problem.constraints.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <ChevronRight className="mt-0.5 size-3.5 shrink-0 text-primary" />
                      <span className="font-mono text-xs">{c}</span>
                    </li>
                  ))}
                </ul>
              </article>

              {/* Editor */}
              <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-card">
                <div className="flex flex-wrap items-center gap-3 border-b border-border px-5 py-4">
                  <span className="text-sm font-semibold">Code editor</span>
                  <div className="ml-auto flex flex-wrap items-center gap-2">
                    <label htmlFor="lang" className="sr-only">
                      Language
                    </label>
                    <select
                      id="lang"
                      value={language}
                      onChange={(e) => setLanguage(e.target.value as Language)}
                      className="rounded-full border border-input bg-background px-3.5 py-2 text-sm font-medium focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                    >
                      {languages.map((l) => (
                        <option key={l.id} value={l.id}>
                          {l.label}
                        </option>
                      ))}
                    </select>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="rounded-full font-semibold"
                      onClick={() => {
                        setDrafts((d) => ({ ...d, [draftKey]: problem.starter[language] }));
                        setRun({ status: "idle" });
                      }}
                    >
                      <RotateCcw className="size-3.5" /> Reset
                    </Button>
                  </div>
                </div>

                <textarea
                  value={code}
                  spellCheck={false}
                  onChange={(e) => setDrafts((d) => ({ ...d, [draftKey]: e.target.value }))}
                  className="min-h-[20rem] w-full resize-y bg-ink px-5 py-4 font-mono text-sm leading-relaxed text-ink-foreground focus-visible:outline-none"
                  aria-label={`Code editor for ${problem.title}`}
                />

                <div className="flex flex-wrap items-center gap-3 border-t border-border px-5 py-4">
                  <Button
                    variant="outline"
                    className="rounded-full font-semibold"
                    disabled={run.status === "running"}
                    onClick={() => execute("run")}
                  >
                    {run.status === "running" && run.mode === "run" ? (
                      <Loader2 className="size-4 animate-spin" />
                    ) : (
                      <Play className="size-4" />
                    )}
                    Run Code
                  </Button>
                  <Button
                    className="bg-brand rounded-full font-semibold hover:opacity-90"
                    disabled={run.status === "running"}
                    onClick={() => execute("submit")}
                  >
                    {run.status === "running" && run.mode === "submit" ? (
                      <Loader2 className="size-4 animate-spin" />
                    ) : (
                      <Send className="size-4" />
                    )}
                    Submit Solution
                  </Button>
                  <span className="text-xs text-muted-foreground">
                    Sample runs happen in a practice sandbox — results are illustrative.
                  </span>
                </div>

                <div className="border-t border-border bg-surface px-5 py-4">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <Terminal className="size-4" /> Output
                    {run.status === "done" && (
                      <span
                        className={cn(
                          "rounded-full px-2.5 py-0.5 text-xs font-semibold",
                          run.ok
                            ? "bg-mint/20 text-[oklch(0.42_0.12_165)]"
                            : "bg-destructive/12 text-destructive",
                        )}
                      >
                        {run.ok
                          ? run.mode === "submit"
                            ? "Accepted"
                            : "Sample tests passed"
                          : "Failed"}
                      </span>
                    )}
                  </div>
                  <pre className="mt-3 max-h-52 overflow-auto rounded-2xl bg-ink px-4 py-3 font-mono text-xs leading-relaxed whitespace-pre-wrap text-ink-foreground/85">
                    {run.status === "idle" &&
                      "// Run your code to see the output of the sample test cases."}
                    {run.status === "running" && "Compiling and running sample test cases..."}
                    {run.status === "done" && run.lines.join("\n")}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
