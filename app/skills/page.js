const groups = [
  { title: "Languages & Fundamentals", items: ["Java", "Python", "JavaScript", "TypeScript", "SQL", "OOP", "DSA"] },
  { title: "Backend & Frontend", items: ["Spring Boot", "FastAPI", "Node.js", "REST APIs", "Microservices", "React", "Angular", "Bash"] },
  { title: "AI & GenAI", items: ["LLMs", "RAG", "LangChain", "LangGraph", "MCP", "AI Agents", "Prompt Engineering", "Hugging Face"] },
  { title: "ML & Retrieval", items: ["Embeddings", "Vector Databases", "Semantic Search", "Hybrid Search", "LLM Evaluation"] },
  { title: "Databases & Messaging", items: ["PostgreSQL", "MongoDB", "Oracle", "Redis", "Kafka", "Qdrant", "MySQL"] },
  { title: "Cloud & DevOps", items: ["AWS", "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Terraform", "CI/CD", "Linux"] },
  { title: "Monitoring & Testing", items: ["OpenTelemetry", "Prometheus", "Grafana", "JUnit", "Mockito", "PyTest"] },
  { title: "Architecture & Engineering", items: ["System Design", "Distributed Systems", "Event-Driven Architecture", "Design Patterns"] },
];

export default function SkillsPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-8">Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {groups.map((g) => (
          <div key={g.title} className="glass rounded-3xl p-8">
            <h2 className="text-2xl font-semibold mb-4">{g.title}</h2>
            <div className="flex flex-wrap gap-2">
              {g.items.map((x) => (
                <span key={x} className="px-3 py-1.5 text-sm rounded-full bg-white/5 border border-white/10">
                  {x}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
