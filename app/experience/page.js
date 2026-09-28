export default function ExperiencePage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-8">Experience</h1>

      <div className="glass rounded-3xl p-8 mb-6">
        <h2 className="text-2xl font-semibold">Software Engineer (Contract) — Walmart</h2>
        <p className="text-muted-foreground mt-1">Jan 2026 – Present</p>
        <ul className="list-disc pl-5 mt-4 space-y-2 text-muted-foreground">
          <li>Developed React and Next.js features for Walmart's associate support application, including conversational search, AI summaries, and source references.</li>
          <li>Extended Node.js BFF services connecting the associate application with internal APIs and AI services across 6+ backend services.</li>
          <li>Built Python services for RAG data preparation across 700K+ indexed documents.</li>
          <li>Investigated production failures across AI requests and web services, resolving 30+ incidents in the Python and C# codebases.</li>
        </ul>
      </div>

      <div className="glass rounded-3xl p-8 mb-6">
        <h2 className="text-2xl font-semibold">Software Engineer II — Phillip Capital</h2>
        <p className="text-muted-foreground mt-1">Apr 2021 – Jul 2024</p>
        <ul className="list-disc pl-5 mt-4 space-y-2 text-muted-foreground">
          <li>Developed C#/.NET services for the order lifecycle, processing 2,000+ NSE/BSE transactions per second.</li>
          <li>Tuned PostgreSQL and Entity Framework data access, bringing 20+ frequently used queries below 200ms.</li>
          <li>Introduced Redis caching and RabbitMQ-based reconciliation, cutting daily reconciliation from 45 to 12 minutes.</li>
          <li>Led development of React interfaces for order status and portfolio positions, mentoring 2 junior engineers.</li>
        </ul>
      </div>

      <div className="glass rounded-3xl p-8 mb-6">
        <h2 className="text-2xl font-semibold">Software Engineer — Accenture</h2>
        <p className="text-muted-foreground mt-1">Apr 2020 – Mar 2021</p>
        <ul className="list-disc pl-5 mt-4 space-y-2 text-muted-foreground">
          <li>Enhanced patient onboarding and appointment workflows using C# REST APIs, JWT authentication, and RBAC.</li>
          <li>Developed reusable React components for patient registration and appointment search.</li>
          <li>Integrated EHR, prescription, and lab systems with Python and FastAPI, eliminating ~20 hours of manual work monthly.</li>
        </ul>
      </div>

      <div className="glass rounded-3xl p-8">
        <h2 className="text-2xl font-semibold">Graduate Work — George Washington University</h2>
        <p className="text-muted-foreground mt-1">Aug 2024 – May 2026</p>
        <p className="text-muted-foreground mt-4">
          Master of Science in Computer Science, GPA 3.68. Coursework: Cloud Computing, Database Systems, Computer
          System Architecture, Machine Learning, Computer Algorithms, Artificial Intelligence.
        </p>
      </div>
    </div>
  );
}
