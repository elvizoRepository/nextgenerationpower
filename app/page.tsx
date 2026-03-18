"use client";

import Image from "next/image";
import CtaSection from "@/components/CtaSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import MarqueeStrip from "@/components/MarqueeStrip";

export default function HomePage() {
  return (
    <main style={{ fontFamily: "'Instrument Sans', 'DM Sans', sans-serif", overflowX: "hidden" }}>
      <style>{`
        /* ── HERO ── */
        .hero {
          min-height: 100vh; background: var(--cream);
          position: relative; overflow: hidden;
          display: grid; grid-template-columns: 1fr 1fr;
          align-items: stretch; padding-top: var(--nav-h);
        }
        .hero::after {
          content: ''; position: absolute; inset: 0; pointer-events: none; z-index: 0;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E");
          opacity: 0.5; mix-blend-mode: multiply;
        }
        .hero-left {
          display: flex; flex-direction: column; justify-content: center;
          padding: 72px 56px 72px 80px; position: relative; z-index: 2;
        }
        .hero-tag {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 11px; font-weight: 600; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--green); margin-bottom: 28px;
        }
        .hero-tag-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--green-sat); box-shadow: 0 0 0 3px rgba(61,184,95,0.2);
          animation: pulse 2.4s ease-in-out infinite; flex-shrink: 0;
        }
        @keyframes pulse {
          0%,100% { box-shadow: 0 0 0 3px rgba(61,184,95,0.2); }
          50%      { box-shadow: 0 0 0 6px rgba(61,184,95,0.08); }
        }
        .hero-h1 {
          font-family: 'Instrument Serif', Georgia, serif;
          font-size: clamp(40px,5.5vw,78px); font-weight: 400; line-height: 1.06;
          color: var(--ink); letter-spacing: -0.02em; margin-bottom: 20px;
        }
        .hero-h1 em { font-style: italic; color: var(--green); }
        .hero-body { font-size: 16px; line-height: 1.75; color: var(--ink-soft); max-width: 420px; margin-bottom: 40px; }
        .hero-ctas { display: flex; align-items: center; gap: 14px; flex-wrap: wrap; margin-bottom: 56px; }
        .btn-ghost-lg {
          font-size: 14px; font-weight: 500; color: var(--ink-soft); text-decoration: none;
          display: inline-flex; align-items: center; gap: 8px; transition: color 0.2s; padding: 14px 4px;
        }
        .btn-ghost-lg:hover { color: var(--green); }
        .play-btn {
          width: 42px; height: 42px; border-radius: 50%; border: 1.5px solid var(--border);
          background: var(--white); display: inline-flex; align-items: center; justify-content: center;
          font-size: 11px; transition: border-color 0.2s; flex-shrink: 0;
        }
        .btn-ghost-lg:hover .play-btn { border-color: var(--green-sat); }
        .hero-stats { display: flex; gap: 0; border-top: 1px solid var(--border); padding-top: 24px; }
        .hero-stat { flex: 0 0 auto; padding-right: 20px; }
        .hero-stat + .hero-stat { padding-left: 20px; padding-right: 20px; border-left: 1px solid var(--border); }
        .hero-stat:last-child { padding-right: 0; }
        .hero-stat-val { font-family: 'Instrument Serif', Georgia, serif; font-size: 30px; color: var(--ink); line-height: 1; margin-bottom: 6px; }
        .hero-stat-label { font-size: 12px; font-weight: 500; color: var(--ink-muted); letter-spacing: 0.04em; }
        .hero-right { position: relative; overflow: hidden; background: #d4e8d0; }
        .hero-right::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(to right, var(--cream) 0%, transparent 18%);
          z-index: 2; pointer-events: none;
        }
        .hero-float-card {
          position: absolute; bottom: 32px; right: 32px; z-index: 10;
          background: var(--white); border: 1px solid var(--border); border-radius: 14px;
          padding: 18px 22px; box-shadow: 0 12px 48px rgba(15,31,20,0.12); min-width: 200px;
        }
        .hero-float-card-label { font-size: 11px; font-weight: 600; letter-spacing: 0.08em; color: var(--ink-muted); text-transform: uppercase; margin-bottom: 8px; }
        .hero-float-card-val { font-family: 'Instrument Serif', serif; font-size: 28px; color: var(--green); line-height: 1; margin-bottom: 4px; }
        .hero-float-card-sub { font-size: 12px; color: var(--ink-muted); }

        /* ── WHAT WE DO ── */
        .features { background: var(--white); padding: 100px 80px; }
        .features-header { display: flex; align-items: flex-end; justify-content: space-between; gap: 32px; margin-bottom: 56px; flex-wrap: wrap; }
        .row-label {
          font-size: 10px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase;
          color: var(--ink-muted); margin-bottom: 10px; display: flex; align-items: center; gap: 8px;
        }
        .row-label::after { content: ''; flex: 1; height: 1px; background: var(--border); }
        .feature-row { margin-bottom: 28px; }
        .feature-row:last-child { margin-bottom: 0; }
        .feature-grid-3 {
          display: grid; grid-template-columns: repeat(3,1fr); gap: 1px;
          background: var(--border); border: 1px solid var(--border);
          border-radius: 16px; overflow: hidden;
        }
        .feature-card { background: var(--white); padding: 32px 28px; transition: background 0.2s; position: relative; }
        .feature-card:hover { background: var(--cream); }
        .feature-card.svc::after {
          content: ''; position: absolute; top: 0; left: 0; bottom: 0; width: 3px;
          background: var(--green); transform: scaleY(0); transition: transform 0.25s; transform-origin: bottom;
        }
        .feature-card.svc:hover::after { transform: scaleY(1); }
        .feature-num { font-family: 'Instrument Serif', serif; font-style: italic; font-size: 13px; color: var(--ink-muted); margin-bottom: 24px; display: block; }
        .feature-icon-wrap { width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 22px; margin-bottom: 18px; border: 1px solid var(--border); background: var(--cream); }
        .feature-title { font-family: 'Instrument Sans', sans-serif; font-size: 16px; font-weight: 600; color: var(--ink); margin-bottom: 10px; line-height: 1.3; }
        .feature-desc { font-size: 13.5px; line-height: 1.7; color: var(--ink-muted); }
        .feature-link { display: inline-flex; align-items: center; gap: 5px; font-size: 12.5px; font-weight: 600; color: var(--green); text-decoration: none; margin-top: 18px; transition: gap 0.2s; }
        .feature-link:hover { gap: 8px; }

        /* ── ABOUT ── */
        .about-section { background: var(--cream); padding: 100px 80px; }
        .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; max-width: 1200px; margin: 0 auto; }
        .about-img-wrap { position: relative; height: 520px; }
        .about-img-a { position: absolute; top: 0; left: 0; width: 68%; height: 72%; border-radius: 16px; overflow: hidden; box-shadow: 0 24px 64px rgba(15,31,20,0.14); }
        .about-img-b { position: absolute; bottom: 0; right: 0; width: 60%; height: 62%; border-radius: 16px; overflow: hidden; box-shadow: 0 24px 64px rgba(15,31,20,0.14); }
        .about-badge { position: absolute; top: 52%; left: 46%; transform: translate(-50%,-50%); background: var(--white); border-radius: 14px; padding: 16px 20px; box-shadow: 0 12px 40px rgba(15,31,20,0.14); text-align: center; min-width: 120px; z-index: 4; }
        .about-badge-val { font-family: 'Instrument Serif', serif; font-size: 32px; color: var(--green); line-height: 1; }
        .about-badge-sub { font-size: 11px; color: var(--ink-muted); margin-top: 4px; font-weight: 500; }
        .about-checklist { display: flex; flex-direction: column; gap: 14px; margin: 28px 0 36px; }
        .about-check-item { display: flex; align-items: flex-start; gap: 12px; }
        .check-icon { width: 22px; height: 22px; border-radius: 50%; flex-shrink: 0; background: var(--green); display: flex; align-items: center; justify-content: center; color: white; font-size: 10px; margin-top: 1px; }
        .check-text { font-size: 14px; color: var(--ink); font-weight: 500; line-height: 1.5; }
        .check-sub  { font-size: 12.5px; color: var(--ink-muted); margin-top: 2px; }

        /* ── GALLERY ── */
        .gallery-section { background: var(--white); padding: 100px 80px; }
        .gallery-header { max-width: 1200px; margin: 0 auto 48px; display: flex; align-items: flex-end; justify-content: space-between; gap: 32px; flex-wrap: wrap; }
        .masonry-grid { max-width: 1200px; margin: 0 auto; columns: 4; column-gap: 14px; }
        .masonry-item { break-inside: avoid; margin-bottom: 14px; border-radius: 14px; overflow: hidden; position: relative; cursor: pointer; background: var(--cream); }
        .masonry-item img { width: 100%; display: block; transition: transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94); }
        .masonry-item:hover img { transform: scale(1.04); }
        .masonry-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(15,31,20,0.55) 0%, transparent 55%); opacity: 0; transition: opacity 0.3s; display: flex; align-items: flex-end; padding: 18px; }
        .masonry-item:hover .masonry-overlay { opacity: 1; }
        .masonry-caption { font-size: 12px; font-weight: 600; color: white; letter-spacing: 0.04em; }

        /* ── MISSIONS ── */
        .missions-section { background: var(--ink); padding: 100px 80px; position: relative; overflow: hidden; }
        .missions-section::before { content: ''; position: absolute; top: -40%; right: -8%; width: 640px; height: 640px; border-radius: 50%; background: radial-gradient(circle, rgba(45,145,71,0.12) 0%, transparent 65%); pointer-events: none; }
        .missions-header { max-width: 1200px; margin: 0 auto 72px; display: flex; align-items: flex-end; justify-content: space-between; gap: 40px; flex-wrap: wrap; }
        .missions-header .section-tag { color: var(--lime); }
        .missions-header .section-h2 { color: var(--white); }
        .missions-header .section-h2 em { color: var(--lime); }
        .missions-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 1px; background: rgba(255,255,255,0.06); max-width: 1200px; margin: 0 auto; border: 1px solid rgba(255,255,255,0.07); border-radius: 16px; overflow: hidden; }
        .mission-card { background: rgba(255,255,255,0.03); padding: 40px 32px; transition: background 0.2s; position: relative; }
        .mission-card:hover { background: rgba(255,255,255,0.06); }
        .mission-card::after { content: ''; position: absolute; bottom: 0; left: 32px; right: 32px; height: 2px; background: var(--green-mid); opacity: 0; transition: opacity 0.2s; }
        .mission-card:hover::after { opacity: 1; }
        .mission-icon { font-size: 26px; margin-bottom: 18px; display: block; }
        .mission-val { font-family: 'Instrument Serif', serif; font-size: clamp(36px,4vw,52px); color: white; line-height: 1; margin-bottom: 10px; }
        .mission-label { font-size: 13px; color: rgba(255,255,255,0.45); font-weight: 500; letter-spacing: 0.02em; }

        /* ── RESPONSIVE ── */
        @media (max-width: 1200px) {
          .hero-left { padding: 64px 40px 64px 48px; }
          .features, .about-section, .missions-section, .gallery-section { padding-left: 48px; padding-right: 48px; }
          .feature-grid-3 { grid-template-columns: repeat(2,1fr); }
          .about-grid { gap: 56px; }
          .masonry-grid { columns: 3; }
        }
        @media (max-width: 1024px) {
          .hero { grid-template-columns: 1fr; min-height: auto; }
          .hero-right { display: none; }
          .hero-left { padding: 64px 40px 80px; }
          .features, .about-section, .missions-section, .gallery-section { padding-left: 40px; padding-right: 40px; }
          .about-grid { grid-template-columns: 1fr; gap: 48px; }
          .about-img-wrap { height: 380px; }
          .missions-grid { grid-template-columns: repeat(2,1fr); }
          .masonry-grid { columns: 2; }
        }
        @media (max-width: 768px) {
          .hero-left { padding: 52px 28px 72px; }
          .hero-body { font-size: 15px; max-width: 100%; }
          .features, .about-section, .missions-section, .gallery-section { padding-left: 28px; padding-right: 28px; padding-top: 80px; padding-bottom: 80px; }
          .features-header, .missions-header { flex-direction: column; align-items: flex-start; gap: 14px; }
          .about-img-wrap { height: 320px; }
          .gallery-header { flex-direction: column; align-items: flex-start; gap: 12px; }
        }
        @media (max-width: 480px) {
          .hero-left { padding: 44px 18px 60px; }
          .hero-ctas { flex-direction: column; align-items: flex-start; gap: 10px; }
          .hero-stats { flex-direction: column; gap: 18px; }
          .hero-stat { padding-right: 0; }
          .hero-stat + .hero-stat { border-left: none; padding-left: 0; border-top: 1px solid var(--border); padding-top: 18px; }
          .features, .about-section, .missions-section, .gallery-section { padding-left: 18px; padding-right: 18px; padding-top: 64px; padding-bottom: 64px; }
          .feature-grid-3 { grid-template-columns: 1fr; }
          .missions-grid { grid-template-columns: 1fr; }
          .mission-card { padding: 32px 24px; }
          .about-img-wrap { height: 260px; }
          .about-img-b { width: 52%; height: 54%; }
          .about-badge { padding: 12px 16px; min-width: 100px; }
          .about-badge-val { font-size: 26px; }
          .masonry-grid { columns: 1; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-left">
          <div className="hero-tag">
            <span className="hero-tag-dot" />
            Wind Energy Engineering & Technology
          </div>
          <h1 className="hero-h1">
            Powering a<br /><em>Greener</em><br />Tomorrow
          </h1>
          <p className="hero-body">
            Next Generation Power installs and engineers advanced wind energy systems — then
            runs them smarter. From site survey to commissioning to real-time monitoring, we own
            every step.
          </p>
          <div className="hero-ctas">
            <a href="/services" className="btn-primary-lg">Our Services →</a>
            <a href="/about" className="btn-ghost-lg">
              <span className="play-btn">▶</span>
              Watch our story
            </a>
          </div>
          <div className="hero-stats">
            {[
              { value: "40 GW", label: "Installed Capacity" },
              { value: "180+",  label: "Projects Built"     },
              { value: "85M t", label: "CO₂ Offset"         },
            ].map((s) => (
              <div key={s.label} className="hero-stat">
                <div className="hero-stat-val">{s.value}</div>
                <div className="hero-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-right">
          <Image src="/homepage.png" alt="Wind Turbine" fill style={{ objectFit: "cover", objectPosition: "center" }} priority />
          <div className="hero-float-card">
            <div className="hero-float-card-label">Live Output</div>
            <div className="hero-float-card-val">847 MW</div>
            <div className="hero-float-card-sub">↑ 12% above forecast today</div>
          </div>
        </div>
      </section>

      <MarqueeStrip />

      {/* ── WHAT WE DO ── */}
      <section id="features" className="features">
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="features-header">
            <div>
              <span className="section-tag">What We Do</span>
              <h2 className="section-h2">Engineering & technology,<br /><em>end to end</em></h2>
            </div>
            <p className="section-body" style={{ maxWidth: 360 }}>
              We don't just sell software — we build, install, and operate wind turbines in the
              real world, then provide the tools to run them better.
            </p>
          </div>

          {/* Row 1 — Physical services */}
          <div className="feature-row">
            <div className="row-label">⚙️ &nbsp; Engineering & Installation Services</div>
            <div className="feature-grid-3">
              {[
                {
                  num: "01", icon: "🏗️", href: "/services#installation",
                  title: "Turbine Installation",
                  desc: "End-to-end project delivery — civil works, foundation engineering, crane operations, and full turbine erection from 2 MW to 15 MW class machines, onshore and offshore.",
                },
                {
                  num: "02", icon: "📐", href: "/services#engineering",
                  title: "Site Engineering & Design",
                  desc: "Geotechnical surveys, wind resource assessments, micro-siting, layout optimisation, and permitting support — before a single bolt is turned.",
                },
                {
                  num: "03", icon: "🔧", href: "/services#om",
                  title: "Operations & Maintenance",
                  desc: "Long-term O&M contracts with our own certified technicians, 24/7 remote monitoring, scheduled and corrective maintenance, and performance guarantees.",
                },
              ].map((f) => (
                <div key={f.title} className="feature-card svc">
                  <span className="feature-num">{f.num}</span>
                  <div className="feature-icon-wrap">{f.icon}</div>
                  <h3 className="feature-title">{f.title}</h3>
                  <p className="feature-desc">{f.desc}</p>
                  <a href={f.href} className="feature-link">Learn more →</a>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 — Platform */}
          <div className="feature-row">
            <div className="row-label">💻 &nbsp; Operations Platform</div>
            <div className="feature-grid-3">
              {[
                {
                  num: "04", icon: "🌬️", href: "/features",
                  title: "Smart Wind Analysis",
                  desc: "AI-powered wind pattern modelling to optimise turbine siting and maximise annual energy yield across varied terrain and atmospheric conditions.",
                },
                {
                  num: "05", icon: "⚡", href: "/features",
                  title: "Real-Time Monitoring",
                  desc: "24/7 SCADA dashboards with predictive maintenance alerts, anomaly detection, and sub-second telemetry across your full fleet.",
                },
                {
                  num: "06", icon: "♻️", href: "/features",
                  title: "Carbon Reporting",
                  desc: "Certified offset documentation and ESG-ready sustainability benchmarks for every installation and operator.",
                },
              ].map((f) => (
                <div key={f.title} className="feature-card">
                  <span className="feature-num">{f.num}</span>
                  <div className="feature-icon-wrap">{f.icon}</div>
                  <h3 className="feature-title">{f.title}</h3>
                  <p className="feature-desc">{f.desc}</p>
                  <a href={f.href} className="feature-link">Learn more →</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="about-section">
        <div className="about-grid">
          <div className="about-img-wrap">
            <div className="about-img-a">
              <Image src="/wind_farm.png" alt="Wind farm" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="about-img-b">
              <Image src="/offshore_turbine.png" alt="Offshore turbines" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="about-badge">
              <div className="about-badge-val">7+</div>
              <div className="about-badge-sub">Years of expertise</div>
            </div>
          </div>
          <div>
            <span className="section-tag">About Next Generation Power</span>
            <h2 className="section-h2" style={{ marginBottom: 20 }}>
              Engineering Clean<br />Energy <em>Since 2017</em>
            </h2>
            <p className="section-body" style={{ marginBottom: 16 }}>
              We design, manufacture, install, and operate advanced wind turbine systems that
              deliver reliable clean power at scale — from coastal offshore installations to remote
              mountain communities.
            </p>
            <p className="section-body">
              Our technology adapts to every environment, minimising footprint while maximising
              output and community benefit. We are the engineers, not just the software.
            </p>
            <div className="about-checklist">
              {[
                { main: "180+ Installations Completed", sub: "Onshore and offshore, across 50+ countries" },
                { main: "ISO 14001 & 14064 Certified",           sub: "Environmental Management System"           },
                { main: "Zero-emission Manufacturing",   sub: "Fully renewable-powered facilities"        },
              ].map((item) => (
                <div key={item.main} className="about-check-item">
                  <div className="check-icon">✓</div>
                  <div>
                    <div className="check-text">{item.main}</div>
                    <div className="check-sub">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
            <a href="/about" className="btn-primary-lg">Explore our story →</a>
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section id="gallery" className="gallery-section">
        <div className="gallery-header">
          <div>
            <span className="section-tag">In the Field</span>
            <h2 className="section-h2">Our Installations,<br /><em>Up Close</em></h2>
          </div>
          <a href="/gallery" className="btn-ghost-lg" style={{ paddingBottom: 0 }}>View full gallery →</a>
        </div>
        <div className="masonry-grid">
          {[
            { src: "/gallery/31.jpeg",  caption: "Mojave Desert Wind Corridor, CA",    cls: "tall" },
            { src: "/gallery/2.jpeg",  caption: "Atacama Plains Installation, Chile", cls: "sq"   },
            { src: "/gallery/28.jpeg", caption: "Midwest Prairie Grid, Kansas",       cls: "wide" },
            { src: "/gallery/4.jpeg",  caption: "Inland Steppe Project, Kazakhstan",  cls: "sq"   },
            { src: "/gallery/17.jpeg", caption: "Patagonia Wind Farm, Argentina",     cls: "tall" },
            { src: "/gallery/13.jpeg", caption: "Manufacturing Hub, Stuttgart",       cls: "wide" },
            { src: "/gallery/7.jpeg",  caption: "High Plains Survey, Texas",          cls: "sq"   },
            { src: "/gallery/29.jpeg", caption: "Coastal Flatlands, Denmark",         cls: "wide" },
          ].map((item) => (
            <div key={item.caption} className={`masonry-item ${item.cls}`}>
              <Image src={item.src} alt={item.caption} width={600} height={800} style={{ width: "100%", height: "auto", display: "block" }} />
              <div className="masonry-overlay">
                <span className="masonry-caption">{item.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── IMPACT ── */}
      <section id="missions" className="missions-section">
        <div className="missions-header">
          <div>
            <span className="section-tag">Our Impact</span>
            <h2 className="section-h2">Measurable Results,<br /><em>Global Scale</em></h2>
          </div>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.45)", maxWidth: 320, lineHeight: 1.7 }}>
            Every turbine we install translates into concrete numbers — for communities, for the
            climate, and for our partners.
          </p>
        </div>
        <div className="missions-grid">
          {[
            { icon: "🏗️", value: "180+",  label: "Installations Completed"  },
            { icon: "⚡",  value: "40 GW", label: "Total Installed Capacity"  },
            { icon: "🌍",  value: "85M",   label: "Tonnes CO₂ Offset"         },
            { icon: "👥",  value: "12M+",  label: "Customers Powered"         },
          ].map((stat) => (
            <div key={stat.label} className="mission-card">
              <span className="mission-icon">{stat.icon}</span>
              <div className="mission-val">{stat.value}</div>
              <div className="mission-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <TestimonialsSection />

      <CtaSection
        headline={<>Ready to build<br />something <em>real?</em></>}
        subline="Talk to our engineering team about your next wind project — from first survey to final commissioning."
        primaryText="Talk to an Engineer →"
        primaryHref="/contact"
        secondaryText="Explore our platform"
        secondaryHref="/features"
      />
    </main>
  );
}