"use client";

import { companyConfig } from "@/lib/siteConfig";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main style={{ fontFamily: "'Instrument Sans', 'DM Sans', sans-serif", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');

        :root {
          --ink:       #0f1f14;
          --ink-soft:  #3d5245;
          --ink-muted: #7a9082;
          --green:     #1e6b34;
          --green-mid: #2d9147;
          --green-sat: #3db85f;
          --lime:      #a8d96c;
          --cream:     #f5f2ec;
          --cream-2:   #ede9e0;
          --white:     #ffffff;
          --border:    rgba(15,31,20,0.10);
          --nav-h:     100px;
        }

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; -webkit-font-smoothing: antialiased; }

        /* ── NAV ── */
        .nav-wrap {
          position: fixed; top: 0; left: 0; right: 0; z-index: 200;
          height: var(--nav-h);
          transition: background 0.35s, box-shadow 0.35s;
          padding: 0 48px;
          display: flex; align-items: center; justify-content: space-between; gap: 24px;
        }
        .nav-wrap.scrolled {
          background: rgba(245,242,236,0.96);
          backdrop-filter: blur(20px);
          box-shadow: 0 1px 0 var(--border);
        }

        .nav-wordmark {
          display: flex; align-items: center; gap: 10px;
          text-decoration: none; flex-shrink: 0;
        }

        /* Key fix: constrain image to a fixed pixel height so it never
           pushes the nav taller — width scales automatically */
        .nav-logo-img {
          height: 60px !important;
          width: auto !important;
          object-fit: contain;
          display: block;
        }

        .nav-links { display: flex; align-items: center; gap: 4px; }
        .nav-a {
          font-size: 13.5px; font-weight: 500;
          color: var(--ink-soft); text-decoration: none;
          padding: 6px 13px; border-radius: 6px;
          transition: color 0.2s, background 0.2s;
          letter-spacing: 0.01em; white-space: nowrap;
        }
        .nav-a:hover { color: var(--ink); background: rgba(15,31,20,0.05); }
        .nav-a.active { color: var(--green); }

        .btn-nav {
          font-size: 13px; font-weight: 600;
          color: var(--white); background: var(--green);
          padding: 9px 22px; border-radius: 8px; border: none;
          text-decoration: none; cursor: pointer;
          transition: background 0.2s, transform 0.18s;
          letter-spacing: 0.01em; white-space: nowrap;
        }
        .btn-nav:hover { background: var(--green-mid); transform: translateY(-1px); }

        .btn-outline-nav {
          font-size: 13px; font-weight: 500;
          color: var(--ink); background: transparent;
          padding: 9px 20px; border-radius: 8px;
          border: 1px solid var(--border);
          text-decoration: none; cursor: pointer;
          transition: border-color 0.2s, background 0.2s;
          white-space: nowrap;
        }
        .btn-outline-nav:hover { border-color: var(--ink-muted); background: rgba(15,31,20,0.03); }

        .mobile-hamburger {
          display: none;
          background: none; border: none; cursor: pointer;
          font-size: 22px; padding: 4px; color: var(--ink); line-height: 1;
        }

        /* ── HERO ── */
        .hero {
          min-height: 100vh;
          background: var(--cream);
          position: relative; overflow: hidden;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: stretch;
          padding-top: var(--nav-h);
        }
        .hero::after {
          content: '';
          position: absolute; inset: 0; pointer-events: none; z-index: 0;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E");
          opacity: 0.5; mix-blend-mode: multiply;
        }

        .hero-left {
          display: flex; flex-direction: column; justify-content: center;
          padding: 72px 56px 72px 80px;
          position: relative; z-index: 2;
        }

        .hero-tag {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 11px; font-weight: 600; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--green); margin-bottom: 28px;
        }
        .hero-tag-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--green-sat);
          box-shadow: 0 0 0 3px rgba(61,184,95,0.2);
          animation: pulse 2.4s ease-in-out infinite; flex-shrink: 0;
        }
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 3px rgba(61,184,95,0.2); }
          50%       { box-shadow: 0 0 0 6px rgba(61,184,95,0.08); }
        }

        .hero-h1 {
          font-family: 'Instrument Serif', Georgia, serif;
          font-size: clamp(40px, 5.5vw, 78px);
          font-weight: 400; line-height: 1.06;
          color: var(--ink); letter-spacing: -0.02em; margin-bottom: 20px;
        }
        .hero-h1 em { font-style: italic; color: var(--green); }

        .hero-body {
          font-size: 16px; line-height: 1.75;
          color: var(--ink-soft); max-width: 420px; margin-bottom: 40px;
        }

        .hero-ctas {
          display: flex; align-items: center; gap: 14px; flex-wrap: wrap;
          margin-bottom: 56px;
        }

        .btn-primary-lg {
          font-size: 14px; font-weight: 600;
          background: var(--ink); color: var(--white);
          padding: 14px 30px; border-radius: 8px; text-decoration: none;
          transition: background 0.2s, transform 0.18s; letter-spacing: 0.01em;
          display: inline-flex; align-items: center; gap: 8px; white-space: nowrap;
        }
        .btn-primary-lg:hover { background: var(--green); transform: translateY(-1px); }

        .btn-ghost-lg {
          font-size: 14px; font-weight: 500; color: var(--ink-soft);
          text-decoration: none; display: inline-flex; align-items: center; gap: 8px;
          transition: color 0.2s; padding: 14px 4px;
        }
        .btn-ghost-lg:hover { color: var(--green); }

        .play-btn {
          width: 42px; height: 42px; border-radius: 50%;
          border: 1.5px solid var(--border); background: var(--white);
          display: inline-flex; align-items: center; justify-content: center;
          font-size: 11px; transition: border-color 0.2s; flex-shrink: 0;
        }
        .btn-ghost-lg:hover .play-btn { border-color: var(--green-sat); }

        .hero-stats {
          display: flex; gap: 0; border-top: 1px solid var(--border); padding-top: 24px;
        }
        .hero-stat { flex: 0 0 auto; padding-right: 20px; }
        .hero-stat + .hero-stat { padding-left: 20px; padding-right: 20px; border-left: 1px solid var(--border); }
        .hero-stat:last-child { padding-right: 0; }
        .hero-stat-val {
          font-family: 'Instrument Serif', Georgia, serif;
          font-size: 30px; color: var(--ink); line-height: 1; margin-bottom: 6px;
        }
        .hero-stat-label { font-size: 12px; font-weight: 500; color: var(--ink-muted); letter-spacing: 0.04em; }

        .hero-right { position: relative; overflow: hidden; background: #d4e8d0; }
        .hero-right::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(to right, var(--cream) 0%, transparent 18%);
          z-index: 2; pointer-events: none;
        }

        .hero-float-card {
          position: absolute; bottom: 32px; right: 32px; z-index: 10;
          background: var(--white); border: 1px solid var(--border);
          border-radius: 14px; padding: 18px 22px;
          box-shadow: 0 12px 48px rgba(15,31,20,0.12); min-width: 200px;
        }
        .hero-float-card-label {
          font-size: 11px; font-weight: 600; letter-spacing: 0.08em;
          color: var(--ink-muted); text-transform: uppercase; margin-bottom: 8px;
        }
        .hero-float-card-val {
          font-family: 'Instrument Serif', serif;
          font-size: 28px; color: var(--green); line-height: 1; margin-bottom: 4px;
        }
        .hero-float-card-sub { font-size: 12px; color: var(--ink-muted); }

        /* ── MARQUEE ── */
        .strip { background: var(--ink); padding: 14px 0; overflow: hidden; display: flex; }
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .strip-inner {
          display: flex; white-space: nowrap;
          animation: marquee 22s linear infinite; will-change: transform;
        }
        .strip-item {
          font-size: 12px; font-weight: 600; letter-spacing: 0.1em;
          text-transform: uppercase; color: rgba(255,255,255,0.5);
          padding: 0 40px; border-right: 1px solid rgba(255,255,255,0.1);
          display: flex; align-items: center; gap: 10px;
        }
        .strip-item span { color: var(--lime); }

        /* ── SHARED ── */
        .section-tag {
          font-size: 11px; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--green); margin-bottom: 14px; display: block;
        }
        .section-h2 {
          font-family: 'Instrument Serif', Georgia, serif;
          font-size: clamp(28px, 4vw, 52px); font-weight: 400; line-height: 1.12;
          color: var(--ink); letter-spacing: -0.02em;
        }
        .section-h2 em { font-style: italic; color: var(--green); }
        .section-body { font-size: 15.5px; line-height: 1.75; color: var(--ink-soft); }

        /* ── FEATURES ── */
        .features { background: var(--white); padding: 100px 80px; }
        .features-header {
          display: flex; align-items: flex-end; justify-content: space-between;
          gap: 32px; margin-bottom: 56px; flex-wrap: wrap;
        }
        .feature-grid {
          display: grid; grid-template-columns: repeat(4,1fr); gap: 1px;
          background: var(--border); border: 1px solid var(--border);
          border-radius: 16px; overflow: hidden;
        }
        .feature-card { background: var(--white); padding: 32px 28px; transition: background 0.2s; }
        .feature-card:hover { background: var(--cream); }
        .feature-num {
          font-family: 'Instrument Serif', serif; font-style: italic;
          font-size: 13px; color: var(--ink-muted); margin-bottom: 24px; display: block;
        }
        .feature-icon-wrap {
          width: 48px; height: 48px; border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          font-size: 22px; margin-bottom: 18px;
          border: 1px solid var(--border); background: var(--cream);
        }
        .feature-title {
          font-family: 'Instrument Sans', sans-serif; font-size: 16px; font-weight: 600;
          color: var(--ink); margin-bottom: 10px; line-height: 1.3;
        }
        .feature-desc { font-size: 13.5px; line-height: 1.7; color: var(--ink-muted); }
        .feature-link {
          display: inline-flex; align-items: center; gap: 5px;
          font-size: 12.5px; font-weight: 600; color: var(--green);
          text-decoration: none; margin-top: 18px; transition: gap 0.2s;
        }
        .feature-link:hover { gap: 8px; }

        /* ── ABOUT ── */
        .about-section { background: var(--cream); padding: 100px 80px; }
        .about-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 80px;
          align-items: center; max-width: 1200px; margin: 0 auto;
        }
        .about-img-wrap { position: relative; height: 520px; }
        .about-img-a {
          position: absolute; top: 0; left: 0; width: 68%; height: 72%;
          border-radius: 16px; overflow: hidden; box-shadow: 0 24px 64px rgba(15,31,20,0.14);
        }
        .about-img-b {
          position: absolute; bottom: 0; right: 0; width: 60%; height: 62%;
          border-radius: 16px; overflow: hidden; box-shadow: 0 24px 64px rgba(15,31,20,0.14);
        }
        .about-badge {
          position: absolute; top: 52%; left: 46%; transform: translate(-50%,-50%);
          background: var(--white); border-radius: 14px; padding: 16px 20px;
          box-shadow: 0 12px 40px rgba(15,31,20,0.14);
          text-align: center; min-width: 120px; z-index: 4;
        }
        .about-badge-val { font-family: 'Instrument Serif', serif; font-size: 32px; color: var(--green); line-height: 1; }
        .about-badge-sub { font-size: 11px; color: var(--ink-muted); margin-top: 4px; font-weight: 500; }
        .about-checklist { display: flex; flex-direction: column; gap: 14px; margin: 28px 0 36px; }
        .about-check-item { display: flex; align-items: flex-start; gap: 12px; }
        .check-icon {
          width: 22px; height: 22px; border-radius: 50%; flex-shrink: 0;
          background: var(--green); display: flex; align-items: center; justify-content: center;
          color: white; font-size: 10px; margin-top: 1px;
        }
        .check-text { font-size: 14px; color: var(--ink); font-weight: 500; line-height: 1.5; }
        .check-sub  { font-size: 12.5px; color: var(--ink-muted); margin-top: 2px; }

        /* ── MISSIONS ── */
        .missions-section { background: var(--ink); padding: 100px 80px; position: relative; overflow: hidden; }
        .missions-section::before {
          content: ''; position: absolute; top: -40%; right: -8%;
          width: 640px; height: 640px; border-radius: 50%;
          background: radial-gradient(circle, rgba(45,145,71,0.12) 0%, transparent 65%);
          pointer-events: none;
        }
        .missions-header {
          max-width: 1200px; margin: 0 auto 72px;
          display: flex; align-items: flex-end; justify-content: space-between;
          gap: 40px; flex-wrap: wrap;
        }
        .missions-header .section-tag { color: var(--lime); }
        .missions-header .section-h2 { color: var(--white); }
        .missions-header .section-h2 em { color: var(--lime); }
        .missions-grid {
          display: grid; grid-template-columns: repeat(4,1fr); gap: 1px;
          background: rgba(255,255,255,0.06); max-width: 1200px; margin: 0 auto;
          border: 1px solid rgba(255,255,255,0.07); border-radius: 16px; overflow: hidden;
        }
        .mission-card {
          background: rgba(255,255,255,0.03); padding: 40px 32px;
          transition: background 0.2s; position: relative;
        }
        .mission-card:hover { background: rgba(255,255,255,0.06); }
        .mission-card::after {
          content: ''; position: absolute; bottom: 0; left: 32px; right: 32px;
          height: 2px; background: var(--green-mid); opacity: 0; transition: opacity 0.2s;
        }
        .mission-card:hover::after { opacity: 1; }
        .mission-icon { font-size: 26px; margin-bottom: 18px; display: block; }
        .mission-val {
          font-family: 'Instrument Serif', serif;
          font-size: clamp(36px,4vw,52px); color: white; line-height: 1; margin-bottom: 10px;
        }
        .mission-label { font-size: 13px; color: rgba(255,255,255,0.45); font-weight: 500; letter-spacing: 0.02em; }

        /* ── TESTIMONIALS ── */
        .testimonials-section { background: var(--white); padding: 100px 80px; }
        .testi-grid {
          display: grid; grid-template-columns: repeat(3,1fr); gap: 24px;
          max-width: 1200px; margin: 56px auto 0;
        }
        .testi-card {
          border: 1px solid var(--border); border-radius: 16px; padding: 32px;
          background: var(--cream); transition: box-shadow 0.2s, transform 0.2s;
        }
        .testi-card:hover { box-shadow: 0 16px 48px rgba(15,31,20,0.08); transform: translateY(-3px); }
        .testi-stars { display: flex; gap: 3px; margin-bottom: 18px; color: var(--green-sat); font-size: 13px; }
        .testi-quote { font-size: 15px; line-height: 1.75; color: var(--ink); margin-bottom: 24px; font-style: italic; }
        .testi-author { display: flex; align-items: center; gap: 12px; }
        .testi-avatar {
          width: 44px; height: 44px; border-radius: 50%;
          overflow: hidden; flex-shrink: 0; position: relative; border: 2px solid var(--cream-2);
        }
        .testi-name { font-size: 14px; font-weight: 600; color: var(--ink); }
        .testi-role { font-size: 12px; color: var(--ink-muted); margin-top: 2px; }

        /* ── CTA ── */
        .cta-section {
          background: var(--green); padding: 96px 80px; text-align: center;
          position: relative; overflow: hidden;
        }
        .cta-section::before {
          content: ''; position: absolute; inset: 0;
          background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Ccircle cx='30' cy='30' r='1' fill='rgba(255,255,255,0.08)'/%3E%3C/svg%3E");
          pointer-events: none;
        }
        .cta-h2 {
          font-family: 'Instrument Serif', serif; font-size: clamp(32px,5vw,64px); font-weight: 400;
          color: white; letter-spacing: -0.02em; line-height: 1.1; margin-bottom: 18px;
        }
        .cta-h2 em { font-style: italic; color: var(--lime); }
        .cta-body { font-size: 16px; color: rgba(255,255,255,0.8); margin-bottom: 40px; }
        .cta-btns { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
        .btn-white {
          background: white; color: var(--green); font-size: 14px; font-weight: 700;
          padding: 14px 32px; border-radius: 8px; text-decoration: none; transition: transform 0.18s;
        }
        .btn-white:hover { transform: translateY(-1px); }
        .btn-outline-white {
          background: rgba(255,255,255,0.12); border: 1.5px solid rgba(255,255,255,0.4);
          color: white; font-size: 14px; font-weight: 600;
          padding: 14px 32px; border-radius: 8px; text-decoration: none; transition: background 0.2s;
        }
        .btn-outline-white:hover { background: rgba(255,255,255,0.2); }

        /* ── FOOTER ── */
        footer { background: var(--ink); padding: 72px 80px 36px; border-top: 1px solid rgba(255,255,255,0.06); }
        .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 48px; margin-bottom: 56px; }
        .footer-brand-tagline { font-size: 13px; color: rgba(255,255,255,0.38); line-height: 1.7; margin-top: 16px; max-width: 240px; }
        .footer-col-heading { font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255,255,255,0.3); margin-bottom: 18px; }
        .footer-links { display: flex; flex-direction: column; gap: 12px; }
        .footer-a { font-size: 13.5px; color: rgba(255,255,255,0.55); text-decoration: none; transition: color 0.2s; }
        .footer-a:hover { color: var(--lime); }
        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.07); padding-top: 28px;
          display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;
        }
        .footer-copy { font-size: 12px; color: rgba(255,255,255,0.25); }

        /* ── MOBILE MENU ── */
        .mobile-menu-overlay {
          position: fixed; inset: 0; z-index: 999; background: var(--cream);
          display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 28px;
        }
        .mobile-menu-overlay a {
          font-family: 'Instrument Serif', serif; font-size: 34px;
          color: var(--ink); text-decoration: none; transition: color 0.2s;
        }
        .mobile-menu-overlay a:hover { color: var(--green); }
        .mobile-close {
          position: absolute; top: 20px; right: 24px;
          background: none; border: none; cursor: pointer; font-size: 24px; color: var(--ink); padding: 4px;
        }

        /* ════════════════════════════════════
           RESPONSIVE BREAKPOINTS
        ════════════════════════════════════ */

        /* ≤ 1200px — large tablet / small desktop */
        @media (max-width: 1200px) {
          .features, .about-section, .missions-section,
          .testimonials-section, .cta-section, footer {
            padding-left: 48px; padding-right: 48px;
          }
          .hero-left { padding: 64px 40px 64px 48px; }
          .feature-grid { grid-template-columns: repeat(2,1fr); }
          .about-grid { gap: 56px; }
          .footer-grid { gap: 32px; }
        }

        /* ≤ 1024px — tablet */
        @media (max-width: 1024px) {
          .nav-links { display: none; }
          .btn-outline-nav { display: none; }
          .mobile-hamburger { display: block; }
          .nav-wrap, .nav-wrap.scrolled { padding: 0 40px; }

          .hero { grid-template-columns: 1fr; min-height: auto; }
          .hero-right { display: none; }
          .hero-left { padding: 64px 40px 80px; }

          .features, .about-section, .missions-section,
          .testimonials-section, .cta-section, footer {
            padding-left: 40px; padding-right: 40px;
          }

          .feature-grid { grid-template-columns: repeat(2,1fr); }
          .about-grid { grid-template-columns: 1fr; gap: 48px; }
          .about-img-wrap { height: 380px; }
          .missions-grid { grid-template-columns: repeat(2,1fr); }
          .testi-grid { grid-template-columns: repeat(2,1fr); }
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 32px; }
        }

        /* ≤ 768px — large mobile */
        @media (max-width: 768px) {
          :root { --nav-h: 60px; }
          .nav-wrap, .nav-wrap.scrolled { padding: 0 28px; }

          .hero-left { padding: 52px 28px 72px; }
          .hero-body { font-size: 15px; max-width: 100%; }

          .features, .about-section, .missions-section,
          .testimonials-section, .cta-section, footer {
            padding-left: 28px; padding-right: 28px;
            padding-top: 80px; padding-bottom: 80px;
          }

          .features-header { flex-direction: column; align-items: flex-start; gap: 14px; }
          .missions-header { flex-direction: column; align-items: flex-start; gap: 12px; }

          .about-img-wrap { height: 320px; }
          .testi-grid { grid-template-columns: 1fr; }
          .footer-grid { grid-template-columns: 1fr; gap: 28px; }
          .footer-brand-tagline { max-width: 100%; }
          footer { padding-bottom: 28px; }

          .cta-section { padding-top: 72px; padding-bottom: 72px; }
        }

        /* ≤ 480px — mobile */
        @media (max-width: 480px) {
          :root { --nav-h: 56px; }
          .nav-wrap, .nav-wrap.scrolled { padding: 0 18px; }
          .btn-nav { padding: 8px 16px; font-size: 12px; }
          .nav-logo-img { height: 34px !important; }

          .hero-left { padding: 44px 18px 60px; }
          .hero-ctas { flex-direction: column; align-items: flex-start; gap: 10px; }
          .hero-stats { flex-direction: column; gap: 18px; }
          .hero-stat { padding-right: 0; }
          .hero-stat + .hero-stat {
            border-left: none; padding-left: 0;
            border-top: 1px solid var(--border); padding-top: 18px;
          }

          .feature-grid { grid-template-columns: 1fr; }
          .missions-grid { grid-template-columns: 1fr; }
          .mission-card { padding: 32px 24px; }

          .features, .about-section, .missions-section,
          .testimonials-section, .cta-section, footer {
            padding-left: 18px; padding-right: 18px;
            padding-top: 64px; padding-bottom: 64px;
          }

          .about-img-wrap { height: 260px; }
          .about-img-b { width: 52%; height: 54%; }
          .about-badge { padding: 12px 16px; min-width: 100px; }
          .about-badge-val { font-size: 26px; }

          .footer-grid { grid-template-columns: 1fr; gap: 24px; }
          .footer-bottom { flex-direction: column; align-items: flex-start; gap: 10px; }
          .footer-bottom > div { flex-wrap: wrap; gap: 10px; }

          .mobile-menu-overlay a { font-size: 28px; }
        }
      `}</style>

      {/* ══════════════════════════════════════ NAV */}
      <header className={`nav-wrap${scrolled ? " scrolled" : ""}`}>
        <Link href="/" className="nav-wordmark h-[100px]">
          {/*
            width/height props are just hints for Next.js layout reservation.
            The CSS class .nav-logo-img enforces height: 40px; width: auto
            so the image renders large but NEVER expands the navbar.
          */}
          <img
            src={companyConfig.company.logo}
            alt={companyConfig.company.name}
            className="nav-logo-img w-full"
            
          />
        </Link>

        <nav className="nav-links">
          <a href="#" className="nav-a active">Home</a>
          <a href="#features" className="nav-a">Features</a>
          <a href="#about" className="nav-a">About</a>
          <a href="#missions" className="nav-a">Impact</a>
          <a href="#contact" className="nav-a">Contact</a>
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <a href="#" className="btn-outline-nav">Sign In</a>
          <a href="#" className="btn-nav">Get Started</a>
          <button
            onClick={() => setMobileOpen(true)}
            className="mobile-hamburger"
            aria-label="Open menu"
          >☰</button>
        </div>
      </header>

      {mobileOpen && (
        <div className="mobile-menu-overlay">
          <button onClick={() => setMobileOpen(false)} className="mobile-close">✕</button>
          {["Home", "Features", "About", "Impact", "Contact"].map(n => (
            <a key={n} href={`#${n.toLowerCase()}`} onClick={() => setMobileOpen(false)}>{n}</a>
          ))}
        </div>
      )}

      {/* ══════════════════════════════════════ HERO */}
      <section className="hero">
        <div className="hero-left">
          <div className="hero-tag">
            <span className="hero-tag-dot" />
            Sustainable Energy Pioneer
          </div>
          <h1 className="hero-h1">
            Powering a<br /><em>Greener</em><br />Tomorrow
          </h1>
          <p className="hero-body">
            {companyConfig.company.name} designs and deploys advanced wind energy systems that power communities cleanly — from coastal installations to remote mountain regions.
          </p>
          <div className="hero-ctas">
            <a href="#features" className="btn-primary-lg">Explore Solutions <span>→</span></a>
            <a href="#about" className="btn-ghost-lg">
              <span className="play-btn">▶</span>
              Watch our story
            </a>
          </div>
          <div className="hero-stats">
            {[
              { value: "40 GW", label: "Installed Capacity" },
              { value: "12M+",  label: "Customers Served" },
              { value: "85M t", label: "CO₂ Offset" },
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

      {/* ══════════════════════════════════════ MARQUEE */}
      <div className="strip">
        <div className="strip-inner">
          {[...Array(2)].map((_, i) => (
            <div key={i} style={{ display: "flex" }}>
              {[
                { label: "Smart Wind Analysis", val: "AI-Powered" },
                { label: "Carbon Certified",    val: "ISO 14001" },
                { label: "Countries Active",    val: "50+" },
                { label: "Projects Delivered",  val: "180+" },
                { label: "Years Experience",    val: "15+" },
                { label: "Satisfaction Rate",   val: "98%" },
              ].map((item) => (
                <div key={item.label + i} className="strip-item">
                  <span>{item.val}</span>{item.label}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════ FEATURES */}
      <section id="features" className="features">
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="features-header">
            <div>
              <span className="section-tag">What We Offer</span>
              <h2 className="section-h2">Built for <em>Precision</em><br />at Every Scale</h2>
            </div>
            <p className="section-body" style={{ maxWidth: 360 }}>
              Our full-stack energy platform spans siting, installation, monitoring, and carbon reporting — engineered for the long term.
            </p>
          </div>
          <div className="feature-grid">
            {[
              { num: "01", icon: "🌬️", title: "Smart Wind Analysis",  desc: "AI-powered wind pattern modeling to optimize turbine siting and maximize annual energy yield across varied terrain." },
              { num: "02", icon: "⚡", title: "Real-Time Monitoring",  desc: "24/7 performance dashboards with predictive maintenance alerts, anomaly detection, and output reporting." },
              { num: "03", icon: "🔋", title: "Grid Integration",      desc: "Seamless connection to local power grids and utility-scale battery storage with automatic load balancing." },
              { num: "04", icon: "♻️", title: "Carbon Reporting",      desc: "Certified offset documentation and ESG-ready sustainability benchmarks for every installation and operator." },
            ].map((f) => (
              <div key={f.title} className="feature-card">
                <span className="feature-num">{f.num}</span>
                <div className="feature-icon-wrap">{f.icon}</div>
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-desc">{f.desc}</p>
                <a href="#" className="feature-link">Learn more →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════ ABOUT */}
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
              <div className="about-badge-val">15+</div>
              <div className="about-badge-sub">Years of expertise</div>
            </div>
          </div>
          <div>
            <span className="section-tag">About {companyConfig.company.name}</span>
            <h2 className="section-h2" style={{ marginBottom: 20 }}>
              Engineering Clean<br />Energy <em>Since 2009</em>
            </h2>
            <p className="section-body" style={{ marginBottom: 16 }}>
              We design, manufacture, and deploy advanced wind turbine systems that deliver reliable clean power at scale — from coastal offshore installations to remote mountain communities.
            </p>
            <p className="section-body">
              Our technology adapts to every environment, minimizing footprint while maximizing output and community benefit.
            </p>
            <div className="about-checklist">
              {[
                { main: "ISO 14001 Certified",        sub: "Environmental Management System" },
                { main: "50+ Countries",              sub: "Active turbine installations worldwide" },
                { main: "Zero-emission Manufacturing", sub: "Fully renewable-powered facilities" },
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
            <a href="#" className="btn-primary-lg">Explore our story →</a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════ MISSIONS */}
      <section id="missions" className="missions-section">
        <div className="missions-header">
          <div>
            <span className="section-tag">Our Impact</span>
            <h2 className="section-h2">Measurable Results,<br /><em>Global Scale</em></h2>
          </div>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.45)", maxWidth: 320, lineHeight: 1.7 }}>
            Every turbine we install translates into concrete numbers — for communities, for the climate, and for our partners.
          </p>
        </div>
        <div className="missions-grid">
          {[
            { icon: "👥", value: "12M+",  label: "Customers Worldwide" },
            { icon: "⚡", value: "40 GW", label: "Total Installed Capacity" },
            { icon: "🌍", value: "85M",   label: "Tonnes CO₂ Offset" },
            { icon: "🏗️", value: "180+", label: "Projects Delivered" },
          ].map((stat) => (
            <div key={stat.label} className="mission-card">
              <span className="mission-icon">{stat.icon}</span>
              <div className="mission-val">{stat.value}</div>
              <div className="mission-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════ TESTIMONIALS */}
      <section className="testimonials-section">
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center" }}>
            <span className="section-tag">Client Voices</span>
            <h2 className="section-h2">Trusted by Energy<br />Leaders <em>Worldwide</em></h2>
          </div>
          <div className="testi-grid">
            {[
              { name: "Sarah Mitchell",  role: "Director, GreenGrid Corp",                stars: 5, text: `${companyConfig.company.name}'s turbines exceeded every performance benchmark we set. The monitoring dashboard alone saves our operations team over 200 hours per year in manual reporting.`, image: "/sarah.png"},
              { name: "Omar Alami",   role: "CEO, AfriWind Solutions",                 stars: 5, text: `Partnering with ${companyConfig.company.name} transformed our rural electrification project in ways we hadn't anticipated. 40,000 homes now have access to reliable, affordable clean power.`, image: "/omar.png" },
              { name: "Lena Bergström", role: "Chief Sustainability Officer, NordicPower", stars: 5, text: "The carbon reporting tools are best-in-class for enterprise sustainability teams. We hit our 2030 decarbonisation targets six full years ahead of schedule.", image: "/lena.png" },
            ].map((t) => (
              <div key={t.name} className="testi-card">
                <div className="testi-stars">{"★".repeat(t.stars)}</div>
                <p className="testi-quote">"{t.text}"</p>
                <div className="testi-author">
                  <div className="testi-avatar">
                    <Image src={t.image} alt={t.name} fill style={{ objectFit: "cover" }} />
                  </div>
                  <div>
                    <div className="testi-name">{t.name}</div>
                    <div className="testi-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════ CTA */}
      <section className="cta-section">
        <div style={{ position: "relative", zIndex: 2 }}>
          <h2 className="cta-h2">Ready to go<br /><em>net zero?</em></h2>
          <p className="cta-body">Join 12 million customers already powered by clean, reliable turbine energy.</p>
          <div className="cta-btns">
            <a href="#" className="btn-white">Get Started Free →</a>
            <a href="#contact" className="btn-outline-white">Talk to our team</a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════ FOOTER */}
      <footer id="contact">
        <div className="footer-grid">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <Image src={companyConfig.company.logo} alt={companyConfig.company.name} width={34} height={34} style={{ objectFit: "contain" }} />
              <span style={{ fontFamily: "'Instrument Sans', sans-serif", fontWeight: 700, fontSize: 14, color: "white" }}>
                {companyConfig.company.name}
              </span>
            </div>
            <p className="footer-brand-tagline">
              Engineering a greener tomorrow through advanced turbine technology and sustainable energy innovation.
            </p>
          </div>
          {[
            { heading: "Company",   links: ["About Us", "Our Mission", "Careers", "Press Kit"] },
            { heading: "Solutions", links: ["Onshore Wind", "Offshore Wind", "Hybrid Systems", "Monitoring"] },
            { heading: "Resources", links: ["Blog & Articles", "Case Studies", "Documentation", "Contact Us"] },
          ].map((col) => (
            <div key={col.heading}>
              <div className="footer-col-heading">{col.heading}</div>
              <div className="footer-links">
                {col.links.map((l) => <a key={l} href="#" className="footer-a">{l}</a>)}
              </div>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">© {new Date().getFullYear()} {companyConfig.company.name}. All rights reserved.</p>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((l) => (
              <a key={l} href="#" className="footer-a" style={{ fontSize: 12 }}>{l}</a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}