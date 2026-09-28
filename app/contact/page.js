export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">Contact</h1>
      <div className="glass rounded-3xl p-8 space-y-4">
        <p className="text-muted-foreground">
          Reach out for roles, collaborations, or project discussions.
        </p>
        <div className="space-y-2">
          <a className="block glass glass-hover rounded-2xl px-5 py-4" href="mailto:anvayparalikar08@gmail.com">
            Email: anvayparalikar08@gmail.com
          </a>
          <a className="block glass glass-hover rounded-2xl px-5 py-4" href="https://github.com/AnvayP1998" target="_blank">
            GitHub: AnvayP1998 ↗
          </a>
          <a className="block glass glass-hover rounded-2xl px-5 py-4" href="https://linkedin.com/in/anvayparalikar" target="_blank">
            LinkedIn: linkedin.com/in/anvayparalikar ↗
          </a>
          <a className="block glass glass-hover rounded-2xl px-5 py-4" href="tel:+15714570595">
            Phone: +1 (571) 457-0595
          </a>
        </div>
      </div>
    </div>
  );
}
