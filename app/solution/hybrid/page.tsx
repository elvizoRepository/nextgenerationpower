"use client";

const CONFIGS = [
  { title: "Wind + Solar PV",        icon: "🌬️☀️", desc: "Co-located wind and solar arrays sharing grid connection infrastructure, maximizing land use and reducing LCOE by up to 18%." },
  { title: "Wind + Battery Storage", icon: "🌬️🔋", desc: "Pairing turbine output with BESS for firm, dispatchable clean power — meeting grid operator requirements for capacity contracts." },
  { title: "Wind + Green Hydrogen",  icon: "🌬️⚗️", desc: "Dedicated electrolysis facilities powered directly by wind, producing green hydrogen for industrial and transport applications." },
  { title: "Full Microgrid",         icon: "🌬️🏘️", desc: "Integrated wind, solar, storage, and load management for island, remote, or industrial microgrids with 100% renewable supply." },
];

const BENEFITS = [
  { stat: "↓30%", label: "LCOE vs single-source" },
  { stat: "↑92%", label: "Capacity factor"        },
  { stat: "24/7", label: "Dispatchable output"     },
  { stat: "100%", label: "Renewable supply"        },
];

export default function HybridSystemsPage() {
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
          background: conic-gradient(from 200deg at 70% 60%, rgba(45,145,71,.1) 0deg, transparent 60deg, rgba(182,232,122,.06) 120deg, transparent 180deg);
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

        /* Hero right stats grid */
        .benefits-grid {
          display: grid; grid-template-columns: repeat(2,1fr); gap: 1px;
          background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px; overflow: hidden;
        }
        .benefit-cell { background: rgba(255,255,255,0.03); padding: 28px 24px; transition: background 0.2s; }
        .benefit-cell:hover { background: rgba(255,255,255,0.06); }
        .benefit-stat  { font-family: 'Instrument Serif', serif; font-size: 34px; color: var(--lime); line-height: 1; margin-bottom: 6px; }
        .benefit-label { font-size: 11px; color: rgba(255,255,255,0.35); font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; }

        /* ── CONFIGS ── */
        .sol-configs { background: var(--white); padding: 100px 80px; }
        .sol-configs-inner { max-width: 1200px; margin: 0 auto; }
        .configs-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 24px; margin-top: 48px; }
        .config-card {
          border: 1px solid var(--border); border-radius: 16px; padding: 36px 32px;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .config-card:hover { border-color: var(--green); box-shadow: 0 12px 40px rgba(15,31,20,0.07); }
        .config-icon  { font-size: 32px; margin-bottom: 16px; display: block; }
        .config-title { font-size: 18px; font-weight: 600; color: var(--ink); margin-bottom: 10px; }
        .config-desc  { font-size: 14px; line-height: 1.75; color: var(--ink-muted); }

        /* ── HOW ── */
        .sol-how { background: var(--cream); padding: 100px 80px; }
        .sol-how-inner {
          max-width: 1200px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center;
        }
        .checklist { display: flex; flex-direction: column; gap: 14px; margin-top: 24px; }
        .check-item { display: flex; align-items: flex-start; gap: 12px; }
        .check-icon {
          width: 22px; height: 22px; border-radius: 50%; background: var(--green);
          display: flex; align-items: center; justify-content: center;
          color: #fff; font-size: 10px; flex-shrink: 0; margin-top: 1px;
        }
        .check-text { font-size: 14px; color: var(--ink); font-weight: 500; line-height: 1.5; }
        .how-visual {
          background: var(--ink); border-radius: 20px; padding: 40px;
          display: grid; grid-template-columns: 1fr 1fr; gap: 16px;
        }
        .how-block {
          background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px; padding: 20px; text-align: center;
        }
        .how-block-icon  { font-size: 24px; margin-bottom: 10px; display: block; }
        .how-block-label { font-size: 12px; color: rgba(255,255,255,0.5); font-weight: 500; }
        .how-connector   { grid-column: 1/-1; text-align: center; font-size: 20px; color: var(--lime); }

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
          .ph, .sol-configs, .sol-how, .sol-cta { padding-left: 48px; padding-right: 48px; }
        }
        @media (max-width: 1024px) {
          .ph { padding: calc(var(--nav-h) + 48px) 40px 64px; }
          .ph-inner { grid-template-columns: 1fr; gap: 48px; }
          .sol-configs, .sol-how, .sol-cta { padding-left: 40px; padding-right: 40px; }
          .sol-how-inner { grid-template-columns: 1fr; gap: 48px; }
          .configs-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 768px) {
          .ph { padding: calc(var(--nav-h) + 32px) 28px 56px; }
          .sol-configs, .sol-how, .sol-cta { padding-left: 28px; padding-right: 28px; padding-top: 80px; padding-bottom: 80px; }
        }
        @media (max-width: 480px) {
          .ph { padding: calc(var(--nav-h) + 24px) 18px 48px; }
          .sol-configs, .sol-how, .sol-cta { padding-left: 18px; padding-right: 18px; padding-top: 64px; padding-bottom: 64px; }
          .benefits-grid { grid-template-columns: 1fr; }
          .how-visual { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section className="ph">
        <div className="ph-inner">
          <div>
            <div className="ph-breadcrumb">
              <a href="/solutions">Solutions</a><span>/</span><span>Hybrid Systems</span>
            </div>
            <div className="ph-tag">
              <span className="ph-tag-dot" />
              Hybrid Systems
            </div>
            <h1 className="ph-h1">Wind +<br /><em>Everything</em><br />Integrated</h1>
            <p className="ph-body">
              Combine wind with solar, storage, or hydrogen to create dispatchable, firm clean power —
              engineered and operated as a single intelligent system.
            </p>
            <a href="/contact" className="btn-primary-lg">Design Your Hybrid →</a>
          </div>
          <div className="benefits-grid">
            {BENEFITS.map((b) => (
              <div key={b.label} className="benefit-cell">
                <div className="benefit-stat">{b.stat}</div>
                <div className="benefit-label">{b.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONFIGURATIONS ── */}
      <section className="sol-configs">
        <div className="sol-configs-inner">
          <span className="section-tag">Configurations</span>
          <h2 className="section-h2">Choose Your <em>Combination</em></h2>
          <div className="configs-grid">
            {CONFIGS.map((c) => (
              <div key={c.title} className="config-card">
                <span className="config-icon">{c.icon}</span>
                <div className="config-title">{c.title}</div>
                <div className="config-desc">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="sol-how">
        <div className="sol-how-inner">
          <div>
            <span className="section-tag">How It Works</span>
            <h2 className="section-h2">One System,<br /><em>Many Sources</em></h2>
            <p className="section-body" style={{ fontSize: 15, lineHeight: 1.8, color: "var(--ink-soft)" }}>
              Our hybrid controller aggregates generation from all sources and dispatches power based
              on grid signals, pricing, and storage state — automatically and in real time.
            </p>
            <div className="checklist">
              {[
                "Unified SCADA across all assets",
                "Automatic curtailment & dispatch optimization",
                "Single grid connection point",
                "Consolidated O&M and reporting",
              ].map((t) => (
                <div key={t} className="check-item">
                  <div className="check-icon">✓</div>
                  <div className="check-text">{t}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="how-visual">
            {[
              { icon: "🌬️", label: "Wind Turbines" },
              { icon: "☀️",  label: "Solar PV"      },
              { icon: "🔋", label: "Battery BESS"   },
              { icon: "⚗️", label: "Electrolyzer"   },
            ].map((b) => (
              <div key={b.label} className="how-block">
                <span className="how-block-icon">{b.icon}</span>
                <div className="how-block-label">{b.label}</div>
              </div>
            ))}
            <div className="how-connector">↓ Hybrid Controller ↓</div>
            <div style={{ gridColumn: "1/-1", background: "rgba(182,232,122,0.1)", border: "1px solid rgba(182,232,122,0.2)", borderRadius: 12, padding: 20, textAlign: "center" }}>
              <span style={{ fontSize: 24 }}>⚡</span>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", marginTop: 8 }}>Grid / Offtaker</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="sol-cta">
        <div className="sol-cta-inner">
          <h2>Design your <em>hybrid</em> system</h2>
          <p>Tell us your energy goals and site constraints — we'll model the optimal combination and return a full business case.</p>
          <a href="/contact" className="btn-white">Start Hybrid Design →</a>
        </div>
      </section>
    </main>
  );
}