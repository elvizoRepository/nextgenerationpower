"use client";

import CtaSection from "@/components/CtaSection";
import MarqueeStrip from "@/components/MarqueeStrip";

const FEATURES = [
  { icon: "🛰️", title: "Satellite & LiDAR Integration",  desc: "Fuses decades of satellite reanalysis data with on-site LiDAR measurements for sub-100m resolution wind maps at any location on Earth." },
  { icon: "🤖", title: "AI Yield Forecasting",            desc: "Machine learning models trained on 40 GW of real project data produce P50/P90 yield estimates with ±2.3% average accuracy — bankable by major lenders." },
  { icon: "🌀", title: "Wake Loss Modelling",             desc: "Multi-turbine array optimisation using Jensen, Gaussian, and deep-array wake models to minimise inter-turbine losses and maximise AEP." },
  { icon: "🗺️", title: "Automated Exclusion Mapping",    desc: "Automatically overlays protected areas, noise buffers, aviation zones, and grid constraints to flag viable turbine positions from day one." },
  { icon: "📅", title: "Seasonal Wind Profiling",         desc: "Detailed diurnal and seasonal breakdowns help operators align generation with peak demand periods and grid pricing signals." },
  { icon: "📄", title: "Bankable Energy Reports",         desc: "Outputs meet the requirements of major development finance institutions and independent engineers for project financing." },
];

const STEPS = [
  { num: "01", title: "Data Ingestion",     desc: "We pull historical ERA5 reanalysis, satellite imagery, and any available on-site met mast or LiDAR data into our modeling pipeline." },
  { num: "02", title: "Terrain Modeling",   desc: "High-resolution digital elevation models are processed to capture flow acceleration, channeling, and turbulence effects across the site." },
  { num: "03", title: "Layout Optimisation",desc: "Our algorithm iterates through thousands of turbine placement combinations to find the layout that maximises AEP within site constraints." },
  { num: "04", title: "Report Delivery",    desc: "You receive a full bankable energy yield report within 3 weeks, ready for lender submission and investment committee review." },
];

export default function WindAnalysisPage() {
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

        .sol-process { background: var(--cream); padding: 100px 80px; }
        .sol-process-inner { max-width: 1200px; margin: 0 auto; }
        .process-steps { display: grid; grid-template-columns: repeat(4,1fr); gap: 24px; margin-top: 48px; }
        .step-card {
          background: var(--white); border: 1px solid var(--border); border-radius: 16px; padding: 32px 24px;
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .step-card:hover { box-shadow: 0 8px 32px rgba(15,31,20,0.08); transform: translateY(-2px); }
        .step-num   { font-family: 'Instrument Serif', serif; font-style: italic; font-size: 13px; color: var(--ink-muted); margin-bottom: 20px; display: block; }
        .step-title { font-size: 16px; font-weight: 600; color: var(--ink); margin-bottom: 10px; }
        .step-desc  { font-size: 13.5px; line-height: 1.7; color: var(--ink-muted); }

        @media (max-width: 1200px) { .ph, .sol-features, .sol-process { padding-left: 48px; padding-right: 48px; } }
        @media (max-width: 1024px) {
          .ph { padding: calc(var(--nav-h) + 48px) 40px 64px; }
          .ph-inner { grid-template-columns: 1fr; gap: 48px; }
          .sol-features, .sol-process { padding-left: 40px; padding-right: 40px; }
          .features-grid { grid-template-columns: repeat(2,1fr); }
          .process-steps { grid-template-columns: repeat(2,1fr); }
        }
        @media (max-width: 768px) {
          .ph { padding: calc(var(--nav-h) + 32px) 28px 56px; }
          .sol-features, .sol-process { padding-left: 28px; padding-right: 28px; padding-top: 80px; padding-bottom: 80px; }
          .features-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 480px) {
          .ph { padding: calc(var(--nav-h) + 24px) 18px 48px; }
          .sol-features, .sol-process { padding-left: 18px; padding-right: 18px; padding-top: 64px; padding-bottom: 64px; }
          .sol-kpis { grid-template-columns: 1fr; }
          .process-steps { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="ph">
        <div className="ph-inner">
          <div>
            <div className="ph-breadcrumb">
              <a href="/solutions">Solutions</a><span>/</span><span>Wind Analysis</span>
            </div>
            <div className="ph-tag"><span className="ph-tag-dot" />Wind Analysis</div>
            <h1 className="ph-h1">Know your site<br />before you <em>break ground</em></h1>
            <p className="ph-body">
              Our AI-powered wind modeling engine produces bankable yield forecasts for any site
              on Earth — giving developers, lenders, and operators the certainty they need before
              a single foundation is poured.
            </p>
            <a href="/contact" className="btn-primary-lg">Request a Wind Study →</a>
          </div>
          <div className="sol-kpis">
            {[
              { v: "±2.3%", l: "Yield forecast accuracy" },
              { v: "180+",  l: "Countries modeled"        },
              { v: "3 wks", l: "Report delivery"          },
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
          <h2 className="section-h2">What the platform <em>delivers</em></h2>
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

      <section className="sol-process">
        <div className="sol-process-inner">
          <span className="section-tag">How It Works</span>
          <h2 className="section-h2">From raw data to <em>bankable report</em></h2>
          <div className="process-steps">
            {STEPS.map((s) => (
              <div key={s.num} className="step-card">
                <span className="step-num">{s.num}</span>
                <div className="step-title">{s.title}</div>
                <div className="step-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        headline={<>Ready to assess<br />your <em>site?</em></>}
        subline="Send us your coordinates and we'll return a preliminary wind resource summary within 48 hours — free of charge."
        primaryText="Request Wind Study →"
        primaryHref="/contact"
        secondaryText="Explore the full platform"
        secondaryHref="/features"
      />
    </main>
  );
}