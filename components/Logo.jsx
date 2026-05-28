'use client'

export default function Logo({ size = 38, showText = true }) {
  return (
    <a href="/">
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-label="TBN Network logo">
          <polygon
              points="20,4 35,13 35,27 20,36 5,27 5,13"
              fill="#0B1220"
              stroke="#A3E635"
              strokeWidth="1.5"
          />
          <circle cx="20" cy="13" r="2.5" fill="#A3E635" />
          <circle cx="11" cy="24" r="2.5" fill="#A3E635" fillOpacity="0.7" />
          <circle cx="29" cy="24" r="2.5" fill="#A3E635" fillOpacity="0.7" />
          <line x1="20" y1="13" x2="11" y2="24" stroke="#A3E635" strokeWidth="1.2" strokeOpacity="0.55" />
          <line x1="20" y1="13" x2="29" y2="24" stroke="#A3E635" strokeWidth="1.2" strokeOpacity="0.55" />
          <line x1="11" y1="24" x2="29" y2="24" stroke="#A3E635" strokeWidth="1.2" strokeOpacity="0.35" />
          <text
              x="20"
              y="29.5"
              textAnchor="middle"
              fontFamily="monospace"
              fontSize="7"
              fontWeight="700"
              fill="#A3E635"
              letterSpacing="1"
          >
            TBN
          </text>
        </svg>
        {showText && (
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
          <span
              style={{
                fontFamily: 'var(--font-exo2), sans-serif',
                fontWeight: 700,
                fontSize: 17,
                color: '#F1F5F9',
                letterSpacing: '0.04em',
              }}
          >
            TBN Network
          </span>
              <span
                  style={{
                    fontFamily: 'monospace',
                    fontSize: 9,
                    color: '#A3E635',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                  }}
              >
            DevOps · Networking
          </span>
            </div>
        )}
      </div>
    </a>
  )
}
