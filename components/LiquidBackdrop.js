export default function LiquidBackdrop() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-slate-950 dark:from-black dark:via-black dark:to-slate-950" />

      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full blur-3xl opacity-30">
        <div className="w-full h-full bg-gradient-to-br from-sky-500 to-cyan-400" />
      </div>

      <div className="absolute top-1/3 -right-40 w-[520px] h-[520px] rounded-full blur-3xl opacity-25">
        <div className="w-full h-full bg-gradient-to-br from-blue-500 to-cyan-500" />
      </div>

      <div
        className="absolute inset-0 mix-blend-overlay pointer-events-none"
        style={{
          opacity: "var(--noise-opacity)",
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
          backgroundRepeat: "repeat"
        }}
      />
    </div>
  );
}
