const groups = [
  { title: "Languages", items: ["C++", "Rust", "Python", "C#", "JavaScript/TypeScript", "SQL"] },
  { title: "Frameworks", items: ["FastAPI", ".NET Core", "React", "Node.js"] },
  { title: "Cloud & Infra", items: ["Azure", "AWS", "Docker", "Kubernetes", "CI/CD"] },
  { title: "Systems & Data", items: ["Low-latency systems", "Kafka", "Redis", "Observability"] }
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
