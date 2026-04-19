'use client'
import { useEffect, useState } from 'react'

const links = [
  { href: '#overview',    label: 'Overview' },
  { href: '#dimensions',  label: 'Dimensions' },
  { href: '#governance',  label: 'Governance' },
  { href: '#technical',   label: 'Technical' },
  { href: '#tools',       label: 'Tools' },
  { href: '#sources',     label: 'Sources' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled ? 'bg-[#070710]/90 backdrop-blur-md border-b border-white/5' : ''
    }`}>
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="font-serif text-gold text-sm tracking-widest uppercase">
          Data Standards
        </span>
        <ul className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-xs tracking-wider text-muted uppercase hover:text-gold transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
