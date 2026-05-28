'use client'

const accent = '#A3E635'
const bg = '#060D1A'
const border = 'rgba(163,230,53,0.13)'
const textPrimary = '#F1F5F9'

const TECH = [
  { name: 'Kubernetes', style: 'acc' },
  { name: 'Terraform', style: 'mid' },
  { name: 'Ansible', style: 'dim' },
  { name: 'Jenkins', style: 'acc' },
  { name: 'GitLab CI', style: 'mid' },
  { name: 'AWS', style: 'dim' },
  { name: 'Azure', style: 'mid' },
  { name: 'GCP', style: 'acc' },
  { name: 'Docker', style: 'dim' },
  { name: 'Helm', style: 'mid' },
  { name: 'Grafana', style: 'acc' },
  { name: 'Prometheus', style: 'mid' },
  { name: 'Elasticsearch', style: 'dim' },
  { name: 'Vault', style: 'acc' },
  { name: 'Istio', style: 'mid' },
  { name: 'Cisco', style: 'dim' },
  { name: 'Fortinet', style: 'mid' },
  { name: 'Palo Alto', style: 'acc' },
  { name: 'Juniper', style: 'dim' },
  { name: 'Arista', style: 'mid' },
]

export default function Technology() {
  return (
    <section
      id="technology"
      style={{
        padding: '96px 24px',
        background: '#0B1220',
        borderTop: '1px solid rgba(163,230,53,0.1)',
        borderBottom: '1px solid rgba(163,230,53,0.1)',
      }}
    >
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <span
          style={{
            fontFamily: 'monospace',
            fontSize: 11,
            color: accent,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: 12,
          }}
        >
          // Technology stack
        </span>
        <h2
          style={{
            fontFamily: 'var(--font-exo2), sans-serif',
            fontSize: 'clamp(26px, 4vw, 40px)',
            fontWeight: 700,
            color: textPrimary,
            marginBottom: 44,
            letterSpacing: '-0.02em',
          }}
        >
          Built on tools that scale
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 9 }}>
          {TECH.map((t) => {
            const color =
              t.style === 'acc' ? accent : t.style === 'mid' ? textPrimary : '#475569'
            return (
              <span
                key={t.name}
                style={{
                  fontFamily: 'monospace',
                  fontSize: 13,
                  color,
                  background: bg,
                  border: `1px solid ${border}`,
                  padding: '8px 15px',
                  borderRadius: 4,
                  transition: 'all 0.2s',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = accent
                  e.currentTarget.style.borderColor = 'rgba(163,230,53,0.4)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = color
                  e.currentTarget.style.borderColor = border
                }}
              >
                {t.name}
              </span>
            )
          })}
        </div>
      </div>
    </section>
  )
}
