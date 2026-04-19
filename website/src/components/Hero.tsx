export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Ambient blobs */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-[0.07] animate-drift1"
        style={{
          background: 'radial-gradient(circle, #C9A84C 0%, transparent 70%)',
          top: '-10%', left: '-10%',
        }}
      />
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-[0.06] animate-drift2"
        style={{
          background: 'radial-gradient(circle, #3ECFBE 0%, transparent 70%)',
          bottom: '-5%', right: '-5%',
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full opacity-[0.04]"
        style={{
          background: 'radial-gradient(circle, #9B8FD4 0%, transparent 70%)',
          top: '30%', right: '20%',
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 text-center max-w-4xl">
        <p className="font-mono text-xs tracking-[0.3em] text-gold uppercase mb-8 opacity-80">
          Research Compendium · 2026
        </p>

        <h1 className="font-serif leading-tight mb-6" style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)' }}>
          <span className="block text-ink">The Architecture</span>
          <span className="block" style={{ color: '#C9A84C' }}>of Trust</span>
        </h1>

        <p className="font-body text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed mb-12" style={{ fontWeight: 300 }}>
          A living compendium on enterprise data standards, governance frameworks,
          and the technical enforcement mechanisms that make organizational trust computable.
        </p>

        <div className="flex items-center justify-center gap-8 mb-16 flex-wrap">
          {[
            { n: '9', label: 'Sources' },
            { n: '16', label: 'Entities' },
            { n: '4', label: 'Topics' },
            { n: '5', label: 'Dimensions' },
          ].map(({ n, label }) => (
            <div key={label} className="text-center">
              <div className="font-serif text-4xl text-gold mb-1">{n}</div>
              <div className="font-mono text-xs text-muted tracking-widest uppercase">{label}</div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-3 flex-wrap">
          {['Semantic', 'Structural', 'Quality', 'Security', 'Interoperability'].map(d => (
            <span key={d} className="tag" style={{ background: 'rgba(201,168,76,0.1)', color: '#C9A84C', border: '1px solid rgba(201,168,76,0.25)' }}>
              {d}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-mono text-[10px] text-dim tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-10 animate-pulse2 origin-top" style={{ background: 'linear-gradient(to bottom, #C9A84C, transparent)' }} />
      </div>
    </section>
  )
}
