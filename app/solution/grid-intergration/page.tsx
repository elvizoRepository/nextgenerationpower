"use client";

import CtaSection from "@/components/CtaSection";
import MarqueeStrip from "@/components/MarqueeStrip";

const FEATURES = [
  { icon: "⚡", title: "Automated Interconnection Studies",  desc: "Our Grid Bridge platform auto-generates and files the full interconnection study package, cutting the typical 12-month process to under 8 weeks." },
  { icon: "🔌", title: "Protection Relay Design",            desc: "Full specification, configuration, and commissioning of protection relay systems to meet transmission operator requirements in any jurisdiction." },
  { icon: "🔋", title: "BESS Dispatch Optimisation",         desc: "Pairs wind output with battery storage for price arbitrage, capacity market participation, and frequency response — dispatched automatically in real time." },
  { icon: "📡", title: "Reactive Power Compensation",        desc: "Dynamic VAR support via STATCOM integration maintains voltage stability and meets power factor requirements across all grid codes." },
  { icon: "🌐", title: "50+ Grid Codes Supported",           desc: "Our compliance library covers regulatory requirements across Europe, the Americas, Africa, and the Asia-Pacific — updated in real time as codes change." },
  { icon: "🏭", title: "Virtual Power Plant Aggregation",    desc: "Aggregate multiple assets behind a single VPP control layer for joint dispatch, ancillary services trading, and capacity market bidding." },
];

const SPECS = [
  { label: "Frequency Response Latency", value: "< 8 ms"  },
  { label: "Grid Codes Supported",       value: "50+"      },
  { label: "BESS Dispatch Accuracy",     value: "±0.5%"    },
  { label: "Interconnection Study Time", value: "< 8 wks"  },
  { label: "Platform Uptime SLA",        value: "99.9%"    },
  { label: "Regulatory Jurisdictions",   value: "60+"      },
];

export default function GridIntegrationPage() {
  return (
    <main style={{ fontFamily: "'Instrument Sans', 'DM Sans', sans-serif", overflowX: "hidden" }}>
      <style>{`
        .ph {
          background: var(--ink);
          padding: calc(var(--nav-h) + 72px) 80px 80px;
          position: relative; overflow: hidden;
        }
        .ph::before {
          content: ''; position: absolute; top: -30%; right: -5%;
          width: 700px; height: 700px; border-radius: 50%;
          background: radial-gradient(circle, rgba(45,145,71,0.14) 0%, transparent 65%);
          pointer-events: none;
        }
        .ph::after {
          content: ''; position: absolute; bottom: -20%; left: -5%;
          width: 400px; height: 400px; border-radius: 50%;
          background: radial-gradient(circle, rgba(168,217,108,0.07) 0%, transparent 65%);
          pointer-events: none;
        }
        .ph-inner {
          max-width: 1200px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 80px; align-items: center; position: relative; z-index: 2;
        }
        .ph-breadcrumb { font-size: 12px; color: rgba(255,255,255,0.3); margin-bottom: 20px; display: flex; align-items: center; gap: 8px; }
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
        .ph-body { font-size: 16px; line-height: 1.75; color: rgba(255,255,255,0.55); max-width: 480px; margin-bottom: 32px; }
        .sol-kpis {
          display: grid; grid-template-columns: repeat(3,1fr); gap: 1px;
          background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px; overflow: hidden;
        }
        .sol-kpi { background: rgba(255,255,255,0.03); padding: 28px 24px; transition: background 0.2s; }
        .sol-kpi:hover { background: rgba(255,255,255,0.06); }
        .sol-kpi-val   { font-family: 'Instrument Serif', serif; font-size: 34px; color: var(--lime); line-height: 1; margin-bottom: 6px; }
        .sol-kpi-label { font-size: 11px; color: rgba(255,255,255,0.35); font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; }

        .sol-features { background: var(--white); padding: 100px 80px; }
        .sol-features-inner { max-width: 1200px; margin: 0 auto; }
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

        .sol-specs { background: var(--cream); padding: 100px 80px; }
        .sol-specs-inner {
          max-width: 1200px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start;
        }
        .specs-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
          background: var(--border); border: 1px solid var(--border);
          border-radius: 14px; overflow: hidden;
        }
        .spec-cell  { background: var(--white); padding: 20px; }
        .spec-label { font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-muted); margin-bottom: 6px; }
        .spec-val   { font-family: 'Instrument Serif', serif; font-size: 22px; color: var(--ink); }

        @media (max-width: 1200px) { .ph, .sol-features, .sol-specs { padding-left: 48px; padding-right: 48px; } }
        @media (max-width: 1024px) {
          .ph { padding: calc(var(--nav-h) + 48px) 40px 64px; }
          .ph-inner { grid-template-columns: 1fr; gap: 48px; }
          .sol-features, .sol-specs { padding-left: 40px; padding-right: 40px; }
          .features-grid { grid-template-columns: repeat(2,1fr); }
          .sol-specs-inner { grid-template-columns: 1fr; gap: 48px; }
        }
        @media (max-width: 768px) {
          .ph { padding: calc(var(--nav-h) + 32px) 28px 56px; }
          .sol-features, .sol-specs { padding-left: 28px; padding-right: 28px; padding-top: 80px; padding-bottom: 80px; }
          .features-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 480px) {
          .ph { padding: calc(var(--nav-h) + 24px) 18px 48px; }
          .sol-features, .sol-specs { padding-left: 18px; padding-right: 18px; padding-top: 64px; padding-bottom: 64px; }
          .sol-kpis { grid-template-columns: 1fr; }
          .specs-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="ph">
        <div className="ph-inner">
          <div>
            <div className="ph-breadcrumb">
              <a href="/solutions">Solutions</a><span>/</span><span>Grid Integration</span>
            </div>
            <div className="ph-tag"><span className="ph-tag-dot" />Grid Integration</div>
            <h1 className="ph-h1">Clean power,<br />delivered <em>reliably</em></h1>
            <p className="ph-body">
              Our Grid Bridge platform automates every layer of grid connection — from interconnection
              studies and relay design to battery dispatch and frequency response — across 50+ regulatory
              regimes worldwide.
            </p>
            <a href="/contact" className="btn-primary-lg">Talk to a Grid Engineer →</a>
          </div>
          <div className="sol-kpis">
            {[
              { v: "50+",    l: "Grid codes supported"     },
              { v: "< 8 ms", l: "Frequency response"       },
              { v: "< 8 wks",l: "Interconnection study"    },
            ].map((k) => (
              <div key={k.l} className="sol-kpi">
                <div className="sol-kpi-val">{k.v}</div>
                <div className="sol-kpi-label">{k.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MarqueeStrip />

      <section className="sol-features">
        <div className="sol-features-inner">
          <span className="section-tag">Capabilities</span>
          <h2 className="section-h2">Everything grid <em>connection requires</em></h2>
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

      <section className="sol-specs">
        <div className="sol-specs-inner">
          <div>
            <span className="section-tag">Technical Specs</span>
            <h2 className="section-h2">Platform <em>performance</em></h2>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: "var(--ink-soft)", marginBottom: 16 }}>
              Grid Bridge is built for real-time, mission-critical operation. Every component is
              designed to meet the most demanding transmission operator requirements globally.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: "var(--ink-soft)" }}>
              Our compliance library is updated in real time as grid codes change — so your assets
              stay compliant without any manual intervention.
            </p>
          </div>
          <div className="specs-grid">
            {SPECS.map((s) => (
              <div key={s.label} className="spec-cell">
                <div className="spec-label">{s.label}</div>
                <div className="spec-val">{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        headline={<>Ready to connect<br />your <em>wind asset?</em></>}
        subline="Our grid team will assess your connection requirements and return a scoping report within 2 weeks."
        primaryText="Talk to a Grid Engineer →"
        primaryHref="/contact"
        secondaryText="Explore the full platform"
        secondaryHref="/features"
      />
    </main>
  );
}