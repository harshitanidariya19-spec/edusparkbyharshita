export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="bg-deep relative overflow-hidden text-ink-foreground">
      <div className="pointer-events-none absolute -top-32 right-0 size-[28rem] rounded-full bg-white/10 blur-3xl" />
      <div className="animate-rise relative mx-auto max-w-4xl px-5 py-20 text-center lg:px-8 lg:py-28">
        <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold tracking-wide uppercase">
          {eyebrow}
        </span>
        <h1 className="mt-5 text-4xl font-semibold text-balance sm:text-5xl">{title}</h1>
        <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-ink-foreground/75">{subtitle}</p>
      </div>
    </section>
  );
}
