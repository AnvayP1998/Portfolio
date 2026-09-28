import Link from "next/link";

const experience = [
  {
    title: "Software Engineer (Contract)",
    company: "Walmart",
    location: "Herndon, VA",
    dates: "Jan 2026 – Present",
    bullets: [
      "Developed React and Next.js features for Walmart's associate support application, creating JavaScript components for conversational search, AI summaries, source references, feedback, and accessible navigation across 20+ reusable UI components.",
      "Extended Node.js BFF services connecting the associate application with internal APIs and AI services, handling user context, request validation, GraphQL queries, and response transformation across 6+ backend services.",
      "Added Python services for RAG data preparation, splitting source documents into searchable chunks, generating embeddings, applying metadata filters, and preparing retrieval context for LLM requests across 700K+ indexed documents.",
      "Investigated production failures across AI requests and web services, tracing bottlenecks through retrieval calls using OpenTelemetry and resolving 30+ incidents through targeted root-cause fixes in the Python and C# codebases.",
      "Supported Docker deployments and GitHub Actions pipelines, reviewed React, Node.js, and Python changes, documented application flows, and contributed to API design and maintainability practices across the development team.",
    ],
    tags: ["React", "Next.js", "Node.js", "Python", "C#", "GraphQL", "RAG", "OpenTelemetry", "Docker", "GitHub Actions"],
  },
  {
    title: "Software Engineer II",
    company: "Phillip Capital",
    location: "Mumbai, India",
    dates: "Apr 2021 – Jul 2024",
    bullets: [
      "Developed C#/.NET services for the order lifecycle, separating validation, routing, execution, and position updates into focused service components that processed 2,000+ NSE/BSE transactions per second.",
      "Extended ASP.NET Core REST APIs for brokerage, portfolio, and settlement integrations, defining versioned contracts, validation rules, and idempotent request handling that reduced duplicate-order investigations from hours to under 30 minutes.",
      "Tuned PostgreSQL and Entity Framework data access through execution-plan analysis, indexing, and transaction-aware query design, bringing 20+ frequently used portfolio and transaction queries below 200 milliseconds.",
      "Introduced Redis for frequently accessed positions and reference data, with RabbitMQ processing reconciliation and notification jobs asynchronously, reducing daily reconciliation processing from 45 minutes to 12 minutes.",
      "Developed Python scripts and Go utilities for trade reconciliation, matching executed trades against settlement and ledger records across database extracts and files, saving operations teams roughly 10 hours each week.",
      "Led the development of React and JavaScript interfaces for order status and portfolio positions, mentoring 2 junior engineers to deliver a consolidated dashboard that supported operations teams across 10,000+ customer accounts.",
    ],
    tags: ["C#", ".NET", "ASP.NET Core", "PostgreSQL", "Redis", "RabbitMQ", "Python", "Go", "React"],
  },
  {
    title: "Software Engineer",
    company: "Accenture",
    location: "India",
    dates: "Apr 2020 – Mar 2021",
    bullets: [
      "Enhanced patient onboarding and appointment workflows using C# REST APIs, JWT authentication, and RBAC, adding validation and service integrations that supported 75K+ patient profiles across multi-specialty healthcare facilities.",
      "Developed reusable React components with JavaScript/ES6 for patient registration, appointment search, and provider availability, keeping page-load times below 2 seconds across high-use clinical workflows.",
      "Integrated electronic health record, prescription, and laboratory systems with Python and FastAPI, automating clinical data across applications and eliminating approximately 20 hours of manual reconciliation work each month.",
      "Reworked Microsoft SQL Server queries, database indexes, and relational mappings for patient and appointment searches, reducing average query execution from 1.4 seconds to approximately 500 milliseconds.",
    ],
    tags: ["C#", "JWT", "RBAC", "React", "Python", "FastAPI", "SQL Server"],
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
    link: "https://github.com/AnvayP1998/PRSense",
  },
  {
    name: "Clinical Conversation Agent — Autonomous Patient Check-Ins",
    period: "Jun 2026 – Jul 2026",
    stack: ["Python", "FastAPI", "Claude API", "Agentic Workflows", "State Machine"],
    bullets: [
      "Designed an agentic workflow with a state-machine planner coordinating multi-step reasoning over a structured patient record, enabling autonomous post-discharge medication check-ins.",
      "Built a 30-case adversarial evaluation suite measuring clinical-safety violations such as unauthorized advice and missed escalation, raising the guardrail pass rate from 71% to 96% over four rounds.",
    ],
    link: "https://github.com/AnvayP1998/ClinicalConversation",
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
  "Languages": ["Python", "C#", "Go", "JavaScript", "TypeScript", "SQL"],
  "Backend": [".NET", "ASP.NET Core", "Node.js", "REST APIs", "GraphQL"],
  "Frontend": ["React", "Next.js", "Redux", "HTML", "CSS"],
  "Cloud & DevOps": ["AWS", "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Git", "Linux", "CI/CD"],
  "Data & Messaging": ["PostgreSQL", "Oracle", "SQL Server", "MongoDB", "Redis", "Kafka", "RabbitMQ"],
  "AI & Engineering": ["RAG", "LLM Integration", "LangSmith", "Embeddings", "Vector Search", "Microservices", "Distributed Systems", "API Design", "OAuth 2.0", "JWT", "RBAC", "OpenTelemetry", "Grafana", "Jest", "Postman", "pytest"],
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
              Software Engineer building backend and full-stack systems, with recent work in LLMs and RAG.
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-700/80 dark:text-slate-200/70 max-w-2xl">
              5+ years of experience developing backend and full-stack applications across financial services, healthcare, and retail products. Experienced with C#/.NET, Python, React, JavaScript, Node.js, AWS, Kubernetes, PostgreSQL, REST APIs, and distributed systems, with recent work integrating LLMs, RAG, embeddings, and retrieval workflows into production applications. MS-CS, GWU (May 2026).
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm shadow-sm ring-1 ring-black/5 dark:ring-white/10
                bg-white/40 dark:bg-white/5 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="text-slate-900 dark:text-white">Available now</span>
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
            </div>
          </div>

          {/* Metrics */}
          <div className="lg:col-span-4">
            <div className="grid gap-3">
              <Metric title="5+ Years" desc="Backend and full-stack engineering across FinTech, healthcare, and retail" />
              <Metric title="2,000+" desc="Transactions/sec processed by order-lifecycle services at Phillip Capital" />
              <Metric title="700K+" desc="Documents indexed by RAG pipelines built at Walmart" />
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
            I’m Anvay Paralikar, a Software Engineer with 5+ years of experience building backend and full-stack
            applications across financial services, healthcare, and retail. My core experience is in C#/.NET, Python,
            React, JavaScript, Node.js, AWS, Kubernetes, PostgreSQL, REST APIs, and distributed systems, and I enjoy
            working on systems where performance, reliability, and maintainability matter — from high-throughput
            transaction processing and API design to production applications serving large datasets and user bases.
            I hold an MS in Computer Science from George Washington University (May 2026), and I'm particularly
            interested in the intersection of software engineering and AI: building practical LLM
            applications, RAG systems, retrieval pipelines, and reliable backend infrastructure that solve real
            problems.
          </p>
        </Card>
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
                <a className="underline underline-offset-4 hover:text-slate-900 dark:hover:text-white" href="mailto:anvayparalikar08@gmail.com">
                  anvayparalikar08@gmail.com
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
