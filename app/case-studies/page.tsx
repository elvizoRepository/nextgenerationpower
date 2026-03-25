"use client";
import { companyConfig } from "@/lib/siteConfig";
import { useState } from "react";

const FILTERS = ["All", "Onshore", "Offshore", "Hybrid", "Monitoring"];

const CASES = [
  { title: "Scottish Highlands Array", tag: "Onshore", region: "Europe", mw: "320 MW", co2: "480kt/yr", summary: "Largest onshore wind project in Scotland, delivering clean power to 220,000 homes across the Grampian region.", highlight: "98.2% availability in Year 1" },
  { title: "North Sea Block 14 Offshore", tag: "Offshore", region: "Europe", mw: "800 MW", co2: "1.2Mt/yr", summary: "Utility-scale offshore array 80km from the Danish coast, using our OT-OS 16 MW turbines on monopile foundations.", highlight: "62% capacity factor" },
  { title: "Atacama Desert Hybrid", tag: "Hybrid", region: "South America", mw: "240 MW", co2: "320kt/yr", summary: "Wind + solar + BESS microgrid powering a copper mine with 100% renewable energy, replacing diesel generation entirely.", highlight: "100% renewable supply" },
  { title: "ERCOT Fleet Monitoring", tag: "Monitoring", region: "North America", mw: "2.1 GW", co2: "—", summary: "Real-time SCADA and predictive maintenance deployment across 14 wind farms in Texas, reducing O&M costs by 28%.", highlight: "↓28% O&M costs" },
  { title: "Patagonia Wind Corridor", tag: "Onshore", region: "South America", mw: "180 MW", co2: "260kt/yr", summary: "High-wind resource project in extreme Patagonian conditions, with custom cold-climate packages and remote O&M.", highlight: "Wind speed avg. 11.4 m/s" },
  { title: "Taiwan Strait Floating", tag: "Offshore", region: "Asia Pacific", mw: "120 MW", co2: "160kt/yr", summary: "Pilot floating offshore project in 80m water depths, demonstrating our semi-submersible platform in typhoon-zone conditions.", highlight: "First floating array in APAC" },
  { title: "Iceland Geothermal Hybrid", tag: "Hybrid", region: "Europe", mw: "96 MW", co2: "140kt/yr", summary: "Wind + geothermal hybrid for the Icelandic national grid, providing firm dispatchable power with near-zero fuel cost.", highlight: "LCOE €28/MWh" },
  { title: "Baltic Sea Operations Centre", tag: "Monitoring", region: "Europe", mw: "3.6 GW", co2: "—", summary: "Centralised operations and maintenance centre monitoring 9 offshore wind farms across the Baltic, staffed 24/7.", highlight: "9 farms, 1 platform" },
];

export default function CaseStudiesPage() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? CASES : CASES.filter(c => c.tag === filter);

  return (
    <main style={{ fontFamily:"'Instrument Sans','DM Sans',sans-serif", overflowX:"hidden" }}>
      <style>{`
        :root{--ink:#0f1f14;--ink-soft:#3a4f40;--ink-muted:#7a9182;--green:#2a7a45;--green-sat:#3db85f;--lime:#b6e87a;--cream:#f5f2eb;--white:#fff;--border:#e3ded4;--nav-h:72px;}

        /* ── HERO — matches homepage system ── */
        .cs-hero {
          background: var(--cream);
          min-height: 100vh;
          padding-top: var(--nav-h);
          padding-left: 80px;
          padding-right: 80px;
          padding-bottom: 0;
          border-bottom: 1px solid var(--border);
          display: flex; align-items: center;
          position: relative;
        }
        /* vertical breathing room on inner, not section */
        .cs-hero-inner {
          max-width: 1200px; margin: 0 auto; width: 100%;
          display: flex; align-items: flex-end;
          justify-content: space-between;
          gap: 48px; flex-wrap: wrap;
          padding: 72px 0;
        }

        .section-tag{display:inline-block;font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--green);margin-bottom:12px;}
        .cs-h1{font-family:'Instrument Serif',Georgia,serif;font-size:clamp(36px,5vw,64px);font-weight:400;line-height:1.06;color:var(--ink);letter-spacing:-.02em;margin:0;}
        .cs-h1 em{font-style:italic;color:var(--green);}
        .cs-hero-body{font-size:15px;line-height:1.8;color:var(--ink-muted);max-width:340px;}

        .cs-body{background:var(--white);padding:72px 80px 100px;}
        .cs-body-inner{max-width:1200px;margin:0 auto;}
        .filter-bar{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:48px;}
        .filter-btn{padding:8px 20px;border-radius:100px;font-size:13px;font-weight:500;border:1.5px solid var(--border);background:none;color:var(--ink-muted);cursor:pointer;transition:all .2s;}
        .filter-btn:hover{border-color:var(--green);color:var(--green);}
        .filter-btn.active{background:var(--green);border-color:var(--green);color:#fff;font-weight:600;}
        .cases-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:24px;}
        .case-card{border:1px solid var(--border);border-radius:16px;overflow:hidden;transition:box-shadow .2s,transform .2s;background:var(--white);text-decoration:none;display:block;}
        .case-card:hover{box-shadow:0 16px 48px rgba(15,31,20,.08);transform:translateY(-3px);}
        .case-card-top{background:var(--cream);padding:32px;display:flex;align-items:flex-start;justify-content:space-between;gap:16px;}
        .case-tag{padding:4px 12px;border-radius:100px;font-size:10px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;}
        .tag-onshore{background:rgba(42,122,69,.1);color:var(--green);}
        .tag-offshore{background:rgba(30,100,200,.1);color:#1a4a9a;}
        .tag-hybrid{background:rgba(182,232,122,.25);color:#3a6020;}
        .tag-monitoring{background:rgba(180,100,255,.1);color:#6622aa;}
        .case-mw{font-family:'Instrument Serif',serif;font-size:28px;color:var(--ink);text-align:right;line-height:1;}
        .case-mw-label{font-size:11px;color:var(--ink-muted);text-align:right;margin-top:3px;}
        .case-card-body{padding:28px 32px;}
        .case-region{font-size:11px;color:var(--ink-muted);font-weight:600;letter-spacing:.06em;text-transform:uppercase;margin-bottom:8px;}
        .case-title{font-family:'Instrument Serif',serif;font-size:22px;color:var(--ink);margin-bottom:10px;line-height:1.2;}
        .case-summary{font-size:13.5px;line-height:1.7;color:var(--ink-muted);margin-bottom:16px;}
        .case-highlight{display:inline-flex;align-items:center;gap:6px;font-size:12px;font-weight:600;color:var(--green);background:rgba(42,122,69,.08);padding:6px 12px;border-radius:100px;}
        .case-arrow{float:right;font-size:13px;color:var(--ink-muted);margin-top:2px;}

        /* responsive */
        @media(max-width:1200px){
          .cs-hero{padding-left:48px;padding-right:48px;}
          .cs-body{padding-left:48px;padding-right:48px;}
        }
        @media(max-width:1024px){
          .cs-hero{padding-left:40px;padding-right:40px;}
          .cs-body{padding-left:40px;padding-right:40px;}
          .cases-grid{grid-template-columns:1fr;}
        }
        @media(max-width:768px){
          .cs-hero{padding-left:24px;padding-right:24px;}
          .cs-hero-inner{flex-direction:column;align-items:flex-start;padding:48px 0;}
          .cs-body{padding-left:24px;padding-right:24px;padding-top:64px;padding-bottom:64px;}
        }
        @media(max-width:480px){
          .cs-hero{padding-left:16px;padding-right:16px;}
          .cs-hero-inner{padding:40px 0;}
          .cs-body{padding-left:16px;padding-right:16px;}
        }
      `}</style>

      {/* HERO */}
      <section className="cs-hero">
        <div className="cs-hero-inner">
          <div>
            <span className="section-tag">Success Stories</span>
            <h1 className="cs-h1">Real Projects,<br /><em>Real Impact</em></h1>
          </div>
          <p className="cs-hero-body">From 96 MW island microgrids to 800 MW offshore arrays — explore how {companyConfig.company.name} has delivered clean energy projects across 50 countries.</p>
        </div>
      </section>

      {/* BODY */}
      <section className="cs-body">
        <div className="cs-body-inner">
          <div className="filter-bar">
            {FILTERS.map(f=>(
              <button key={f} className={`filter-btn${filter===f?" active":""}`} onClick={()=>setFilter(f)}>{f}</button>
            ))}
          </div>
          <div className="cases-grid" key={filter}>
            {filtered.map(c=>{
              const tagClass = `case-tag tag-${c.tag.toLowerCase()}`;
              return (
                <a key={c.title} href="#" className="case-card">
                  <div className="case-card-top">
                    <span className={tagClass}>{c.tag}</span>
                    <div><div className="case-mw">{c.mw}</div><div className="case-mw-label">Installed</div></div>
                  </div>
                  <div className="case-card-body">
                    <div className="case-region">{c.region}</div>
                    <div className="case-title">{c.title}</div>
                    <div className="case-summary">{c.summary}</div>
                    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                      <span className="case-highlight">★ {c.highlight}</span>
                      <span className="case-arrow">Read more →</span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}