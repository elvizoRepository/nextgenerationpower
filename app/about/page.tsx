"use client";

import Image from "next/image";
import CtaSection from "@/components/CtaSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import MarqueeStrip from "@/components/MarqueeStrip";
import { companyConfig } from "@/lib/siteConfig";

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const TIMELINE = [
  { year: "2017", title: "Founded in Harlow, SC",      body: `${companyConfig.ceo.name} established ${companyConfig.company.name} in Harlow, South Carolina with a small team of wind engineers and a single mission: make wind energy bankable at any scale.`},
  { year: "2019", title: "First 100 MW Project",       body: "Completed our first utility-scale installation in the Scottish Highlands — 40 turbines delivering reliable power to 60,000 homes." },
  { year: "2020", title: "Offshore Expansion",         body: "Entered the offshore market with a 250 MW North Sea project, proving our turbines could withstand Category 4 marine conditions." },
  { year: "2021", title: "Platform Launch",            body: `Released the ${companyConfig.company.name} Operations Platform, unifying wind analysis, SCADA monitoring, grid integration, and carbon reporting in a single interface.`},
  { year: "2023", title: "Global 10 GW Milestone",    body: "Crossed 10 GW of cumulative installed capacity across 38 countries — a milestone reached faster than any competitor in our market segment." },
  { year: "2024", title: "40 GW & 12M Customers",     body: "Today we serve 12 million customers across 50+ countries, with 40 GW installed and 85 million tonnes of CO₂ offset and counting." },
];

const LEADERSHIP = [
  { name: `${companyConfig.ceo.name}`,        role: "Founder & CEO",                  img: `${companyConfig.ceo.photo}`,  bio: `Founder of ${companyConfig.company.name}, headquartered in Harlow, SC.`, linkedin: "https://linkedin.com/in/eric-olson-8548543b4" },
  { name: "Ingrid Solberg",    role: "Chief Technology Officer",       img: "/ingrid.png",  bio: "PhD in Computational Fluid Dynamics, TU Delft. Led the team that built our AI wind modeling engine." },
  { name: "Marcus Webb",       role: "Chief Operating Officer",        img: "/webb.png",  bio: "Previously VP Operations at Ørsted. Oversees 180+ active projects across six continents." },
  { name: "Amara Diallo",      role: "Chief Sustainability Officer",   img: "/amara.png",  bio: "Former UN Climate Advisor. Architected our ISO 14064-aligned carbon reporting framework." },
  { name: "Chen Wei",          role: "VP Engineering",                 img: "/chen.png",  bio: "15 years in power systems. Leads our 300-strong global engineering and installation teams." },
  { name: "Sofia Andersson",   role: "VP Product",                     img: "/sofi.png", bio: `Previously at Siemens Gamesa. Drives the roadmap for the ${companyConfig.company.name} Operations Platform.` },
];

const VALUES = [
  { icon: "🌍", title: "Planet First",       body: "Every decision — from material sourcing to office energy use — is weighed against its environmental cost. We hold ourselves to the same standard we set for our clients." },
  { icon: "🔬", title: "Engineering Rigour", body: "We never ship a feature or install a turbine until it has been stress-tested beyond the worst conditions it will ever face in the real world." },
  { icon: "🤝", title: "Community Impact",   body: "We measure success not just in gigawatts but in local jobs created, energy poverty reduced, and communities powered for generations." },
  { icon: "🔒", title: "Radical Honesty",    body: "We publish our miss rate alongside our accuracy figures. When something goes wrong, we say so publicly and fix it openly." },
];

const STATS = [
  { val: "40 GW",  label: "Installed Capacity"    },
  { val: "12M+",   label: "Customers Worldwide"    },
  { val: "85M t",  label: "CO₂ Offset"             },
  { val: "50+",    label: "Countries"              },
  { val: "180+",   label: "Projects Delivered"     },
  { val: "7+",     label: "Years of Experience"    },
];

const TESTI_ITEMS = [
  { name: "Sarah Mitchell",  role: "Director, GreenGrid Corp",                  stars: 5, image: "/sarah.png", text: `{companyConfig.company.name} doesn't just sell turbines — they become a long-term partner. Their team was on-site within four hours of our first fault alert. That kind of service changes everything.`},
  { name: "Omar Alami",      role: "CEO, AfriWind Solutions",                   stars: 5, image: "/omar.png",  text: `What sets ${companyConfig.company.name} apart is the culture. Every person we've worked with — from sales to installation to support — genuinely cares about the outcome, not just the contract.`},
  { name: "Lena Bergström",  role: "Chief Sustainability Officer, NordicPower", stars: 5, image: "/lena.png",  text: `I've worked with every major turbine manufacturer. ${companyConfig.company.name} is the only one that treats sustainability reporting as a core product feature rather than a compliance afterthought.`},
];

/* ─────────────────────────────────────────
   PAGE
───────────────────────────────────────── */
export default function AboutPage() {
  return (
    <main style={{ fontFamily: "'Instrument Sans', 'DM Sans', sans-serif", overflowX: "hidden" }}>
      <style>{`
        /* ── PAGE HERO ── */
        .ph {
          background: var(--cream);
          padding: calc(var(--nav-h) + 80px) 80px 0;
          position: relative; overflow: hidden;
        }
        .ph-inner {
          max-width: 1200px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 80px; align-items: end;
        }
        .ph-tag {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 11px; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--green); margin-bottom: 22px;
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
          font-size: clamp(40px, 5.5vw, 74px); font-weight: 400;
          color: var(--ink); line-height: 1.06; letter-spacing: -0.02em;
          margin-bottom: 24px;
        }
        .ph-h1 em { font-style: italic; color: var(--green); }
        .ph-body {
          font-size: 16px; line-height: 1.8; color: var(--ink-soft); max-width: 480px;
          margin-bottom: 40px;
        }
        .ph-ctas { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 64px; }

        /* Hero right — image collage */
        .ph-collage { position: relative; height: 540px; align-self: end; }
        .ph-img-a {
          position: absolute; top: 0; left: 0; width: 65%; height: 70%;
          border-radius: 18px; overflow: hidden;
          box-shadow: 0 24px 64px rgba(15,31,20,0.14);
        }
        .ph-img-b {
          position: absolute; bottom: 0; right: 0; width: 58%; height: 60%;
          border-radius: 18px; overflow: hidden;
          box-shadow: 0 24px 64px rgba(15,31,20,0.14);
        }
        .ph-badge {
          position: absolute; top: 50%; left: 44%; transform: translate(-50%,-50%);
          background: var(--white); border-radius: 16px; padding: 18px 22px;
          box-shadow: 0 12px 40px rgba(15,31,20,0.14);
          text-align: center; min-width: 130px; z-index: 4;
        }
        .ph-badge-val { font-family: 'Instrument Serif', serif; font-size: 34px; color: var(--green); line-height: 1; }
        .ph-badge-sub { font-size: 11px; color: var(--ink-muted); margin-top: 4px; font-weight: 500; }

        /* ── STATS BAND ── */
        .stats-band { background: var(--ink); padding: 56px 80px; }
        .stats-band-inner {
          max-width: 1200px; margin: 0 auto;
          display: grid; grid-template-columns: repeat(6,1fr); gap: 1px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px; overflow: hidden;
        }
        .stat-cell { padding: 32px 24px; background: rgba(255,255,255,0.03); text-align: center; transition: background 0.2s; }
        .stat-cell:hover { background: rgba(255,255,255,0.07); }
        .stat-val   { font-family: 'Instrument Serif', serif; font-size: clamp(28px, 3vw, 40px); color: white; line-height: 1; margin-bottom: 8px; }
        .stat-label { font-size: 12px; color: rgba(255,255,255,0.4); font-weight: 500; letter-spacing: 0.04em; }

        /* ── STORY ── */
        .story { background: var(--white); padding: 100px 80px; }
        .story-inner { max-width: 1200px; margin: 0 auto; }
        .story-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; margin-top: 56px; }
        .story-body-col p { font-size: 15.5px; line-height: 1.8; color: var(--ink-soft); margin-bottom: 20px; }
        .story-body-col p:last-child { margin-bottom: 0; }
        .story-checks { display: flex; flex-direction: column; gap: 16px; margin-top: 36px; }
        .story-check  { display: flex; align-items: flex-start; gap: 12px; }
        .check-circle { width: 22px; height: 22px; border-radius: 50%; flex-shrink: 0; background: var(--green); display: flex; align-items: center; justify-content: center; color: white; font-size: 10px; margin-top: 2px; }
        .check-main   { font-size: 14px; font-weight: 600; color: var(--ink); line-height: 1.5; }
        .check-sub    { font-size: 12.5px; color: var(--ink-muted); margin-top: 2px; }
        .story-img-wrap { border-radius: 20px; overflow: hidden; aspect-ratio: 4/3; position: relative; box-shadow: 0 24px 64px rgba(15,31,20,0.12); margin-bottom: 24px; }
        .story-quote { background: var(--cream); border-radius: 16px; padding: 28px 32px; border-left: 3px solid var(--green); }
        .story-quote-text { font-family: 'Instrument Serif', serif; font-style: italic; font-size: 18px; line-height: 1.65; color: var(--ink); margin-bottom: 16px; }
        .story-quote-attr { font-size: 13px; font-weight: 600; color: var(--ink-muted); }

        /* ── TIMELINE ── */
        .timeline-section { background: var(--cream); padding: 100px 80px; }
        .timeline-inner { max-width: 1000px; margin: 0 auto; }
        .timeline { position: relative; margin-top: 56px; }
        .timeline::before { content: ''; position: absolute; left: 72px; top: 0; bottom: 0; width: 1px; background: var(--border); }
        .tl-item { display: grid; grid-template-columns: 144px 1fr; gap: 32px; align-items: start; margin-bottom: 48px; position: relative; }
        .tl-item:last-child { margin-bottom: 0; }
        .tl-year-col { text-align: right; padding-right: 32px; position: relative; padding-top: 4px; }
        .tl-dot { position: absolute; right: -5px; top: 8px; width: 9px; height: 9px; border-radius: 50%; background: var(--green); border: 2px solid var(--cream); box-shadow: 0 0 0 2px var(--green); }
        .tl-year { font-family: 'Instrument Serif', serif; font-style: italic; font-size: 15px; color: var(--green); font-weight: 400; }
        .tl-content { background: var(--white); border-radius: 14px; padding: 24px 28px; border: 1px solid var(--border); transition: box-shadow 0.2s, transform 0.2s; }
        .tl-content:hover { box-shadow: 0 8px 32px rgba(15,31,20,0.08); transform: translateY(-2px); }
        .tl-title { font-family: 'Instrument Sans', sans-serif; font-size: 15px; font-weight: 700; color: var(--ink); margin-bottom: 8px; }
        .tl-body  { font-size: 13.5px; line-height: 1.7; color: var(--ink-muted); }

        /* ── VALUES ── */
        .values-section { background: var(--white); padding: 100px 80px; }
        .values-inner { max-width: 1200px; margin: 0 auto; }
        .values-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 1px; background: var(--border); border: 1px solid var(--border); border-radius: 20px; overflow: hidden; margin-top: 56px; }
        .val-card { background: var(--white); padding: 36px 28px; transition: background 0.2s; }
        .val-card:hover { background: var(--cream); }
        .val-icon  { font-size: 28px; margin-bottom: 18px; display: flex; width: 52px; height: 52px; border-radius: 14px; align-items: center; justify-content: center; background: var(--cream-2); border: 1px solid var(--border); }
        .val-title { font-family: 'Instrument Sans', sans-serif; font-size: 16px; font-weight: 700; color: var(--ink); margin-bottom: 12px; }
        .val-body  { font-size: 13.5px; line-height: 1.7; color: var(--ink-muted); }

        /* ── LEADERSHIP ── */
        .leadership { background: var(--cream); padding: 100px 80px; }
        .leadership-inner { max-width: 1200px; margin: 0 auto; }
        .team-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; margin-top: 56px; }
        .team-card { background: var(--white); border-radius: 18px; padding: 32px; border: 1px solid var(--border); transition: box-shadow 0.2s, transform 0.2s; }
        .team-card:hover { box-shadow: 0 16px 48px rgba(15,31,20,0.08); transform: translateY(-3px); }
        .team-avatar { width: 64px; height: 64px; border-radius: 50%; overflow: hidden; position: relative; margin-bottom: 18px; border: 3px solid var(--cream-2); }
        .team-name { font-family: 'Instrument Sans', sans-serif; font-size: 16px; font-weight: 700; color: var(--ink); margin-bottom: 4px; }
        .team-role { font-size: 12px; font-weight: 600; color: var(--green); margin-bottom: 14px; letter-spacing: 0.02em; }
        .team-bio  { font-size: 13px; line-height: 1.65; color: var(--ink-muted); }
        .team-linkedin { display: inline-flex; align-items: center; gap: 6px; margin-top: 12px; font-size: 12px; color: var(--green); text-decoration: none; font-weight: 500; transition: opacity 0.2s; }
        .team-linkedin:hover { opacity: 0.75; }

        /* ── RESPONSIVE ── */
        @media (max-width: 1200px) {
          .ph, .stats-band, .story, .timeline-section, .values-section, .leadership { padding-left: 48px; padding-right: 48px; }
          .stats-band-inner { grid-template-columns: repeat(3,1fr); }
          .values-grid { grid-template-columns: repeat(2,1fr); }
          .team-grid { grid-template-columns: repeat(2,1fr); }
        }
        @media (max-width: 1024px) {
          .ph { padding: calc(var(--nav-h) + 56px) 40px 0; }
          .ph-inner { grid-template-columns: 1fr; gap: 48px; }
          .ph-collage { height: 380px; }
          .story, .timeline-section, .values-section, .leadership, .stats-band { padding-left: 40px; padding-right: 40px; }
          .story-grid { grid-template-columns: 1fr; gap: 48px; }
        }
        @media (max-width: 768px) {
          .ph { padding: calc(var(--nav-h) + 40px) 28px 0; }
          .story, .timeline-section, .values-section, .leadership { padding-left: 28px; padding-right: 28px; padding-top: 80px; padding-bottom: 80px; }
          .stats-band { padding: 40px 28px; }
          .stats-band-inner { grid-template-columns: repeat(2,1fr); }
          .values-grid { grid-template-columns: 1fr; }
          .team-grid { grid-template-columns: 1fr; }
          .ph-collage { height: 320px; }
          .timeline::before { left: 56px; }
          .tl-item { grid-template-columns: 112px 1fr; gap: 20px; }
          .tl-year-col { padding-right: 24px; }
          .tl-dot { right: -4px; }
        }
        @media (max-width: 480px) {
          .ph { padding: calc(var(--nav-h) + 28px) 18px 0; }
          .story, .timeline-section, .values-section, .leadership { padding-left: 18px; padding-right: 18px; padding-top: 64px; padding-bottom: 64px; }
          .stats-band { padding: 32px 18px; }
          .stats-band-inner { grid-template-columns: repeat(2,1fr); }
          .ph-collage { height: 260px; }
          .ph-img-b { width: 52%; height: 54%; }
          .timeline::before { display: none; }
          .tl-item { grid-template-columns: 1fr; gap: 8px; }
          .tl-year-col { text-align: left; padding-right: 0; }
          .tl-dot { display: none; }
          .ph-ctas { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      {/* ── PAGE HERO ── */}
      <section className="ph">
        <div className="ph-inner">
          <div>
            <div className="ph-tag">
              <span className="ph-tag-dot" />
              Our Story
            </div>
            <h1 className="ph-h1">
              Built by engineers<br />driven by <em>purpose</em>
            </h1>
            <p className="ph-body">
              ${companyConfig.company.name} Turbine Technologies was founded on a simple belief: that clean energy should
              be reliable, measurable, and accessible to every community on Earth. Founded in
              Harlow, South Carolina in 2017, that belief now powers 12 million homes across
              50 countries.
            </p>
            <div className="ph-ctas">
              <a href="/contact" className="btn-primary-lg">Work with us →</a>
              <a href="/missions" style={{ fontSize: 14, fontWeight: 500, color: "var(--ink-soft)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6, padding: "14px 4px", transition: "color 0.2s" }}>
                See our impact ↓
              </a>
            </div>
          </div>

          <div className="ph-collage">
            <div className="ph-img-a">
              <Image src="/wind_farm.png" alt="Wind farm" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="ph-img-b">
              <Image src="/offshore_turbine.png" alt="Offshore turbines" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="ph-badge">
              <div className="ph-badge-val">2017</div>
              <div className="ph-badge-sub">Year founded</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAND ── */}
      <div className="stats-band">
        <div className="stats-band-inner">
          {STATS.map((s) => (
            <div key={s.label} className="stat-cell">
              <div className="stat-val">{s.val}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <MarqueeStrip />

      {/* ── OUR STORY ── */}
      <section className="story">
        <div className="story-inner">
          <span className="section-tag">Who We Are</span>
          <h2 className="section-h2">Seven years of <em>relentless</em> progress</h2>

          <div className="story-grid">
            <div className="story-body-col">
              <p>
                {companyConfig.company.name} was born in Harlow, South Carolina in 2017, when founder {companyConfig.ceo.name} grew frustrated watching promising wind sites go undeveloped because no
                one could model their yield reliably enough to secure financing.
              </p>
              <p>
                We started by building better software. Our first product was a wind analysis tool
                that cut yield forecast uncertainty in half. Within three years, clients were asking
                us to build the turbines too — and we did.
              </p>
              <p>
                Today we are a vertically integrated platform: we model the wind, build and install
                the hardware, operate the fleet in real time, connect it to the grid, and certify
                every tonne of carbon offset. End to end, with no handoffs to third parties who
                don't share our standards.
              </p>

              <div className="story-checks">
                {[
                  { main: "Vertically integrated",        sub: "Hardware, software, and services under one roof" },
                  { main: "ISO 14001 & 14064 Certified",  sub: "Environmental and carbon management"             },
                  { main: "Zero-emission manufacturing",  sub: "All facilities powered by renewables"            },
                  { main: "B Corp Certified",             sub: "Legally committed to people and planet"          },
                ].map((c) => (
                  <div key={c.main} className="story-check">
                    <div className="check-circle">✓</div>
                    <div>
                      <div className="check-main">{c.main}</div>
                      <div className="check-sub">{c.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="story-img-wrap">
                <Image src={companyConfig.ceo.photo} alt={`${companyConfig.company.name} team`} fill style={{ objectFit: "cover" }} />
              </div>
              <div className="story-quote">
                <p className="story-quote-text">
                  "We don't measure success in gigawatts. We measure it in the number of
                  communities that no longer depend on fossil fuels."
                </p>
                <div className="story-quote-attr">{companyConfig.ceo.name} — Founder &amp; CEO</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="timeline-section">
        <div className="timeline-inner">
          <span className="section-tag">Our Journey</span>
          <h2 className="section-h2">From a South Carolina garage to <em>40 gigawatts</em></h2>

          <div className="timeline">
            {TIMELINE.map((item) => (
              <div key={item.year} className="tl-item">
                <div className="tl-year-col">
                  <div className="tl-year">{item.year}</div>
                  <div className="tl-dot" />
                </div>
                <div className="tl-content">
                  <div className="tl-title">{item.title}</div>
                  <div className="tl-body">{item.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="values-section">
        <div className="values-inner">
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 32, flexWrap: "wrap" }}>
            <div>
              <span className="section-tag">What We Stand For</span>
              <h2 className="section-h2">Principles that guide <em>every decision</em></h2>
            </div>
            <p className="section-body" style={{ maxWidth: 340 }}>
              These aren't values we put on a wall. They're the constraints we design our
              products, partnerships, and culture around.
            </p>
          </div>

          <div className="values-grid">
            {VALUES.map((v) => (
              <div key={v.title} className="val-card">
                <div className="val-icon">{v.icon}</div>
                <div className="val-title">{v.title}</div>
                <p className="val-body">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP ── */}
      <section className="leadership">
        <div className="leadership-inner">
          <div style={{ textAlign: "center" }}>
            <span className="section-tag">Leadership</span>
            <h2 className="section-h2">The team <em>behind the platform</em></h2>
            <p className="section-body" style={{ maxWidth: 480, margin: "14px auto 0" }}>
              Operators, engineers, and climate scientists united by a single obsession:
              making clean energy work better than fossil fuels in every dimension.
            </p>
          </div>

          <div className="team-grid">
            {LEADERSHIP.map((p) => (
              <div key={p.name} className="team-card">
                <div className="team-avatar">
                  <Image src={p.img} alt={p.name} fill style={{ objectFit: "cover" }} />
                </div>
                <div className="team-name">{p.name}</div>
                <div className="team-role">{p.role}</div>
                <p className="team-bio">{p.bio}</p>
                {p.linkedin && (
                  <a
                    href={p.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="team-linkedin"
                  >
                    🔗 LinkedIn Profile
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection
        tag="What Partners Say"
        headline={<>More than a vendor —<br />a <em>true partner</em></>}
        items={TESTI_ITEMS}
      />

      <CtaSection
        headline={<>Believe in what<br />we're <em>building?</em></>}
        subline="We're always looking for engineers, operators, and climate leaders who want to work on problems that matter."
        primaryText="View Open Roles →"
        primaryHref="/careers"
        secondaryText="Get in touch"
        secondaryHref="/contact"
      />
    </main>
  );
}