@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

:root {
  --bg: #070b14;
  --bg-elevated: #0f172a;
  --panel: rgba(15, 23, 42, 0.9);
  --panel-border: rgba(148, 163, 184, 0.18);
  --text: #e2e8f0;
  --muted: #94a3b8;
  --accent: #38bdf8;
  --green: #4ade80;
  --yellow: #facc15;
  --orange: #fb923c;
  --red: #ef4444;
  --dark-red: #7f1d1d;
  --shadow: 0 20px 45px rgba(2, 6, 23, 0.7);
}

* {
  box-sizing: border-box;
}

html, body, #root {
  margin: 0;
  min-height: 100%;
  min-width: 0;
  background: radial-gradient(circle at top, #0f172a 0%, #070b14 50%, #020617 100%);
  color: var(--text);
  font-family: 'Inter', sans-serif;
}

body {
  min-height: 100vh;
}

button {
  font: inherit;
}

.app-shell {
  max-width: 1500px;
  margin: 0 auto;
  padding: 24px;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.brand-block {
  display: flex;
  align-items: center;
  gap: 14px;
}

.brand-mark {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: linear-gradient(135deg, #0ea5e9, #2563eb);
  color: white;
  font-weight: 800;
  box-shadow: 0 12px 28px rgba(14, 165, 233, 0.35);
}

.eyebrow {
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
}

h1, h2, h3, h4, p {
  margin: 0;
}

h1 {
  font-size: clamp(1.5rem, 2vw, 2.2rem);
}

.top-actions {
  display: flex;
  gap: 12px;
}

.primary-button,
.ghost-button {
  border: none;
  border-radius: 999px;
  padding: 10px 18px;
  cursor: pointer;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.primary-button {
  background: linear-gradient(135deg, #0ea5e9, #2563eb);
  color: white;
  box-shadow: 0 10px 20px rgba(37, 99, 235, 0.35);
}

.ghost-button {
  background: rgba(148, 163, 184, 0.08);
  color: var(--text);
  border: 1px solid var(--panel-border);
}

.primary-button:hover,
.ghost-button:hover {
  transform: translateY(-1px);
}

.dashboard {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 24px;
}

.panel {
  background: rgba(15, 23, 42, 0.72);
  border: 1px solid var(--panel-border);
  border-radius: 24px;
  box-shadow: var(--shadow);
  backdrop-filter: blur(16px);
}

.overview-panel {
  padding: 20px;
}

.summary-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
}

.summary-header h2 {
  font-size: clamp(2rem, 3vw, 2.6rem);
  margin-top: 4px;
}

.section-label {
  color: var(--muted);
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.summary-badges {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.badge {
  display: inline-flex;
  align-items: center;
  padding: 7px 12px;
  border-radius: 999px;
  background: rgba(56, 189, 248, 0.12);
  border: 1px solid rgba(56, 189, 248, 0.2);
  color: #bae6fd;
  font-size: 12px;
}

.badge.alert {
  background: rgba(239, 68, 68, 0.12);
  border-color: rgba(239, 68, 68, 0.18);
  color: #fecaca;
}

.map-panel {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.map-frame {
  width: 100%;
  min-height: 520px;
  border-radius: 22px;
  overflow: hidden;
  border: 1px solid rgba(148, 163, 184, 0.18);
  background: linear-gradient(180deg, rgba(9, 14, 27, 0.8), rgba(15, 23, 42, 0.95));
}

.world-map {
  display: block;
  width: 100%;
  height: 520px;
}

.grid-lines path {
  stroke: rgba(148, 163, 184, 0.08);
  stroke-width: 1;
  fill: none;
}

.continents path {
  fill: rgba(51, 65, 85, 0.74);
  stroke: rgba(148, 163, 184, 0.18);
  stroke-width: 1.2;
}

.zone-marker {
  cursor: pointer;
}

.hotspot {
  stroke: rgba(255,255,255,0.8);
  stroke-width: 1.3;
}

.hotspot.stable { fill: var(--green); }
.hotspot.tension { fill: var(--yellow); }
.hotspot.active { fill: var(--orange); }
.hotspot.war { fill: var(--red); }

.pulse {
  fill: rgba(239, 68, 68, 0.12);
  transform-origin: center;
  animation: pulse 2.8s infinite ease-out;
}

.pulse-major { fill: rgba(239, 68, 68, 0.22); }
.pulse-medium { fill: rgba(251, 146, 60, 0.2); }

@keyframes pulse {
  0% { transform: scale(0.7); opacity: 0.8; }
  70% { transform: scale(1.45); opacity: 0.18; }
  100% { transform: scale(1.8); opacity: 0; }
}

.legend {
  display: flex;
  justify-content: flex-start;
  gap: 18px;
  flex-wrap: wrap;
  color: var(--muted);
  font-size: 13px;
}

.legend > div {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.swatch {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  display: inline-block;
}

.swatch.green { background: var(--green); }
.swatch.yellow { background: var(--yellow); }
.swatch.orange { background: var(--orange); }
.swatch.red { background: var(--red); }

.detail-panel {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.region-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
}

.region-header h3 {
  font-size: clamp(1.6rem, 2.2vw, 2rem);
  margin-top: 6px;
}

.status-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 7px 12px;
  font-size: 12px;
  border: 1px solid rgba(255,255,255,0.08);
  min-width: 94px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.mini-stat {
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid rgba(148, 163, 184, 0.12);
  border-radius: 16px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.mini-stat span {
  color: var(--muted);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.mini-stat strong {
  font-size: 14px;
  line-height: 1.4;
}

.info-block {
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid rgba(148, 163, 184, 0.12);
  border-radius: 16px;
  padding: 14px 16px;
}

.info-block h4 {
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 10px;
}

.info-block ul {
  margin: 0;
  padding-left: 18px;
  color: var(--text);
  display: flex;
  flex-direction: column;
  gap: 10px;
  line-height: 1.6;
}

.info-block p {
  color: var(--text);
  line-height: 1.7;
}

.info-grid-two {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.compact p {
  font-size: 13px;
}

.impact-block {
  background: linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.9));
}

.timeline-block {
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid rgba(148, 163, 184, 0.12);
  border-radius: 16px;
  padding: 14px 16px;
}

.timeline-block h4 {
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 12px;
}

.timeline-row {
  display: grid;
  grid-template-columns: 72px 1fr;
  gap: 12px;
  align-items: flex-start;
  padding: 8px 0;
  border-top: 1px solid rgba(148, 163, 184, 0.08);
}

.timeline-row:first-child {
  border-top: none;
}

.time-label {
  color: #bae6fd;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding-top: 2px;
}

.timeline-row p {
  color: var(--text);
  line-height: 1.55;
}

.source-block {
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid rgba(148, 163, 184, 0.12);
  border-radius: 16px;
  padding: 14px 16px;
}

.source-block h4 {
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 12px;
}

.source-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
}

.source-card {
  background: rgba(30, 41, 59, 0.6);
  border: 1px solid rgba(148, 163, 184, 0.1);
  border-radius: 12px;
  padding: 10px 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.source-card strong {
  font-size: 13px;
}

.source-card span {
  color: var(--muted);
  font-size: 11px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

@media (max-width: 1100px) {
  .dashboard {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .app-shell {
    padding: 16px;
  }

  .topbar,
  .summary-header,
  .region-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .map-frame,
  .world-map {
    min-height: 360px;
    height: 360px;
  }

  .stats-grid,
  .info-grid-two,
  .source-list {
    grid-template-columns: 1fr;
  }
}
