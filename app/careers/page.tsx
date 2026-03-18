"use client";
import { useState } from "react";

const DEPTS = ["All", "Engineering", "Operations", "Software", "Sales", "Research"];

const JOBS = [
  { title: "Senior Turbine Design Engineer", dept: "Engineering", location: "Hamburg, Germany", type: "Full-time" },
  { title: "Offshore Project Manager", dept: "Operations", location: "Aberdeen, UK", type: "Full-time" },
  { title: "Full-Stack Engineer (SCADA)", dept: "Software", location: "Remote", type: "Full-time" },
  { title: "Wind Resource Analyst", dept: "Research", location: "Austin, TX", type: "Full-time" },
  { title: "Enterprise Account Executive", dept: "Sales", location: "New York, NY", type: "Full-time" },
  { title: "Embedded Systems Engineer", dept: "Engineering", location: "Munich, Germany", type: "Full-time" },
  { title: "Grid Integration Specialist", dept: "Engineering", location: "Copenhagen, Denmark", type: "Full-time" },
  { title: "DevOps / Platform Engineer", dept: "Software", location: "Remote", type: "Full-time" },
  { title: "Environmental Impact Researcher", dept: "Research", location: "Oslo, Norway", type: "Contract" },
  { title: "Field Service Technician", dept: "Operations", location: "Multiple Locations", type: "Full-time" },
  { title: "Carbon Reporting Analyst", dept: "Research", location: "London, UK", type: "Full-time" },
  { title: "Regional Sales Manager – APAC", dept: "Sales", location: "Singapore", type: "Full-time" },
];

const PERKS = [
  { icon: "🌍", title: "Global Impact", desc: "Work on projects that directly reduce carbon emissions at scale across 50+ countries." },
  { icon: "⚡", title: "Flexible Work", desc: "Hybrid and remote options available across most roles, with async-first culture." },
  { icon: "📈", title: "Equity & Growth", desc: "Competitive packages with equity, clear progression paths, and annual reviews." },
  { icon: "🌱", title: "Learning Budget", desc: "€3,000 annual budget for conferences, courses, and certifications." },
  { icon: "🏥", title: "Health & Wellness", desc: "Comprehensive health, dental, and vision. Monthly wellness stipend included." },
  { icon: "🧭", title: "Relocation Support", desc: "Full relocation assistance for international moves to our global offices." },
];

export default function CareersPage() {
  const [dept, setDept] = useState("All");
  const filtered = dept === "All" ? JOBS : JOBS.filter(j => j.dept === dept);

  return (
    <main style={{ fontFamily: "'Instrument Sans','DM Sans',sans-serif", overflowX: "hidden" }}>
      <style>{`
        :root { --ink:#0f1f14;--ink-soft:#3a4f40;--ink-muted:#7a9182;--green:#2a7a45;--green-sat:#3db85f;--lime:#b6e87a;--cream:#f5f2eb;--white:#fff;--border:#e3ded4;--nav-h:72px; }

        /* ── HERO — matches homepage system ── */
        .c-hero {
          background: var(--ink);
          min-height: 100vh;
          padding-top: var(--nav-h);
          padding-left: 80px;
          padding-right: 80px;
          padding-bottom: 0;
          position: relative; overflow: hidden;
          display: flex; align-items: center;
        }
        .c-hero::before {
          content:''; position:absolute; bottom:-20%; right:-5%;
          width:600px; height:600px; border-radius:50%;
          background:radial-gradient(circle,rgba(45,145,71,0.15) 0%,transparent 65%);
          pointer-events:none;
        }
        /* vertical breathing room lives on the inner, not the section */
        .c-hero-inner {
          max-width: 1200px; margin: 0 auto; width: 100%;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 80px; align-items: stretch;
          position: relative; z-index: 2;
          padding: 72px 0;
        }
        .c-hero-left { display:flex; flex-direction:column; justify-content:center; }
        .c-hero-right { display:flex; align-items:center; }

        .c-tag { display:inline-flex; align-items:center; gap:8px; font-size:11px; font-weight:600; letter-spacing:.12em; text-transform:uppercase; color:var(--lime); margin-bottom:20px; }
        .c-tag-dot { width:6px; height:6px; border-radius:50%; background:var(--lime); box-shadow:0 0 0 3px rgba(182,232,122,.2); animation:plime 2.4s ease-in-out infinite; }
        @keyframes plime { 0%,100%{box-shadow:0 0 0 3px rgba(182,232,122,.2)}50%{box-shadow:0 0 0 7px rgba(182,232,122,.06)} }
        .c-h1 { font-family:'Instrument Serif',Georgia,serif; font-size:clamp(38px,5vw,68px); font-weight:400; line-height:1.06; color:#fff; letter-spacing:-.02em; margin:0 0 20px; }
        .c-h1 em { font-style:italic; color:var(--lime); }
        .c-body { font-size:15px; line-height:1.8; color:rgba(255,255,255,.45); margin-bottom:32px; max-width:420px; }
        .c-hero-stats { width:100%; display:grid; grid-template-columns:repeat(3,1fr); gap:1px; background:rgba(255,255,255,.07); border:1px solid rgba(255,255,255,.07); border-radius:16px; overflow:hidden; }
        .c-hero-stat { background:rgba(255,255,255,.03); padding:28px 24px; }
        .c-stat-val { font-family:'Instrument Serif',serif; font-size:36px; color:#fff; line-height:1; margin-bottom:6px; }
        .c-stat-label { font-size:11px; color:rgba(255,255,255,.35); font-weight:600; letter-spacing:.08em; text-transform:uppercase; }

        /* perks */
        .c-perks { background:var(--cream); padding:96px 80px; }
        .c-perks-inner { max-width:1200px; margin:0 auto; }
        .section-tag { display:inline-block; font-size:11px; font-weight:700; letter-spacing:.12em; text-transform:uppercase; color:var(--green); margin-bottom:12px; }
        .section-h2 { font-family:'Instrument Serif',Georgia,serif; font-size:clamp(28px,4vw,48px); font-weight:400; line-height:1.1; color:var(--ink); letter-spacing:-.02em; margin:0 0 48px; }
        .section-h2 em { font-style:italic; color:var(--green); }
        .perks-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; }
        .perk-card { background:var(--white); border:1px solid var(--border); border-radius:16px; padding:32px 28px; transition:transform .2s,box-shadow .2s; }
        .perk-card:hover { transform:translateY(-4px); box-shadow:0 16px 48px rgba(15,31,20,.08); }
        .perk-icon { font-size:28px; margin-bottom:16px; display:block; }
        .perk-title { font-size:16px; font-weight:600; color:var(--ink); margin-bottom:8px; }
        .perk-desc { font-size:13.5px; line-height:1.7; color:var(--ink-muted); }

        /* jobs */
        .c-jobs { background:var(--white); padding:96px 80px; }
        .c-jobs-inner { max-width:1200px; margin:0 auto; }
        .dept-filter { display:flex; gap:8px; flex-wrap:wrap; margin-bottom:40px; }
        .dept-btn { padding:8px 18px; border-radius:100px; font-size:13px; font-weight:500; border:1.5px solid var(--border); background:none; color:var(--ink-muted); cursor:pointer; transition:all .2s; }
        .dept-btn:hover { border-color:var(--green); color:var(--green); }
        .dept-btn.active { background:var(--green); border-color:var(--green); color:#fff; font-weight:600; }
        .jobs-list { display:flex; flex-direction:column; gap:1px; background:var(--border); border:1px solid var(--border); border-radius:16px; overflow:hidden; }
        .job-row { background:var(--white); padding:24px 28px; display:flex; align-items:center; justify-content:space-between; gap:16px; transition:background .15s; cursor:pointer; text-decoration:none; }
        .job-row:hover { background:var(--cream); }
        .job-title { font-size:15px; font-weight:600; color:var(--ink); margin-bottom:4px; }
        .job-meta { display:flex; gap:12px; font-size:12px; color:var(--ink-muted); }
        .job-tag { padding:4px 12px; border-radius:100px; font-size:11px; font-weight:600; letter-spacing:.04em; }
        .job-tag-ft { background:rgba(42,122,69,.1); color:var(--green); }
        .job-tag-ct { background:rgba(182,232,122,.2); color:#3a6020; }
        .job-apply { font-size:13px; font-weight:600; color:var(--green); display:flex; align-items:center; gap:6px; flex-shrink:0; transition:gap .2s; }
        .job-row:hover .job-apply { gap:10px; }

        /* cta */
        .c-cta { background:var(--ink); padding:96px 80px; text-align:center; position:relative; overflow:hidden; }
        .c-cta::before { content:''; position:absolute; inset:0; background:radial-gradient(ellipse at 50% 0%,rgba(45,145,71,.18) 0%,transparent 60%); pointer-events:none; }
        .c-cta-inner { max-width:640px; margin:0 auto; position:relative; z-index:2; }
        .c-cta h2 { font-family:'Instrument Serif',serif; font-size:clamp(32px,4vw,52px); font-weight:400; color:#fff; letter-spacing:-.02em; margin-bottom:16px; }
        .c-cta h2 em { font-style:italic; color:var(--lime); }
        .c-cta p { font-size:15px; color:rgba(255,255,255,.45); line-height:1.75; margin-bottom:36px; }
        .btn-primary-lg { display:inline-flex; align-items:center; gap:8px; padding:14px 28px; background:var(--green-sat); color:#fff; font-size:14px; font-weight:600; border-radius:100px; text-decoration:none; transition:background .2s,transform .15s; }
        .btn-primary-lg:hover { background:#2fa050; transform:translateY(-1px); }

        /* responsive */
        @media(max-width:1200px){
          .c-hero { padding-left:48px; padding-right:48px; }
          .c-perks,.c-jobs,.c-cta { padding-left:48px; padding-right:48px; }
        }
        @media(max-width:1024px){
          .c-hero { padding-left:40px; padding-right:40px; }
          .c-hero-inner { grid-template-columns:1fr; gap:48px; padding:56px 0; }
          .c-hero-right { align-items:flex-start; }
          .c-perks,.c-jobs,.c-cta { padding-left:40px; padding-right:40px; }
          .perks-grid { grid-template-columns:repeat(2,1fr); }
        }
        @media(max-width:768px){
          .c-hero { padding-left:24px; padding-right:24px; }
          .c-hero-inner { padding:48px 0; }
          .c-perks,.c-jobs,.c-cta { padding-left:24px; padding-right:24px; padding-top:64px; padding-bottom:64px; }
          .perks-grid { grid-template-columns:1fr; }
        }
        @media(max-width:480px){
          .c-hero { padding-left:16px; padding-right:16px; }
          .c-hero-inner { padding:40px 0; }
          .c-perks,.c-jobs,.c-cta { padding-left:16px; padding-right:16px; }
          .c-hero-stats { grid-template-columns:1fr; }
        }
      `}</style>

      {/* HERO */}
      <section className="c-hero">
        <div className="c-hero-inner">
          <div className="c-hero-left">
            <div className="c-tag"><span className="c-tag-dot"/>Join Our Team</div>
            <h1 className="c-h1">Build the <em>Future</em><br />of Clean Energy</h1>
            <p className="c-body">We're a team of engineers, scientists, and operators on a mission to make wind energy the world's primary power source. Come work on problems that matter.</p>
            <a href="#open-roles" className="btn-primary-lg">See Open Roles →</a>
          </div>
          <div className="c-hero-right">
            <div className="c-hero-stats">
              {[{v:"420+",l:"Team Members"},{v:"28",l:"Nationalities"},{v:"4.8★",l:"Glassdoor Rating"}].map(s=>(
                <div key={s.l} className="c-hero-stat">
                  <div className="c-stat-val">{s.v}</div>
                  <div className="c-stat-label">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PERKS */}
      <section className="c-perks">
        <div className="c-perks-inner">
          <span className="section-tag">Why Next Generation Power</span>
          <h2 className="section-h2">More Than a <em>Job</em></h2>
          <div className="perks-grid">
            {PERKS.map(p=>(
              <div key={p.title} className="perk-card">
                <span className="perk-icon">{p.icon}</span>
                <div className="perk-title">{p.title}</div>
                <div className="perk-desc">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOBS */}
      <section id="open-roles" className="c-jobs">
        <div className="c-jobs-inner">
          <span className="section-tag">Open Positions</span>
          <h2 className="section-h2">Find Your <em>Role</em></h2>
          <div className="dept-filter">
            {DEPTS.map(d=>(
              <button key={d} className={`dept-btn${dept===d?" active":""}`} onClick={()=>setDept(d)}>{d}</button>
            ))}
          </div>
          <div className="jobs-list">
            {filtered.map(j=>(
              <a key={j.title} href="#" className="job-row">
                <div>
                  <div className="job-title">{j.title}</div>
                  <div className="job-meta"><span>{j.dept}</span><span>·</span><span>{j.location}</span></div>
                </div>
                <div style={{display:"flex",alignItems:"center",gap:16}}>
                  <span className={`job-tag ${j.type==="Full-time"?"job-tag-ft":"job-tag-ct"}`}>{j.type}</span>
                  <span className="job-apply">Apply →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="c-cta">
        <div className="c-cta-inner">
          <h2>Don't see your <em>role?</em></h2>
          <p>We're always looking for exceptional people. Send us your CV and tell us how you'd contribute to the clean energy transition.</p>
          <a href="mailto:careers@nextgenerationpower.com" className="btn-primary-lg">Send Open Application →</a>
        </div>
      </section>
    </main>
  );
}