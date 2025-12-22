import Link from "next/link";

const roles = [
  "Software Engineer",
  "Backend Engineer",
  "Infrastructure",
  "ML Engineer",
  "Cloud Engineer",
];

const experience = [
  {
    title: "Software Engineer",
    company: "Phillip Capital India Pvt Ltd",
    location: "Mumbai, India",
    dates: "Sep 2022 – Jul 2024",
    bullets: [
      "Modernized a multi-asset trading platform on Azure/.NET using async order routing + caching; increased throughput by 35% and reduced p99 latency by 30%.",
      "Refactored 20+ stored procedures and integrated Dapper ORM to cut query times by 40%, eliminating CPU spikes during peak trading.",
      "Designed a real-time dashboard for unlisted share trading using .NET, Azure Jobs, and streaming feeds; improved high-net-worth user engagement by 15%.",
      "Added TradingView charts, basket orders, and margin modules to the Phillip9 platform, improving UI responsiveness and driving higher trade volume.",
      "Built low-latency order paths in C++17 and JavaScript to reduce tick-to-trade times by 30%, enabling HFT strategies.",
      "Coordinated 10+ cross-functional releases annually and enforced CI/CD pipelines; mentored 2 junior developers and reduced deployment incidents.",
    ],
    tags: [".NET", "Azure", "SQL Server", "C++", "JavaScript", "CI/CD"],
  },
  {
    title: "Junior Software Engineer",
    company: "Phillip Capital India Pvt Ltd",
    location: "Mumbai, India",
    dates: "Apr 2021 – Aug 2022",
    bullets: [
      "Built an eKYC/PMS onboarding app using C#, Azure Functions, and Cognitive Services; reduced verification errors by 50% and doubled onboarding throughput.",
      "Automated compliance workflows with Azure Functions and SQL, eliminating 60% of manual tasks.",
      "Created a TypeScript real-time alert system for trades & funds; improved reliability and reduced support tickets by 30%.",
    ],
    tags: ["C#", "Azure Functions", "TypeScript", "SQL"],
  },
];

const projects = [
  {
    name: "TextGuard Risk & Compliance",
    period: "Oct 2025 – Present",
    stack: ["Python", "LLMs", "Flask", "NLP"],
    bullets: [
      "Built an end-to-end governance & compliance NLP system ingesting IDB/World Bank reports for risk extraction, topic modeling, sentiment scoring, and LLM summarization.",
      "Shipped a Flask dashboard; achieved 80% precision and 75% recall on governance risk classification.",
    ],
    link: null,
  },
  {
    name: "Intelligent Task-Planning Copilot",
    period: "Sep 2025 – Oct 2025",
    stack: ["Python", "POMDP", "LLMs", "FastAPI"],
    bullets: [
      "Designed an autonomous planning agent using belief-state (POMDP) reasoning + utility-based decisions to handle uncertainty and shifting priorities.",
      "Integrated LLM parsing and heuristic re-scheduling to improve completion efficiency by 30%.",
    ],
    link: null,
  },
  {
    name: "Carcassonne AI Agent Game",
    period: "Oct 2025",
    stack: ["Python", "Q-Learning", "MCTS", "Self-play"],
    bullets: [
      "Built a modular framework combining Q-Learning + MCTS with reward shaping and state abstraction.",
      "Evaluated 500+ episodes; achieved ~40% improvement over random baselines and compared learning vs search strategies.",
    ],
    link: "https://github.com/akm303/carcassonne-ai",
  },
  {
    name: "AI-Driven Query Optimizer",
    period: "Jul 2025 – Aug 2025",
    stack: ["Rust", "Python", "TypeScript", "PostgreSQL", "OpenTelemetry"],
    bullets: [
      "Built a full-stack query optimizer that parses EXPLAIN(ANALYZE), recommends indexes/query rewrites, and ships dashboards + RBAC APIs; reduced p95 latency by 40%.",
      "Implemented shadow-apply, auto-rollback, and audit logs; hardened CI/CD (Docker, pytest, mypy, ruff, clippy) and used CPU-only ONNX Runtime to avoid inference costs.",
    ],
    link: null,
  },
  {
    name: "High-Frequency Trading Simulator",
    period: "May 2025 – Jun 2025",
    stack: ["C++", "Rust", "JavaScript", "D3.js", "Chart.js"],
    bullets: [
      "Engineered a distributed low-latency simulator with live order book, matching engine, and real-time visualizations.",
      "Integrated strategy bots and achieved <10ms end-to-end latency; exposed reliable REST APIs for automation.",
    ],
    link: null,
  },
  {
    name: "Telehealth Dashboard",
    period: "May 2025 – Jun 2025",
    stack: ["Rust", "Python", "JavaScript", "MongoDB", "Google APIs"],
    bullets: [
      "Built a Rust web app with Python analytics + MongoDB and Google Maps APIs for real-time filtering by location, rating, and specialty; improved decision efficiency by 30%.",
      "Implemented responsive UI, real-time ingestion, and optimized MongoDB queries (indexes + schema design) for low-latency lookup across thousands of records.",
    ],
    link: null,
  },
];

const skills = {
  Languages: ["C++", "Rust", "Python", "JavaScript", "TypeScript", "SQL", "C#", "Bash", "HTML"],
  Frameworks: ["FastAPI", "Node.js", ".NET Core", "React", "REST APIs", "Docker", "Kubernetes", "CI/CD"],
  "Cloud/Systems": ["Azure", "AWS", "GCP", "Kafka", "Redis", "Distributed Messaging", "OpenTelemetry"],
  "AI / Data": ["NLP", "LLMs", "LangChain", "ONNX", "POMDP", "Analytics Pipelines"],
};

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-5">
      {/* Make anchor scrolling feel right with sticky navbar */}
      {/* <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        section[id] {
          scroll-margin-top: 90px;
        }
      `}</style> */}

      {/* HERO */}
      <section id="home" className="pt-16 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-8">
            <p className="text-sm text-white/60 mb-3">Anvay Paralikar</p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Software Engineer building low-latency systems, cloud platforms, and production AI.
            </h1>

            <p className="mt-5 text-base sm:text-lg text-white/70 max-w-2xl">
              3+ years shipping trading systems, distributed infrastructure, and AI pipelines used in production.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1.5 text-sm text-white/80">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Available May 2026
              </span>
              {["Systems", "Cloud", "AI", "Performance"].map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-white/5 border border-white/10 px-3 py-1.5 text-sm text-white/70"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projects" className="rounded-full bg-white text-black px-5 py-2.5 text-sm font-medium hover:opacity-90 transition">
                View Projects →
              </a>
              <a href="#contact" className="rounded-full bg-white/5 border border-white/10 text-white px-5 py-2.5 text-sm font-medium hover:bg-white/10 transition">
                Contact
              </a>
              <a
                href="/resume.pdf"
                className="rounded-full bg-white/5 border border-white/10 text-white px-5 py-2.5 text-sm font-medium hover:bg-white/10 transition"
              >
                Download Resume
              </a>
            </div>

            <div className="mt-8">
              <p className="text-xs text-white/50 mb-2">Seeking full-time roles:</p>
              <div className="flex flex-wrap gap-2">
                {roles.map((t) => (
                  <span key={t} className="rounded-full bg-white/5 border border-white/10 px-3 py-1.5 text-xs text-white/70">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Metrics */}
          <div className="lg:col-span-4">
            <div className="grid gap-3">
              <Metric title="3+ Years" desc="Professional software engineering experience" />
              <Metric title="35%+" desc="Throughput gains in production trading systems" />
              <Metric title="10+" desc="Projects across systems, cloud & AI" />
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-12 border-t border-white/10">
        <Header eyebrow="What I've shipped in production" title="Experience" />

        <div className="mt-6 grid gap-4">
          {experience.map((e) => (
            <div key={e.title + e.dates} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {e.title} — {e.company}
                  </h3>
                  <p className="text-sm text-white/60">{e.location}</p>
                </div>
                <p className="text-sm text-white/60">{e.dates}</p>
              </div>

              <ul className="mt-4 space-y-2 text-sm text-white/75 list-disc pl-5">
                {e.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {e.tags.map((t) => (
                  <span key={t} className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-white/70">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-12 border-t border-white/10">
        <Header eyebrow="Selected work across systems, AI, and cloud" title="Projects" />

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((p) => (
            <div key={p.name} className="rounded-3xl border border-white/10 bg-white/5 p-6 flex flex-col">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">{p.name}</h3>
                  <p className="text-sm text-white/60">{p.period}</p>
                </div>

                {p.link ? (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-white/70 hover:text-white underline underline-offset-4"
                  >
                    Link ↗
                  </a>
                ) : null}
              </div>

              <ul className="mt-4 space-y-2 text-sm text-white/75 list-disc pl-5">
                {p.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <span key={t} className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-white/70">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-12 border-t border-white/10">
        <Header eyebrow="Tools I use to ship reliably" title="Skills" />

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(skills).map(([k, arr]) => (
            <div key={k} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-base font-semibold text-white">{k}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {arr.map((t) => (
                  <span key={t} className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-white/70">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-12 border-t border-white/10">
        <Header eyebrow="How I approach building" title="About" />

        <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm sm:text-base text-white/75 leading-relaxed max-w-3xl">
            I’m Anvay Paralikar — a software engineer focused on performance, reliability, and clean architecture.
            I’ve built low-latency trading systems and scalable cloud services, and I’m currently pursuing an M.S.
            in Computer Science at George Washington University. I enjoy roles where correctness, metrics, and
            shipping matter.
          </p>
        </div>
      </section>

      {/* RESUME */}
      <section id="resume" className="py-12 border-t border-white/10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <Header eyebrow="Quick view + download" title="Resume" />
          <div className="flex gap-3">
            <a
              href="/resume.pdf"
              className="rounded-full bg-white text-black px-5 py-2.5 text-sm font-medium hover:opacity-90 transition"
            >
              Download PDF
            </a>
            <a
              href="#contact"
              className="rounded-full bg-white/5 border border-white/10 text-white px-5 py-2.5 text-sm font-medium hover:bg-white/10 transition"
            >
              Reach out →
            </a>
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 overflow-hidden">
          <iframe
            title="resume"
            src="/resume.pdf"
            className="w-full h-[720px]"
          />
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-12 border-t border-white/10">
        <Header eyebrow="Best way to reach me" title="Contact" />

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-base font-semibold text-white">Reach out</h3>
            <p className="mt-1 text-sm text-white/60">Roles, collaborations, or project discussions.</p>

            <div className="mt-4 space-y-2 text-sm text-white/75">
              <p>
                <span className="text-white/60">Email:</span>{" "}
                <a className="underline underline-offset-4 hover:text-white" href="mailto:anvay.paralikar@gwu.edu">
                  anvay.paralikar@gwu.edu
                </a>
              </p>
              <p>
                <span className="text-white/60">GitHub:</span>{" "}
                <a className="underline underline-offset-4 hover:text-white" href="https://github.com/AnvayP1998" target="_blank" rel="noreferrer">
                  github.com/AnvayP1998
                </a>
              </p>
              <p>
                <span className="text-white/60">LinkedIn:</span>{" "}
                <a className="underline underline-offset-4 hover:text-white" href="https://linkedin.com/in/anvayparalikar" target="_blank" rel="noreferrer">
                  linkedin.com/in/anvayparalikar
                </a>
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-base font-semibold text-white">Quick actions</h3>
            <p className="mt-1 text-sm text-white/60">Make it easy for recruiters.</p>

            <div className="mt-4 flex flex-col gap-3">
              <a href="#projects" className="rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white/80 hover:bg-white/10 transition">
                View Projects →
              </a>
              <a href="/resume.pdf" className="rounded-2xl bg-white text-black px-4 py-3 text-sm font-medium hover:opacity-90 transition">
                Download Resume
              </a>
            </div>
          </div>
        </div>

        <footer className="py-10 text-center text-xs text-white/40">
          © {new Date().getFullYear()} Anvay Paralikar
        </footer>
      </section>
    </div>
  );
}

function Header({ eyebrow, title }) {
  return (
    <div>
      <p className="text-xs text-white/50">{eyebrow}</p>
      <h2 className="mt-1 text-3xl sm:text-4xl font-bold tracking-tight text-white">{title}</h2>
    </div>
  );
}

function Metric({ title, desc }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="text-3xl font-bold text-white">{title}</div>
      <div className="mt-1 text-sm text-white/60">{desc}</div>
    </div>
  );
}
