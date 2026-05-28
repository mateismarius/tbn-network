'use client'

import { useState, useEffect } from 'react'
import Logo from './Logo'

const NAV_LINKS = ['Services', 'Solutions', 'Technology', 'About']

const border = 'rgba(163,230,53,0.15)'
const accent = '#A3E635'
const textSecondary = '#94A3B8'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '0 24px',
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(6,13,26,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? `1px solid ${border}` : '1px solid transparent',
      }}
    >
      <div
        style={{
          maxWidth: 1160,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          height: 68,
        }}
      >
        <Logo />
        <div style={{ flex: 1 }} />
        <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
          {NAV_LINKS.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              style={{ color: textSecondary, fontSize: 14, fontWeight: 500 }}
              onMouseEnter={(e) => (e.target.style.color = accent)}
              onMouseLeave={(e) => (e.target.style.color = textSecondary)}
            >
              {l}
            </a>
          ))}
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              background: 'transparent',
              border: `1px solid ${accent}`,
              color: accent,
              padding: '8px 20px',
              borderRadius: 4,
              fontSize: 13,
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: 'monospace',
              letterSpacing: '0.05em',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.target.style.background = accent
              e.target.style.color = '#060D1A'
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent'
              e.target.style.color = accent
            }}
          >
            Get in touch
          </button>
        </div>
      </div>
    </nav>
  )
}
