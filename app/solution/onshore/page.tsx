"use client";

const SPECS = [
  { label: "Rotor Diameter", value: "130–180m" },
  { label: "Hub Height",     value: "80–160m"  },
  { label: "Rated Power",    value: "4–8 MW"   },
  { label: "Wind Class",     value: "IEC I–III" },
  { label: "Design Life",    value: "30 years"  },
  { label: "Availability",   value: ">98%"      },
];

const STEPS = [
  { num: "01", title: "Site Assessment",           desc: "AI-powered LiDAR wind mapping and terrain analysis to identify optimal turbine placement and maximize annual energy output." },
  { num: "02", title: "Grid Study & Permitting",   desc: "Full grid interconnect studies, environmental impact assessments, and permitting support across all jurisdictions." },
  { num: "03", title: "Installation & Commissioning", desc: "Turnkey installation by our certified field teams, with full commissioning and grid synchronization included." },
  { num: "04", title: "Operations & Maintenance",  desc: "24/7 remote monitoring, predictive maintenance, and on-call field support for the life of the project." },
];

export default function OnshoreWindPage() {
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
          background: radial-gradient(ellipse at 80% 50%, rgba(45,145,71,0.15) 0%, transparent 55%);
          pointer-events: none;
        }
        .ph::after {
          content: ''; position: absolute; inset: 0; pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E");
          opacity: 0.5; mix-blend-mode: screen;
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

        /* ── SPECS ── */
        .sol-specs { background: var(--white); padding: 100px 80px; }
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

        /* ── PROCESS ── */
        .sol-process { background: var(--cream); padding: 100px 80px; }
        .sol-process-inner { max-width: 1200px; margin: 0 auto; }
        .process-steps {
          display: grid; grid-template-columns: repeat(4,1fr); gap: 24px; margin-top: 48px;
        }
        .step-card {
          background: var(--white); border: 1px solid var(--border);
          border-radius: 16px; padding: 32px 24px;
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .step-card:hover { box-shadow: 0 8px 32px rgba(15,31,20,0.08); transform: translateY(-2px); }
        .step-num   { font-family: 'Instrument Serif', serif; font-style: italic; font-size: 13px; color: var(--ink-muted); margin-bottom: 20px; display: block; }
        .step-title { font-size: 16px; font-weight: 600; color: var(--ink); margin-bottom: 10px; }
        .step-desc  { font-size: 13.5px; line-height: 1.7; color: var(--ink-muted); }

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
          .ph, .sol-specs, .sol-process, .sol-cta { padding-left: 48px; padding-right: 48px; }
        }
        @media (max-width: 1024px) {
          .ph { padding: calc(var(--nav-h) + 48px) 40px 64px; }
          .ph-inner { grid-template-columns: 1fr; gap: 48px; }
          .sol-specs, .sol-process, .sol-cta { padding-left: 40px; padding-right: 40px; }
          .sol-specs-inner { grid-template-columns: 1fr; gap: 48px; }
          .process-steps { grid-template-columns: repeat(2,1fr); }
        }
        @media (max-width: 768px) {
          .ph { padding: calc(var(--nav-h) + 32px) 28px 56px; }
          .sol-specs, .sol-process, .sol-cta { padding-left: 28px; padding-right: 28px; padding-top: 80px; padding-bottom: 80px; }
        }
        @media (max-width: 480px) {
          .ph { padding: calc(var(--nav-h) + 24px) 18px 48px; }
          .sol-specs, .sol-process, .sol-cta { padding-left: 18px; padding-right: 18px; padding-top: 64px; padding-bottom: 64px; }
          .sol-kpis { grid-template-columns: 1fr; }
          .process-steps { grid-template-columns: 1fr; }
          .specs-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section className="ph">
        <div className="ph-inner">
          <div>
            <div className="ph-breadcrumb">
              <a href="/solutions">Solutions</a><span>/</span><span>Onshore Wind</span>
            </div>
            <div className="ph-tag">
              <span className="ph-tag-dot" />
              Onshore Wind
            </div>
            <h1 className="ph-h1">Land-Based<br /><em>Wind Power</em><br />at Scale</h1>
            <p className="ph-body">
              Our onshore turbine platform delivers reliable, cost-effective energy across diverse
              terrains — from rolling plains to mountainous ridgelines.
            </p>
            <a href="/contact" className="btn-primary-lg">Request Site Assessment →</a>
          </div>
          <div className="sol-kpis">
            {[
              { v: "8 MW", l: "Max Rated Power"    },
              { v: "180m", l: "Max Rotor Diameter" },
              { v: "30yr", l: "Design Life"         },
            ].map((k) => (
              <div key={k.l} className="sol-kpi">
                <div className="sol-kpi-val">{k.v}</div>
                <div className="sol-kpi-label">{k.l}</div>
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
            <h2 className="section-h2">Engineered for <em>Performance</em></h2>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: "var(--ink-soft)", marginBottom: 20 }}>
              Our OT-X series onshore turbines are optimized for high annual energy production across IEC
              wind classes I through III, with adaptive pitch control and smart wake management.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: "var(--ink-soft)" }}>
              Available in 4, 6, and 8 MW configurations with multiple hub height and rotor diameter
              combinations to match site conditions precisely.
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

      {/* ── PROCESS ── */}
      <section className="sol-process">
        <div className="sol-process-inner">
          <span className="section-tag">Our Process</span>
          <h2 className="section-h2">From Site to <em>Power Grid</em></h2>
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

      {/* ── CTA ── */}
      <section className="sol-cta">
        <div className="sol-cta-inner">
          <h2>Ready to develop your <em>onshore</em> project?</h2>
          <p>Our team will assess your site and provide a detailed feasibility report within 2 weeks.</p>
          <a href="/contact" className="btn-white">Request Site Assessment →</a>
        </div>
      </section>
    </main>
  );
}