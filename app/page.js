import Link from "next/link";

const roles = [
  "Software Engineer",
  "Full-Stack Engineer",
  "Backend Engineer",
  "AI / LLM Engineer",
  "Cloud Engineer",
];

const experience = [
  {
    title: "AI Engineer, Project Assistant",
    company: "George Washington University",
    location: "Washington, DC",
    dates: "Aug 2025 – May 2026",
    bullets: [
      "Built an evaluation harness (Python, OpenAI API) with consistency scoring and automated tests, catching inaccurate AI-generated assessment reports before faculty acted on them and cutting manual errors 30% for 30+ users.",
      "Shipped Python ETL pipelines using SQLAlchemy to transform multi-table exam data from PostgreSQL into the Tableau analytics faculty relied on, cutting reporting turnaround 50%.",
    ],
    tags: ["Python", "OpenAI API", "SQLAlchemy", "PostgreSQL", "ETL", "Tableau"],
  },
  {
    title: "Software Engineer — Phillip9 Multi-Asset Trading Platform (10,000+ users)",
    company: "PhillipCapital",
    location: "Mumbai, India",
    dates: "Sep 2022 – Jul 2024",
    bullets: [
      "Built backend services (Python, React, Amazon RDS for PostgreSQL) powering Portfolio Management, with real-time P&L, ledger, and margin tracking for 10,000+ users, building for strict consistency on a regulated, multi-asset platform.",
      "Built and operated a machine learning pipeline (Python) in production on AWS processing 2.5–5M events/day; re-tuned it to escalate borderline cases to a human reviewer instead of auto-clearing them, cutting manual review 30% for 200+ clients.",
      "Re-architected a monolithic order-management system into event-driven microservices (C#/.NET, Docker, Amazon EventBridge) on Amazon ECS after market-open load exposed failures no test had caught, cutting p99 latency from 120ms to 84ms at 1,500–2,000 transactions/second.",
      "Built REST APIs (C#/.NET, Python) on AWS API Gateway across 3 applications on one shared contract instead of 3 conflicting integrations, defining the technical standard other teams built against.",
      "Built a shared Python SDK and CI/CD pipeline (Docker, Git, Datadog) adopted by 3 teams instead of each solving the same integration problem independently, lifting release cadence to 10+ a year and mentoring 2 engineers.",
      "Built a Python document-extraction pipeline using an AI-powered OCR service, storing processed records in Amazon S3, cutting client onboarding from days to minutes for 200+ clients.",
    ],
    tags: ["Python", "React", "C#", ".NET", "Amazon ECS", "EventBridge", "RDS", "PostgreSQL", "Docker", "Datadog", "CI/CD"],
  },
  {
    title: "Junior Software Engineer",
    company: "PhillipCapital",
    location: "Mumbai, India",
    dates: "Apr 2021 – Aug 2022",
    bullets: [
      "Built real-time price and volume alerts (C#/.NET, Amazon SNS, React) powering Phillip9's personalized watchlists, driving a 30% engagement lift for 1,000+ users.",
      "Cut PostgreSQL p95 latency from 1,200ms to 720ms across 20+ hot queries on Amazon RDS via EXPLAIN-plan profiling and composite indexing.",
      "Built a Python pipeline running Tesseract OCR and rule-based NLP over 5,000+ daily documents, cutting extraction errors 50%.",
      "Automated the Git deploy workflow with regression test gates to catch bad builds before they reached production, reducing manual release effort 60%.",
    ],
    tags: ["C#", ".NET", "React", "Amazon SNS", "Python", "PostgreSQL", "Tesseract OCR", "NLP", "Git"],
  },
  {
    title: "Software Engineer Intern",
    company: "Taparia Tools",
    location: "Nashik, India",
    dates: "Jan 2020 – Jun 2020",
    bullets: [
      "Shipped a full-stack React, Node.js, and MongoDB data tool for 100+ machines end to end, replacing manual entry and cutting report time by 90%.",
      "Reduced machine downtime by 15% by adding predictive-maintenance alerts that flag equipment faults before they cause failures.",
    ],
    tags: ["React", "Node.js", "MongoDB", "Full-Stack"],
  },
];

const projects = [
  {
    name: "AI-Powered PR Review Assistant",
    period: "Jul 2026 – Aug 2026",
    stack: ["Python", "LangChain", "LangGraph", "MCP", "SQLAlchemy", "PostgreSQL", "Gemini", "Groq", "ChromaDB", "LangSmith"],
    bullets: [
      "Built an AI-powered GitHub PR reviewer using Gemini and Groq LLMs, with SQLAlchemy and PostgreSQL storing PR history and metadata, deployed to 15+ open source repositories and catching 12 production bugs across 200+ weekly pull requests.",
      "Built an evaluation framework (LangSmith, ChromaDB-powered RAG) benchmarked against 500 historical pull requests, improving precision from 45% to 82%.",
    ],
    link: null,
  },
  {
    name: "Clinical Conversation Agent — Autonomous Patient Check-Ins",
    period: "Jun 2026 – Jul 2026",
    stack: ["Python", "FastAPI", "Claude API", "Agentic Workflows", "State Machine"],
    bullets: [
      "Designed an agentic workflow with a state-machine planner coordinating multi-step reasoning over a structured patient record, enabling autonomous post-discharge medication check-ins.",
      "Built a 30-case adversarial evaluation suite measuring clinical-safety violations such as unauthorized advice and missed escalation, raising the guardrail pass rate from 71% to 96% over four rounds.",
    ],
    link: null,
  },
  {
    name: "Textguard — AI Risk & Compliance Classifier",
    period: "Oct 2025 – Dec 2025",
    stack: ["Python", "Flask", "PyTorch", "DistilBERT", "scikit-learn", "OpenAI", "Gemini"],
    bullets: [
      "Compliance analysts at IDB Bank read every incoming document by hand to catch policy risks, so I built a web tool (Python, Flask) that scores each document and routes only the high-risk ones to a human reviewer, cutting manual review by 25%.",
      "Fine-tuned a PyTorch DistilBERT model with OpenAI and Gemini APIs as fallback checks, and validated quality with a scikit-learn precision, recall, and F1 pipeline plus dashboards tracking accuracy and drift.",
    ],
    link: "https://github.com/AnvayP1998/Text-guard",
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
    link: "https://github.com/AnvayP1998/carcassonne-ai",
  },
  {
    name: "DataInsight AI — Production RAG Copilot",
    period: "Feb 2026 – Apr 2026",
    stack: ["React", "FastAPI", "Python", "PostgreSQL", "Qdrant", "Claude API", "RAG"],
    bullets: [
      "Analysts lost minutes hunting for answers across 200+ scattered documents, so I built a full-stack AI platform (React, FastAPI, PostgreSQL, Qdrant) with an ingestion, chunking, embedding, and retrieval pipeline that answers questions with cited Claude responses in 2 seconds.",
      "Engineered an async RAG pipeline streaming Claude API tokens over SSE that cut time-to-first-response 40x from 12 seconds to 300ms, tuning retrieval and model selection to control latency and token spend.",
    ],
    link: "https://github.com/AnvayP1998/CSCI_6234_Spring_2026_G14",
  },
  {
    name: "SavorBridge — Conversational AI Agent",
    period: "Apr 2026",
    stack: ["Next.js", "TypeScript", "Node.js", "Claude API", "Tool Calling", "Guardrails"],
    bullets: [
      "Built a conversational AI agent (Next.js/TypeScript + Node.js) on the Claude API with agentic multi-step workflows and tool/function calling, collapsing a 30-minute task to 2 minutes for 42M+ users.",
      "Designed structured-output prompt workflows evaluating 40+ data points per request, with guardrails for accuracy and human review.",
    ],
    link: "https://savorbridge.vercel.app/",
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
    link: "https://github.com/AnvayP1998/HFT_Simulator",
  },
  {
    name: "Telehealth Provider Dashboard — Patient-Facing Healthcare App",
    period: "Oct 2024 – Nov 2024",
    stack: ["React", "TypeScript", "SSR", "Grafana"],
    bullets: [
      "Patients had no simple way to find telehealth providers near them, so I built a responsive React and TypeScript web app that filters licensed providers by geolocation and surfaces the closest matches.",
      "Held 99.9% uptime under 1,000+ concurrent users, monitored with Grafana dashboards tracking latency and availability.",
    ],
    link: "https://github.com/AnvayP1998/Telehealth-Dashboard",
  },
];

const skills = {
  "Languages & Frameworks": ["Python", "TypeScript", "JavaScript", "React", "Next.js", "FastAPI", "SQLAlchemy", "C#", ".NET", "SQL"],
  "AI-Assisted Development": ["Cursor", "Claude", "Gemini", "GitHub Copilot", "LLM Integration"],
  "Backend & Data": ["REST APIs", "Microservices", "PostgreSQL", "Redis", "Event-Driven Architecture"],
  "Cloud & DevOps": ["AWS (EC2, ECS, RDS, EventBridge)", "Docker", "Kubernetes", "Datadog", "CI/CD", "Git"],
  "Practices": ["Distributed Systems", "Ledger & Financial-Integrity Systems", "Mentoring", "Cross-Functional Collaboration"],
};

export default function Home() {
  return (
    <div className="relative mx-auto max-w-6xl px-5">
      <WarmBackdrop />

      {/* HERO */}
      <section id="home" className="pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-8">
            <p className="text-sm text-slate-700/70 dark:text-slate-200/70 mb-3">
              Anvay Paralikar
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-slate-900 dark:text-white">
              Software Engineer building full-stack systems for high-stakes, regulated platforms.
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-700/80 dark:text-slate-200/70 max-w-2xl">
              3+ years shipping ledger, P&amp;L, and margin systems at 1,500–2,000 tx/sec for 10,000+ users. I work across React, TypeScript, Python, and PostgreSQL, use Cursor and Claude daily, and drive platform adoption across teams. MS-CS graduate, GWU (May 2026).
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm shadow-sm ring-1 ring-black/5 dark:ring-white/10
                bg-white/40 dark:bg-white/5 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="text-slate-900 dark:text-white">Available May 2026</span>
              </span>

              {["Full-Stack", "Distributed Systems", "AI / LLM", "PostgreSQL"].map((t) => (
                <span
                  key={t}
                  className="rounded-full px-3 py-1.5 text-sm shadow-sm ring-1 ring-black/5 dark:ring-white/10
                    bg-white/35 dark:bg-white/5 backdrop-blur
                    text-slate-700/80 dark:text-slate-200/70 hover:text-slate-900 dark:hover:text-white transition"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group rounded-full px-5 py-2.5 text-sm font-medium shadow-sm ring-1 ring-black/5 dark:ring-white/10
                  bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white
                  hover:opacity-95 transition"
              >
                View Projects <span className="inline-block translate-x-0 group-hover:translate-x-0.5 transition">→</span>
              </a>

              <a
                href="#contact"
                className="rounded-full px-5 py-2.5 text-sm font-medium shadow-sm ring-1 ring-black/5 dark:ring-white/10
                  bg-white/35 dark:bg-white/5 backdrop-blur
                  text-slate-900 dark:text-white hover:bg-white/45 dark:hover:bg-white/10 transition"
              >
                Contact
              </a>

              <a
                href="/resume.pdf"
                className="rounded-full px-5 py-2.5 text-sm font-medium shadow-sm ring-1 ring-black/5 dark:ring-white/10
                  bg-white/35 dark:bg-white/5 backdrop-blur
                  text-slate-900 dark:text-white hover:bg-white/45 dark:hover:bg-white/10 transition"
              >
                Download Resume
              </a>
            </div>

            <div className="mt-8">
              <p className="text-xs text-slate-700/70 dark:text-slate-200/60 mb-2">
                Seeking full-time roles:
              </p>
              <div className="flex flex-wrap gap-2">
                {roles.map((t) => (
                  <span
                    key={t}
                    className="rounded-full px-3 py-1.5 text-xs shadow-sm ring-1 ring-black/5 dark:ring-white/10
                      bg-white/30 dark:bg-white/5 backdrop-blur
                      text-slate-700/80 dark:text-slate-200/70 hover:text-slate-900 dark:hover:text-white transition"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Metrics */}
          <div className="lg:col-span-4">
            <div className="grid gap-3">
              <Metric title="3+ Years" desc="Software engineering in regulated, production FinTech" />
              <Metric title="1,500–2K" desc="Transactions/sec on the Phillip9 multi-asset platform" />
              <Metric title="10,000+" desc="Users across production ledger, P&L, and margin systems" />
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-12">
        <SectionDivider />
        <Header eyebrow="What I've shipped in production" title="Experience" />

        <div className="mt-6 grid gap-4">
          {experience.map((e, idx) => (
            <Card key={e.title + e.dates} tint={idx % 2 === 0 ? "warm" : "rose"}>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {e.title} — {e.company}
                  </h3>
                  <p className="text-sm text-slate-700/75 dark:text-slate-200/60">{e.location}</p>
                </div>
                <p className="text-sm text-slate-700/75 dark:text-slate-200/60">{e.dates}</p>
              </div>

              <ul className="mt-4 space-y-2 text-sm text-slate-700/80 dark:text-slate-200/70 list-disc pl-5">
                {e.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {e.tags.map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-12">
        <SectionDivider />
        <Header eyebrow="Selected work across systems, AI, and cloud" title="Projects" />

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((p) => (
            <Card key={p.name} className="flex flex-col" tint="sunset">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{p.name}</h3>
                  <p className="text-sm text-slate-700/75 dark:text-slate-200/60">{p.period}</p>
                </div>

                {p.link ? (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-slate-700/80 dark:text-slate-200/70 hover:text-slate-900 dark:hover:text-white underline underline-offset-4"
                  >
                    Link ↗
                  </a>
                ) : null}
              </div>

              <ul className="mt-4 space-y-2 text-sm text-slate-700/80 dark:text-slate-200/70 list-disc pl-5">
                {p.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-12">
        <SectionDivider />
        <Header eyebrow="Tools I use to ship reliably" title="Skills" />

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(skills).map(([k, arr], idx) => (
            <Card key={k} tint={idx % 2 === 0 ? "warm" : "sunset"}>
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">{k}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {arr.map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-12">
        <SectionDivider />
        <Header eyebrow="How I approach building" title="About" />

        <Card className="mt-6" tint="rose">
          <p className="text-sm sm:text-base text-slate-700/85 dark:text-slate-200/70 leading-relaxed max-w-3xl">
            I’m Anvay Paralikar — a Software Engineer and MS-CS graduate (GWU, May 2026) with 3+ years building
            full-stack and backend systems for a regulated, high-stakes financial platform: ledger, P&amp;L, and margin
            systems requiring strict consistency for 10,000+ users, and high-volume transaction processing at
            1,500–2,000 transactions per second. I work across React, TypeScript, Python, and PostgreSQL, use Cursor
            and Claude daily as real collaborators in how I build, and I’ve driven adoption of a shared platform across
            teams and mentored engineers instead of just shipping my own tasks.
          </p>
        </Card>
      </section>

      {/* RESUME */}
      <section id="resume" className="py-12">
        <SectionDivider />
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <Header eyebrow="Quick view + download" title="Resume" />
          <div className="flex gap-3">
            <a
              href="/resume.pdf"
              className="rounded-full px-5 py-2.5 text-sm font-medium shadow-sm ring-1 ring-black/5 dark:ring-white/10
                bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white hover:opacity-95 transition"
            >
              Download PDF
            </a>
            <a
              href="#contact"
              className="rounded-full px-5 py-2.5 text-sm font-medium shadow-sm ring-1 ring-black/5 dark:ring-white/10
                bg-white/35 dark:bg-white/5 backdrop-blur
                text-slate-900 dark:text-white hover:bg-white/45 dark:hover:bg-white/10 transition"
            >
              Reach out →
            </a>
          </div>
        </div>

        <div className="mt-6 rounded-3xl overflow-hidden shadow-sm ring-1 ring-black/5 dark:ring-white/10 bg-white/25 dark:bg-white/5 backdrop-blur">
          <iframe title="resume" src="/resume.pdf" className="w-full h-[720px]" />
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-12">
        <SectionDivider />
        <Header eyebrow="Best way to reach me" title="Contact" />

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card tint="warm">
            <h3 className="text-base font-semibold text-slate-900 dark:text-white">Reach out</h3>
            <p className="mt-1 text-sm text-slate-700/75 dark:text-slate-200/60">
              Roles, collaborations, or project discussions.
            </p>

            <div className="mt-4 space-y-2 text-sm text-slate-700/85 dark:text-slate-200/70">
              <p>
                <span className="text-slate-700/70 dark:text-slate-200/60">Email:</span>{" "}
                <a className="underline underline-offset-4 hover:text-slate-900 dark:hover:text-white" href="mailto:anvay.paralikar98@gmail.com">
                  anvay.paralikar98@gmail.com
                </a>
              </p>
              <p>
                <span className="text-slate-700/70 dark:text-slate-200/60">GitHub:</span>{" "}
                <a className="underline underline-offset-4 hover:text-slate-900 dark:hover:text-white" href="https://github.com/AnvayP1998" target="_blank" rel="noreferrer">
                  github.com/AnvayP1998
                </a>
              </p>
              <p>
                <span className="text-slate-700/70 dark:text-slate-200/60">LinkedIn:</span>{" "}
                <a className="underline underline-offset-4 hover:text-slate-900 dark:hover:text-white" href="https://linkedin.com/in/anvayparalikar" target="_blank" rel="noreferrer">
                  linkedin.com/in/anvayparalikar
                </a>
              </p>
              <p>
                <span className="text-slate-700/70 dark:text-slate-200/60">Phone:</span>{" "}
                <a className="underline underline-offset-4 hover:text-slate-900 dark:hover:text-white" href="tel:+15714570595">
                  +1 (571) 457-0595
                </a>
              </p>
            </div>
          </Card>

          <Card tint="sunset">
            <h3 className="text-base font-semibold text-slate-900 dark:text-white">Quick actions</h3>
            <p className="mt-1 text-sm text-slate-700/75 dark:text-slate-200/60">
              Make it easy for recruiters.
            </p>

            <div className="mt-4 flex flex-col gap-3">
              <a
                href="#projects"
                className="rounded-2xl px-4 py-3 text-sm font-medium shadow-sm ring-1 ring-black/5 dark:ring-white/10
                  bg-white/35 dark:bg-white/5 backdrop-blur
                  text-slate-900 dark:text-white hover:bg-white/45 dark:hover:bg-white/10 transition"
              >
                View Projects →
              </a>
              <a
                href="/resume.pdf"
                className="rounded-2xl px-4 py-3 text-sm font-medium shadow-sm ring-1 ring-black/5 dark:ring-white/10
                  bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white hover:opacity-95 transition"
              >
                Download Resume
              </a>
            </div>
          </Card>
        </div>

        <footer className="py-10 text-center text-xs text-slate-700/70 dark:text-slate-200/60">
          © {new Date().getFullYear()} Anvay Paralikar
        </footer>
      </section>
    </div>
  );
}

/* ---------- UI bits ---------- */

function WarmBackdrop() {
  return (
    <>
      {/* Warm page base (light) + deep warm base (dark) */}
      <div className="pointer-events-none fixed inset-0 -z-20
        bg-[radial-gradient(1200px_800px_at_10%_10%,rgba(251,191,36,0.22),transparent_55%),radial-gradient(900px_700px_at_90%_20%,rgba(244,63,94,0.18),transparent_60%),radial-gradient(900px_700px_at_55%_95%,rgba(249,115,22,0.18),transparent_60%),linear-gradient(to_bottom,rgba(255,247,237,0.9),rgba(255,251,235,0.9))]
        dark:bg-[radial-gradient(1100px_800px_at_10%_10%,rgba(251,191,36,0.14),transparent_55%),radial-gradient(900px_700px_at_90%_25%,rgba(244,63,94,0.12),transparent_60%),radial-gradient(900px_700px_at_55%_95%,rgba(249,115,22,0.12),transparent_60%),linear-gradient(to_bottom,rgba(2,6,23,0.96),rgba(15,23,42,0.96))]"
      />

      {/* Soft grain/noise to avoid “flat” look */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.06] dark:opacity-[0.07] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)' opacity='.55'/%3E%3C/svg%3E\")",
        }}
      />
    </>
  );
}

function SectionDivider() {
  return (
    <div className="mb-10 h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent dark:via-white/10" />
  );
}

function Header({ eyebrow, title }) {
  return (
    <div>
      <p className="text-xs text-slate-700/70 dark:text-slate-200/60">{eyebrow}</p>
      <h2 className="mt-1 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
        {title}
      </h2>
    </div>
  );
}

function Card({ children, className = "", tint = "warm" }) {
  const tintMap = {
    warm: "from-amber-200/40 via-orange-200/20 to-rose-200/25 dark:from-amber-500/10 dark:via-orange-500/8 dark:to-rose-500/10",
    rose: "from-rose-200/35 via-pink-200/20 to-amber-200/20 dark:from-rose-500/10 dark:via-pink-500/8 dark:to-amber-500/10",
    sunset: "from-orange-200/35 via-amber-200/20 to-rose-200/25 dark:from-orange-500/10 dark:via-amber-500/8 dark:to-rose-500/10",
  };

  return (
    <div
      className={[
        "relative overflow-hidden rounded-3xl p-6",
        "shadow-[0_8px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_18px_60px_rgba(0,0,0,0.35)]",
        "ring-1 ring-black/5 dark:ring-white/10",
        "bg-white/35 dark:bg-white/5 backdrop-blur",
        "hover:shadow-[0_12px_40px_rgba(0,0,0,0.09)] dark:hover:shadow-[0_22px_70px_rgba(0,0,0,0.45)]",
        "hover:-translate-y-[1px] transition will-change-transform",
        className,
      ].join(" ")}
    >
      {/* subtle warm tint blob */}
      <div
        className={[
          "pointer-events-none absolute -inset-24 opacity-70 blur-3xl",
          "bg-gradient-to-br",
          tintMap[tint] || tintMap.warm,
        ].join(" ")}
      />
      <div className="relative">{children}</div>
    </div>
  );
}

function Chip({ children }) {
  return (
    <span
      className="rounded-full px-3 py-1 text-xs shadow-sm ring-1 ring-black/5 dark:ring-white/10
        bg-white/30 dark:bg-white/5 backdrop-blur
        text-slate-700/80 dark:text-slate-200/70 hover:text-slate-900 dark:hover:text-white transition"
    >
      {children}
    </span>
  );
}

function Metric({ title, desc }) {
  return (
    <div
      className="relative overflow-hidden rounded-3xl p-6
        shadow-[0_8px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_18px_60px_rgba(0,0,0,0.35)]
        ring-1 ring-black/5 dark:ring-white/10
        bg-white/35 dark:bg-white/5 backdrop-blur
        hover:shadow-[0_12px_40px_rgba(0,0,0,0.09)] dark:hover:shadow-[0_22px_70px_rgba(0,0,0,0.45)]
        hover:-translate-y-[1px] transition"
    >
      <div className="pointer-events-none absolute -inset-24 opacity-70 blur-3xl bg-gradient-to-br from-amber-200/40 via-orange-200/20 to-rose-200/25 dark:from-amber-500/10 dark:via-orange-500/8 dark:to-rose-500/10" />
      <div className="relative">
        <div className="text-3xl font-bold text-slate-900 dark:text-white">{title}</div>
        <div className="mt-1 text-sm text-slate-700/75 dark:text-slate-200/60">{desc}</div>
      </div>
    </div>
  );
}
