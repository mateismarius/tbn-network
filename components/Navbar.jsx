'use client'

import { useState, useEffect } from 'react'
import Logo from './Logo'

const NAV_LINKS = ['Services', 'Technology', 'About']
const border = 'rgba(163,230,53,0.15)'
const accent = '#A3E635'
const textSecondary = '#94A3B8'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        transition: 'all 0.3s ease',
        background: scrolled || menuOpen ? 'rgba(6,13,26,0.97)' : 'transparent',
        backdropFilter: scrolled || menuOpen ? 'blur(12px)' : 'none',
        borderBottom: scrolled || menuOpen ? `1px solid ${border}` : '1px solid transparent',
      }}
    >
      <div className="nav-inner" style={{ padding: '0 24px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', display: 'flex', alignItems: 'center', height: 68, width: '100%' }}>
          <Logo />
          <div style={{ flex: 1 }} />

          {/* Desktop links */}
          <div className="nav-desktop-links">
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
              onClick={() => scrollTo('contact')}
              style={{
                background: 'transparent', border: `1px solid ${accent}`, color: accent,
                padding: '8px 20px', borderRadius: 4, fontSize: 13, fontWeight: 600,
                cursor: 'pointer', fontFamily: 'monospace', letterSpacing: '0.05em', transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => { e.target.style.background = accent; e.target.style.color = '#060D1A' }}
              onMouseLeave={(e) => { e.target.style.background = 'transparent'; e.target.style.color = accent }}
            >
              Get in touch
            </button>
          </div>

          {/* Hamburger */}
          <button
            className={`nav-hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`nav-mobile-menu${menuOpen ? ' open' : ''}`} style={{ padding: '12px 24px 20px' }}>
        {NAV_LINKS.map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            className="nav-mobile-link"
            onClick={() => { setMenuOpen(false) }}
          >
            {l}
          </a>
        ))}
        <button
          onClick={() => scrollTo('contact')}
          style={{
            marginTop: 12, background: accent, color: '#060D1A', border: 'none',
            padding: '12px 24px', borderRadius: 4, fontSize: 14, fontWeight: 700,
            cursor: 'pointer', fontFamily: 'monospace', letterSpacing: '0.05em',
            width: '100%', transition: 'all 0.2s',
          }}
        >
          Get in touch
        </button>
      </div>
    </nav>
  )
}
