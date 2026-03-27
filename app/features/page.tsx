"use client";

import Image from "next/image";
import { useState } from "react";
import CtaSection from "@/components/CtaSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import MarqueeStrip from "@/components/MarqueeStrip";
import { companyConfig } from "@/lib/siteConfig";

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const TABS = [
  { label: "Wind Analysis",    icon: "🌬️" },
  { label: "Monitoring",       icon: "⚡"  },
  { label: "Grid Integration", icon: "🔋"  },
  { label: "Carbon Reporting", icon: "♻️"  },
];

const TAB_CONTENT = [
  {
    headline: "AI-Powered Wind Analysis",
    sub:      "Smarter siting. Higher yields.",
    body:     "Our proprietary wind modeling engine ingests decades of historical atmospheric data, satellite imagery, and real-time meteorological feeds to build a high-resolution picture of wind potential at any location on Earth. Before a single foundation is poured, you know exactly what to expect.",
    bullets:  [
      "Sub-100m terrain resolution across all major geographies",
      "Wake interaction modeling for multi-turbine arrays",
      "P50 / P90 yield forecasting with bankable accuracy",
      "Seasonal and diurnal wind profile breakdowns",
      "Automated exclusion zone mapping for wildlife and noise",
    ],
    stat1: { val: "±2.3%",  label: "Average yield forecast accuracy" },
    stat2: { val: "180+",   label: "Countries modeled" },
    img: "/f1.png",
  },
  {
    headline: "Real-Time Performance Monitoring",
    sub:      "Every turbine. Every second.",
    body:     `The ${companyConfig.company.name} Operations Dashboard gives your team a live, unified view of every asset in your fleet — from a single turbine on a hillside to a 400-unit offshore array. Anomalies are caught before they become failures, and scheduled maintenance is replaced by condition-based interventions.`,
    bullets:  [
      "Sub-second SCADA telemetry with 99.97% uptime SLA",
      "ML-driven fault prediction up to 14 days in advance",
      "Automated work-order generation and technician routing",
      "Customisable KPI dashboards for operators and investors",
      "Native integrations with SAP, Maximo, and ServiceNow",
    ],
    stat1: { val: "200 hrs", label: "Average annual admin saved per site" },
    stat2: { val: "14 days", label: "Advance fault prediction window" },
    img: "/f2.png",
  },
  {
    headline: "Seamless Grid Integration",
    sub:      "Clean power, delivered reliably.",
    body:     "Connecting a wind asset to the grid has historically been complex and costly. Our Grid Bridge platform automates every step — from interconnection studies and protection relay configuration to real-time frequency response and battery dispatch optimisation.",
    bullets:  [
      "Automated interconnection study generation and filing",
      "Dynamic reactive power compensation (STATCOM-ready)",
      "BESS dispatch optimisation for price arbitrage",
      "Grid code compliance across 50+ regulatory regimes",
      "Virtual power plant (VPP) aggregation support",
    ],
    stat1: { val: "50+",    label: "Grid codes supported globally" },
    stat2: { val: "< 8 ms", label: "Frequency response latency" },
    img: "/f3.png",
  },
  {
    headline: "Certified Carbon Reporting",
    sub:      "Verified impact, audit-ready.",
    body:     "Sustainability reporting requirements are multiplying fast. Our Carbon Suite automates the entire lifecycle — from meter-level generation data to internationally recognised offset certificates — so your team spends time on strategy, not spreadsheets.",
    bullets:  [
      "ISO 14064 and GHG Protocol aligned methodology",
      "Automated I-REC and REGO certificate generation",
      "Scope 2 market-based and location-based reporting",
      "CDP, TCFD, and CSRD disclosure templates",
      "Third-party verifier access portal with full audit trail",
    ],
    stat1: { val: "6 yrs", label: "Avg. ahead of sustainability targets" },
    stat2: { val: "100%",  label: "Audit-ready documentation coverage" },
    img: `/${companyConfig.ceo.board}`,
  },
];

const COMPARE_ROWS = [
  ["AI yield forecasting",        "✓", "partial", "✗"],
  ["Sub-second telemetry",        "✓", "✗",       "✗"],
  ["14-day fault prediction",     "✓", "✗",       "✗"],
  ["50+ grid codes",              "✓", "partial", "✗"],
  ["Automated I-REC generation",  "✓", "✗",       "✗"],
  ["ISO 14064 carbon reporting",  "✓", "partial", "✗"],
  ["BESS dispatch optimisation",  "✓", "partial", "✗"],
  ["Third-party verifier portal", "✓", "✗",       "✗"],
  ["API + ERP integrations",      "✓", "partial", "partial"],
];

const TESTI_ITEMS = [
  {
    name:  "Sarah Mitchell",
    role:  "Director of Operations, GreenGrid Corp",
    stars: 5,
    image: "/sarah.png",
    text:  "The monitoring dashboard alone has eliminated over 200 hours of manual reporting per year. Our entire operations team wonders how we ever managed without it.",
  },
  {
    name:  "Omar Alami",
    role:  "CEO, AfriWind Solutions",
    stars: 5,
    image: "/omar.png",
    text:  `The wind analysis module gave us confidence to invest in sites we would previously have passed on. Three of our top five performing assets came from ${companyConfig.company.name} recommendations.`,
  },
  {
    name:  "Lena Bergström",
    role:  "Chief Sustainability Officer, NordicPower",
    stars: 5,
    image: "/lena.png",
    text:  "Carbon Suite made our CSRD disclosure a one-click export. What used to take three consultants six weeks now takes our in-house team less than a day.",
  },
];

/* ─────────────────────────────────────────
   HELPERS
───────────────────────────────────────── */
type CellProps = {
  v: string;
};

function Cell({ v }: CellProps) {
  if (v === "✓")       return <span style={{ color: "var(--green-sat)", fontSize: 16 }}>✓</span>;
  if (v === "✗")       return <span style={{ color: "#ccc", fontSize: 16 }}>✗</span>;
  if (v === "partial") return <span style={{ color: "#d4a017", fontSize: 13, fontWeight: 600 }}>Partial</span>;
  return <>{v}</>;
}

/* ─────────────────────────────────────────
   PAGE
───────────────────────────────────────── */
export default function FeaturesPage() {
  const [activeTab, setActiveTab] = useState(0);
  const active = TAB_CONTENT[activeTab];

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
        .ph-tag {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 11px; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--lime); margin-bottom: 22px;
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
          font-size: 16px; line-height: 1.75; color: rgba(255,255,255,0.58);
          max-width: 480px; margin-bottom: 36px;
        }
        .ph-ctas { display: flex; gap: 12px; flex-wrap: wrap; }
        .btn-lime {
          font-size: 14px; font-weight: 600; background: var(--green); color: var(--white);
          padding: 13px 28px; border-radius: 8px; text-decoration: none;
          transition: background 0.2s, transform 0.18s;
          display: inline-flex; align-items: center; gap: 8px;
        }
        .btn-lime:hover { background: var(--green-mid); transform: translateY(-1px); }
        .btn-ghost-light {
          font-size: 14px; font-weight: 500; color: rgba(255,255,255,0.65);
          text-decoration: none; padding: 13px 4px;
          display: inline-flex; align-items: center; gap: 6px; transition: color 0.2s;
        }
        .btn-ghost-light:hover { color: var(--lime); }

        /* Hero right mini-cards */
        .ph-cards {
          display: grid; grid-template-columns: 1fr 1fr; gap: 12px;
        }
        .ph-card {
          background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08);
          border-radius: 14px; padding: 22px 20px;
          transition: background 0.2s, border-color 0.2s; cursor: pointer;
        }
        .ph-card:hover, .ph-card.active {
          background: rgba(255,255,255,0.09); border-color: rgba(168,217,108,0.3);
        }
        .ph-card-icon { font-size: 24px; margin-bottom: 12px; display: block; }
        .ph-card-title {
          font-size: 14px; font-weight: 600; color: white; margin-bottom: 6px;
          font-family: 'Instrument Sans', sans-serif;
        }
        .ph-card-desc { font-size: 12.5px; color: rgba(255,255,255,0.42); line-height: 1.6; }

        /* ── OVERVIEW ── */
        .overview { background: var(--cream); padding: 100px 80px; }
        .overview-inner { max-width: 1200px; margin: 0 auto; }
        .overview-grid {
          display: grid; grid-template-columns: repeat(4,1fr); gap: 1px;
          background: var(--border); border: 1px solid var(--border);
          border-radius: 20px; overflow: hidden; margin-top: 56px;
        }
        .ov-card {
          background: var(--white); padding: 36px 28px;
          cursor: pointer; transition: background 0.2s; position: relative;
        }
        .ov-card::after {
          content: ''; position: absolute; bottom: 0; left: 0; right: 0;
          height: 3px; background: var(--green);
          transform: scaleX(0); transition: transform 0.25s; transform-origin: left;
        }
        .ov-card:hover { background: var(--cream); }
        .ov-card:hover::after, .ov-card.active::after { transform: scaleX(1); }
        .ov-card.active { background: var(--cream); }
        .ov-num {
          font-family: 'Instrument Serif', serif; font-style: italic;
          font-size: 12px; color: var(--ink-muted); margin-bottom: 20px; display: block;
        }
        .ov-icon {
          width: 50px; height: 50px; border-radius: 13px;
          display: flex; align-items: center; justify-content: center;
          font-size: 22px; margin-bottom: 16px;
          border: 1px solid var(--border); background: var(--cream-2);
        }
        .ov-title {
          font-family: 'Instrument Sans', sans-serif; font-size: 15px; font-weight: 600;
          color: var(--ink); margin-bottom: 10px; line-height: 1.3;
        }
        .ov-desc { font-size: 13px; line-height: 1.65; color: var(--ink-muted); }

        /* ── DEEP DIVE ── */
        .deep { background: var(--white); padding: 100px 80px; }
        .deep-inner { max-width: 1200px; margin: 0 auto; }

        .tab-bar {
          display: flex; gap: 4px; margin-top: 32px; margin-bottom: 64px;
          background: var(--cream); border-radius: 12px; padding: 5px;
          width: fit-content; flex-wrap: wrap;
        }
        .tab-btn {
          font-size: 13px; font-weight: 500; color: var(--ink-muted);
          background: transparent; border: none; cursor: pointer;
          padding: 9px 20px; border-radius: 8px;
          transition: background 0.2s, color 0.2s;
          display: flex; align-items: center; gap: 7px; white-space: nowrap;
        }
        .tab-btn:hover { color: var(--ink); }
        .tab-btn.active {
          background: var(--white); color: var(--ink); font-weight: 600;
          box-shadow: 0 1px 4px rgba(15,31,20,0.08);
        }
        .deep-content {
          display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center;
        }
        .deep-tag {
          font-size: 11px; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--green); margin-bottom: 8px; display: block;
        }
        .deep-h2 {
          font-family: 'Instrument Serif', serif;
          font-size: clamp(26px, 3.5vw, 42px); font-weight: 400; line-height: 1.1;
          color: var(--ink); letter-spacing: -0.02em; margin-bottom: 12px;
        }
        .deep-sub {
          font-family: 'Instrument Serif', serif; font-style: italic;
          font-size: 17px; color: var(--green); margin-bottom: 18px;
        }
        .deep-body { font-size: 15px; line-height: 1.8; color: var(--ink-soft); margin-bottom: 28px; }
        .deep-bullets { display: flex; flex-direction: column; gap: 11px; margin-bottom: 36px; }
        .deep-bullet { display: flex; align-items: flex-start; gap: 11px; }
        .bullet-check {
          width: 20px; height: 20px; border-radius: 50%; flex-shrink: 0;
          background: rgba(30,107,52,0.1); display: flex; align-items: center; justify-content: center;
          color: var(--green); font-size: 10px; margin-top: 2px;
        }
        .bullet-text { font-size: 13.5px; color: var(--ink); line-height: 1.55; }
        .deep-stats { display: flex; gap: 0; border-top: 1px solid var(--border); padding-top: 24px; }
        .deep-stat { flex: 1; padding-right: 24px; }
        .deep-stat + .deep-stat { padding-left: 24px; border-left: 1px solid var(--border); }
        .deep-stat-val {
          font-family: 'Instrument Serif', serif; font-size: 32px;
          color: var(--green); line-height: 1; margin-bottom: 5px;
        }
        .deep-stat-label { font-size: 12px; color: var(--ink-muted); font-weight: 500; }

        /* Deep dive right — image */
        .deep-img-wrap {
          border-radius: 20px; overflow: hidden;
          aspect-ratio: 4/3; position: relative;
          box-shadow: 0 24px 64px rgba(15,31,20,0.12);
        }
        .deep-badge {
          position: absolute; bottom: -20px; left: -20px; z-index: 4;
          background: var(--white); border: 1px solid var(--border);
          border-radius: 14px; padding: 16px 20px;
          box-shadow: 0 12px 36px rgba(15,31,20,0.12); min-width: 160px;
        }
        .deep-badge-val {
          font-family: 'Instrument Serif', serif; font-size: 26px;
          color: var(--green); line-height: 1; margin-bottom: 4px;
        }
        .deep-badge-label { font-size: 11px; color: var(--ink-muted); font-weight: 500; }

        /* ── COMPARISON ── */
        .compare { background: var(--cream); padding: 100px 80px; }
        .compare-inner { max-width: 1100px; margin: 0 auto; }
        .compare-table {
          width: 100%; border-collapse: collapse; margin-top: 56px;
          border: 1px solid var(--border); border-radius: 16px; overflow: hidden;
        }
        .compare-table th {
          padding: 18px 24px; text-align: left;
          font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase;
          background: var(--ink); color: rgba(255,255,255,0.4);
        }
        .compare-table th.th-olson { color: var(--lime); }
        .compare-table td {
          padding: 15px 24px; font-size: 14px; color: var(--ink);
          border-top: 1px solid var(--border); background: var(--white);
        }
        .compare-table tr:hover td { background: var(--cream); }
        .compare-table td.td-feat { font-weight: 600; }
        .compare-table td.td-olson { font-weight: 600; }

        /* ── RESPONSIVE ── */
        @media (max-width: 1200px) {
          .ph, .overview, .deep, .compare { padding-left: 48px; padding-right: 48px; }
          .overview-grid { grid-template-columns: repeat(2,1fr); }
        }
        @media (max-width: 1024px) {
          .ph { padding: calc(var(--nav-h) + 48px) 40px 64px; }
          .ph-inner { grid-template-columns: 1fr; gap: 48px; }
          .overview, .deep, .compare { padding-left: 40px; padding-right: 40px; }
          .deep-content { grid-template-columns: 1fr; gap: 48px; }
          .deep-content > div:last-child { order: -1; }
          .tab-bar { width: 100%; }
        }
        @media (max-width: 768px) {
          .ph { padding: calc(var(--nav-h) + 32px) 28px 56px; }
          .overview, .deep, .compare {
            padding-left: 28px; padding-right: 28px;
            padding-top: 80px; padding-bottom: 80px;
          }
          .overview-grid { grid-template-columns: 1fr; }
          .compare-table th, .compare-table td { padding: 12px 16px; font-size: 13px; }
        }
        @media (max-width: 480px) {
          .ph { padding: calc(var(--nav-h) + 24px) 18px 48px; }
          .overview, .deep, .compare {
            padding-left: 18px; padding-right: 18px;
            padding-top: 64px; padding-bottom: 64px;
          }
          .ph-cards { grid-template-columns: 1fr; }
          .deep-stats { flex-direction: column; gap: 16px; }
          .deep-stat + .deep-stat { border-left: none; padding-left: 0; border-top: 1px solid var(--border); padding-top: 16px; }
          .deep-badge { left: 10px; bottom: -14px; }
          .tab-btn { padding: 8px 12px; font-size: 12px; }
          /* Hide legacy column on small screens */
          .compare-table th:nth-child(4),
          .compare-table td:nth-child(4) { display: none; }
        }
      `}</style>

      {/* ── PAGE HERO ── */}
      <section className="ph">
        <div className="ph-inner">
          <div>
            <div className="ph-tag">
              <span className="ph-tag-dot" />
              Platform Features
            </div>
            <h1 className="ph-h1">
              Everything you need<br />to run <em>world-class</em><br />wind energy
            </h1>
            <p className="ph-body">
              From the first site assessment to the last carbon certificate, {companyConfig.company.name}'s platform covers
              every step of the energy lifecycle — built for operators, engineers, and sustainability
              teams alike.
            </p>
            <div className="ph-ctas">
              <a href="/register" className="btn-lime">Start Free Trial →</a>
              <a href="/contact"  className="btn-ghost-light">Talk to an engineer ↗</a>
            </div>
          </div>

          <div className="ph-cards">
            {[
              { icon: "🌬️", title: "Wind Analysis",    desc: "AI-driven yield forecasting and site suitability scoring.",         i: 0 },
              { icon: "⚡",  title: "Live Monitoring",  desc: "Real-time SCADA telemetry across your entire fleet.",               i: 1 },
              { icon: "🔋", title: "Grid Integration", desc: "Automated interconnection studies and BESS dispatch.",               i: 2 },
              { icon: "♻️", title: "Carbon Suite",     desc: "ISO-aligned offset certification and ESG disclosure.",               i: 3 },
            ].map((c) => (
              <div
                key={c.title}
                className={`ph-card${activeTab === c.i ? " active" : ""}`}
                onClick={() => setActiveTab(c.i)}
              >
                <span className="ph-card-icon">{c.icon}</span>
                <div className="ph-card-title">{c.title}</div>
                <div className="ph-card-desc">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MarqueeStrip
        bg="var(--green)"
        items={[
          { label: "Smart Wind Analysis",  val: "AI-Powered" },
          { label: "Carbon Certified",     val: "ISO 14001"  },
          { label: "Countries Active",     val: "50+"        },
          { label: "Fault Prediction",     val: "14-Day"     },
          { label: "Grid Codes Supported", val: "50+"        },
          { label: "Response Latency",     val: "< 8 ms"     },
        ]}
      />

      {/* ── OVERVIEW ── */}
      <section className="overview">
        <div className="overview-inner">
          <span className="section-tag">The Full Platform</span>
          <h2 className="section-h2">Four modules. <em>One platform.</em></h2>
          <p className="section-body" style={{ maxWidth: 560, marginTop: 14 }}>
            Each module is powerful standalone — together they form an end-to-end operating system
            for renewable energy assets.
          </p>

          <div className="overview-grid">
            {[
              { num: "01", icon: "🌬️", title: "Smart Wind Analysis",  desc: "AI-powered atmospheric modeling, terrain analysis, and bankable yield forecasting for any site on Earth." },
              { num: "02", icon: "⚡",  title: "Real-Time Monitoring",  desc: "Fleet-wide SCADA telemetry, predictive maintenance, and condition-based work orders — all in one dashboard." },
              { num: "03", icon: "🔋", title: "Grid Integration",      desc: "Automated interconnection studies, dynamic reactive power, and BESS dispatch across 50+ grid codes." },
              { num: "04", icon: "♻️", title: "Carbon Reporting",      desc: "Meter-to-certificate carbon accounting aligned with ISO 14064, GHG Protocol, CDP, TCFD, and CSRD." },
            ].map((f, i) => (
              <div
                key={f.title}
                className={`ov-card${activeTab === i ? " active" : ""}`}
                onClick={() => setActiveTab(i)}
              >
                <span className="ov-num">{f.num}</span>
                <div className="ov-icon">{f.icon}</div>
                <div className="ov-title">{f.title}</div>
                <p className="ov-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEEP DIVE ── */}
      <section className="deep">
        <div className="deep-inner">
          <span className="section-tag">Feature Deep Dive</span>
          <h2 className="section-h2">Built for the <em>details</em></h2>

          <div className="tab-bar">
            {TABS.map((t, i) => (
              <button
                key={t.label}
                className={`tab-btn${activeTab === i ? " active" : ""}`}
                onClick={() => setActiveTab(i)}
              >
                <span>{t.icon}</span>{t.label}
              </button>
            ))}
          </div>

          <div className="deep-content">
            {/* Left: copy */}
            <div>
              <span className="deep-tag">{TABS[activeTab].icon} {TABS[activeTab].label}</span>
              <h3 className="deep-h2">{active.headline}</h3>
              <p className="deep-sub">{active.sub}</p>
              <p className="deep-body">{active.body}</p>
              <ul className="deep-bullets" style={{ listStyle: "none" }}>
                {active.bullets.map((b) => (
                  <li key={b} className="deep-bullet">
                    <span className="bullet-check">✓</span>
                    <span className="bullet-text">{b}</span>
                  </li>
                ))}
              </ul>
              <div className="deep-stats">
                <div className="deep-stat">
                  <div className="deep-stat-val">{active.stat1.val}</div>
                  <div className="deep-stat-label">{active.stat1.label}</div>
                </div>
                <div className="deep-stat">
                  <div className="deep-stat-val">{active.stat2.val}</div>
                  <div className="deep-stat-label">{active.stat2.label}</div>
                </div>
              </div>
            </div>

            {/* Right: image */}
            <div style={{ position: "relative", paddingBottom: 20 }}>
              <div className="deep-img-wrap">
                <Image src={active.img} alt={active.headline} fill style={{ objectFit: "cover" }} />
              </div>
              <div className="deep-badge">
                <div className="deep-badge-val">{active.stat1.val}</div>
                <div className="deep-badge-label">{active.stat1.label}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section className="compare">
        <div className="compare-inner">
          <span className="section-tag">How We Compare</span>
          <h2 className="section-h2">Why operators <em>choose {companyConfig.company.name}</em></h2>
          <p className="section-body" style={{ maxWidth: 520, marginTop: 14 }}>
            We consistently outperform industry alternatives on the metrics that matter most to
            asset owners and operators.
          </p>

          <table className="compare-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th className="th-olson">{companyConfig.company.name} Platform</th>
                <th>Industry Average</th>
                <th>Legacy SCADA</th>
              </tr>
            </thead>
            <tbody>
              {COMPARE_ROWS.map(([feat, olson, avg, legacy]) => (
                <tr key={feat}>
                  <td className="td-feat">{feat}</td>
                  <td className="td-olson"><Cell v={olson} /></td>
                  <td><Cell v={avg} /></td>
                  <td><Cell v={legacy} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <TestimonialsSection
        tag="From Our Clients"
        headline={<>Platform results,<br /><em>in their words</em></>}
        items={TESTI_ITEMS}
      />

      <CtaSection
        headline={<>See the platform<br /><em>in action</em></>}
        subline="Book a 30-minute live demo with one of our platform engineers."
        primaryText="Book a Demo →"
        primaryHref="/register"
        secondaryText="Talk to sales"
        secondaryHref="/contact"
      />
    </main>
  );
}