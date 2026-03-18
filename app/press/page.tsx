"use client";

const RELEASES = [
  { date: "Mar 2025", title: "Next Generation Power Reaches 40 GW Installed Capacity Milestone", tag: "Milestone" },
  { date: "Jan 2025", title: "Partnership Announced with Nordic Grid Authority for Offshore Expansion", tag: "Partnership" },
  { date: "Nov 2024", title: "Series D Funding Round of $420M Closed to Accelerate APAC Growth", tag: "Funding" },
  { date: "Sep 2024", title: "Next Generation Power Launches Next-Gen OT-X9 Turbine Platform at WindEurope 2024", tag: "Product" },
  { date: "Jul 2024", title: "Q2 2024 Report: 12M Customers, 85M Tonnes CO₂ Offset", tag: "Report" },
  { date: "Apr 2024", title: "Next Generation Power Named to TIME100 Most Influential Companies", tag: "Award" },
];

const ASSETS = [
  { label: "Logo Pack (SVG + PNG)", size: "2.4 MB", icon: "🎨" },
  { label: "Brand Guidelines PDF",  size: "8.1 MB", icon: "📐" },
  { label: "Executive Headshots",   size: "34 MB",  icon: "👤" },
  { label: "Product Photography",   size: "120 MB", icon: "📷" },
  { label: "Company Fact Sheet",    size: "1.2 MB", icon: "📄" },
  { label: "B-Roll Footage (4K)",   size: "2.1 GB", icon: "🎬" },
];

const EXECS = [
  { name: "Liam Philip",     title: "Founder & CEO",           bio: "Founder of Next Generation Power, Connect with Eric on LinkedIn at linkedin.com/in/eric-olson-8548543b4.", initials: "EO" },
  { name: "Ingrid Solberg", title: "Chief Technology Officer", bio: "PhD in Computational Fluid Dynamics, TU Delft. Led the team that built our AI wind modeling engine.",                                                               initials: "IS" },
  { name: "Marcus Webb",    title: "Chief Operating Officer",  bio: "Previously VP Operations at Ørsted. Oversees 180+ active projects across six continents.",                                                                            initials: "MW" },
];

export default function PressPage() {
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
          color: var(--ink); line-height: 1.06; letter-spacing: -0.02em;
          margin-bottom: 0;
        }
        .ph-h1 em { font-style: italic; color: var(--green); }
        .ph-right { display: flex; flex-direction: column; justify-content: flex-end; gap: 20px; }
        .ph-body {
          font-size: 16px; line-height: 1.8; color: var(--ink-soft); max-width: 440px;
        }
        .ph-ctas { display: flex; gap: 12px; flex-wrap: wrap; }

        /* ── CONTACT BAR ── */
        .press-contact { background: var(--green); padding: 20px 80px; }
        .press-contact-inner {
          max-width: 1200px; margin: 0 auto;
          display: flex; align-items: center; justify-content: space-between;
          gap: 16px; flex-wrap: wrap;
        }
        .press-contact-text  { font-size: 14px; font-weight: 500; color: #fff; }
        .press-contact-email { font-size: 14px; font-weight: 700; color: var(--lime); text-decoration: none; }
        .press-contact-email:hover { text-decoration: underline; }

        /* ── ASSETS ── */
        .p-assets { background: var(--white); padding: 100px 80px; }
        .p-assets-inner { max-width: 1200px; margin: 0 auto; }
        .assets-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 40px;
        }
        .asset-card {
          border: 1px solid var(--border); border-radius: 14px; padding: 24px 20px;
          display: flex; align-items: center; gap: 16px;
          transition: border-color 0.2s, box-shadow 0.2s; cursor: pointer;
          background: var(--white); text-decoration: none;
        }
        .asset-card:hover { border-color: var(--green); box-shadow: 0 8px 32px rgba(15,31,20,0.07); }
        .asset-icon  { font-size: 28px; flex-shrink: 0; }
        .asset-label { font-size: 14px; font-weight: 600; color: var(--ink); margin-bottom: 3px; }
        .asset-size  { font-size: 12px; color: var(--ink-muted); }
        .asset-dl    { margin-left: auto; font-size: 12px; color: var(--green); font-weight: 600; flex-shrink: 0; }

        /* ── RELEASES ── */
        .p-releases { background: var(--cream); padding: 100px 80px; }
        .p-releases-inner { max-width: 1200px; margin: 0 auto; }
        .releases-list {
          display: flex; flex-direction: column; gap: 1px;
          background: var(--border); border: 1px solid var(--border);
          border-radius: 16px; overflow: hidden; margin-top: 40px;
        }
        .release-row {
          background: var(--white); padding: 22px 28px;
          display: flex; align-items: center; gap: 20px;
          text-decoration: none; transition: background 0.15s;
        }
        .release-row:hover { background: #f0f7f2; }
        .release-date  { font-size: 12px; color: var(--ink-muted); font-weight: 600; flex-shrink: 0; min-width: 64px; }
        .release-tag   { padding: 3px 10px; border-radius: 100px; font-size: 10px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; flex-shrink: 0; }
        .tag-milestone   { background: rgba(182,232,122,0.25); color: #3a6020; }
        .tag-partnership { background: rgba(42,122,69,0.1);    color: var(--green); }
        .tag-funding     { background: rgba(255,200,80,0.15);  color: #8a5e00; }
        .tag-product     { background: rgba(80,140,255,0.1);   color: #2244aa; }
        .tag-report      { background: rgba(180,100,255,0.1);  color: #6622aa; }
        .tag-award       { background: rgba(255,100,80,0.1);   color: #aa2211; }
        .release-title { font-size: 14px; font-weight: 500; color: var(--ink); flex: 1; }
        .release-arrow { color: var(--ink-muted); font-size: 13px; flex-shrink: 0; transition: color 0.2s; }
        .release-row:hover .release-arrow { color: var(--green); }

        /* ── EXECS ── */
        .p-execs { background: var(--ink); padding: 100px 80px; position: relative; overflow: hidden; }
        .p-execs::before {
          content: ''; position: absolute; top: -30%; right: -5%;
          width: 600px; height: 600px; border-radius: 50%;
          background: radial-gradient(circle, rgba(45,145,71,0.12) 0%, transparent 65%);
          pointer-events: none;
        }
        .p-execs-inner { max-width: 1200px; margin: 0 auto; position: relative; z-index: 2; }
        .execs-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 48px; }
        .exec-card {
          background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px; padding: 32px 28px;
          transition: background 0.2s;
        }
        .exec-card:hover { background: rgba(255,255,255,0.07); }
        .exec-avatar {
          width: 52px; height: 52px; border-radius: 50%; background: var(--green);
          display: flex; align-items: center; justify-content: center;
          font-family: 'Instrument Serif', serif; font-size: 18px; color: #fff; margin-bottom: 20px;
        }
        .exec-name  { font-family: 'Instrument Serif', serif; font-size: 20px; color: #fff; margin-bottom: 4px; }
        .exec-title { font-size: 11px; color: var(--lime); font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 14px; }
        .exec-bio   { font-size: 13px; line-height: 1.7; color: rgba(255,255,255,0.45); }

        /* ── RESPONSIVE ── */
        @media (max-width: 1200px) {
          .ph, .press-contact, .p-assets, .p-releases, .p-execs { padding-left: 48px; padding-right: 48px; }
        }
        @media (max-width: 1024px) {
          .ph { padding: calc(var(--nav-h) + 56px) 40px 64px; }
          .ph-inner { grid-template-columns: 1fr; gap: 40px; }
          .press-contact, .p-assets, .p-releases, .p-execs { padding-left: 40px; padding-right: 40px; }
          .assets-grid { grid-template-columns: repeat(2, 1fr); }
          .execs-grid  { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .ph { padding: calc(var(--nav-h) + 40px) 28px 56px; }
          .press-contact, .p-assets, .p-releases, .p-execs { padding-left: 28px; padding-right: 28px; padding-top: 80px; padding-bottom: 80px; }
          .press-contact { padding-top: 18px; padding-bottom: 18px; }
          .assets-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 480px) {
          .ph { padding: calc(var(--nav-h) + 28px) 18px 48px; }
          .press-contact, .p-assets, .p-releases, .p-execs { padding-left: 18px; padding-right: 18px; padding-top: 64px; padding-bottom: 64px; }
          .press-contact { padding-top: 16px; padding-bottom: 16px; }
          .execs-grid { grid-template-columns: 1fr; }
          .release-tag { display: none; }
          .ph-ctas { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section className="ph">
        <div className="ph-inner">
          <div>
            <div className="ph-tag">
              <span className="ph-tag-dot" />
              Newsroom
            </div>
            <h1 className="ph-h1">
              Press <em>Kit</em> &<br />Media Resources
            </h1>
          </div>
          <div className="ph-right">
            <p className="ph-body">
              Everything journalists and media partners need — logos, photos, executive bios,
              press releases, and brand guidelines.
            </p>
            <div className="ph-ctas">
              <a href="#assets" className="btn-primary-lg">Download Assets →</a>
              <a href="mailto:press@nextgenerationpower.com" style={{ fontSize: 14, fontWeight: 500, color: "var(--ink-soft)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6, padding: "14px 4px", transition: "color 0.2s" }}>
                Email press team ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT BAR ── */}
      <div className="press-contact">
        <div className="press-contact-inner">
          <span className="press-contact-text">Press enquiries & interview requests:</span>
          <a href="mailto:press@nextgenerationpower.com" className="press-contact-email">press@nextgenerationpower.com</a>
        </div>
      </div>

      {/* ── ASSETS ── */}
      <section id="assets" className="p-assets">
        <div className="p-assets-inner">
          <span className="section-tag">Brand Assets</span>
          <h2 className="section-h2">Download <em>Resources</em></h2>
          <div className="assets-grid">
            {ASSETS.map((a) => (
              <a key={a.label} href="#" className="asset-card">
                <span className="asset-icon">{a.icon}</span>
                <div>
                  <div className="asset-label">{a.label}</div>
                  <div className="asset-size">{a.size}</div>
                </div>
                <span className="asset-dl">↓ Download</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELEASES ── */}
      <section className="p-releases">
        <div className="p-releases-inner">
          <span className="section-tag">Latest News</span>
          <h2 className="section-h2">Press <em>Releases</em></h2>
          <div className="releases-list">
            {RELEASES.map((r) => {
              const tagClass = `release-tag tag-${r.tag.toLowerCase()}`;
              return (
                <a key={r.title} href="#" className="release-row">
                  <span className="release-date">{r.date}</span>
                  <span className={tagClass}>{r.tag}</span>
                  <span className="release-title">{r.title}</span>
                  <span className="release-arrow">→</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── EXEC SPOKESPEOPLE ── */}
      <section className="p-execs">
        <div className="p-execs-inner">
          <span className="section-tag" style={{ color: "var(--lime)" }}>Spokespeople</span>
          <h2 className="section-h2" style={{ color: "var(--white)" }}>
            Available for <em style={{ color: "var(--lime)" }}>interview</em>
          </h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.45)", maxWidth: 480, lineHeight: 1.75, marginTop: 14 }}>
            Our leadership team is available for interviews, commentary, and expert briefings.
            Contact <a href="mailto:press@nextgenerationpower.com" style={{ color: "var(--lime)", textDecoration: "none" }}>press@nextgenerationpower.com</a> to arrange.
          </p>
          <div className="execs-grid">
            {EXECS.map((e) => (
              <div key={e.name} className="exec-card">
                <div className="exec-avatar">{e.initials}</div>
                <div className="exec-name">{e.name}</div>
                <div className="exec-title">{e.title}</div>
                <p className="exec-bio">{e.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}