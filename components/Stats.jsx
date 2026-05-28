const STATS = [
  { val: '99.97%', label: 'Uptime SLA' },
  { val: '< 15min', label: 'Incident Response' },
  { val: '200+', label: 'Deployments / Month' },
  { val: '£0', label: 'Compliance Fines' },
]

const border = 'rgba(163,230,53,0.12)'
const accent = '#A3E635'

export default function Stats() {
  return (
    <div
      style={{
        background: '#0B1220',
        borderTop: `1px solid ${border}`,
        borderBottom: `1px solid ${border}`,
      }}
    >
      <div
        style={{
          maxWidth: 1160,
          margin: '0 auto',
          padding: '0 24px',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
        }}
      >
        {STATS.map((s, i) => (
          <div
            key={i}
            style={{
              padding: '32px 24px',
              textAlign: 'center',
              borderRight: i < STATS.length - 1 ? `1px solid ${border}` : 'none',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-exo2), sans-serif',
                fontSize: 34,
                fontWeight: 800,
                color: accent,
                lineHeight: 1,
              }}
            >
              {s.val}
            </div>
            <div
              style={{
                fontSize: 12,
                color: '#475569',
                marginTop: 6,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
