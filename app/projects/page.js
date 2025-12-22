const projects = [
  {
    name: "TextGuard",
    desc: "Governance & compliance risk detection with dashboard + summarization.",
    link: "https://github.com/AnvayP1998/Text-guard",
    tags: ["NLP", "Flask", "LLM"],
  },
  {
    name: "Carcassonne-AI",
    desc: "AI agents and evaluation for gameplay strategies.",
    link: "https://github.com/AnvayP1998/carcassonne-ai",
    tags: ["Python", "AI Agents"],
  },
  {
    name: "HFT Simulator",
    desc: "Order book & matching engine for market-making strategies.",
    link: "https://github.com/AnvayP1998/HFT_Simulator",
    tags: ["Rust", "Systems"],
  },
  {
    name: "Telehealth Dashboard",
    desc: "Dashboard for exploring telehealth services.",
    link: "https://github.com/AnvayP1998/Telehealth-Dashboard",
    tags: ["Web", "Data"],
  },
];

export default function ProjectsPage() {
  return (
    <section className="max-w-6xl mx-auto px-6">
      <h1 className="text-3xl font-semibold mb-8">Projects</h1>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <a
            key={p.name}
            href={p.link}
            target="_blank"
            className="glass rounded-xl p-6 hover:glass-hover transition"
          >
            <h2 className="text-xl font-medium mb-2">{p.name}</h2>
            <p className="text-muted-foreground mb-4">{p.desc}</p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 rounded-full border border-white/20"
                >
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
