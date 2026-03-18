"use client";

const FEATURES = [
  { icon: "📡", title: "Real-Time SCADA",        desc: "1-second resolution data from every sensor across your entire fleet, accessible from any device globally." },
  { icon: "🤖", title: "AI Fault Detection",      desc: "Machine learning models trained on 40 GW of operational data detect anomalies 72 hours before failure." },
  { icon: "🔧", title: "Predictive Maintenance",  desc: "Dynamic maintenance scheduling based on component health scores, reducing unplanned downtime by 60%." },
  { icon: "📊", title: "Performance Analytics",   desc: "Benchmark each turbine against its digital twin, fleet peers, and site P50/P90 energy estimates." },
  { icon: "📋", title: "Carbon & ESG Reporting",  desc: "Automated generation of certified carbon offset documentation and ESG reporting aligned to GRI and TCFD." },
  { icon: "🔔", title: "Smart Alerting",           desc: "Configurable alert workflows via email, SMS, and webhook — with severity routing and on-call escalation." },
];

const METRICS = [
  { val: "1s",    label: "Data Resolution"        },
  { val: "99.9%", label: "Platform Uptime"         },
  { val: "72hr",  label: "Fault Prediction Window" },
  { val: "↓60%",  label: "Unplanned Downtime"      },
];

export default function MonitoringPage() {
  return (
    <main style={{ fontFamily: "'Instrument Sans', 'DM Sans', sans-serif", overflowX: "hidden" }}>
      <style>{`
        /* ── PAGE HERO ── */
        .ph {
          background: var(--ink);
          padding: calc(var(--nav-h) + 72px) 80px 80px;
          position: relative; overflow: hidden;
        }
        .ph::before {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(ellipse at 100% 0%, rgba(45,145,71,0.18) 0%, transparent 50%);
          pointer-events: none;
        }
        .ph::after {
          content: ''; position: absolute; bottom: -20%; left: -5%;
          width: 400px; height: 400px; border-radius: 50%;
          background: radial-gradient(circle, rgba(168,217,108,0.06) 0%, transparent 65%);
          pointer-events: none;
        }
        .ph-inner {
          max-width: 1200px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 80px; align-items: center; position: relative; z-index: 2;
        }
        .ph-breadcrumb {
          font-size: 12px; color: rgba(255,255,255,0.3);
          margin-bottom: 20px; display: flex; align-items: center; gap: 8px;
        }
        .ph-breadcrumb a { color: rgba(255,255,255,0.3); text-decoration: none; transition: color 0.2s; }
        .ph-breadcrumb a:hover { color: var(--lime); }
        .ph-tag {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 11px; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--lime); margin-bottom: 20px;
        }
        .ph-tag-dot {
          width: 6px; height: 6px; border-radius: 50%; background: var(--lime);
          box-shadow: 0 0 0 3px rgba(168,217,108,0.2);
          animation: pulse 2.4s ease-in-out infinite; flex-shrink: 0;
        }
        @keyframes pulse {
          0%,100% { box-shadow: 0 0 0 3px rgba(168,217,108,0.2); }
          50%      { box-shadow: 0 0 0 7px rgba(168,217,108,0.06); }
        }
        .ph-h1 {
          font-family: 'Instrument Serif', Georgia, serif;
          font-size: clamp(38px, 5vw, 66px); font-weight: 400;
          color: var(--white); line-height: 1.08; letter-spacing: -0.02em; margin-bottom: 20px;
        }
        .ph-h1 em { font-style: italic; color: var(--lime); }
        .ph-body {
          font-size: 16px; line-height: 1.75; color: rgba(255,255,255,0.55);
          max-width: 480px; margin-bottom: 32px;
        }

        .metrics-grid {
          display: grid; grid-template-columns: repeat(2,1fr); gap: 1px;
          background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px; overflow: hidden;
        }
        .metric-cell { background: rgba(255,255,255,0.03); padding: 28px 24px; transition: background 0.2s; }
        .metric-cell:hover { background: rgba(255,255,255,0.06); }
        .metric-val   { font-family: 'Instrument Serif', serif; font-size: 34px; color: var(--lime); line-height: 1; margin-bottom: 6px; }
        .metric-label { font-size: 11px; color: rgba(255,255,255,0.35); font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; }

        /* ── DASHBOARD MOCKUP ── */
        .mon-dashboard { background: var(--cream); padding: 100px 80px; }
        .mon-dashboard-inner { max-width: 1200px; margin: 0 auto; }
        .dash-mock {
          background: var(--ink); border-radius: 20px; padding: 32px;
          border: 1px solid rgba(255,255,255,0.06); margin-top: 48px;
        }
        .dash-header {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 24px; padding-bottom: 20px; border-bottom: 1px solid rgba(255,255,255,0.07);
        }
        .dash-title { font-size: 14px; font-weight: 600; color: #fff; }
        .dash-live  { display: inline-flex; align-items: center; gap: 6px; font-size: 11px; color: var(--lime); font-weight: 600; }
        .dash-live-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--lime); animation: pulseLime 2s ease-in-out infinite; }
        @keyframes pulseLime { 0%,100%{opacity:1} 50%{opacity:.4} }
        .dash-cards { display: grid; grid-template-columns: repeat(4,1fr); gap: 12px; margin-bottom: 20px; }
        .dash-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 16px; }
        .dash-card-label { font-size: 10px; color: rgba(255,255,255,0.35); font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 8px; }
        .dash-card-val   { font-family: 'Instrument Serif', serif; font-size: 24px; color: #fff; line-height: 1; margin-bottom: 4px; }
        .dash-card-trend { font-size: 11px; color: var(--lime); }
        .dash-bars { display: flex; gap: 6px; align-items: flex-end; height: 80px; }
        .dash-bar  { flex: 1; border-radius: 4px 4px 0 0; background: rgba(45,145,71,0.4); transition: background 0.2s; }
        .dash-bar:hover { background: var(--green-sat); }

        /* ── FEATURES ── */
        .mon-features { background: var(--white); padding: 100px 80px; }
        .mon-features-inner { max-width: 1200px; margin: 0 auto; }
        .features-grid {
          display: grid; grid-template-columns: repeat(3,1fr); gap: 1px;
          background: var(--border); border: 1px solid var(--border);
          border-radius: 16px; overflow: hidden; margin-top: 48px;
        }
        .feat-card { background: var(--white); padding: 32px 28px; transition: background 0.2s; }
        .feat-card:hover { background: var(--cream); }
        .feat-icon  { font-size: 26px; margin-bottom: 16px; display: block; }
        .feat-title { font-size: 15px; font-weight: 600; color: var(--ink); margin-bottom: 8px; }
        .feat-desc  { font-size: 13px; line-height: 1.7; color: var(--ink-muted); }

        /* ── CTA ── */
        .sol-cta { background: var(--green); padding: 100px 80px; text-align: center; }
        .sol-cta-inner { max-width: 640px; margin: 0 auto; }
        .sol-cta h2 {
          font-family: 'Instrument Serif', serif; font-size: clamp(28px,4vw,48px);
          color: #fff; font-weight: 400; letter-spacing: -0.02em; margin-bottom: 16px;
        }
        .sol-cta h2 em { font-style: italic; color: var(--lime); }
        .sol-cta p { font-size: 15px; color: rgba(255,255,255,0.7); line-height: 1.75; margin-bottom: 32px; }
        .btn-white {
          display: inline-flex; align-items: center; gap: 8px; padding: 14px 28px;
          background: #fff; color: var(--green); font-size: 14px; font-weight: 600;
          border-radius: 100px; text-decoration: none; transition: all 0.2s;
        }
        .btn-white:hover { transform: translateY(-1px); box-shadow: 0 8px 24px rgba(0,0,0,0.15); }

        /* ── RESPONSIVE ── */
        @media (max-width: 1200px) {
          .ph, .mon-dashboard, .mon-features, .sol-cta { padding-left: 48px; padding-right: 48px; }
        }
        @media (max-width: 1024px) {
          .ph { padding: calc(var(--nav-h) + 48px) 40px 64px; }
          .ph-inner { grid-template-columns: 1fr; gap: 48px; }
          .mon-dashboard, .mon-features, .sol-cta { padding-left: 40px; padding-right: 40px; }
          .features-grid { grid-template-columns: repeat(2,1fr); }
          .dash-cards { grid-template-columns: repeat(2,1fr); }
        }
        @media (max-width: 768px) {
          .ph { padding: calc(var(--nav-h) + 32px) 28px 56px; }
          .mon-dashboard, .mon-features, .sol-cta { padding-left: 28px; padding-right: 28px; padding-top: 80px; padding-bottom: 80px; }
          .features-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 480px) {
          .ph { padding: calc(var(--nav-h) + 24px) 18px 48px; }
          .mon-dashboard, .mon-features, .sol-cta { padding-left: 18px; padding-right: 18px; padding-top: 64px; padding-bottom: 64px; }
          .metrics-grid { grid-template-columns: 1fr; }
          .dash-cards { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section className="ph">
        <div className="ph-inner">
          <div>
            <div className="ph-breadcrumb">
              <a href="/solutions">Solutions</a><span>/</span><span>Monitoring</span>
            </div>
            <div className="ph-tag">
              <span className="ph-tag-dot" />
              Monitoring Platform
            </div>
            <h1 className="ph-h1">Total <em>Fleet</em><br />Visibility,<br />Always</h1>
            <p className="ph-body">
              Our cloud-native monitoring platform gives operators real-time insight into every turbine,
              with AI-powered predictive maintenance and automated reporting.
            </p>
            <a href="/register" className="btn-primary-lg">Start Free Trial →</a>
          </div>
          <div className="metrics-grid">
            {METRICS.map((m) => (
              <div key={m.label} className="metric-cell">
                <div className="metric-val">{m.val}</div>
                <div className="metric-label">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DASHBOARD MOCKUP ── */}
      <section className="mon-dashboard">
        <div className="mon-dashboard-inner">
          <span className="section-tag">Live Platform</span>
          <h2 className="section-h2">Your Fleet at a <em>Glance</em></h2>
          <div className="dash-mock">
            <div className="dash-header">
              <span className="dash-title">Fleet Overview — 847 MW Active</span>
              <span className="dash-live"><span className="dash-live-dot" />Live</span>
            </div>
            <div className="dash-cards">
              {[
                { l: "Output",      v: "847 MW", t: "↑12%"         },
                { l: "Availability",v: "98.4%",  t: "↑0.2%"        },
                { l: "Alerts",      v: "3",       t: "Low severity" },
                { l: "CO₂ Saved",  v: "2.4kt",  t: "Today"         },
              ].map((c) => (
                <div key={c.l} className="dash-card">
                  <div className="dash-card-label">{c.l}</div>
                  <div className="dash-card-val">{c.v}</div>
                  <div className="dash-card-trend">{c.t}</div>
                </div>
              ))}
            </div>
            <div className="dash-bars">
              {[55,72,68,90,85,78,88,95,82,76,91,88,72,85,90,92,88,95,84,78,92,86,90,95].map((h, i) => (
                <div key={i} className="dash-bar" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="mon-features">
        <div className="mon-features-inner">
          <span className="section-tag">Platform Features</span>
          <h2 className="section-h2">Everything You <em>Need</em></h2>
          <div className="features-grid">
            {FEATURES.map((f) => (
              <div key={f.title} className="feat-card">
                <span className="feat-icon">{f.icon}</span>
                <div className="feat-title">{f.title}</div>
                <div className="feat-desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="sol-cta">
        <div className="sol-cta-inner">
          <h2>See your fleet in <em>real time</em></h2>
          <p>Connect your turbines in under 24 hours. No hardware required — works with any major SCADA system.</p>
          <a href="/register" className="btn-white">Start Free 30-Day Trial →</a>
        </div>
      </section>
    </main>
  );
}