export default function ExperiencePage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-8">Experience</h1>

      <div className="glass rounded-3xl p-8 mb-6">
        <h2 className="text-2xl font-semibold">Software Engineer — Walmart Global Tech</h2>
        <p className="text-muted-foreground mt-1">Jan 2026 – Present</p>
        <ul className="list-disc pl-5 mt-4 space-y-2 text-muted-foreground">
          <li>Contributed to backend development for Sparky, Walmart's AI-powered shopping assistant, enabling conversational product discovery, review summarization, and personalized recommendations.</li>
          <li>Architected Java 17 and Spring Boot microservices connecting LLM workflows with product catalog, pricing, availability, and customer-context services.</li>
          <li>Engineered Python retrieval pipelines with hybrid search and reranking, improving top-five retrieval relevance by 18%.</li>
          <li>Orchestrated AI agents and tool-calling workflows using LangGraph and MCP, reducing multi-step request completion time by 20%.</li>
          <li>Reduced unnecessary model calls by 15% and p95 latency by 250 ms through LLM evaluation, grounding checks, and Redis caching.</li>
        </ul>
      </div>

      <div className="glass rounded-3xl p-8 mb-6">
        <h2 className="text-2xl font-semibold">Software Engineer II — Phillip Capital</h2>
        <p className="text-muted-foreground mt-1">Apr 2021 – Jul 2024</p>
        <ul className="list-disc pl-5 mt-4 space-y-2 text-muted-foreground">
          <li>Developed components of a futures trading and clearing platform using Java 11, Spring Boot, and microservices.</li>
          <li>Accelerated trade processing throughput 2x with Kafka event-driven workflows and Redis caching, cutting inter-service latency by 180 ms.</li>
          <li>Automated pre-trade risk validation and margin calculation, reducing manual risk-review effort by 35%.</li>
          <li>Streamlined trade reconciliation from 45 to 12 minutes with Java-based matching services on Oracle and PostgreSQL.</li>
          <li>Reduced annual infrastructure costs by ~$25K across 12+ microservices using AWS, Docker, Kubernetes, Jenkins, and Terraform.</li>
        </ul>
      </div>

      <div className="glass rounded-3xl p-8 mb-6">
        <h2 className="text-2xl font-semibold">Software Engineer — Accenture</h2>
        <p className="text-muted-foreground mt-1">Apr 2020 – Mar 2021</p>
        <ul className="list-disc pl-5 mt-4 space-y-2 text-muted-foreground">
          <li>Designed high-throughput RESTful microservices using Python FastAPI and Pydantic, boosting API query throughput by 15%.</li>
          <li>Developed reusable React components for patient registration, appointment search, and provider availability, keeping page loads under 2 seconds.</li>
          <li>Fine-tuned Transformer models on medical billing sheets with PyTorch and Hugging Face, improving classification accuracy by 25%.</li>
          <li>Engineered a Redis caching layer for a Node.js backend, cutting average API latency from 5s to under 220ms (95.6% improvement).</li>
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
