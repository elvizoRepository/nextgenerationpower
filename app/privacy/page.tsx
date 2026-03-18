// app/privacy/page.tsx
"use client";

import React from "react";

// ─── TYPES ───────────────────────────────────────────────
type PrivacySection = {
  title: string;
  body: string;
};

type LegalPageProps = {
  title: React.ReactNode;
  subtitle: string;
  updated: string;
  sections: PrivacySection[];
};

// ─── DATA ───────────────────────────────────────────────
const PRIVACY_SECTIONS: PrivacySection[] = [
  {
    title: "Information We Collect",
    body: "We collect information you provide directly (account registration, contact forms, support requests), information generated through your use of our platform (turbine performance data, usage logs, API calls), and technical information from your devices (IP address, browser type, cookies). We do not sell personal information to third parties."
  },
  {
    title: "How We Use Your Information",
    body: "We use collected information to provide and improve our monitoring platform, send operational alerts and reports, communicate product updates and support, comply with legal obligations, and for security and fraud prevention. We process data only as necessary for the purposes described in this policy."
  },
  {
    title: "Data Sharing",
    body: "We share data with service providers who help us operate our platform (cloud hosting, email delivery, analytics) under strict data processing agreements. We may share data when required by law, to protect rights and safety, or in connection with a business transfer. We never sell your data."
  },
  {
    title: "Data Retention",
    body: "We retain account information for the duration of your relationship with us and for up to 7 years after account closure for legal and audit purposes. Turbine performance data is retained for the contract term plus 3 years. You may request deletion of personal data subject to legal retention requirements."
  },
  {
    title: "Your Rights",
    body: "Depending on your location, you may have the right to access, correct, or delete your personal data; object to or restrict processing; data portability; and to withdraw consent. To exercise these rights, contact privacy@nextgenerationpower.com. We will respond within 30 days."
  },
  {
    title: "Security",
    body: "We use industry-standard security measures including TLS encryption in transit, AES-256 encryption at rest, SOC 2 Type II certified infrastructure, regular penetration testing, and role-based access controls. We maintain an incident response program and will notify affected users of breaches as required by law."
  },
  {
    title: "Cookies",
    body: "We use cookies and similar tracking technologies for authentication, security, platform functionality, and analytics. See our Cookie Policy for full details. You can manage cookie preferences via your browser settings or our cookie consent manager."
  },
  {
    title: "Contact",
    body: "For privacy enquiries, contact our Data Protection Officer at privacy@nextgenerationpower.com or by post to Next Generation Power, 999 Brickell Ave #410, Miami, FL."
  }
];

// ─── COMPONENT ─────────────────────────────────────────
function LegalPage({ title, subtitle, updated, sections }: LegalPageProps) {
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
          margin: 0;
        }
        .ph-h1 em { font-style: italic; color: var(--green); }
        .ph-right {
          display: flex; flex-direction: column; justify-content: flex-end; gap: 20px;
        }
        .ph-body {
          font-size: 16px; line-height: 1.8; color: var(--ink-soft); max-width: 440px;
        }
        .ph-updated {
          font-size: 12px; color: var(--ink-muted);
          padding-top: 16px; border-top: 1px solid var(--border);
          display: inline-block;
        }

        /* ── BODY ── */
        .legal-body { background: var(--white); padding: 100px 80px; }
        .legal-body-inner { max-width: 760px; margin: 0 auto; }
        .legal-section { margin-bottom: 48px; }
        .legal-section:last-child { margin-bottom: 0; }
        .legal-section-title {
          font-family: 'Instrument Serif', Georgia, serif;
          font-size: 22px; color: var(--ink); font-weight: 400;
          margin: 0 0 12px; padding-bottom: 12px;
          border-bottom: 1px solid var(--border);
        }
        .legal-section-body {
          font-size: 14.5px; line-height: 1.9; color: var(--ink-soft);
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1200px) {
          .ph, .legal-body { padding-left: 48px; padding-right: 48px; }
        }
        @media (max-width: 1024px) {
          .ph { padding: calc(var(--nav-h) + 56px) 40px 64px; }
          .ph-inner { grid-template-columns: 1fr; gap: 40px; }
          .legal-body { padding-left: 40px; padding-right: 40px; }
        }
        @media (max-width: 768px) {
          .ph { padding: calc(var(--nav-h) + 40px) 28px 56px; }
          .legal-body { padding-left: 28px; padding-right: 28px; padding-top: 80px; padding-bottom: 80px; }
        }
        @media (max-width: 480px) {
          .ph { padding: calc(var(--nav-h) + 28px) 18px 48px; }
          .legal-body { padding-left: 18px; padding-right: 18px; padding-top: 64px; padding-bottom: 64px; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section className="ph">
        <div className="ph-inner">
          <div>
            <div className="ph-tag">
              <span className="ph-tag-dot" />
              Legal
            </div>
            <h1 className="ph-h1">{title}</h1>
          </div>
          <div className="ph-right">
            <p className="ph-body">{subtitle}</p>
            <span className="ph-updated">Last updated: {updated}</span>
          </div>
        </div>
      </section>

      {/* ── BODY ── */}
      <section className="legal-body">
        <div className="legal-body-inner">
          {sections.map((s) => (
            <div key={s.title} className="legal-section">
              <h2 className="legal-section-title">{s.title}</h2>
              <p className="legal-section-body">{s.body}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

// ─── EXPORT PAGE ────────────────────────────────────────
export default function PrivacyPage() {
  return (
    <LegalPage
      title={<>Privacy <em>Policy</em></>}
      subtitle="This policy explains how Next Generation Power collects, uses, and protects personal information across our products and services."
      updated="1 March 2025"
      sections={PRIVACY_SECTIONS}
    />
  );
}