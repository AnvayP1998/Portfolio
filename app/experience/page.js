export default function ExperiencePage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-8">Experience</h1>

      <div className="glass rounded-3xl p-8 mb-6">
        <h2 className="text-2xl font-semibold">Software Engineer — Phillip Capital India Pvt Ltd</h2>
        <p className="text-muted-foreground mt-1">Aug 2021 – Jul 2024</p>
        <ul className="list-disc pl-5 mt-4 space-y-2 text-muted-foreground">
          <li>Improved throughput by 35% and reduced p99 latency by 30% in Azure-based fixed income trading systems.</li>
          <li>Reduced SQL query execution time by 40% by refactoring stored procedures and optimizing data access.</li>
          <li>Built real-time dashboards improving engagement by 15% for HNI users.</li>
          <li>Optimized low-latency C++/JS trading pipelines cutting tick-to-trade by ~30%.</li>
        </ul>
      </div>

      <div className="glass rounded-3xl p-8">
        <h2 className="text-2xl font-semibold">Graduate Work — George Washington University</h2>
        <p className="text-muted-foreground mt-1">Aug 2024 – May 2026</p>
        <p className="text-muted-foreground mt-4">
          Systems, AI/ML, databases, and distributed projects with emphasis on correctness and performance.
        </p>
      </div>
    </div>
  );
}
