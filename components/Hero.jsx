'use client'

import { useState, useEffect } from 'react'

const accent = '#A3E635'
const textPrimary = '#F1F5F9'
const textSecondary = '#94A3B8'
const surface = '#0B1220'
const border = 'rgba(163,230,53,0.18)'

const TERMINAL_LINES = [
  { text: 'kubectl get nodes --all-namespaces', delay: 500 },
  { text: '✓ 12/12 nodes Running', delay: 1000, type: 'ok' },
  { text: 'terraform apply --auto-approve', delay: 1600 },
  { text: '✓ Apply complete. 48 resources added', delay: 2100, type: 'ok' },
  { text: 'uptime --check-sla 99.97', delay: 2700 },
  { text: '✓ SLA maintained · 847 days', delay: 3200, type: 'accent' },
]

function TerminalLine({ line }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), line.delay)
    return () => clearTimeout(t)
  }, [line.delay])

  const color =
    line.type === 'ok' ? '#22C55E' : line.type === 'accent' ? accent : '#64748B'

  return (
    <div
      style={{
        fontFamily: 'monospace',
        fontSize: 12.5,
        color: '#64748B',
        marginBottom: 5,
        display: 'flex',
        gap: 8,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateX(0)' : 'translateX(-8px)',
        transition: 'all 0.4s ease',
      }}
    >
      <span style={{ color: accent, flexShrink: 0 }}>›</span>
      <span style={{ color }}>{line.text}</span>
    </div>
  )
}

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '120px 24px 80px',
      }}
    >
      {/* Grid background */}
      <svg
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          opacity: 0.055,
          pointerEvents: 'none',
        }}
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#A3E635" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Glow orb */}
      <div
        style={{
          position: 'absolute',
          top: '15%',
          right: '8%',
          width: 420,
          height: 420,
          background: 'radial-gradient(circle, rgba(163,230,53,0.07) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: 1160,
          margin: '0 auto',
          width: '100%',
          position: 'relative',
          zIndex: 2,
          display: 'grid',
          gridTemplateColumns: '1fr 420px',
          gap: 80,
          alignItems: 'center',
        }}
      >
        <div>
          <span
            style={{
              fontFamily: 'monospace',
              fontSize: 11,
              color: accent,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: 18,
            }}
          >
            // TBN Network — United Kingdom
          </span>

          <h1
            style={{
              fontFamily: 'var(--font-exo2), sans-serif',
              fontSize: 'clamp(38px, 5.5vw, 68px)',
              fontWeight: 800,
              lineHeight: 1.06,
              letterSpacing: '-0.03em',
              marginBottom: 24,
              color: textPrimary,
            }}
          >
            Infrastructure that
            <br />
            <span style={{ color: accent }}>never sleeps.</span>
          </h1>

          <p
            style={{
              fontSize: 17,
              color: textSecondary,
              lineHeight: 1.8,
              maxWidth: 520,
              marginBottom: 44,
            }}
          >
            DevOps engineering and enterprise networking for UK businesses that cannot afford
            downtime. From cloud to cable — we design, build, and operate your critical
            infrastructure.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                background: accent,
                color: '#060D1A',
                border: 'none',
                padding: '14px 32px',
                borderRadius: 4,
                fontSize: 15,
                fontWeight: 700,
                cursor: 'pointer',
                fontFamily: 'var(--font-exo2), sans-serif',
                letterSpacing: '0.02em',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => (e.target.style.background = '#BEF264')}
              onMouseLeave={(e) => (e.target.style.background = accent)}
            >
              Start a project →
            </button>
            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                background: 'transparent',
                color: textPrimary,
                border: '1px solid rgba(241,245,249,0.2)',
                padding: '14px 32px',
                borderRadius: 4,
                fontSize: 15,
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => (e.target.style.borderColor = 'rgba(241,245,249,0.5)')}
              onMouseLeave={(e) => (e.target.style.borderColor = 'rgba(241,245,249,0.2)')}
            >
              View our services
            </button>
          </div>
        </div>

        {/* Terminal */}
        <div
          style={{
            background: surface,
            border: `1px solid ${border}`,
            borderRadius: 8,
            padding: '20px 24px',
          }}
        >
          <div style={{ display: 'flex', gap: 6, marginBottom: 16, alignItems: 'center' }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#EF4444', opacity: 0.8 }} />
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#F59E0B', opacity: 0.8 }} />
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#22C55E', opacity: 0.8 }} />
            <span style={{ fontFamily: 'monospace', fontSize: 11, color: '#475569', marginLeft: 8 }}>
              tbn-ops ~ production
            </span>
          </div>
          {TERMINAL_LINES.map((line, i) => (
            <TerminalLine key={i} line={line} />
          ))}
        </div>
      </div>
    </section>
  )
}
