"use client";

import CtaSection from "@/components/CtaSection";
import MarqueeStrip from "@/components/MarqueeStrip";

const FEATURES = [
  { icon: "📋", title: "ISO 14064 & GHG Protocol Aligned", desc: "Methodology meets the requirements of ISO 14064, the GHG Protocol Corporate Standard, and the Science Based Targets initiative (SBTi)." },
  { icon: "🏅", title: "Automated I-REC & REGO Generation", desc: "Meter-level generation data is automatically converted into internationally recognised energy attribute certificates — no manual processing required." },
  { icon: "🌍", title: "Scope 2 Market & Location Reporting", desc: "Produces both market-based and location-based Scope 2 emissions figures, meeting the requirements of the GHG Protocol Scope 2 Guidance." },
  { icon: "📊", title: "CDP, TCFD & CSRD Templates",         desc: "Pre-built disclosure templates aligned to CDP, TCFD, and the EU's Corporate Sustainability Reporting Directive — one-click export ready." },
  { icon: "🔍", title: "Third-Party Verifier Portal",        desc: "A dedicated access portal gives independent verifiers a complete, audit-ready data trail from meter reading to certificate issuance." },
  { icon: "🔔", title: "Target Tracking & Alerts",           desc: "Set net-zero and reduction targets, and receive automated alerts when assets are tracking above or below trajectory." },
];

const FRAMEWORKS = [
  { label: "ISO 14064",        desc: "GHG quantification & reporting"   },
  { label: "GHG Protocol",     desc: "Corporate accounting standard"    },
  { label: "CDP",              desc: "Climate disclosure platform"      },
  { label: "TCFD",             desc: "Climate risk reporting"           },
  { label: "CSRD",             desc: "EU sustainability reporting"      },
  { label: "SBTi",             desc: "Science based targets"            },
  { label: "I-REC",            desc: "International REC standard"       },
  { label: "REGO",             desc: "UK renewable energy guarantee"    },
];

export default function CarbonReportingPage() {
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

        .sol-frameworks { background: var(--cream); padding: 100px 80px; }
        .sol-frameworks-inner { max-width: 1200px; margin: 0 auto; }
        .frameworks-grid {
          display: grid; grid-template-columns: repeat(4,1fr); gap: 1px;
          background: var(--border); border: 1px solid var(--border);
          border-radius: 16px; overflow: hidden; margin-top: 48px;
        }
        .fw-card { background: var(--white); padding: 24px 20px; transition: background 0.2s; }
        .fw-card:hover { background: #f0f7f2; }
        .fw-label { font-size: 15px; font-weight: 700; color: var(--ink); margin-bottom: 6px; }
        .fw-desc  { font-size: 12px; color: var(--ink-muted); line-height: 1.5; }
        .fw-check { font-size: 11px; font-weight: 700; color: var(--green); margin-top: 12px; }

        @media (max-width: 1200px) { .ph, .sol-features, .sol-frameworks { padding-left: 48px; padding-right: 48px; } }
        @media (max-width: 1024px) {
          .ph { padding: calc(var(--nav-h) + 48px) 40px 64px; }
          .ph-inner { grid-template-columns: 1fr; gap: 48px; }
          .sol-features, .sol-frameworks { padding-left: 40px; padding-right: 40px; }
          .features-grid { grid-template-columns: repeat(2,1fr); }
          .frameworks-grid { grid-template-columns: repeat(2,1fr); }
        }
        @media (max-width: 768px) {
          .ph { padding: calc(var(--nav-h) + 32px) 28px 56px; }
          .sol-features, .sol-frameworks { padding-left: 28px; padding-right: 28px; padding-top: 80px; padding-bottom: 80px; }
          .features-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 480px) {
          .ph { padding: calc(var(--nav-h) + 24px) 18px 48px; }
          .sol-features, .sol-frameworks { padding-left: 18px; padding-right: 18px; padding-top: 64px; padding-bottom: 64px; }
          .sol-kpis { grid-template-columns: 1fr; }
          .frameworks-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="ph">
        <div className="ph-inner">
          <div>
            <div className="ph-breadcrumb">
              <a href="/solutions">Solutions</a><span>/</span><span>Carbon Reporting</span>
            </div>
            <div className="ph-tag"><span className="ph-tag-dot" />Carbon Reporting</div>
            <h1 className="ph-h1">Verified impact,<br /><em>audit-ready</em></h1>
            <p className="ph-body">
              Our Carbon Suite automates the full lifecycle from meter-level generation data to
              internationally recognised offset certificates — so your team focuses on strategy,
              not spreadsheets.
            </p>
            <a href="/contact" className="btn-primary-lg">Book a Carbon Suite Demo →</a>
          </div>
          <div className="sol-kpis">
            {[
              { v: "100%",  l: "Audit-ready coverage"          },
              { v: "8",     l: "Frameworks supported"           },
              { v: "1-click", l: "CSRD export"                 },
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
          <h2 className="section-h2">From meter to <em>certificate</em></h2>
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

      <section className="sol-frameworks">
        <div className="sol-frameworks-inner">
          <span className="section-tag">Standards & Frameworks</span>
          <h2 className="section-h2">Every framework.<br /><em>One platform.</em></h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "var(--ink-soft)", maxWidth: 560, marginTop: 14 }}>
            Carbon Suite is built to meet the requirements of every major sustainability disclosure
            framework in use today — and updated automatically as standards evolve.
          </p>
          <div className="frameworks-grid">
            {FRAMEWORKS.map((f) => (
              <div key={f.label} className="fw-card">
                <div className="fw-label">{f.label}</div>
                <div className="fw-desc">{f.desc}</div>
                <div className="fw-check">✓ Supported</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        headline={<>Ready to automate<br />your <em>carbon reporting?</em></>}
        subline="Book a 30-minute Carbon Suite demo and we'll show you how your team can go from 6 weeks of reporting to a single export."
        primaryText="Book a Demo →"
        primaryHref="/contact"
        secondaryText="Explore the full platform"
        secondaryHref="/features"
      />
    </main>
  );
}