"use client";

const SPECS = [
  { label: "Rotor Diameter", value: "200–250m" },
  { label: "Hub Height",     value: "120–150m" },
  { label: "Rated Power",    value: "12–20 MW" },
  { label: "Water Depth",    value: "Up to 60m" },
  { label: "Design Life",    value: "35 years"  },
  { label: "Corrosion Class",value: "ISO C5-M"  },
];

const FEATURES = [
  { icon: "🌊", title: "Monopile & Jacket Foundations", desc: "Optimized foundation design for seabed conditions from soft clay to hard rock, engineered for 35-year service life." },
  { icon: "🔧", title: "Corrosion-Resistant Materials",  desc: "Marine-grade coatings, cathodic protection, and stainless internals designed for the harshest saltwater environments." },
  { icon: "🚁", title: "CTV & Helicopter Access",        desc: "Designed for safe crew transfer vessel and helicopter access for maintenance in Hs up to 2.5m." },
  { icon: "📡", title: "Offshore SCADA",                 desc: "Low-latency satellite and subsea cable connectivity with 99.9% uptime for continuous performance monitoring." },
  { icon: "⚓", title: "Floating Platform Option",       desc: "Semi-submersible floating foundation for water depths 60–300m, opening deep-water resource potential." },
  { icon: "🔋", title: "Subsea Cable Systems",           desc: "Full inter-array and export cable engineering and installation services, including HV and EHV options." },
];

export default function OffshoreWindPage() {
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
          background: radial-gradient(ellipse at 20% 80%, rgba(30,100,180,0.15) 0%, transparent 55%);
          pointer-events: none;
        }
        .ph::after {
          content: ''; position: absolute; top: -10%; right: -5%;
          width: 500px; height: 500px; border-radius: 50%;
          background: radial-gradient(circle, rgba(45,145,71,0.1) 0%, transparent 65%);
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

        .sol-kpis {
          display: grid; grid-template-columns: repeat(3,1fr); gap: 1px;
          background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px; overflow: hidden;
        }
        .sol-kpi { background: rgba(255,255,255,0.03); padding: 28px 24px; transition: background 0.2s; }
        .sol-kpi:hover { background: rgba(255,255,255,0.06); }
        .sol-kpi-val   { font-family: 'Instrument Serif', serif; font-size: 34px; color: #fff; line-height: 1; margin-bottom: 6px; }
        .sol-kpi-label { font-size: 11px; color: rgba(255,255,255,0.35); font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; }

        /* ── FEATURES ── */
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

        /* ── SPECS ── */
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
          .ph, .sol-features, .sol-specs, .sol-cta { padding-left: 48px; padding-right: 48px; }
        }
        @media (max-width: 1024px) {
          .ph { padding: calc(var(--nav-h) + 48px) 40px 64px; }
          .ph-inner { grid-template-columns: 1fr; gap: 48px; }
          .sol-features, .sol-specs, .sol-cta { padding-left: 40px; padding-right: 40px; }
          .features-grid { grid-template-columns: repeat(2,1fr); }
          .sol-specs-inner { grid-template-columns: 1fr; gap: 48px; }
        }
        @media (max-width: 768px) {
          .ph { padding: calc(var(--nav-h) + 32px) 28px 56px; }
          .sol-features, .sol-specs, .sol-cta { padding-left: 28px; padding-right: 28px; padding-top: 80px; padding-bottom: 80px; }
          .features-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 480px) {
          .ph { padding: calc(var(--nav-h) + 24px) 18px 48px; }
          .sol-features, .sol-specs, .sol-cta { padding-left: 18px; padding-right: 18px; padding-top: 64px; padding-bottom: 64px; }
          .sol-kpis { grid-template-columns: 1fr; }
          .specs-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section className="ph">
        <div className="ph-inner">
          <div>
            <div className="ph-breadcrumb">
              <a href="/solutions">Solutions</a><span>/</span><span>Offshore Wind</span>
            </div>
            <div className="ph-tag">
              <span className="ph-tag-dot" />
              Offshore Wind
            </div>
            <h1 className="ph-h1">Deep-Water<br /><em>Offshore</em><br />Wind Platforms</h1>
            <p className="ph-body">
              Harnessing stronger, more consistent winds at sea with our marine-grade turbine platforms,
              from nearshore fixed foundations to deep-water floating systems.
            </p>
            <a href="/contact" className="btn-primary-lg">Talk to Our Offshore Team →</a>
          </div>
          <div className="sol-kpis">
            {[
              { v: "20 MW", l: "Max Rated Power"    },
              { v: "250m",  l: "Max Rotor Diameter" },
              { v: "300m",  l: "Max Water Depth"    },
            ].map((k) => (
              <div key={k.l} className="sol-kpi">
                <div className="sol-kpi-val">{k.v}</div>
                <div className="sol-kpi-label">{k.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="sol-features">
        <div className="sol-features-inner">
          <span className="section-tag">Platform Features</span>
          <h2 className="section-h2">Built for the <em>Ocean</em></h2>
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

      {/* ── SPECS ── */}
      <section className="sol-specs">
        <div className="sol-specs-inner">
          <div>
            <span className="section-tag">Technical Specs</span>
            <h2 className="section-h2">Offshore <em>Performance</em></h2>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: "var(--ink-soft)", marginBottom: 16 }}>
              Our OT-OS series offshore turbines deliver industry-leading capacity factors of 55–65%,
              optimized for the consistent high-wind resource available at sea.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: "var(--ink-soft)" }}>
              Available in 12, 16, and 20 MW configurations with fixed monopile, jacket, or floating
              semi-submersible foundations.
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

      {/* ── CTA ── */}
      <section className="sol-cta">
        <div className="sol-cta-inner">
          <h2>Planning an <em>offshore</em> project?</h2>
          <p>Our offshore development team has delivered 40+ projects across the North Sea, Baltic, and Pacific.</p>
          <a href="/contact" className="btn-white">Speak to Our Offshore Team →</a>
        </div>
      </section>
    </main>
  );
}