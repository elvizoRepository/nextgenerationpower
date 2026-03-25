"use client";

import { useState } from "react";
import Link from "next/link";
import { companyConfig } from "@/lib/siteConfig";

export default function LoginPage() {
  const [email,    setEmail]    = useState("");
  const [password, setPassword] = useState("");
  const [showPw,   setShowPw]   = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Instrument+Serif:ital@0;1&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html, body { height: 100%; -webkit-font-smoothing: antialiased; }

        :root {
          --ink:       #0f1f14;
          --ink-soft:  #3a4f40;
          --ink-muted: #7a9182;
          --green:     #2a7a45;
          --green-mid: #1f6b34;
          --green-sat: #3db85f;
          --lime:      #b6e87a;
          --cream:     #f5f2eb;
          --white:     #ffffff;
          --border:    #e3ded4;
        }

        /* ─── SHELL ─── */
        .login-shell {
          font-family: 'Instrument Sans', 'DM Sans', sans-serif;
          min-height: 100dvh;
          display: grid;
          grid-template-columns: 1fr 1fr;
        }

        /* ─── LEFT PANEL ─── */
        .auth-left {
          background: var(--ink);
          padding: 56px 72px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          overflow: hidden;
        }
        .auth-left::before {
          content: '';
          position: absolute; top: -30%; right: -10%;
          width: 650px; height: 650px; border-radius: 50%;
          background: radial-gradient(circle, rgba(45,145,71,.15) 0%, transparent 65%);
          pointer-events: none;
        }
        .auth-left::after {
          content: '';
          position: absolute; bottom: -25%; left: -10%;
          width: 420px; height: 420px; border-radius: 50%;
          background: radial-gradient(circle, rgba(168,217,108,.07) 0%, transparent 65%);
          pointer-events: none;
        }

        /* Logo */
        .auth-logo {
          display: flex; align-items: center; gap: 10px;
          text-decoration: none; position: relative; z-index: 2; width: fit-content;
        }
        .auth-logo-img {
          height: 38px; width: auto; object-fit: contain;
        }
        .auth-logo-text {
          font-family: 'Instrument Sans', sans-serif;
          font-size: 15px; font-weight: 700; color: white;
          line-height: 1.2;
        }

        /* Copy */
        .auth-left-copy { position: relative; z-index: 2; }
        .auth-left-tag {
          font-size: 11px; font-weight: 700; letter-spacing: .12em;
          text-transform: uppercase; color: var(--lime);
          margin-bottom: 18px; display: flex; align-items: center; gap: 8px;
        }
        .auth-left-tag-dot {
          width: 6px; height: 6px; border-radius: 50%; background: var(--lime);
          box-shadow: 0 0 0 3px rgba(182,232,122,.2);
          animation: pulse 2.4s ease-in-out infinite; flex-shrink: 0;
        }
        @keyframes pulse {
          0%,100% { box-shadow: 0 0 0 3px rgba(182,232,122,.2); }
          50%      { box-shadow: 0 0 0 7px rgba(182,232,122,.06); }
        }
        .auth-left-h {
          font-family: 'Instrument Serif', serif;
          font-size: clamp(30px, 3.6vw, 48px); color: white;
          font-weight: 400; line-height: 1.1; letter-spacing: -.02em; margin-bottom: 16px;
        }
        .auth-left-h em { font-style: italic; color: var(--lime); }
        .auth-left-p {
          font-size: 14px; line-height: 1.8;
          color: rgba(255,255,255,.5); max-width: 340px;
        }

        /* Stats */
        .auth-stats { display: flex; gap: 36px; position: relative; z-index: 2; }
        .auth-stat-val {
          font-family: 'Instrument Serif', serif;
          font-size: 28px; color: white; line-height: 1; margin-bottom: 5px;
        }
        .auth-stat-label {
          font-size: 11px; color: rgba(255,255,255,.4);
          font-weight: 600; letter-spacing: .06em; text-transform: uppercase;
        }

        /* ─── RIGHT PANEL ─── */
        .auth-right {
          background: var(--cream);
          display: flex; align-items: center; justify-content: center;
          padding: 72px 64px;
        }
        .auth-form-wrap { width: 100%; max-width: 420px; }

        /* Headings */
        .auth-form-title {
          font-family: 'Instrument Serif', serif;
          font-size: 36px; color: var(--ink); font-weight: 400;
          letter-spacing: -.02em; margin-bottom: 6px;
        }
        .auth-form-title em { color: var(--green); font-style: italic; }
        .auth-form-sub {
          font-size: 14px; color: var(--ink-muted); margin-bottom: 36px; line-height: 1.6;
        }
        .auth-form-sub a {
          color: var(--green); text-decoration: none; font-weight: 500;
        }
        .auth-form-sub a:hover { text-decoration: underline; }

        /* Fields */
        .field { margin-bottom: 20px; }
        .field-label {
          display: block; font-size: 12px; font-weight: 700;
          color: var(--ink); margin-bottom: 7px; letter-spacing: .04em;
          text-transform: uppercase;
        }
        .field-input {
          width: 100%; padding: 13px 16px;
          border: 1.5px solid var(--border); border-radius: 10px;
          font-size: 14px; font-family: inherit; color: var(--ink);
          background: white; outline: none; transition: border-color .2s;
        }
        .field-input:focus { border-color: var(--green-sat); }
        .field-input::placeholder { color: var(--ink-muted); }

        .field-row {
          display: flex; justify-content: space-between; align-items: center; margin-bottom: 7px;
        }
        .field-row .field-label { margin-bottom: 0; }
        .field-link {
          font-size: 12px; color: var(--green);
          text-decoration: none; font-weight: 500;
        }
        .field-link:hover { text-decoration: underline; }

        /* Password toggle */
        .pw-wrap { position: relative; }
        .pw-wrap .field-input { padding-right: 48px; }
        .pw-toggle {
          position: absolute; right: 14px; top: 50%; transform: translateY(-50%);
          background: none; border: none; cursor: pointer;
          font-size: 15px; color: var(--ink-muted); line-height: 1;
          display: flex; align-items: center;
        }

        /* Submit */
        .submit-btn {
          width: 100%; padding: 14px; background: var(--green); color: white;
          font-size: 15px; font-weight: 700; font-family: inherit;
          border: none; border-radius: 10px; cursor: pointer;
          transition: background .18s, transform .18s;
          margin-top: 6px; margin-bottom: 20px; letter-spacing: .01em;
        }
        .submit-btn:hover { background: var(--green-mid); transform: translateY(-1px); }

        /* Divider */
        .divider {
          display: flex; align-items: center; gap: 12px;
          font-size: 12px; color: var(--ink-muted); margin-bottom: 16px;
        }
        .divider::before, .divider::after {
          content: ''; flex: 1; height: 1px; background: var(--border);
        }

        /* SSO */
        .sso-btn {
          width: 100%; padding: 13px; background: white;
          border: 1.5px solid var(--border); border-radius: 10px;
          font-size: 14px; font-weight: 500; font-family: inherit; color: var(--ink);
          cursor: pointer; display: flex; align-items: center; justify-content: center;
          gap: 8px; transition: border-color .2s;
        }
        .sso-btn:hover { border-color: var(--green); }

        /* ─── MOBILE ─── */

        /* Tablet: hide left panel, full-width right */
        @media (max-width: 1024px) {
          .login-shell {
            grid-template-columns: 1fr;
          }
          .auth-left { display: none; }
          .auth-right {
            min-height: 100dvh;
            padding: 48px 40px;
            /* Add a subtle logo strip at the top since left panel is hidden */
          }
        }

        /* Mobile: tighter padding, centred layout */
        @media (max-width: 640px) {
          .auth-right {
            align-items: flex-start;
            padding: 40px 24px 56px;
          }
          .auth-form-wrap {
            max-width: 100%;
          }
          .auth-form-title { font-size: 30px; }
        }

        @media (max-width: 400px) {
          .auth-right { padding: 32px 18px 48px; }
        }
      `}</style>

      <div className="login-shell">

        {/* ── LEFT PANEL ── */}
        <div className="auth-left">

          <Link href="/" className="auth-logo">
            <img src="/logo.png" alt="Olson" className="auth-logo-img" />
            <span className="auth-logo-text">{companyConfig.company.name}<br /></span>
          </Link>

          <div className="auth-left-copy">
            <div className="auth-left-tag">
              <span className="auth-left-tag-dot" />
              Monitoring Platform
            </div>
            <h2 className="auth-left-h">
              Your fleet,<br /><em>always visible</em>
            </h2>
            <p className="auth-left-p">
              Real-time SCADA, predictive maintenance, and carbon reporting
              — all in one place.
            </p>
          </div>

          <div className="auth-stats">
            {[
              { v: "40 GW", l: "Monitored"    },
              { v: "99.9%", l: "Uptime"       },
              { v: "1s",    l: "Data refresh" },
            ].map((s) => (
              <div key={s.l}>
                <div className="auth-stat-val">{s.v}</div>
                <div className="auth-stat-label">{s.l}</div>
              </div>
            ))}
          </div>

        </div>

        {/* ── RIGHT PANEL ── */}
        <div className="auth-right">
          <div className="auth-form-wrap">

            {/* Mobile-only logo (shown when left panel hidden) */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 36 }}
                 className="mobile-logo">
              <style>{`.mobile-logo { display: none; } @media(max-width:1024px){ .mobile-logo { display: flex; } }`}</style>
              <img src="/logo.png" alt="Olson" style={{ height: 36, width: "auto", objectFit: "contain" }} />
              <span style={{ fontFamily: "'Instrument Sans', sans-serif", fontWeight: 700, fontSize: 14, color: "var(--ink)", lineHeight: 1.2 }}>
                {companyConfig.company.name}<br />
              </span>
            </div>

            <h1 className="auth-form-title">
              Welcome <em>back</em>
            </h1>
            <p className="auth-form-sub">
              Don't have an account?{" "}
              <Link href="/register">Get started free →</Link>
            </p>

            {/* Email */}
            <div className="field">
              <label className="field-label" htmlFor="email">Email address</label>
              <input
                id="email" type="email" className="field-input"
                placeholder="you@company.com"
                value={email} onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password */}
            <div className="field">
              <div className="field-row">
                <label className="field-label" htmlFor="password">Password</label>
                <a href="/forgot-password" className="field-link">Forgot password?</a>
              </div>
              <div className="pw-wrap">
                <input
                  id="password"
                  type={showPw ? "text" : "password"}
                  className="field-input"
                  placeholder="••••••••"
                  value={password} onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button" className="pw-toggle"
                  onClick={() => setShowPw((p) => !p)}
                  aria-label={showPw ? "Hide password" : "Show password"}
                >
                  {showPw ? "🙈" : "👁"}
                </button>
              </div>
            </div>

            <button type="button" className="submit-btn">
              Sign In →
            </button>

            <div className="divider">or continue with</div>

            <button type="button" className="sso-btn">
              🔐 Single Sign-On (SSO)
            </button>

          </div>
        </div>

      </div>
    </>
  );
}