'use client'

import Logo from './Logo'

const border = 'rgba(163,230,53,0.08)'
const accent = '#A3E635'
const textPrimary = '#F1F5F9'

const FOOTER_COLS = [
  {
    title: 'Services',
    links: [
      { label: 'DevOps', action: 'scroll', target: 'services' },
      { label: 'Cloud', action: 'scroll', target: 'services' },
      { label: 'Networking', action: 'scroll', target: 'services' },
      { label: 'Security', action: 'scroll', target: 'services' },
      { label: 'Managed', action: 'scroll', target: 'services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', action: 'scroll', target: 'about' },
      { label: 'Case Studies', action: 'href', target: '#' },
      { label: 'Careers', action: 'href', target: '#' },
      { label: 'Blog', action: 'href', target: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', action: 'href', target: '/privacy' },
      { label: 'Terms', action: 'href', target: '/terms' },
      { label: 'UK GDPR', action: 'href', target: '/gdpr' },
      { label: 'Cookies', action: 'href', target: '/cookies' },
    ],
  },
]

export default function Footer() {
  return (
    <footer
      style={{
        background: '#060D1A',
        padding: '52px 24px 32px',
        borderTop: `1px solid ${border}`,
      }}
    >
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: 40,
            marginBottom: 44,
          }}
        >
          <div>
            <Logo />
            <p
              style={{
                fontSize: 13,
                color: '#475569',
                lineHeight: 1.75,
                marginTop: 16,
                maxWidth: 280,
              }}
            >
              DevOps engineering and enterprise networking. UK-based, security-cleared,
              always-on.
            </p>
          </div>

          <div style={{ display: 'flex', gap: 56, flexWrap: 'wrap' }}>
            {FOOTER_COLS.map((col) => (
              <div key={col.title}>
                <div
                  style={{
                    fontFamily: 'var(--font-exo2), sans-serif',
                    fontWeight: 700,
                    fontSize: 12,
                    color: textPrimary,
                    marginBottom: 16,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                  }}
                >
                  {col.title}
                </div>
                {col.links.map((l) => (
                  <div key={l.label} style={{ marginBottom: 9 }}>
                    <a
                      href={l.action === 'href' ? l.target : undefined}
                      onClick={
                        l.action === 'scroll'
                          ? (e) => {
                              e.preventDefault()
                              document.getElementById(l.target)?.scrollIntoView({ behavior: 'smooth' })
                            }
                          : undefined
                      }
                      style={{
                        fontSize: 13,
                        color: '#475569',
                        transition: 'color 0.2s',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={(e) => (e.target.style.color = '#94A3B8')}
                      onMouseLeave={(e) => (e.target.style.color = '#475569')}
                    >
                      {l.label}
                    </a>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            borderTop: `1px solid rgba(163,230,53,0.07)`,
            paddingTop: 22,
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 10,
          }}
        >
          <span style={{ fontFamily: 'monospace', fontSize: 12, color: '#334155' }}>
            © 2025 TBN Network Ltd · Registered in England &amp; Wales · Company No. 15XXXXXX
          </span>
          <span style={{ fontFamily: 'monospace', fontSize: 12, color: '#334155' }}>
            <span style={{ color: accent }}>●</span> All systems operational
          </span>
        </div>
      </div>
    </footer>
  )
}
