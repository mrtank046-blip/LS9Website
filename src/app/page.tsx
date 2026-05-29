export default function LS9Website() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center h-screen px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-black opacity-90" />

        <div className="relative z-10 max-w-4xl">
          <h1 className="text-7xl md:text-9xl font-black tracking-[0.4em] mb-6">
            LS9
          </h1>

          <p className="text-zinc-400 uppercase tracking-[0.3em] text-sm md:text-base mb-10">
            Built For Progression
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition-transform">
              Shop Drop 001
            </button>

            <button className="border border-zinc-700 px-8 py-4 rounded-2xl hover:bg-zinc-900 transition-colors">
              Explore Collection
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 text-zinc-600 tracking-[0.3em] text-xs uppercase animate-pulse">
          LS9 WORLDWIDE
        </div>
      </section>

      {/* Collection Section */}
      <section className="py-28 px-6 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
            <div>
              <p className="text-zinc-500 uppercase tracking-[0.3em] text-sm mb-4">
                Drop 001
              </p>
              <h2 className="text-5xl font-bold">MOTION</h2>
            </div>

            <p className="max-w-md text-zinc-400 leading-relaxed">
              Heavyweight essentials engineered for movement, discipline,
              and modern identity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "Oversized Hoodie",
              "Technical Cargo",
              "Compression Tee",
            ].map((item) => (
              <div
                key={item}
                className="bg-zinc-950 border border-zinc-900 rounded-3xl overflow-hidden hover:-translate-y-2 transition-transform"
              >
                <div className="h-96 bg-gradient-to-b from-zinc-800 to-black" />

                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{item}</h3>
                  <p className="text-zinc-500 uppercase tracking-[0.2em] text-xs">
                    LS9_001
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-32 px-6 border-t border-zinc-900 bg-zinc-950">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-zinc-500 uppercase tracking-[0.3em] text-sm mb-8">
            Philosophy
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-10">
            Movement Over
            <br />
            Attention.
          </h2>

          <p className="text-zinc-400 max-w-2xl mx-auto leading-relaxed text-lg">
            LS9 exists for people building themselves in silence. Minimal
            design. Premium construction. Modern identity.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-900 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-3xl font-black tracking-[0.3em]">LS9</h3>
            <p className="text-zinc-500 text-sm mt-2 uppercase tracking-[0.2em]">
              Future Under Construction
            </p>
          </div>

          <div className="flex gap-6 text-zinc-400 uppercase tracking-[0.2em] text-sm">
            <a href="#">Instagram</a>
            <a href="#">TikTok</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
