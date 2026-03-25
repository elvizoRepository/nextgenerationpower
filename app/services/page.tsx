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
const SERVICES = [
  {
    id: "installation",
    num: "01",
    icon: "🏗️",
    title: "Turbine Installation",
    tagline: "From ground to grid, end to end.",
    body: "We manage every phase of turbine delivery — civil engineering, foundation design, crane logistics, electrical works, and full commissioning. Our project teams have erected machines from 2 MW community-scale turbines to 15 MW offshore giants across six continents.",
    bullets: [
      "Onshore and offshore installation capability",
      "2 MW – 15 MW turbine class experience",
      "Turnkey EPC contracts available",
      "Independent of OEM — we work with all major manufacturers",
      "Post-commissioning performance testing and handover",
      "Full project management and regulatory liaison",
    ],
    stat1: { val: "180+", label: "Projects installed" },
    stat2: { val: "6",    label: "Continents active"  },
    img: "/gallery/9.jpeg",
  },
  {
    id: "engineering",
    num: "02",
    icon: "📐",
    title: "Site Engineering & Design",
    tagline: "The right turbine, in the right place.",
    body: "Bad siting is the most expensive mistake in wind energy. Our engineering team combines geotechnical surveys, high-resolution wind resource modeling, micro-siting algorithms, and layout optimisation to ensure every turbine in your project earns its keep from day one.",
    bullets: [
      "Wind resource assessment and bankable energy yield reports",
      "Geotechnical and geophysical site surveys",
      "Turbine micro-siting and wake-loss optimisation",
      "Environmental impact assessment support",
      "Grid connection feasibility and interconnection studies",
      "Permitting, planning, and stakeholder consultation",
    ],
    stat1: { val: "±2.3%", label: "Average yield forecast accuracy" },
    stat2: { val: "50+",   label: "Countries assessed"              },
    img: "/service2.png",
  },
  {
    id: "om",
    num: "03",
    icon: "🔧",
    title: "Operations & Maintenance",
    tagline: "Maximum uptime, minimum surprises.",
    body: "Turbines don't maintain themselves. Our O&M contracts put our own certified technicians on the ground, backed by 24/7 remote monitoring, predictive fault detection, and guaranteed response SLAs. We don't just react to failures — we prevent them.",
    bullets: [
      "Full-scope and limited-scope O&M contracts",
      "Dedicated site technicians or shared regional teams",
      `24/7 remote monitoring via ${companyConfig.company.name} Operations Platform`,
      "Condition-based maintenance replacing time-based schedules",
      "Spare parts inventory management and logistics",
      "Performance guarantees with AEP assurance",
    ],
    stat1: { val: "99.1%", label: "Average fleet availability" },
    stat2: { val: "14 days", label: "Advance fault prediction" },
    img: "/gallery/15.jpeg",
  },
  {
    id: "grid",
    num: "04",
    icon: "🔋",
    title: "Grid & Storage Integration",
    tagline: "Clean power, delivered reliably.",
    body: "Getting energy from turbine to grid — reliably, compliantly, and profitably — is more complex than ever. Our Grid Bridge team handles every layer: from protection relay design and interconnection studies to battery dispatch optimisation and frequency response compliance.",
    bullets: [
      "Automated interconnection study generation and filing",
      "Protection relay specification and commissioning",
      "BESS sizing, procurement, and dispatch optimisation",
      "Reactive power compensation (STATCOM-ready)",
      "Grid code compliance across 50+ regulatory regimes",
      "Virtual power plant (VPP) aggregation and control",
    ],
    stat1: { val: "50+",    label: "Grid codes supported" },
    stat2: { val: "< 8 ms", label: "Frequency response latency" },
    img: "/service4.png",
  },
];

const PROCESS_STEPS = [
  { num: "01", title: "Discovery Call",       body: "We learn your site, timeline, and goals. No templates — every project starts with a conversation." },
  { num: "02", title: "Site Assessment",      body: "Our engineers visit the site, collect wind data, and model the resource. You get a bankable yield report within 3 weeks." },
  { num: "03", title: "Design & Permitting",  body: "We produce the full engineering package, manage planning submissions, and prepare the grid connection application." },
  { num: "04", title: "Installation",         body: "Our crews take over — civil works, foundations, turbine erection, cabling, and full electrical commissioning." },
  { num: "05", title: "Handover & O&M",       body: "We commission, test, and hand over — or stay on as your long-term O&M partner with guaranteed performance." },
];

const SECTORS = [
  { icon: "🏭", title: "Utility Scale",     desc: "100 MW+ projects, offshore and onshore. Full EPC or advisory-only scope.",                  href: "/solution/onshore"  },
  { icon: "🏘️", title: "Community Wind",    desc: "5–50 MW projects for municipalities, cooperatives, and rural developers.",                   href: "/solution/onshore"  },
  { icon: "🏗️", title: "Industrial & C&I", desc: "Behind-the-meter installations for manufacturers, ports, and data centres.",                 href: "/solution/onshore"  },
  { icon: "🌊", title: "Offshore",          desc: "Fixed and floating foundations. North Sea, Atlantic, and Indo-Pacific experience.",           href: "/solution/offshore" },
  { icon: "🌍", title: "Emerging Markets",  desc: "Greenfield development in Africa, Southeast Asia, and Latin America.",                       href: "/solution/onshore"  },
  { icon: "🔋", title: "Hybrid & Storage",  desc: "Wind + solar + BESS hybrid plants optimised for round-the-clock dispatch.",                  href: "/solution/hybrid"   },
];

const TESTI_ITEMS = [
  {
    name:  "Sarah Mitchell",
    role:  "Director of Operations, GreenGrid Corp",
    stars: 5,
    image: "/sarah.png",
    text:  `${companyConfig.company.name} doesn't just sell turbines — they become a long-term partner. Their team was on-site within four hours of our first fault alert. That kind of service changes everything.`,
  },
  {
    name:  "Omar Alami",
    role:  "CEO, AfriWind Solutions",
    stars: 5,
    image: "/omar.png",
    text:  `What sets ${companyConfig.company.name} apart is the culture. Every person we've worked with — from sales to installation to support — genuinely cares about the outcome, not just the contract.`,
  },
  {
    name:  "Lena Bergström",
    role:  "Chief Sustainability Officer, NordicPower",
    stars: 5,
    image: "/lena.png",
    text:  `I've worked with every major turbine manufacturer. ${companyConfig.company.name} is the only one that treats sustainability reporting as a core product feature rather than a compliance afterthought.`,
  },
];

/* ─────────────────────────────────────────
   PAGE
───────────────────────────────────────── */
export default function ServicesPage() {
  const [activeService, setActiveService] = useState(0);
  const active = SERVICES[activeService];

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

        /* Hero right service cards */
        .ph-service-cards {
          display: grid; grid-template-columns: 1fr 1fr; gap: 12px;
        }
        .ph-svc-card {
          background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08);
          border-radius: 14px; padding: 22px 20px;
          cursor: pointer; transition: background 0.2s, border-color 0.2s;
        }
        .ph-svc-card:hover, .ph-svc-card.active {
          background: rgba(255,255,255,0.09); border-color: rgba(168,217,108,0.3);
        }
        .ph-svc-icon { font-size: 24px; margin-bottom: 12px; display: block; }
        .ph-svc-num  { font-family: 'Instrument Serif', serif; font-style: italic; font-size: 11px; color: rgba(255,255,255,0.3); margin-bottom: 6px; }
        .ph-svc-title { font-size: 14px; font-weight: 600; color: white; margin-bottom: 6px; line-height: 1.3; }
        .ph-svc-desc  { font-size: 12.5px; color: rgba(255,255,255,0.42); line-height: 1.6; }

        /* ── SERVICES DETAIL ── */
        .svc-detail { background: var(--white); padding: 100px 80px; }
        .svc-detail-inner { max-width: 1200px; margin: 0 auto; }

        /* Tab bar */
        .tab-bar {
          display: flex; gap: 4px; margin-bottom: 64px;
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

        /* Content grid */
        .svc-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }

        .svc-num {
          font-family: 'Instrument Serif', serif; font-style: italic;
          font-size: 13px; color: var(--ink-muted); margin-bottom: 10px; display: block;
        }
        .svc-h2 {
          font-family: 'Instrument Serif', serif;
          font-size: clamp(28px, 3.5vw, 44px); font-weight: 400;
          color: var(--ink); line-height: 1.08; letter-spacing: -0.02em; margin-bottom: 10px;
        }
        .svc-tagline {
          font-family: 'Instrument Serif', serif; font-style: italic;
          font-size: 17px; color: var(--green); margin-bottom: 18px;
        }
        .svc-body { font-size: 15px; line-height: 1.8; color: var(--ink-soft); margin-bottom: 28px; }
        .svc-bullets { display: flex; flex-direction: column; gap: 10px; margin-bottom: 36px; list-style: none; }
        .svc-bullet { display: flex; align-items: flex-start; gap: 11px; }
        .bullet-check {
          width: 20px; height: 20px; border-radius: 50%; flex-shrink: 0;
          background: rgba(30,107,52,0.1); display: flex; align-items: center;
          justify-content: center; color: var(--green); font-size: 10px; margin-top: 2px;
        }
        .bullet-text { font-size: 13.5px; color: var(--ink); line-height: 1.55; }
        .svc-stats { display: flex; gap: 0; border-top: 1px solid var(--border); padding-top: 24px; }
        .svc-stat  { flex: 1; padding-right: 24px; }
        .svc-stat + .svc-stat { padding-left: 24px; border-left: 1px solid var(--border); }
        .svc-stat-val {
          font-family: 'Instrument Serif', serif; font-size: 32px;
          color: var(--green); line-height: 1; margin-bottom: 5px;
        }
        .svc-stat-label { font-size: 12px; color: var(--ink-muted); font-weight: 500; }

        /* Image side */
        .svc-img-col { position: relative; padding-bottom: 20px; }
        .svc-img-wrap {
          border-radius: 20px; overflow: hidden; aspect-ratio: 4/3; position: relative;
          box-shadow: 0 24px 64px rgba(15,31,20,0.12);
        }
        .svc-img-badge {
          position: absolute; bottom: -4px; left: -20px; z-index: 4;
          background: var(--white); border: 1px solid var(--border);
          border-radius: 14px; padding: 16px 20px;
          box-shadow: 0 12px 36px rgba(15,31,20,0.12); min-width: 155px;
        }
        .svc-img-badge-val {
          font-family: 'Instrument Serif', serif; font-size: 26px;
          color: var(--green); line-height: 1; margin-bottom: 4px;
        }
        .svc-img-badge-label { font-size: 11px; color: var(--ink-muted); font-weight: 500; }

        /* ── SECTORS ── */
        .sectors { background: var(--cream); padding: 100px 80px; }
        .sectors-inner { max-width: 1200px; margin: 0 auto; }
        .sectors-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px;
          background: var(--border); border: 1px solid var(--border);
          border-radius: 20px; overflow: hidden; margin-top: 56px;
        }
        .sector-card {
          background: var(--white); padding: 36px 28px; transition: background 0.2s;
          position: relative;
        }
        .sector-card::after {
          content: ''; position: absolute; top: 0; left: 0; right: 0;
          height: 3px; background: var(--green);
          transform: scaleX(0); transition: transform 0.25s; transform-origin: left;
        }
        .sector-card:hover { background: var(--cream); }
        .sector-card:hover::after { transform: scaleX(1); }
        .sector-icon {
          width: 52px; height: 52px; border-radius: 13px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          font-size: 22px; background: var(--cream-2); border: 1px solid var(--border);
          margin-bottom: 18px;
        }
        .sector-title { font-size: 15px; font-weight: 700; color: var(--ink); margin-bottom: 10px; }
        .sector-desc  { font-size: 13px; line-height: 1.65; color: var(--ink-muted); }
        .sector-link  {
          display: inline-flex; align-items: center; gap: 5px;
          font-size: 12px; font-weight: 600; color: var(--green);
          text-decoration: none; margin-top: 16px;
          opacity: 0; transition: opacity 0.2s, gap 0.2s;
        }
        .sector-card:hover .sector-link { opacity: 1; }
        .sector-card:hover .sector-link:hover { gap: 8px; }

        /* ── PROCESS ── */
        .process { background: var(--ink); padding: 100px 80px; position: relative; overflow: hidden; }
        .process::before {
          content: ''; position: absolute; top: -30%; right: -5%;
          width: 640px; height: 640px; border-radius: 50%;
          background: radial-gradient(circle, rgba(45,145,71,0.12) 0%, transparent 65%);
          pointer-events: none;
        }
        .process-inner { max-width: 1100px; margin: 0 auto; position: relative; z-index: 2; }
        .process-inner .section-tag { color: var(--lime); }
        .process-inner .section-h2  { color: var(--white); }
        .process-inner .section-h2 em { color: var(--lime); }
        .process-steps {
          display: grid; grid-template-columns: repeat(5, 1fr); gap: 1px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 18px; overflow: hidden; margin-top: 56px;
        }
        .process-step {
          background: rgba(255,255,255,0.03); padding: 36px 24px;
          transition: background 0.2s; position: relative;
        }
        .process-step:hover { background: rgba(255,255,255,0.07); }
        .process-step::after {
          content: '→'; position: absolute; top: 36px; right: -10px;
          font-size: 16px; color: rgba(255,255,255,0.15); z-index: 2;
        }
        .process-step:last-child::after { display: none; }
        .step-num {
          font-family: 'Instrument Serif', serif; font-style: italic;
          font-size: 13px; color: var(--lime); margin-bottom: 16px; display: block;
        }
        .step-title {
          font-size: 14px; font-weight: 700; color: white; margin-bottom: 10px; line-height: 1.3;
        }
        .step-body { font-size: 12.5px; color: rgba(255,255,255,0.42); line-height: 1.65; }

        /* ── WHY Next Generation Power ── */
        .why { background: var(--white); padding: 100px 80px; }
        .why-inner {
          max-width: 1200px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center;
        }
        .why-img-wrap { position: relative; height: 500px; }
        .why-img-a {
          position: absolute; top: 0; left: 0; width: 65%; height: 70%;
          border-radius: 18px; overflow: hidden;
          box-shadow: 0 24px 64px rgba(15,31,20,0.14);
        }
        .why-img-b {
          position: absolute; bottom: 0; right: 0; width: 58%; height: 60%;
          border-radius: 18px; overflow: hidden;
          box-shadow: 0 24px 64px rgba(15,31,20,0.14);
        }
        .why-badge {
          position: absolute; top: 50%; left: 44%; transform: translate(-50%,-50%);
          background: var(--white); border-radius: 16px; padding: 18px 22px;
          box-shadow: 0 12px 40px rgba(15,31,20,0.14);
          text-align: center; min-width: 130px; z-index: 4;
        }
        .why-badge-val { font-family: 'Instrument Serif', serif; font-size: 34px; color: var(--green); line-height: 1; }
        .why-badge-sub { font-size: 11px; color: var(--ink-muted); margin-top: 4px; font-weight: 500; }
        .why-checks { display: flex; flex-direction: column; gap: 16px; margin-top: 32px; margin-bottom: 36px; }
        .why-check { display: flex; align-items: flex-start; gap: 12px; }
        .check-circle {
          width: 22px; height: 22px; border-radius: 50%; flex-shrink: 0;
          background: var(--green); display: flex; align-items: center;
          justify-content: center; color: white; font-size: 10px; margin-top: 2px;
        }
        .check-main { font-size: 14px; font-weight: 600; color: var(--ink); line-height: 1.5; }
        .check-sub  { font-size: 12.5px; color: var(--ink-muted); margin-top: 2px; }

        /* ── RESPONSIVE ── */
        @media (max-width: 1200px) {
          .ph, .svc-detail, .sectors, .process, .why { padding-left: 48px; padding-right: 48px; }
          .sectors-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 1024px) {
          .ph { padding: calc(var(--nav-h) + 48px) 40px 64px; }
          .ph-inner { grid-template-columns: 1fr; gap: 48px; }
          .svc-detail, .sectors, .process, .why { padding-left: 40px; padding-right: 40px; }
          .svc-grid { grid-template-columns: 1fr; gap: 48px; }
          .svc-grid > div:last-child { order: -1; }
          .tab-bar { width: 100%; }
          .process-steps { grid-template-columns: 1fr 1fr; }
          .process-step::after { display: none; }
          .why-inner { grid-template-columns: 1fr; gap: 48px; }
          .why-img-wrap { height: 380px; }
        }
        @media (max-width: 768px) {
          .ph { padding: calc(var(--nav-h) + 32px) 28px 56px; }
          .svc-detail, .sectors, .process, .why { padding-left: 28px; padding-right: 28px; padding-top: 80px; padding-bottom: 80px; }
          .ph-service-cards { grid-template-columns: 1fr 1fr; }
          .sectors-grid { grid-template-columns: 1fr; }
          .process-steps { grid-template-columns: 1fr; }
        }
        @media (max-width: 480px) {
          .ph { padding: calc(var(--nav-h) + 28px) 18px 48px; }
          .svc-detail, .sectors, .process, .why { padding-left: 18px; padding-right: 18px; padding-top: 64px; padding-bottom: 64px; }
          .ph-service-cards { grid-template-columns: 1fr; }
          .ph-ctas { flex-direction: column; align-items: flex-start; }
          .svc-stats { flex-direction: column; gap: 16px; }
          .svc-stat + .svc-stat { border-left: none; padding-left: 0; border-top: 1px solid var(--border); padding-top: 16px; }
          .svc-img-badge { left: 10px; bottom: -10px; }
          .tab-btn { padding: 8px 12px; font-size: 12px; }
          .why-img-wrap { height: 280px; }
          .why-img-b { width: 52%; height: 54%; }
        }
      `}</style>

      {/* ── PAGE HERO ── */}
      <section className="ph">
        <div className="ph-inner">
          <div>
            <div className="ph-tag">
              <span className="ph-tag-dot" />
              Our Services
            </div>
            <h1 className="ph-h1">
              We build it.<br />We run it.<br /><em>End to end.</em>
            </h1>
            <p className="ph-body">
              {companyConfig.company.name} delivers the full lifecycle of wind energy — from the first
              site walk to long-term asset operation. Every project is ours from start to finish.
            </p>
            <div className="ph-ctas">
              <a href="/contact" className="btn-lime">Talk to an Engineer →</a>
              <a href="#services" className="btn-ghost-light">Explore services ↓</a>
            </div>
          </div>

          <div className="ph-service-cards">
            {[
              { icon: "🏗️", num: "01", title: "Turbine Installation",      desc: "End-to-end project delivery from civil works to full commissioning.",    i: 0 },
              { icon: "📐", num: "02", title: "Site Engineering & Design",  desc: "Geotechnical surveys, wind modeling, and layout optimisation.",          i: 1 },
              { icon: "🔧", num: "03", title: "Operations & Maintenance",   desc: "24/7 monitoring, predictive maintenance, and performance guarantees.",   i: 2 },
              { icon: "🔋", num: "04", title: "Grid & Storage Integration", desc: "Interconnection studies, BESS dispatch, and grid code compliance.",      i: 3 },
            ].map((c) => (
              <div
                key={c.title}
                className={`ph-svc-card${activeService === c.i ? " active" : ""}`}
                onClick={() => setActiveService(c.i)}
              >
                <span className="ph-svc-icon">{c.icon}</span>
                <div className="ph-svc-num">{c.num}</div>
                <div className="ph-svc-title">{c.title}</div>
                <div className="ph-svc-desc">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MarqueeStrip />

      {/* ── SERVICE DETAIL ── */}
      <section id="services" className="svc-detail">
        <div className="svc-detail-inner">
          <span className="section-tag">What We Deliver</span>
          <h2 className="section-h2">Four services. <em>One team.</em></h2>
          <p className="section-body" style={{ maxWidth: 540, marginTop: 14, marginBottom: 40 }}>
            Whether you need a single service or a full turnkey solution, our teams work as one
            integrated unit — no handoffs, no gaps, no excuses.
          </p>

          {/* Tab bar */}
          <div className="tab-bar">
            {SERVICES.map((s, i) => (
              <button
                key={s.id}
                className={`tab-btn${activeService === i ? " active" : ""}`}
                onClick={() => setActiveService(i)}
              >
                <span>{s.icon}</span>{s.title}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="svc-grid">
            {/* Left: copy */}
            <div>
              <span className="svc-num">{active.num} — {active.title}</span>
              <h3 className="svc-h2">{active.title}</h3>
              <p className="svc-tagline">{active.tagline}</p>
              <p className="svc-body">{active.body}</p>
              <ul className="svc-bullets">
                {active.bullets.map((b) => (
                  <li key={b} className="svc-bullet">
                    <span className="bullet-check">✓</span>
                    <span className="bullet-text">{b}</span>
                  </li>
                ))}
              </ul>
              <div className="svc-stats">
                <div className="svc-stat">
                  <div className="svc-stat-val">{active.stat1.val}</div>
                  <div className="svc-stat-label">{active.stat1.label}</div>
                </div>
                <div className="svc-stat">
                  <div className="svc-stat-val">{active.stat2.val}</div>
                  <div className="svc-stat-label">{active.stat2.label}</div>
                </div>
              </div>
            </div>

            {/* Right: image */}
            <div className="svc-img-col">
              <div className="svc-img-wrap">
                <Image src={active.img} alt={active.title} fill style={{ objectFit: "cover" }} />
              </div>
              <div className="svc-img-badge">
                <div className="svc-img-badge-val">{active.stat1.val}</div>
                <div className="svc-img-badge-label">{active.stat1.label}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTORS ── */}
      <section className="sectors">
        <div className="sectors-inner">
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 32, flexWrap: "wrap" }}>
            <div>
              <span className="section-tag">Who We Serve</span>
              <h2 className="section-h2">Every sector of <em>wind energy</em></h2>
            </div>
            <p className="section-body" style={{ maxWidth: 340 }}>
              From utility giants to community co-ops, our teams adapt to every project type,
              size, and geography.
            </p>
          </div>

          <div className="sectors-grid">
            {SECTORS.map((s) => (
              <div key={s.title} className="sector-card">
                <div className="sector-icon">{s.icon}</div>
                <div className="sector-title">{s.title}</div>
                <p className="sector-desc">{s.desc}</p>
                {s.href && (
                  <a href={s.href} className="sector-link">Explore solution →</a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="process">
        <div className="process-inner">
          <span className="section-tag">How It Works</span>
          <h2 className="section-h2">From first call to <em>first power</em></h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.45)", maxWidth: 480, lineHeight: 1.75, marginTop: 14 }}>
            Every project follows the same five-step discipline. No surprises — just a clear
            path from conversation to commissioning.
          </p>

          <div className="process-steps">
            {PROCESS_STEPS.map((step) => (
              <div key={step.num} className="process-step">
                <span className="step-num">{step.num}</span>
                <div className="step-title">{step.title}</div>
                <p className="step-body">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY OLSON ── */}
      <section className="why">
        <div className="why-inner">
          <div className="why-img-wrap">
            <div className="why-img-a">
              <Image src="/wind_farm.png" alt="Wind farm" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="why-img-b">
              <Image src="/offshore_turbine.png" alt="Offshore turbines" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="why-badge">
              <div className="why-badge-val">15+</div>
              <div className="why-badge-sub">Years of expertise</div>
            </div>
          </div>

          <div>
            <span className="section-tag">Why {companyConfig.company.name}</span>
            <h2 className="section-h2">The engineers, <em>not just the software</em></h2>
            <p className="section-body" style={{ marginTop: 16 }}>
              Most wind technology companies build tools. We also build turbines — which means our
              software is written by people who have been on the site at 3 AM in a storm.
            </p>
            <div className="why-checks">
              {[
                { main: "OEM-independent",              sub: "We work with all major turbine manufacturers — no lock-in"    },
                { main: "Vertically integrated",        sub: "Engineering, installation, O&M, and software under one roof"  },
                { main: "Performance-guaranteed",       sub: "AEP assurance contracts with real financial consequences"     },
                { main: "ISO 14001 & B Corp certified", sub: "Legally committed to environmental and social accountability" },
                { main: "Presence in 50+ countries",   sub: "Local teams with global standards"                             },
              ].map((c) => (
                <div key={c.main} className="why-check">
                  <div className="check-circle">✓</div>
                  <div>
                    <div className="check-main">{c.main}</div>
                    <div className="check-sub">{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>
            <a href="/about" className="btn-primary-lg">Learn more about us →</a>
          </div>
        </div>
      </section>

      <TestimonialsSection
        tag="From Our Clients"
        headline={<>Real projects,<br /><em>real results</em></>}
        items={TESTI_ITEMS}
      />

      <CtaSection
        headline={<>Ready to start<br />your <em>next project?</em></>}
        subline="Talk to our engineering team. We'll tell you within 48 hours whether we're the right fit — and what it would take."
        primaryText="Talk to an Engineer →"
        primaryHref="/contact"
        secondaryText="Explore the platform"
        secondaryHref="/features"
      />
    </main>
  );
}