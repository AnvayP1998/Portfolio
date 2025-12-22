export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">About</h1>
      <div className="glass rounded-3xl p-8">
        <p className="text-muted-foreground leading-relaxed">
          I’m Anvay Paralikar, a software engineer with experience building low-latency trading systems and
          scalable cloud applications. I’m currently pursuing an M.S. in Computer Science at George Washington
          University, where I’m working on systems + AI projects focused on performance, reliability, and
          real-world impact.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          I enjoy designing clean architectures, optimizing performance bottlenecks, and building products
          that are measurable in speed, stability, and usability.
        </p>
      </div>
    </div>
  );
}
