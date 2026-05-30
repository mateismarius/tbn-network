'use client'

const accent = '#A3E635'
const textPrimary = '#F1F5F9'
const textSecondary = '#94A3B8'

export default function CTA() {
  return (
    <section id="contact" className="section-pad-dark"
      style={{ background: '#0B1220', borderTop: '1px solid rgba(163,230,53,0.1)', borderBottom: '1px solid rgba(163,230,53,0.1)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}
    >
      <div style={{ position: 'absolute', top: '-60%', left: '50%', transform: 'translateX(-50%)', width: 600, height: 300, background: 'radial-gradient(ellipse, rgba(163,230,53,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 560, margin: '0 auto', padding: '0 4px' }}>
        <span style={{ fontFamily: 'monospace', fontSize: 11, color: accent, letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: 14 }}>
          // Ready to start?
        </span>
        <h2 style={{ fontFamily: 'var(--font-exo2), sans-serif', fontSize: 'clamp(26px, 4.5vw, 48px)', fontWeight: 700, color: textPrimary, marginBottom: 18, letterSpacing: '-0.02em' }}>
          Let&apos;s talk about your infrastructure
        </h2>
        <p style={{ color: textSecondary, fontSize: 16, lineHeight: 1.8, marginBottom: 36 }}>
          Book a free 45-minute technical discovery call with one of our engineers. No sales decks — just honest conversations about your challenges.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
          <button
            onClick={() => window.location.href = 'mailto:info@tbnnetworkltd.co.uk?subject=Discovery Call Request&body=Hi TBN Network,%0D%0A%0D%0AI would like to book a discovery call to discuss our infrastructure needs.%0D%0A%0D%0ACompany:%0D%0AName:%0D%0AAvailability:'}
            style={{ background: accent, color: '#060D1A', border: 'none', padding: '16px 36px', borderRadius: 4, fontSize: 15, fontWeight: 700, cursor: 'pointer', fontFamily: 'var(--font-exo2), sans-serif', letterSpacing: '0.02em', transition: 'all 0.2s' }}
            onMouseEnter={(e) => (e.target.style.background = '#BEF264')}
            onMouseLeave={(e) => (e.target.style.background = accent)}
          >
            Book a discovery call →
          </button>
          <a href="mailto:info@tbnnetworkltd.co.uk"
            style={{ color: '#64748B', fontFamily: 'monospace', fontSize: 15, transition: 'color 0.2s' }}
            onMouseEnter={(e) => (e.target.style.color = accent)}
            onMouseLeave={(e) => (e.target.style.color = '#64748B')}
          >
            info@tbnnetworkltd.co.uk
          </a>
        </div>
      </div>
    </section>
  )
}
