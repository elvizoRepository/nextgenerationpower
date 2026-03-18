"use client";

import Image from "next/image";
import MarqueeStrip from "@/components/MarqueeStrip";
import CtaSection from "@/components/CtaSection";

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const HERO_STATS = [
  { val: "40 GW", label: "Installed Capacity" },
  { val: "12M+", label: "Customers Powered" },
  { val: "85M t", label: "CO₂ Offset" },
  { val: "180+", label: "Projects Delivered" },
];

const PILLARS = [
  {
    num: "01", icon: "⚡",
    title: "Energy Access",
    body: "We prioritise underserved communities — rural villages, island grids, and emerging-market cities — where reliable electricity transforms livelihoods overnight.",
    stat: "40M+", statLabel: "People with new electricity access",
  },
  {
    num: "02", icon: "🌍",
    title: "Climate Action",
    body: "Every megawatt-hour we generate displaces fossil generation. We track, verify, and publish our carbon impact in real time with third-party audit trails.",
    stat: "85M t", statLabel: "Tonnes of CO₂ offset to date",
  },
  {
    num: "03", icon: "👷",
    title: "Local Employment",
    body: "We require local-hire minimums on every project. Our installations have created over 28,000 permanent jobs and 120,000 construction-phase roles worldwide.",
    stat: "28K+", statLabel: "Permanent jobs created globally",
  },
  {
    num: "04", icon: "🏫",
    title: "Community Investment",
    body: "1% of every project's lifetime revenue is ring-fenced for community infrastructure — schools, clinics, clean water, and digital connectivity.",
    stat: "$240M", statLabel: "Invested in local communities",
  },
];

const CASE_STUDIES = [
  {
    region: "Australia",
    country: "Queensland & New South Wales",
    flag: "🇦🇺",
    headline: "Electrifying 400,000 rural homes",
    body: "Our 180 MW Australia portfolio — 14 sites across Queensland and New South Wales — ended energy poverty for 400,000 households that had never had reliable grid access. Average electricity cost fell 62% in the first year.",
    metrics: [{ val: "180 MW", label: "Installed" },
    { val: "400K", label: "Homes powered" },
    { val: "−62%", label: "Energy cost reduction" },],
    img: "/fone.png",
    accent: "#1e6b34",
  },
  {
    region: "Northern Europe",
    country: "Norway & Denmark",
    flag: "🇳🇴",
    headline: "Offshore wind replacing a coal region",
    body: "The Skagerrak Array — 340 MW across 68 offshore turbines — now supplies 14% of Denmark's western grid. It directly replaced the last two coal plants in the region, cutting local particulate emissions by 80%.",
    metrics: [
      { val: "340 MW", label: "Offshore capacity" },
      { val: "14%", label: "Regional grid share" },
      { val: "−80%", label: "Particulate reduction" },
    ],
    img: "/ftwo.png",
    accent: "#0f4d91",
  },
  {
    region: "South-East Asia",
    country: "Vietnam & Philippines",
    flag: "🇻🇳",
    headline: "Island microgrids ending diesel dependency",
    body: "27 island communities across Vietnam and the Philippines have replaced diesel generators with Next Generation Power hybrid microgrids. Average diesel spend fell by $1.4M per island per year, freeing budget for education and healthcare.",
    metrics: [
      { val: "27", label: "Islands converted" },
      { val: "$1.4M", label: "Saved per island / yr" },
      { val: "99.8%", label: "Grid uptime" },
    ],
    img: "/fthree.png",
    accent: "#b5322a",
  },
];

const SDG_GOALS = [
  { num: "SDG 7", label: "Affordable & Clean Energy", icon: "⚡" },
  { num: "SDG 8", label: "Decent Work & Economic Growth", icon: "💼" },
  { num: "SDG 11", label: "Sustainable Cities", icon: "🏙️" },
  { num: "SDG 13", label: "Climate Action", icon: "🌍" },
  { num: "SDG 15", label: "Life on Land", icon: "🌿" },
  { num: "SDG 17", label: "Partnerships for the Goals", icon: "🤝" },
];

const TARGETS = [
  { label: "Installed capacity", current: 40, target: 100, unit: "GW", year: "2030" },
  { label: "Customers powered", current: 12, target: 50, unit: "M", year: "2030" },
  { label: "CO₂ offset", current: 85, target: 500, unit: "M t", year: "2035" },
  { label: "Community investment", current: 240, target: 1000, unit: "M $", year: "2030" },
];

/* ─────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────── */
function ProgressBar({ current, target }: { current: number; target: number }) {
  const pct = Math.round((current / target) * 100);
  return (
    <div style={{ marginTop: 12 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
        <span style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", fontWeight: 500 }}>
          {pct}% of target
        </span>
        <span style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>100%</span>
      </div>
      <div style={{
        height: 6, borderRadius: 99, background: "rgba(255,255,255,0.08)", overflow: "hidden",
      }}>
        <div style={{
          height: "100%", borderRadius: 99,
          width: `${pct}%`,
          background: "linear-gradient(90deg, var(--green-sat), var(--lime))",
          transition: "width 1s ease",
        }} />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   PAGE
───────────────────────────────────────── */
export default function ImpactPage() {
  return (
    <main style={{ fontFamily: "'Instrument Sans', 'DM Sans', sans-serif", overflowX: "hidden" }}>
      <style>{`
        /* ── PAGE HERO ── */
        .ph {
          background: var(--ink);
          padding: calc(var(--nav-h) + 80px) 80px 80px;
          position: relative; overflow: hidden;
        }
        .ph::before {
          content: ''; position: absolute; top: -30%; right: -8%;
          width: 800px; height: 800px; border-radius: 50%;
          background: radial-gradient(circle, rgba(45,145,71,0.13) 0%, transparent 65%);
          pointer-events: none;
        }
        .ph::after {
          content: ''; position: absolute; bottom: -10%; left: -5%;
          width: 500px; height: 500px; border-radius: 50%;
          background: radial-gradient(circle, rgba(168,217,108,0.06) 0%, transparent 65%);
          pointer-events: none;
        }
        .ph-inner {
          max-width: 1200px; margin: 0 auto;
          position: relative; z-index: 2;
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
          font-size: clamp(42px, 6vw, 80px); font-weight: 400;
          color: var(--white); line-height: 1.06; letter-spacing: -0.025em;
          margin-bottom: 24px; max-width: 780px;
        }
        .ph-h1 em { font-style: italic; color: var(--lime); }
        .ph-body {
          font-size: 17px; line-height: 1.8; color: rgba(255,255,255,0.55);
          max-width: 560px; margin-bottom: 56px;
        }
        .ph-stats {
          display: grid; grid-template-columns: repeat(4,1fr); gap: 1px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 18px; overflow: hidden;
        }
        .ph-stat {
          padding: 32px 28px; background: rgba(255,255,255,0.03);
          transition: background 0.2s;
        }
        .ph-stat:hover { background: rgba(255,255,255,0.06); }
        .ph-stat-val {
          font-family: 'Instrument Serif', serif;
          font-size: clamp(32px,4vw,52px); color: white; line-height: 1; margin-bottom: 8px;
        }
        .ph-stat-label { font-size: 13px; color: rgba(255,255,255,0.4); font-weight: 500; }

        /* ── PILLARS ── */
        .pillars { background: var(--cream); padding: 100px 80px; }
        .pillars-inner { max-width: 1200px; margin: 0 auto; }
        .pillars-grid {
          display: grid; grid-template-columns: repeat(4,1fr); gap: 1px;
          background: var(--border); border: 1px solid var(--border);
          border-radius: 20px; overflow: hidden; margin-top: 56px;
        }
        .pillar-card {
          background: var(--white); padding: 36px 28px;
          transition: background 0.2s; position: relative;
        }
        .pillar-card:hover { background: var(--cream); }
        .pillar-card::after {
          content: ''; position: absolute; bottom: 0; left: 0; right: 0;
          height: 3px; background: var(--green);
          transform: scaleX(0); transition: transform 0.25s; transform-origin: left;
        }
        .pillar-card:hover::after { transform: scaleX(1); }
        .pillar-num {
          font-family: 'Instrument Serif', serif; font-style: italic;
          font-size: 12px; color: var(--ink-muted); margin-bottom: 20px; display: block;
        }
        .pillar-icon {
          width: 50px; height: 50px; border-radius: 13px;
          display: flex; align-items: center; justify-content: center;
          font-size: 22px; margin-bottom: 18px;
          border: 1px solid var(--border); background: var(--cream-2);
        }
        .pillar-title {
          font-size: 16px; font-weight: 700; color: var(--ink);
          margin-bottom: 10px; line-height: 1.3;
        }
        .pillar-body { font-size: 13.5px; line-height: 1.7; color: var(--ink-muted); margin-bottom: 24px; }
        .pillar-stat-val {
          font-family: 'Instrument Serif', serif; font-size: 28px;
          color: var(--green); line-height: 1; margin-bottom: 4px;
        }
        .pillar-stat-label { font-size: 11.5px; color: var(--ink-muted); font-weight: 500; }

        /* ── CASE STUDIES ── */
        .cases { background: var(--white); padding: 100px 80px; }
        .cases-inner { max-width: 1200px; margin: 0 auto; }
        .cases-list { display: flex; flex-direction: column; gap: 64px; margin-top: 56px; }
        .case-row {
          display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center;
        }
        .case-row.reverse { direction: rtl; }
        .case-row.reverse > * { direction: ltr; }
        .case-img-wrap {
          border-radius: 20px; overflow: hidden; aspect-ratio: 4/3; position: relative;
          box-shadow: 0 24px 64px rgba(15,31,20,0.12);
        }
        .case-region {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 11px; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--green); margin-bottom: 14px;
        }
        .case-h3 {
          font-family: 'Instrument Serif', serif;
          font-size: clamp(24px,3vw,38px); font-weight: 400; line-height: 1.15;
          color: var(--ink); letter-spacing: -0.02em; margin-bottom: 16px;
        }
        .case-body { font-size: 15px; line-height: 1.8; color: var(--ink-soft); margin-bottom: 28px; }
        .case-metrics { display: flex; gap: 0; border-top: 1px solid var(--border); padding-top: 24px; }
        .case-metric { flex: 1; padding-right: 20px; }
        .case-metric + .case-metric { padding-left: 20px; border-left: 1px solid var(--border); }
        .case-metric-val {
          font-family: 'Instrument Serif', serif; font-size: 26px;
          color: var(--green); line-height: 1; margin-bottom: 4px;
        }
        .case-metric-label { font-size: 11.5px; color: var(--ink-muted); font-weight: 500; }

        /* ── TARGETS ── */
        .targets { background: var(--ink); padding: 100px 80px; position: relative; overflow: hidden; }
        .targets::before {
          content: ''; position: absolute; top: -40%; right: -8%;
          width: 640px; height: 640px; border-radius: 50%;
          background: radial-gradient(circle, rgba(45,145,71,0.1) 0%, transparent 65%);
          pointer-events: none;
        }
        .targets-inner { max-width: 1200px; margin: 0 auto; position: relative; z-index: 2; }
        .targets-grid {
          display: grid; grid-template-columns: repeat(2,1fr); gap: 24px; margin-top: 56px;
        }
        .target-card {
          background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
          border-radius: 18px; padding: 32px 36px;
          transition: background 0.2s, border-color 0.2s;
        }
        .target-card:hover {
          background: rgba(255,255,255,0.07); border-color: rgba(168,217,108,0.2);
        }
        .target-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 4px; }
        .target-label { font-size: 14px; font-weight: 600; color: rgba(255,255,255,0.7); }
        .target-year {
          font-size: 11px; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase; color: var(--lime);
          background: rgba(168,217,108,0.1); padding: 4px 10px; border-radius: 20px;
        }
        .target-vals { display: flex; align-items: baseline; gap: 8px; margin-bottom: 4px; }
        .target-current {
          font-family: 'Instrument Serif', serif; font-size: 40px;
          color: white; line-height: 1;
        }
        .target-unit { font-size: 16px; color: rgba(255,255,255,0.5); }
        .target-of {
          font-size: 13px; color: rgba(255,255,255,0.3);
        }

        /* ── SDG ── */
        .sdg { background: var(--cream); padding: 100px 80px; }
        .sdg-inner { max-width: 1200px; margin: 0 auto; }
        .sdg-grid {
          display: grid; grid-template-columns: repeat(6,1fr); gap: 1px;
          background: var(--border); border: 1px solid var(--border);
          border-radius: 20px; overflow: hidden; margin-top: 56px;
        }
        .sdg-card {
          background: var(--white); padding: 28px 20px; text-align: center;
          transition: background 0.2s;
        }
        .sdg-card:hover { background: var(--cream); }
        .sdg-icon { font-size: 28px; margin-bottom: 12px; display: block; }
        .sdg-num {
          font-size: 10px; font-weight: 800; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--green); margin-bottom: 6px;
        }
        .sdg-label { font-size: 12px; font-weight: 600; color: var(--ink); line-height: 1.4; }

        /* ── RESPONSIVE ── */
        @media (max-width: 1200px) {
          .ph, .pillars, .cases, .targets, .sdg {
            padding-left: 48px; padding-right: 48px;
          }
          .pillars-grid { grid-template-columns: repeat(2,1fr); }
          .sdg-grid { grid-template-columns: repeat(3,1fr); }
        }
        @media (max-width: 1024px) {
          .ph { padding: calc(var(--nav-h) + 56px) 40px 64px; }
          .pillars, .cases, .targets, .sdg {
            padding-left: 40px; padding-right: 40px;
          }
          .ph-stats { grid-template-columns: repeat(2,1fr); }
          .case-row, .case-row.reverse { grid-template-columns: 1fr; direction: ltr; gap: 36px; }
          .case-row.reverse > * { direction: ltr; }
          .targets-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 768px) {
          .ph { padding: calc(var(--nav-h) + 40px) 28px 56px; }
          .pillars, .cases, .targets, .sdg {
            padding-left: 28px; padding-right: 28px;
            padding-top: 80px; padding-bottom: 80px;
          }
          .pillars-grid { grid-template-columns: 1fr; }
          .sdg-grid { grid-template-columns: repeat(2,1fr); }
          .cases-list { gap: 48px; }
        }
        @media (max-width: 480px) {
          .ph { padding: calc(var(--nav-h) + 28px) 18px 48px; }
          .pillars, .cases, .targets, .sdg {
            padding-left: 18px; padding-right: 18px;
            padding-top: 64px; padding-bottom: 64px;
          }
          .ph-stats { grid-template-columns: 1fr 1fr; }
          .ph-stat { padding: 24px 18px; }
          .case-metrics { flex-direction: column; gap: 16px; }
          .case-metric + .case-metric { border-left: none; padding-left: 0; border-top: 1px solid var(--border); padding-top: 16px; }
          .sdg-grid { grid-template-columns: repeat(2,1fr); }
          .target-card { padding: 24px; }
          .target-current { font-size: 32px; }
        }
      `}</style>

      {/* ── PAGE HERO ── */}
      <section className="ph">
        <div className="ph-inner">
          <div className="ph-tag">
            <span className="ph-tag-dot" />
            Our Impact
          </div>
          <h1 className="ph-h1">
            Real numbers.<br /><em>Real lives changed.</em>
          </h1>
          <p className="ph-body">
            Impact isn't a marketing word for us. Every project we deliver is independently
            verified, publicly reported, and tied to concrete targets we hold ourselves
            accountable to — year on year.
          </p>

          <div className="ph-stats">
            {HERO_STATS.map((s) => (
              <div key={s.label} className="ph-stat">
                <div className="ph-stat-val">{s.val}</div>
                <div className="ph-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MarqueeStrip
        bg="var(--green)"
        items={[
          { val: "40M+", label: "People with new energy access" },
          { val: "28K+", label: "Permanent jobs created" },
          { val: "$240M", label: "Community investment" },
          { val: "85M t", label: "CO₂ Offset" },
          { val: "50+", label: "Countries active" },
          { val: "B Corp", label: "Certified" },
        ]}
      />

      {/* ── IMPACT PILLARS ── */}
      <section className="pillars">
        <div className="pillars-inner">
          <span className="section-tag">How We Measure Impact</span>
          <h2 className="section-h2">Four dimensions of <em>meaningful change</em></h2>
          <p className="section-body" style={{ maxWidth: 560, marginTop: 14 }}>
            We track impact across energy access, climate, employment, and community wealth —
            because decarbonisation only succeeds when it works for people, not just the atmosphere.
          </p>

          <div className="pillars-grid">
            {PILLARS.map((p) => (
              <div key={p.title} className="pillar-card">
                <span className="pillar-num">{p.num}</span>
                <div className="pillar-icon">{p.icon}</div>
                <div className="pillar-title">{p.title}</div>
                <p className="pillar-body">{p.body}</p>
                <div className="pillar-stat-val">{p.stat}</div>
                <div className="pillar-stat-label">{p.statLabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ── */}
      <section className="cases">
        <div className="cases-inner">
          <span className="section-tag">On the Ground</span>
          <h2 className="section-h2">Impact stories from <em>three continents</em></h2>
          <p className="section-body" style={{ maxWidth: 540, marginTop: 14 }}>
            Numbers only tell part of the story. Here's what our work looks like in practice,
            in three very different parts of the world.
          </p>

          <div className="cases-list">
            {CASE_STUDIES.map((c, i) => (
              <div key={c.country} className={`case-row${i % 2 === 1 ? " reverse" : ""}`}>
                <div className="case-img-wrap">
                  <Image src={c.img} alt={c.headline} fill style={{ objectFit: "cover" }} />
                </div>
                <div>
                  <div className="case-region">
                    <span>{c.flag}</span>{c.region} — {c.country}
                  </div>
                  <h3 className="case-h3">{c.headline}</h3>
                  <p className="case-body">{c.body}</p>
                  <div className="case-metrics">
                    {c.metrics.map((m) => (
                      <div key={m.label} className="case-metric">
                        <div className="case-metric-val">{m.val}</div>
                        <div className="case-metric-label">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2030 TARGETS ── */}
      <section className="targets">
        <div className="targets-inner">
          <span className="section-tag" style={{ color: "var(--lime)" }}>2030 Commitments</span>
          <h2 className="section-h2" style={{ color: "white" }}>
            Where we're <em style={{ color: "var(--lime)" }}>headed</em>
          </h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.45)", maxWidth: 480, lineHeight: 1.75, marginTop: 14 }}>
            These targets are publicly binding. We report progress quarterly and they're
            independently verified each year.
          </p>

          <div className="targets-grid">
            {TARGETS.map((t) => (
              <div key={t.label} className="target-card">
                <div className="target-header">
                  <div className="target-label">{t.label}</div>
                  <div className="target-year">By {t.year}</div>
                </div>
                <div className="target-vals">
                  <div className="target-current">{t.current}</div>
                  <div className="target-unit">{t.unit}</div>
                  <div className="target-of">/ {t.target} {t.unit} target</div>
                </div>
                <ProgressBar current={t.current} target={t.target} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SDG ALIGNMENT ── */}
      <section className="sdg">
        <div className="sdg-inner">
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 32, flexWrap: "wrap" }}>
            <div>
              <span className="section-tag">UN Sustainable Development Goals</span>
              <h2 className="section-h2">Contributing to a <em>global framework</em></h2>
            </div>
            <p className="section-body" style={{ maxWidth: 340 }}>
              Our work is formally aligned to six of the seventeen UN SDGs. We report
              our contribution to each goal in our annual Impact Report.
            </p>
          </div>

          <div className="sdg-grid">
            {SDG_GOALS.map((g) => (
              <div key={g.num} className="sdg-card">
                <span className="sdg-icon">{g.icon}</span>
                <div className="sdg-num">{g.num}</div>
                <div className="sdg-label">{g.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        headline={<>Download our<br /><em>Impact Report</em></>}
        subline="Full methodology, third-party verification, and project-level data — published annually and freely available."
        primaryText="Download 2024 Report →"
        primaryHref="/impact-report-2024.pdf"
        secondaryText="Talk to our team"
        secondaryHref="/contact"
      />
    </main>
  );
}