import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

const conflictData = [
  {
    id: 'ukraine',
    region: 'Eastern Europe',
    country: 'Ukraine',
    status: 'Active Conflict',
    severity: 84,
    risk: 'High',
    conflictName: 'Russia-Ukraine War',
    currentStatus: 'Active Conflict',
    latestDevelopments: [
      'Air defense systems remain active amid renewed missile attacks near energy infrastructure.',
      'European governments continue to expand defense procurement and logistics support.',
      'Shipping corridors remain volatile, increasing pressure on grain and energy pricing.'
    ],
    primaryParties: ['Russia', 'Ukraine', 'NATO members'],
    affectedCommodities: ['Natural Gas', 'Wheat', 'Steel', 'Grain'],
    potentialGlobalImpact:
      'Supply chain disruptions and energy volatility can influence inflation, shipping costs, and industrial output across Europe and Asia.',
    indianMarketImpact:
      'Indian importers and logistics providers may face elevated energy and commodity costs, while defense and infrastructure-linked sectors could see volatility.',
    x: 460,
    y: 150,
    pulse: 'major',
    sources: [
      { name: 'Reuters', type: 'Wire' },
      { name: 'AP', type: 'Wire' },
      { name: 'UN', type: 'Agency' },
      { name: 'World Bank', type: 'Institution' }
    ],
    timeline: [
      { label: 'Today', text: 'Escalation in military activity raises concern over civilian infrastructure and energy flows.' },
      { label: '7 days', text: 'European energy prices remain sensitive to attack risk and logistics disruption.' },
      { label: '30 days', text: 'Defense spending and industrial resilience continue to shape regional market sentiment.' }
    ]
  },
  {
    id: 'gaza',
    region: 'Middle East',
    country: 'Israel / Gaza',
    status: 'Active Conflict',
    severity: 76,
    risk: 'High',
    conflictName: 'Middle East Security Crisis',
    currentStatus: 'Active Conflict',
    latestDevelopments: [
      'Regional military readiness remains elevated amid cross-border strikes and emergency mobilization.',
      'Transportation and insurance costs increase across key maritime routes and freight corridors.',
      'Diplomatic pressure continues to focus on de-escalation and humanitarian access.'
    ],
    primaryParties: ['Israel', 'Hamas', 'Regional security actors'],
    affectedCommodities: ['Oil', 'Shipping', 'Gold', 'Agriculture'],
    potentialGlobalImpact:
      'Regional instability can elevate crude oil prices, maritime shipping costs, and insurance premiums, affecting trade corridors.',
    indianMarketImpact:
      'Indian energy importers and export-driven industries may experience cost pressure, while defense-linked and shipping sectors could see increased volatility.',
    x: 540,
    y: 220,
    pulse: 'major',
    sources: [
      { name: 'Reuters', type: 'Wire' },
      { name: 'Financial Times', type: 'Media' },
      { name: 'Bloomberg', type: 'Financial' },
      { name: 'UN', type: 'Agency' }
    ],
    timeline: [
      { label: 'Today', text: 'Cross-border strikes increase security risk and transport disruption across the region.' },
      { label: '7 days', text: 'Shipping and energy premiums remain elevated due to route and insurance concerns.' },
      { label: '30 days', text: 'Diplomatic mediation and humanitarian constraints remain key risk drivers.' }
    ]
  },
  {
    id: 'red-sea',
    region: 'Red Sea & Suez',
    country: 'Red Sea Corridor',
    status: 'High Risk',
    severity: 72,
    risk: 'High',
    conflictName: 'Red Sea Shipping Disruption',
    currentStatus: 'Tension',
    latestDevelopments: [
      'Maritime traffic in and around strategic channels remains partially diverted.',
      'Shipping insurers maintain elevated risk premiums for cargo routes connected to the corridor.',
      'Commodity traders monitor delays in freight and container cycle times.'
    ],
    primaryParties: ['Regional armed groups', 'Shipping operators', 'Global importers'],
    affectedCommodities: ['Energy', 'Container Goods', 'Fertilizers', 'Metals'],
    potentialGlobalImpact:
      'Persistent disruption can lengthen transit times and increase input costs for inflation-sensitive economies and global supply chains.',
    indianMarketImpact:
      'Indian exporters and importers may face higher freight costs and slower delivery cycles, pressuring margins in manufacturing and logistics.',
    x: 470,
    y: 260,
    pulse: 'medium',
    sources: [
      { name: 'Bloomberg', type: 'Financial' },
      { name: 'Reuters', type: 'Wire' },
      { name: 'IMF', type: 'Institution' },
      { name: 'Government', type: 'Public' }
    ],
    timeline: [
      { label: 'Today', text: 'Shipping routes remain volatile as operators reassess risk and reroute cargo.' },
      { label: '7 days', text: 'Logistics and insurance costs stay elevated for key Asia-Europe trade lanes.' },
      { label: '30 days', text: 'Supply chain bottlenecks continue to affect industrial output and freight demand.' }
    ]
  },
  {
    id: 'south-china-sea',
    region: 'Indo-Pacific',
    country: 'South China Sea',
    status: 'Political Tension',
    severity: 68,
    risk: 'Medium',
    conflictName: 'South China Sea Strategic Dispute',
    currentStatus: 'Tension',
    latestDevelopments: [
      'Naval and air patrols continue in contested corridors, raising operational risk.',
      'Regional partners intensify maritime surveillance and diplomatic coordination.',
      'Energy and shipping stakeholders monitor possible interruptions to commercial lanes.'
    ],
    primaryParties: ['China', 'ASEAN states', 'United States', 'India'],
    affectedCommodities: ['Oil', 'Gas', 'Shipping', 'Electronics'],
    potentialGlobalImpact:
      'Strategic tension can raise shipping risk, alter energy security planning, and influence investment in maritime infrastructure.',
    indianMarketImpact:
      'India may face elevated strategic and trade sensitivities, particularly in shipping, energy security, and defense-linked sectors.',
    x: 650,
    y: 245,
    pulse: 'medium',
    sources: [
      { name: 'Reuters', type: 'Wire' },
      { name: 'AP', type: 'Wire' },
      { name: 'Government', type: 'Public' },
      { name: 'IMF', type: 'Institution' }
    ],
    timeline: [
      { label: 'Today', text: 'Maritime patrols and stakeholder messaging remain elevated across strategic lanes.' },
      { label: '7 days', text: 'Trade and shipping corridors are monitored as geopolitical risk remains persistent.' },
      { label: '30 days', text: 'Diplomatic positioning continues to influence investment and security planning.' }
    ]
  },
  {
    id: 'myanmar',
    region: 'Southeast Asia',
    country: 'Myanmar',
    status: 'Active Conflict',
    severity: 61,
    risk: 'High',
    conflictName: 'Myanmar Civil Conflict',
    currentStatus: 'Active Conflict',
    latestDevelopments: [
      'Armed clashes continue in multiple corridors, constraining trade and local production.',
      'Regional supply chains remain vulnerable to disruption and policy uncertainty.',
      'Humanitarian and economic costs remain a major concern for neighboring markets.'
    ],
    primaryParties: ['Myanmar military', 'Ethnic armed groups', 'Regional stakeholders'],
    affectedCommodities: ['Rice', 'Natural Gas', 'Timber', 'Rare Minerals'],
    potentialGlobalImpact:
      'Conflict can limit regional trade flows, increase commodity uncertainty, and challenge supply stability for adjacent markets.',
    indianMarketImpact:
      'Indian trade and supply-chain exposure may rise in sectors dependent on imports, agricultural commodities, and regional manufacturing inputs.',
    x: 700,
    y: 300,
    pulse: 'medium',
    sources: [
      { name: 'Reuters', type: 'Wire' },
      { name: 'UN', type: 'Agency' },
      { name: 'World Bank', type: 'Institution' },
      { name: 'Government', type: 'Public' }
    ],
    timeline: [
      { label: 'Today', text: 'Conflict intensity continues to affect local logistics and cross-border commerce.' },
      { label: '7 days', text: 'Trade corridors are watched for disruption and supply-chain re-routing.' },
      { label: '30 days', text: 'Regional fragility may influence commodity and shipping sentiment.' }
    ]
  },
  {
    id: 'sudan',
    region: 'North Africa',
    country: 'Sudan',
    status: 'Active Conflict',
    severity: 66,
    risk: 'High',
    conflictName: 'Sudan Civil Conflict',
    currentStatus: 'Active Conflict',
    latestDevelopments: [
      'Military operations and humanitarian strains continue to intensify in key zones.',
      'Regional economic and trade routes face renewed uncertainty.',
      'Global markets monitor food and commodity exposure tied to the region.'
    ],
    primaryParties: ['Sudanese Armed Forces', 'Paramilitary forces', 'Regional actors'],
    affectedCommodities: ['Oil', 'Food Grains', 'Cotton', 'Gold'],
    potentialGlobalImpact:
      'Regional instability can impact power, food systems, and cross-border trade patterns in Africa and nearby supply corridors.',
    indianMarketImpact:
      'Indian importers and commodity-heavy sectors may be exposed to fluctuations in supply and freight risk linked to the region.',
    x: 430,
    y: 280,
    pulse: 'medium',
    sources: [
      { name: 'AP', type: 'Wire' },
      { name: 'Reuters', type: 'Wire' },
      { name: 'UN', type: 'Agency' },
      { name: 'World Bank', type: 'Institution' }
    ],
    timeline: [
      { label: 'Today', text: 'Conflict conditions remain severe and continue to restructure regional demand and supply.' },
      { label: '7 days', text: 'Commodity and freight sensitivities remain elevated due to instability.' },
      { label: '30 days', text: 'Humanitarian and trade constraints may continue to shape market expectations.' }
    ]
  }
];

const statusColors = {
  'Stable': '#4ade80',
  'Tension': '#facc15',
  'Active Conflict': '#fb923c',
  'War': '#ef4444',
  'High Risk': '#f97316'
};

const formatRisk = (value) => {
  if (value >= 80) return 'Extreme';
  if (value >= 65) return 'High';
  if (value >= 45) return 'Medium';
  return 'Low';
};

export default function App() {
  const [selected, setSelected] = React.useState(conflictData[0]);

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand-block">
          <div className="brand-mark">G</div>
          <div>
            <div className="eyebrow">Conflict Intelligence</div>
            <h1>GeoPulse AI</h1>
          </div>
        </div>

        <nav className="top-actions">
          <button className="ghost-button">Global Scan</button>
          <button className="primary-button">Risk Brief</button>
        </nav>
      </header>

      <main className="dashboard">
        <section className="overview-panel panel">
          <div className="summary-header">
            <div>
              <span className="section-label">Live Mesoscale Overview</span>
              <h2>Global conflict map</h2>
            </div>
            <div className="summary-badges">
              <span className="badge">6 Hotspots</span>
              <span className="badge alert">Risk Index 72</span>
            </div>
          </div>

          <div className="map-panel">
            <div className="map-frame">
              <svg viewBox="0 0 900 440" className="world-map" role="img" aria-label="World conflict map">
                <defs>
                  <linearGradient id="oceanGlow" x1="0" x2="1">
                    <stop offset="0%" stopColor="#0f172a" />
                    <stop offset="50%" stopColor="#111827" />
                    <stop offset="100%" stopColor="#0b1120" />
                  </linearGradient>
                </defs>

                <rect x="0" y="0" width="900" height="440" fill="url(#oceanGlow)" rx="20" />

                <g className="continents">
                  <path d="M80 150 L120 110 L180 90 L220 120 L205 185 L155 210 L100 200 Z" />
                  <path d="M250 125 L330 100 L390 110 L420 150 L395 200 L330 220 L275 180 Z" />
                  <path d="M410 150 L470 125 L530 135 L555 165 L525 210 L455 225 L415 195 Z" />
                  <path d="M540 160 L625 145 L670 180 L665 220 L610 245 L560 220 Z" />
                  <path d="M690 255 L750 235 L810 260 L790 310 L720 335 L680 300 Z" />
                  <path d="M360 250 L410 230 L455 248 L460 300 L415 335 L355 318 Z" />
                  <path d="M630 290 L690 275 L720 305 L700 350 L648 360 L612 330 Z" />
                </g>

                <g className="grid-lines">
                  <path d="M110 80 L110 360" />
                  <path d="M260 80 L260 360" />
                  <path d="M410 80 L410 360" />
                  <path d="M560 80 L560 360" />
                  <path d="M710 80 L710 360" />
                </g>

                {conflictData.map((zone) => (
                  <g key={zone.id} className="zone-marker" onClick={() => setSelected(zone)}>
                    <circle
                      className={`pulse pulse-${zone.pulse}`}
                      cx={zone.x}
                      cy={zone.y}
                      r={zone.severity > 70 ? 16 : 12}
                    />
                    <circle
                      className={
                        zone.status === 'Stable'
                          ? 'hotspot stable'
                          : zone.status === 'Tension'
                            ? 'hotspot tension'
                            : zone.status === 'Active Conflict'
                              ? 'hotspot active'
                              : 'hotspot war'
                      }
                      cx={zone.x}
                      cy={zone.y}
                      r={selected.id === zone.id ? 9 : 7}
                    />
                  </g>
                ))}
              </svg>
            </div>

            <div className="legend">
              <div><span className="swatch green" /> Stable</div>
              <div><span className="swatch yellow" /> Tension</div>
              <div><span className="swatch orange" /> Active</div>
              <div><span className="swatch red" /> War</div>
            </div>
          </div>
        </section>

        <aside className="detail-panel panel">
          <div className="region-header">
            <div>
              <span className="section-label">Selected Zone</span>
              <h3>{selected.country}</h3>
            </div>
            <span className="status-pill" style={{ background: `${statusColors[selected.status]}22`, color: statusColors[selected.status] }}>
              {selected.status}
            </span>
          </div>

          <div className="stats-grid">
            <div className="mini-stat">
              <span>Conflict name</span>
              <strong>{selected.conflictName}</strong>
            </div>
            <div className="mini-stat">
              <span>Severity</span>
              <strong>{selected.severity}/100</strong>
            </div>
            <div className="mini-stat">
              <span>Risk</span>
              <strong>{formatRisk(selected.severity)}</strong>
            </div>
            <div className="mini-stat">
              <span>Region</span>
              <strong>{selected.region}</strong>
            </div>
          </div>

          <div className="info-block">
            <h4>Latest developments</h4>
            <ul>
              {selected.latestDevelopments.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="info-grid-two">
            <div className="info-block compact">
              <h4>Primary parties</h4>
              <p>{selected.primaryParties.join(' • ')}</p>
            </div>
            <div className="info-block compact">
              <h4>Affected commodities</h4>
              <p>{selected.affectedCommodities.join(' • ')}</p>
            </div>
          </div>

          <div className="info-block">
            <h4>Potential global impact</h4>
            <p>{selected.potentialGlobalImpact}</p>
          </div>

          <div className="info-block impact-block">
            <h4>Potential Indian market impact</h4>
            <p>{selected.indianMarketImpact}</p>
          </div>

          <div className="timeline-block">
            <h4>Timeline</h4>
            {selected.timeline.map((item) => (
              <div className="timeline-row" key={item.label}>
                <span className="time-label">{item.label}</span>
                <p>{item.text}</p>
              </div>
            ))}
          </div>

          <div className="source-block">
            <h4>Verified sources</h4>
            <div className="source-list">
              {selected.sources.map((source) => (
                <div key={`${selected.id}-${source.name}`} className="source-card">
                  <strong>{source.name}</strong>
                  <span>{source.type}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
