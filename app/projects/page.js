const projects = [
  {
    name: "TextGuard Risk & Compliance",
    desc: "Automated risk classifier for IDB Bank using DistilBERT fine-tuning, OpenAI/Gemini APIs, and Terraform-provisioned audit dashboards.",
    link: "https://github.com/AnvayP1998/Text-guard",
    tags: ["Python", "PyTorch", "Flask", "NLP", "Terraform"],
  },
  {
    name: "DataInsight AI",
    desc: "AI-driven data insights platform for exploratory analysis and intelligent reporting (GWU CSCI 6234 group project).",
    link: "https://github.com/AnvayP1998/CSCI_6234_Spring_2026_G14",
    tags: ["Python", "AI/ML", "Data Analytics"],
  },
  {
    name: "SavorBridge",
    desc: "Full-stack web application connecting users with curated food and dining experiences.",
    link: "https://savorbridge.vercel.app/",
    tags: ["Web", "Vercel"],
  },
  {
    name: "Carcassonne-AI",
    desc: "Modular AI agents (Q-Learning + MCTS) for Carcassonne gameplay; ~40% improvement over random baselines across 500+ episodes.",
    link: "https://github.com/AnvayP1998/carcassonne-ai",
    tags: ["Python", "Q-Learning", "MCTS"],
  },
  {
    name: "HFT Simulator",
    desc: "Distributed low-latency simulator with live order book, matching engine, and real-time visualizations; <10ms end-to-end latency.",
    link: "https://github.com/AnvayP1998/HFT_Simulator",
    tags: ["C++", "Rust", "Systems"],
  },
  {
    name: "Telehealth Dashboard",
    desc: "Rust web app with Python analytics and MongoDB for real-time filtering by location, rating, and specialty.",
    link: "https://github.com/AnvayP1998/Telehealth-Dashboard",
    tags: ["Rust", "Python", "MongoDB"],
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
            rel="noreferrer"
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
