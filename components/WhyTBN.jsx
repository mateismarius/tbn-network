'use client'

const accent = '#A3E635'
const surface = '#0B1220'
const border = 'rgba(163,230,53,0.12)'
const textPrimary = '#F1F5F9'
const textSecondary = '#94A3B8'

const REASONS = [
  { num: '01', title: 'UK-headquartered', text: 'All data stays within UK and EU jurisdictions. Our engineers hold BPSS and SC clearance.' },
  { num: '02', title: 'Sector expertise', text: 'Transport, fintech, public sector, and critical national infrastructure — we know the compliance landscape.' },
  { num: '03', title: 'No lock-in', text: 'Open standards, documented runbooks, and full knowledge transfer. You own your infrastructure.' },
  { num: '04', title: 'Engineers, not sales', text: 'Every engagement starts with a technical discovery. We solve problems before we propose solutions.' },
]

export default function WhyTBN() {
  return (
    <section id="about" className="section-pad">
      <div className="container">
        <span style={{ fontFamily: 'monospace', fontSize: 11, color: accent, letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: 12 }}>
          // Why TBN Network
        </span>
        <div className="why-grid">
          <div>
            <h2 style={{ fontFamily: 'var(--font-exo2), sans-serif', fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 700, color: textPrimary, marginBottom: 20, letterSpacing: '-0.02em' }}>
              Built for the UK market.<br />Operated to UK standards.
            </h2>
            <p style={{ color: textSecondary, fontSize: 16, lineHeight: 1.8, marginBottom: 28 }}>
              TBN Network was founded by engineers who&apos;ve worked across UK critical infrastructure, financial services, and government. We understand the regulatory environment, the talent landscape, and what it takes to deliver on tight SLAs.
            </p>
            <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: 8, padding: '20px 24px', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ marginTop: 2, flexShrink: 0 }}>
                <path d="M10 2L12.4 7.5L18 8.2L14 12L15.1 17.5L10 14.8L4.9 17.5L6 12L2 8.2L7.6 7.5L10 2Z" stroke="#A3E635" strokeWidth="1.5" strokeLinejoin="round" />
              </svg>
              <div>
                <div style={{ fontFamily: 'var(--font-exo2), sans-serif', fontWeight: 700, fontSize: 14, color: textPrimary, marginBottom: 4 }}>
                  UK Crown Commercial Service aligned
                </div>
                <div style={{ fontSize: 13, color: '#475569', lineHeight: 1.6 }}>
                  Procurement-ready for public sector frameworks. All engineers DBS-checked and UK-resident.
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {REASONS.map((r) => (
              <div key={r.num}
                style={{ display: 'flex', gap: 18, padding: '22px', background: surface, borderRadius: 8, border: `1px solid ${border}`, transition: 'border-color 0.2s', cursor: 'default' }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(163,230,53,0.35)')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = border)}
              >
                <span style={{ fontFamily: 'monospace', fontSize: 13, color: accent, fontWeight: 700, flexShrink: 0, marginTop: 2 }}>{r.num}</span>
                <div>
                  <div style={{ fontFamily: 'var(--font-exo2), sans-serif', fontWeight: 700, fontSize: 15, color: textPrimary, marginBottom: 5 }}>{r.title}</div>
                  <div style={{ fontSize: 13.5, color: textSecondary, lineHeight: 1.7 }}>{r.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
