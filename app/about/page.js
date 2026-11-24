export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">About</h1>
      <div className="glass rounded-3xl p-8">
        <p className="text-muted-foreground leading-relaxed">
          I’m Anvay Paralikar, a Software Engineer with 5+ years of experience building scalable distributed systems,
          cloud-based applications, and AI-powered software across financial services, healthcare, and retail. My core
          experience is in Java, Python, Spring Boot, FastAPI, React, Angular, AWS, Kubernetes, Kafka, PostgreSQL,
          microservices, and event-driven architecture.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          I have graduated with an M.S. in Computer Science at George Washington University (May 2026), and I’m
          particularly interested in the intersection of software engineering and AI — building practical LLM
          applications, RAG systems, retrieval pipelines, and reliable backend infrastructure that solve real
          problems.
        </p>
      </div>
    </div>
  );
}
