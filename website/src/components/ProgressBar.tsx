'use client'
import { useEffect, useState } from 'react'

export default function ProgressBar() {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const scrolled = doc.scrollTop
      const total = doc.scrollHeight - doc.clientHeight
      setPct(total > 0 ? (scrolled / total) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-transparent">
      <div
        className="h-full transition-all duration-75"
        style={{ width: `${pct}%`, background: 'linear-gradient(90deg, #C9A84C, #3ECFBE)' }}
      />
    </div>
  )
}
