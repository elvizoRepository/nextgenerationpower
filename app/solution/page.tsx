"use client";

import CtaSection from "@/components/CtaSection";
import MarqueeStrip from "@/components/MarqueeStrip";

const SOLUTIONS = [
  {
    href:    "/solution/onshore",
    num:     "01",
    icon:    "🌾",
    tag:     "Land-Based",
    title:   "Onshore Wind",
    desc:    "Our OT-X series turbines deliver reliable, cost-effective energy across IEC wind classes I–III — from rolling plains to mountainous ridgelines. Available in 4, 6, and 8 MW configurations.",
    kpis:    [{ val: "8 MW", label: "Max rated power" }, { val: "180m", label: "Max rotor diameter" }, { val: "30yr", label: "Design life" }],
    accent:  "var(--green)",
  },
  {
    href:    "/solution/offshore",
    num:     "02",
    icon:    "🌊",
    tag:     "Marine",
    title:   "Offshore Wind",
    desc:    "Fixed and floating offshore platforms engineered for the harshest saltwater environments. From nearshore monopiles to deep-water semi-submersibles reaching 300m depth.",
    kpis:    [{ val: "20 MW", label: "Max rated power" }, { val: "250m", label: "Max rotor diameter" }, { val: "300m", label: "Max water depth" }],
    accent:  "#1e6ab4",
  },
  {
    href:    "/solution/hybrid",
    num:     "03",
    icon:    "⚡",
    tag:     "Multi-Source",
    title:   "Hybrid Systems",
    desc:    "Combine wind with solar, battery storage, or green hydrogen into a single intelligent system — engineered for firm, dispatchable clean power and optimised LCOE.",
    kpis:    [{ val: "↓30%", label: "LCOE vs single-source" }, { val: "↑92%", label: "Capacity factor" }, { val: "24/7", label: "Dispatchable output" }],
    accent:  "var(--lime)",
  },
  {
    href:    "/solution/monitoring",
    num:     "04",
    icon:    "📡",
    tag:     "Operations Platform",
    title:   "Fleet Monitoring",
    desc:    "Cloud-native SCADA monitoring with AI fault prediction up to 72 hours in advance, automated work orders, and ESG reporting — for fleets of any size, anywhere.",
    kpis:    [{ val: "1s", label: "Data resolution" }, { val: "99.9%", label: "Platform uptime" }, { val: "72hr", label: "Fault prediction" }],
    accent:  "#7c3aed",
  },
];

const STATS = [
  { val: "40 GW",  label: "Installed Capacity"   },
  { val: "180+",   label: "Projects Delivered"    },
  { val: "50+",    label: "Countries Active"       },
  { val: "85M t",  label: "CO₂ Offset"            },
];

export default function SolutionsPage() {
  return (
    <main style={{ fontFamily: "'Instrument Sans', 'DM Sans', sans-serif", overflowX: "hidden" }}>
      <style>{`
        /* ── PAGE HERO ── */
        .ph {
          background: var(--cream);
          padding: calc(var(--nav-h) + 72px) 80px 80px;
        }
        .ph-inner {
          max-width: 1200px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 80px; align-items: end;
        }
        .ph-tag {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 11px; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--green); margin-bottom: 20px;
        }
        .ph-tag-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--green-sat); box-shadow: 0 0 0 3px rgba(61,184,95,0.2);
          animation: pulse 2.4s ease-in-out infinite; flex-shrink: 0;
        }
        @keyframes pulse {
          0%,100% { box-shadow: 0 0 0 3px rgba(61,184,95,0.2); }
          50%      { box-shadow: 0 0 0 6px rgba(61,184,95,0.08); }
        }
        .ph-h1 {
          font-family: 'Instrument Serif', Georgia, serif;
          font-size: clamp(40px, 5.5vw, 72px); font-weight: 400;
          color: var(--ink); line-height: 1.06; letter-spacing: -0.02em; margin: 0;
        }
        .ph-h1 em { font-style: italic; color: var(--green); }
        .ph-right { display: flex; flex-direction: column; justify-content: flex-end; gap: 24px; }
        .ph-body  { font-size: 16px; line-height: 1.8; color: var(--ink-soft); max-width: 440px; }
        .ph-stats { display: flex; gap: 0; border-top: 1px solid var(--border); padding-top: 24px; }
        .ph-stat  { flex: 1; padding-right: 20px; }
        .ph-stat + .ph-stat { padding-left: 20px; border-left: 1px solid var(--border); }
        .ph-stat:last-child  { padding-right: 0; }
        .ph-stat-val   { font-family: 'Instrument Serif', serif; font-size: 26px; color: var(--ink); line-height: 1; margin-bottom: 4px; }
        .ph-stat-label { font-size: 11px; font-weight: 600; color: var(--ink-muted); letter-spacing: 0.04em; }

        /* ── SOLUTIONS GRID ── */
        .sol-grid-section { background: var(--white); padding: 100px 80px; }
        .sol-grid-inner { max-width: 1200px; margin: 0 auto; }
        .sol-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 24px; margin-top: 56px;
        }
        .sol-card {
          border: 1px solid var(--border); border-radius: 20px;
          overflow: hidden; text-decoration: none;
          transition: box-shadow 0.25s, transform 0.22s, border-color 0.2s;
          background: var(--white); display: flex; flex-direction: column;
        }
        .sol-card:hover {
          box-shadow: 0 20px 56px rgba(15,31,20,0.1);
          transform: translateY(-3px);
          border-color: transparent;
        }
        .sol-card-top {
          padding: 40px 36px 32px;
          border-bottom: 1px solid var(--border);
          flex: 1;
        }
        .sol-card-header {
          display: flex; align-items: flex-start;
          justify-content: space-between; margin-bottom: 20px;
        }
        .sol-card-icon-wrap {
          width: 56px; height: 56px; border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          font-size: 26px; border: 1px solid var(--border); background: var(--cream);
        }
        .sol-card-num {
          font-family: 'Instrument Serif', serif; font-style: italic;
          font-size: 13px; color: var(--ink-muted);
        }
        .sol-card-tag {
          display: inline-block; font-size: 10px; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: var(--green); margin-bottom: 10px;
        }
        .sol-card-title {
          font-family: 'Instrument Serif', serif; font-size: 28px;
          font-weight: 400; color: var(--ink); line-height: 1.1;
          letter-spacing: -0.01em; margin-bottom: 14px;
        }
        .sol-card-desc {
          font-size: 14px; line-height: 1.75; color: var(--ink-muted);
        }
        .sol-card-kpis {
          display: flex; gap: 0;
          background: var(--cream); padding: 20px 36px;
        }
        .sol-kpi { flex: 1; }
        .sol-kpi + .sol-kpi { padding-left: 20px; border-left: 1px solid var(--border); margin-left: 20px; }
        .sol-kpi-val   { font-family: 'Instrument Serif', serif; font-size: 20px; color: var(--ink); line-height: 1; margin-bottom: 4px; }
        .sol-kpi-label { font-size: 11px; color: var(--ink-muted); font-weight: 500; }
        .sol-card-cta {
          display: flex; align-items: center; justify-content: space-between;
          padding: 18px 36px; border-top: 1px solid var(--border);
          font-size: 13px; font-weight: 600; color: var(--green);
          transition: gap 0.2s;
        }
        .sol-card:hover .sol-card-cta { background: var(--cream); }
        .sol-card-cta-arrow { font-size: 16px; transition: transform 0.2s; }
        .sol-card:hover .sol-card-cta-arrow { transform: translateX(4px); }

        /* ── WHY SECTION ── */
        .why-section { background: var(--ink); padding: 100px 80px; position: relative; overflow: hidden; }
        .why-section::before {
          content: ''; position: absolute; top: -30%; right: -5%;
          width: 600px; height: 600px; border-radius: 50%;
          background: radial-gradient(circle, rgba(45,145,71,0.12) 0%, transparent 65%);
          pointer-events: none;
        }
        .why-inner {
          max-width: 1200px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 80px; align-items: center; position: relative; z-index: 2;
        }
        .why-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
          background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px; overflow: hidden;
        }
        .why-cell { background: rgba(255,255,255,0.03); padding: 32px 28px; transition: background 0.2s; }
        .why-cell:hover { background: rgba(255,255,255,0.06); }
        .why-cell-icon  { font-size: 26px; margin-bottom: 14px; display: block; }
        .why-cell-title { font-size: 14px; font-weight: 700; color: #fff; margin-bottom: 8px; }
        .why-cell-desc  { font-size: 13px; line-height: 1.65; color: rgba(255,255,255,0.4); }
        .why-copy .section-tag { color: var(--lime); }
        .why-copy .section-h2  { color: var(--white); }
        .why-copy .section-h2 em { color: var(--lime); }
        .why-body { font-size: 15px; line-height: 1.8; color: rgba(255,255,255,0.5); margin-top: 16px; margin-bottom: 32px; max-width: 440px; }

        /* ── RESPONSIVE ── */
        @media (max-width: 1200px) {
          .ph, .sol-grid-section, .why-section { padding-left: 48px; padding-right: 48px; }
        }
        @media (max-width: 1024px) {
          .ph { padding: calc(var(--nav-h) + 56px) 40px 64px; }
          .ph-inner { grid-template-columns: 1fr; gap: 40px; }
          .sol-grid-section, .why-section { padding-left: 40px; padding-right: 40px; }
          .sol-grid { grid-template-columns: 1fr; }
          .why-inner { grid-template-columns: 1fr; gap: 48px; }
        }
        @media (max-width: 768px) {
          .ph { padding: calc(var(--nav-h) + 40px) 28px 56px; }
          .sol-grid-section, .why-section { padding-left: 28px; padding-right: 28px; padding-top: 80px; padding-bottom: 80px; }
          .ph-stats { flex-wrap: wrap; gap: 16px; }
          .why-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 480px) {
          .ph { padding: calc(var(--nav-h) + 28px) 18px 48px; }
          .sol-grid-section, .why-section { padding-left: 18px; padding-right: 18px; padding-top: 64px; padding-bottom: 64px; }
          .sol-card-top { padding: 28px 24px; }
          .sol-card-kpis { padding: 18px 24px; flex-direction: column; gap: 14px; }
          .sol-kpi + .sol-kpi { border-left: none; margin-left: 0; padding-left: 0; border-top: 1px solid var(--border); padding-top: 14px; }
          .sol-card-cta { padding: 16px 24px; }
          .ph-stats { flex-direction: column; }
          .ph-stat + .ph-stat { border-left: none; padding-left: 0; border-top: 1px solid var(--border); padding-top: 14px; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section className="ph">
        <div className="ph-inner">
          <div>
            <div className="ph-tag">
              <span className="ph-tag-dot" />
              Solutions
            </div>
            <h1 className="ph-h1">
              Wind energy,<br />built for every<br /><em>challenge</em>
            </h1>
          </div>
          <div className="ph-right">
            <p className="ph-body">
              Whether you're developing land-based utility projects, pushing into deep-water offshore,
              building hybrid microgrids, or operating an existing fleet — Olson has an end-to-end
              solution engineered for your context.
            </p>
            <div className="ph-stats">
              {STATS.map((s) => (
                <div key={s.label} className="ph-stat">
                  <div className="ph-stat-val">{s.val}</div>
                  <div className="ph-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <MarqueeStrip />

      {/* ── SOLUTIONS GRID ── */}
      <section className="sol-grid-section">
        <div className="sol-grid-inner">
          <span className="section-tag">All Solutions</span>
          <h2 className="section-h2">Choose your <em>starting point</em></h2>
          <p className="section-body" style={{ maxWidth: 520, marginTop: 14 }}>
            Each solution is a complete, end-to-end offering — not a product category. Click through
            to explore the full technical specs, process, and team behind each.
          </p>

          <div className="sol-grid">
            {SOLUTIONS.map((s) => (
              <a key={s.title} href={s.href} className="sol-card">
                <div className="sol-card-top">
                  <div className="sol-card-header">
                    <div className="sol-card-icon-wrap">{s.icon}</div>
                    <span className="sol-card-num">{s.num}</span>
                  </div>
                  <div className="sol-card-tag">{s.tag}</div>
                  <div className="sol-card-title">{s.title}</div>
                  <p className="sol-card-desc">{s.desc}</p>
                </div>
                <div className="sol-card-kpis">
                  {s.kpis.map((k) => (
                    <div key={k.label} className="sol-kpi">
                      <div className="sol-kpi-val">{k.val}</div>
                      <div className="sol-kpi-label">{k.label}</div>
                    </div>
                  ))}
                </div>
                <div className="sol-card-cta">
                  <span>Explore {s.title}</span>
                  <span className="sol-card-cta-arrow">→</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY OLSON ── */}
      <section className="why-section">
        <div className="why-inner">
          <div className="why-copy">
            <span className="section-tag">Why Olson</span>
            <h2 className="section-h2">One partner.<br /><em>Every stage.</em></h2>
            <p className="why-body">
              Most companies specialise in one part of the wind energy stack. We cover the entire
              lifecycle — which means no handoffs, no gaps, and full accountability from first survey
              to long-term operation.
            </p>
            <a href="/about" className="btn-primary-lg">Learn about us →</a>
          </div>
          <div className="why-grid">
            {[
              { icon: "🔧", title: "OEM-Independent",        desc: "We work with all major turbine manufacturers — no lock-in, no bias." },
              { icon: "🏗️", title: "Vertically Integrated",  desc: "Engineering, installation, O&M, and software under one roof." },
              { icon: "📊", title: "Performance-Guaranteed", desc: "AEP assurance contracts with real financial consequences for us." },
              { icon: "🌍", title: "50+ Countries Active",   desc: "Local teams operating to the same global standards everywhere." },
            ].map((w) => (
              <div key={w.title} className="why-cell">
                <span className="why-cell-icon">{w.icon}</span>
                <div className="why-cell-title">{w.title}</div>
                <p className="why-cell-desc">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        headline={<>Not sure which<br />solution fits <em>your project?</em></>}
        subline="Talk to our engineering team. We'll scope the right approach for your site, timeline, and budget — no commitment required."
        primaryText="Talk to an Engineer →"
        primaryHref="/contact"
        secondaryText="Explore our services"
        secondaryHref="/services"
      />
    </main>
  );
}