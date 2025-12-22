export default function ResumePage() {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold">Resume</h1>

        <a
          href="/resume.pdf"
          className="rounded-xl border border-border px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-border/80 transition"
          download
        >
          Download PDF
        </a>
      </div>

      <div className="glass rounded-2xl overflow-hidden border border-border/60">
        <iframe
          title="Resume"
          src="/resume.pdf"
          className="h-[80vh] w-full"
        />
      </div>
    </section>
  );
}
