const STATS = [
  { val: '99.97%', label: 'Uptime SLA' },
  { val: '< 15min', label: 'Incident Response' },
  { val: '200+', label: 'Deployments / Month' },
  { val: '£0', label: 'Compliance Fines' },
]

const accent = '#A3E635'

export default function Stats() {
  return (
    <div style={{ background: '#0B1220', borderTop: '1px solid rgba(163,230,53,0.12)', borderBottom: '1px solid rgba(163,230,53,0.12)' }}>
      <div className="stats-grid">
        {STATS.map((s, i) => (
          <div key={i} className="stat-item">
            <div style={{
              fontFamily: 'var(--font-exo2), sans-serif',
              fontSize: 34, fontWeight: 800, color: accent, lineHeight: 1,
            }}>
              {s.val}
            </div>
            <div style={{ fontSize: 12, color: '#475569', marginTop: 6, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
