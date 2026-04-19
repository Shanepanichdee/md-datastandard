export default function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-serif text-gold text-sm mb-1">The Architecture of Trust</p>
          <p className="font-mono text-xs text-dim">Data Standards &amp; Enterprise Governance Compendium</p>
        </div>
        <div className="flex items-center gap-6">
          <span className="font-mono text-xs text-dim">9 sources · 16 entities · 4 topics</span>
          <span className="font-mono text-xs text-dim">Last updated 2026-04-19</span>
        </div>
      </div>
    </footer>
  )
}
