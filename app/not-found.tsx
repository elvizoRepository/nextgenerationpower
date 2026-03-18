"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <main style={{ fontFamily: "'Instrument Sans', 'DM Sans', sans-serif", overflowX: "hidden" }}>
      <style>{`
        .nf-wrap {
          min-height: 100vh;
          background: var(--cream);
          display: flex; flex-direction: column;
        }
        .nf-body {
          flex: 1;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          padding: calc(var(--nav-h) + 48px) 48px 80px;
          text-align: center; position: relative; overflow: hidden;
        }

        /* Decorative radial glow */
        .nf-body::before {
          content: ''; position: absolute; top: 20%; left: 50%;
          transform: translateX(-50%);
          width: 600px; height: 600px; border-radius: 50%;
          background: radial-gradient(circle, rgba(30,107,52,0.07) 0%, transparent 65%);
          pointer-events: none;
        }

        /* Giant 404 behind the content */
        .nf-ghost {
          position: absolute; top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          font-family: 'Instrument Serif', Georgia, serif;
          font-size: clamp(160px, 22vw, 320px);
          font-weight: 400; line-height: 1;
          color: rgba(15,31,20,0.04);
          letter-spacing: -0.04em;
          user-select: none; pointer-events: none; white-space: nowrap;
        }

        .nf-content { position: relative; z-index: 2; max-width: 560px; }

        /* Turbine icon */
        .nf-icon {
          width: 72px; height: 72px; border-radius: 20px;
          background: var(--white); border: 1px solid var(--border);
          display: flex; align-items: center; justify-content: center;
          font-size: 32px; margin: 0 auto 28px;
          box-shadow: 0 8px 32px rgba(15,31,20,0.08);
          animation: slow-spin 12s linear infinite;
        }
        @keyframes slow-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        .nf-tag {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 11px; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--green); margin-bottom: 18px;
        }
        .nf-tag-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--green-sat); box-shadow: 0 0 0 3px rgba(61,184,95,0.2);
          animation: pulse 2.4s ease-in-out infinite; flex-shrink: 0;
        }
        @keyframes pulse {
          0%,100% { box-shadow: 0 0 0 3px rgba(61,184,95,0.2); }
          50%      { box-shadow: 0 0 0 6px rgba(61,184,95,0.08); }
        }

        .nf-h1 {
          font-family: 'Instrument Serif', Georgia, serif;
          font-size: clamp(32px, 5vw, 54px); font-weight: 400; line-height: 1.1;
          color: var(--ink); letter-spacing: -0.02em; margin-bottom: 18px;
        }
        .nf-h1 em { font-style: italic; color: var(--green); }

        .nf-body-text {
          font-size: 16px; line-height: 1.8; color: var(--ink-soft); margin-bottom: 40px;
        }

        /* Progress bar */
        .nf-progress-wrap {
          background: var(--white); border: 1px solid var(--border);
          border-radius: 14px; padding: 20px 24px; margin-bottom: 40px; text-align: left;
        }
        .nf-progress-label {
          display: flex; justify-content: space-between; align-items: center;
          font-size: 12px; font-weight: 600; color: var(--ink-muted);
          margin-bottom: 10px;
        }
        .nf-progress-label span:last-child { color: var(--green); }
        .nf-progress-track {
          height: 6px; border-radius: 99px;
          background: var(--cream-2); overflow: hidden;
        }
        .nf-progress-bar {
          height: 100%; border-radius: 99px; width: 38%;
          background: linear-gradient(90deg, var(--green), var(--lime));
          animation: progress-pulse 2.4s ease-in-out infinite;
        }
        @keyframes progress-pulse {
          0%,100% { opacity: 1; }
          50%      { opacity: 0.6; }
        }

        /* CTAs */
        .nf-ctas {
          display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;
        }
        .btn-primary {
          font-size: 14px; font-weight: 600; background: var(--ink); color: white;
          padding: 13px 28px; border-radius: 8px; text-decoration: none;
          transition: background 0.2s, transform 0.18s;
          display: inline-flex; align-items: center; gap: 8px;
        }
        .btn-primary:hover { background: var(--green); transform: translateY(-1px); }
        .btn-outline {
          font-size: 14px; font-weight: 500; color: var(--ink);
          padding: 13px 24px; border-radius: 8px; text-decoration: none;
          border: 1.5px solid var(--border);
          transition: border-color 0.2s, background 0.2s;
          display: inline-flex; align-items: center; gap: 8px;
        }
        .btn-outline:hover { border-color: var(--ink-muted); background: rgba(15,31,20,0.03); }

        /* Quick links */
        .nf-links {
          display: flex; gap: 8px; flex-wrap: wrap;
          justify-content: center; margin-top: 36px;
        }
        .nf-link {
          font-size: 13px; font-weight: 500; color: var(--ink-soft);
          text-decoration: none; padding: 7px 14px; border-radius: 20px;
          background: var(--white); border: 1px solid var(--border);
          transition: color 0.2s, border-color 0.2s;
        }
        .nf-link:hover { color: var(--green); border-color: var(--green); }

        @media (max-width: 480px) {
          .nf-body { padding: calc(var(--nav-h) + 32px) 20px 60px; }
          .nf-ctas { flex-direction: column; align-items: center; }
          .btn-primary, .btn-outline { width: 100%; justify-content: center; }
        }
      `}</style>

      <div className="nf-wrap">
        <div className="nf-body">
          <div className="nf-ghost">404</div>

          <div className="nf-content">
            <div className="nf-icon">🌬️</div>

            <div className="nf-tag">
              <span className="nf-tag-dot" />
              Page not found
            </div>

            <h1 className="nf-h1">
              Our engineers are<br /><em>building this page</em>
            </h1>

            <p className="nf-body-text">
              This page is currently under construction. Our team is working on it —
              check back soon or head somewhere that's already live.
            </p>

            <div className="nf-progress-wrap">
              <div className="nf-progress-label">
                <span>Build in progress…</span>
                <span>Active</span>
              </div>
              <div className="nf-progress-track">
                <div className="nf-progress-bar" />
              </div>
            </div>

            <div className="nf-ctas">
              <Link href="/" className="btn-primary">← Back to Home</Link>
              <Link href="/contact" className="btn-outline">Contact us</Link>
            </div>

            <div className="nf-links">
              {[
                ["Features",  "/features"],
                ["About",     "/about"],
                ["Impact",    "/missions"],
                ["Contact",   "/contact"],
              ].map(([label, href]) => (
                <Link key={label} href={href} className="nf-link">{label}</Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}