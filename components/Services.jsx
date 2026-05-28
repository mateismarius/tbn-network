'use client'

const accent = '#A3E635'
const bg = '#060D1A'
const surface = '#0B1220'
const textPrimary = '#F1F5F9'
const textSecondary = '#94A3B8'

const SERVICES = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="3" width="9" height="9" rx="2" stroke="#A3E635" strokeWidth="1.5" />
        <rect x="16" y="3" width="9" height="9" rx="2" stroke="#A3E635" strokeWidth="1.5" />
        <rect x="3" y="16" width="9" height="9" rx="2" stroke="#A3E635" strokeWidth="1.5" />
        <rect x="16" y="16" width="9" height="9" rx="2" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.35" />
        <path d="M12 7.5H16M12 20.5H16M20.5 12V16" stroke="#A3E635" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'DevOps Engineering',
    desc: 'CI/CD pipelines, infrastructure as code, container orchestration. We embed DevOps culture across your delivery teams.',
    tags: ['Kubernetes', 'Terraform', 'GitOps', 'ArgoCD'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4C14 4 6 7 6 14C6 18.4 9.6 22 14 22C18.4 22 22 18.4 22 14C22 7 14 4 14 4Z" stroke="#A3E635" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M6 14H22M14 4C14 4 10 9 10 14C10 19 14 22 14 22M14 4C14 4 18 9 18 14C18 19 14 22 14 22" stroke="#A3E635" strokeWidth="1.5" />
      </svg>
    ),
    title: 'Cloud Infrastructure',
    desc: 'AWS, Azure, and GCP architecture design, cost optimisation, and migration. Multi-cloud strategies built for scale.',
    tags: ['AWS', 'Azure', 'GCP', 'FinOps'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="3" stroke="#A3E635" strokeWidth="1.5" />
        <circle cx="5" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.45" />
        <circle cx="23" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.45" />
        <circle cx="5" cy="20" r="2.5" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.45" />
        <circle cx="23" cy="20" r="2.5" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.45" />
        <path d="M11 13L7.5 9.5M17 13L20.5 9.5M11 15L7.5 18.5M17 15L20.5 18.5" stroke="#A3E635" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Network Architecture',
    desc: 'Enterprise LAN/WAN design, SD-WAN deployment, and structured cabling. From data centres to distributed branch offices.',
    tags: ['SD-WAN', 'BGP', 'MPLS', 'VPN'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3L24 8V14C24 18.97 19.52 23.56 14 25C8.48 23.56 4 18.97 4 14V8L14 3Z" stroke="#A3E635" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M10 14L12.5 16.5L18 11" stroke="#A3E635" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Security & Compliance',
    desc: 'Zero-trust implementation, SIEM deployment, and ISO 27001 alignment. UK GDPR-ready infrastructure by design.',
    tags: ['Zero Trust', 'SIEM', 'ISO 27001', 'GDPR'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="10" width="22" height="12" rx="2" stroke="#A3E635" strokeWidth="1.5" />
        <path d="M8 10V7C8 5.34 9.34 4 11 4H17C18.66 4 20 5.34 20 7V10" stroke="#A3E635" strokeWidth="1.5" />
        <circle cx="14" cy="16" r="2" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4" />
      </svg>
    ),
    title: 'Managed Services',
    desc: '24/7 NOC monitoring, incident response, and SLA-backed support. Proactive management so you focus on your business.',
    tags: ['NOC 24/7', 'SLA', 'ITIL', 'Monitoring'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="7" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.25" />
        <path d="M9 14C9 14 10.5 10 14 10C17.5 10 19 14 19 14C19 14 17.5 18 14 18C10.5 18 9 14 9 14Z" stroke="#A3E635" strokeWidth="1.5" />
        <circle cx="14" cy="14" r="2" fill="#A3E635" />
      </svg>
    ),
    title: 'Observability & AIOps',
    desc: 'Full-stack observability with intelligent alerting. Metrics, logs, and traces unified into actionable intelligence.',
    tags: ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog'],
  },
]

export default function Services() {
  return (
    <section id="services" className="section-pad">
      <div className="container">
        <span style={{ fontFamily: 'monospace', fontSize: 11, color: accent, letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: 12 }}>
          // What we do
        </span>
        <h2 style={{ fontFamily: 'var(--font-exo2), sans-serif', fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 700, color: textPrimary, marginBottom: 16, letterSpacing: '-0.02em' }}>
          End-to-end infrastructure services
        </h2>
        <p style={{ color: textSecondary, fontSize: 16, maxWidth: 500, marginBottom: 52, lineHeight: 1.8 }}>
          We don&apos;t sell products. We solve engineering problems — from your first pipeline to your most complex multi-region deployment.
        </p>
        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <div
              key={i}
              style={{ background: bg, padding: '32px 28px', transition: 'background 0.2s', cursor: 'default' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = surface)}
              onMouseLeave={(e) => (e.currentTarget.style.background = bg)}
            >
              <div style={{ marginBottom: 16 }}>{s.icon}</div>
              <h3 style={{ fontFamily: 'var(--font-exo2), sans-serif', fontSize: 17, fontWeight: 700, color: textPrimary, marginBottom: 10 }}>
                {s.title}
              </h3>
              <p style={{ fontSize: 13.5, color: textSecondary, lineHeight: 1.75, marginBottom: 18 }}>{s.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                {s.tags.map((t) => (
                  <span key={t} style={{ fontFamily: 'monospace', fontSize: 11, color: accent, background: 'rgba(163,230,53,0.06)', border: '1px solid rgba(163,230,53,0.2)', padding: '3px 8px', borderRadius: 3 }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
