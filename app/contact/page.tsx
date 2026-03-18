"use client";

import { useState } from "react";

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const OFFICES = [
  {
    city: "Harlow, SC",
    role: "Global Headquarters",
    address: "14 Ridgeline Pkwy, Suite 200, Harlow, SC 29401",
    phone: "+1 (843) 557-2190",
    fax: "+1 (954) 662-7679",
    email: "hq@nextgenerationpower.com",
    flag: "🇺🇸",
  },
  {
    city: "London",
    role: "European Operations",
    address: "1 Canada Square, Canary Wharf, London E14 5AB",
    phone: "+44 20 3478 9120",
    email: "europe@nextgenerationpower.com",
    flag: "🇬🇧",
  },
  {
    city: "Singapore",
    role: "Asia Pacific",
    address: "1 Raffles Quay, #20-01, Singapore 048583",
    phone: "+65 6224 8830",
    email: "apac@nextgenerationpower.com",
    flag: "🇸🇬",
  },
];

const ENQUIRY_TYPES = [
  "New project / site assessment",
  "Platform demo request",
  "Partnership opportunity",
  "Investor relations",
  "Press & media",
  "Careers",
  "General enquiry",
];

const FAQS = [
  {
    q: "How quickly can you respond to a new project enquiry?",
    a: "Our project team responds to all new enquiries within one business day. For urgent site assessments, we can typically mobilise within 72 hours.",
  },
  {
    q: "Do you work with projects outside your listed regions?",
    a: "Yes. While our offices cover most geographies, we've delivered projects in 50+ countries. Contact us and we'll let you know our capacity in your region.",
  },
  {
    q: "What information should I have ready before contacting you?",
    a: "For project enquiries: approximate site location, target capacity, and timeline. For platform demos: your fleet size and current tooling. Everything else — just reach out and we'll guide you.",
  },
  {
    q: "Can I request a specific team member or engineer?",
    a: "Absolutely. If you've worked with someone on our team before or were referred to a specific person, mention their name in the message and we'll route it directly to them.",
  },
];

type FormState = {
  name: string;
  email: string;
  company: string;
  type: string;
  message: string;
};

type SubmitStatus = "idle" | "sending" | "success" | "error";

/* ─────────────────────────────────────────
   PAGE
───────────────────────────────────────── */
export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "", email: "", company: "", type: "", message: "",
  });
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1400));
    setStatus("success");
  }

  const isValid = form.name && form.email && form.message;

  return (
    <main style={{ fontFamily: "'Instrument Sans', 'DM Sans', sans-serif", overflowX: "hidden" }}>
      <style>{`
        /* ── PAGE HERO ── */
        .ph {
          background: var(--cream);
          padding: calc(var(--nav-h) + 72px) 80px 80px;
        }
        .ph-inner { max-width: 1200px; margin: 0 auto; }
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
          margin-bottom: 18px;
        }
        .ph-h1 em { font-style: italic; color: var(--green); }
        .ph-body {
          font-size: 16px; line-height: 1.8; color: var(--ink-soft); max-width: 520px;
        }

        /* ── MAIN GRID (form + sidebar) ── */
        .contact-grid {
          max-width: 1200px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 400px;
          gap: 64px; padding: 0 80px 100px;
        }

        /* ── FORM ── */
        .form-card {
          background: var(--white); 
          border-radius: 24px; padding: 48px;
        }
        .form-title {
          font-family: 'Instrument Serif', serif; font-size: 26px; font-weight: 400;
          color: var(--ink); margin-bottom: 6px;
        }
        .form-subtitle { font-size: 14px; color: var(--ink-muted); margin-bottom: 36px; }

        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .form-group { display: flex; flex-direction: column; gap: 7px; margin-bottom: 20px; }
        .form-label {
          font-size: 12px; font-weight: 700; letter-spacing: 0.06em;
          text-transform: uppercase; color: var(--ink-soft);
        }
        .form-input, .form-select, .form-textarea {
          font-family: 'Instrument Sans', sans-serif;
          font-size: 14px; color: var(--ink);
          background: var(--cream); border: 1.5px solid transparent;
          border-radius: 10px; padding: 13px 16px;
          outline: none; transition: border-color 0.2s, background 0.2s;
          width: 100%;
        }
        .form-input:focus, .form-select:focus, .form-textarea:focus {
          border-color: var(--green); background: var(--white);
        }
        .form-input::placeholder, .form-textarea::placeholder { color: var(--ink-muted); }
        .form-select { appearance: none; cursor: pointer; }
        .form-select-wrap { position: relative; }
        .form-select-wrap::after {
          content: '▾'; position: absolute; right: 14px; top: 50%; transform: translateY(-50%);
          font-size: 12px; color: var(--ink-muted); pointer-events: none;
        }
        .form-textarea { resize: vertical; min-height: 140px; line-height: 1.65; }

        .btn-submit {
          width: 100%; padding: 15px; border-radius: 10px; border: none; cursor: pointer;
          font-family: 'Instrument Sans', sans-serif; font-size: 15px; font-weight: 700;
          letter-spacing: 0.02em; color: white; background: var(--green);
          transition: background 0.2s, transform 0.18s, opacity 0.2s;
          display: flex; align-items: center; justify-content: center; gap: 10px;
        }
        .btn-submit:hover:not(:disabled) { background: var(--green-mid); transform: translateY(-1px); }
        .btn-submit:disabled { opacity: 0.6; cursor: not-allowed; }

        /* Success state */
        .success-box {
          text-align: center; padding: 48px 32px;
        }
        .success-icon {
          width: 64px; height: 64px; border-radius: 50%;
          background: rgba(30,107,52,0.1); border: 2px solid var(--green);
          display: flex; align-items: center; justify-content: center;
          font-size: 26px; margin: 0 auto 24px;
        }
        .success-title {
          font-family: 'Instrument Serif', serif; font-size: 28px;
          color: var(--ink); margin-bottom: 12px;
        }
        .success-body { font-size: 15px; color: var(--ink-soft); line-height: 1.7; }

        /* ── SIDEBAR ── */
        .sidebar { display: flex; flex-direction: column; gap: 24px; }

        .sidebar-card {
          background: var(--white); 
          border-radius: 20px; padding: 32px;
        }
        .sidebar-card-title {
          font-family: 'Instrument Sans', sans-serif; font-size: 13px; font-weight: 700;
          letter-spacing: 0.06em; text-transform: uppercase;
          color: var(--ink-muted); margin-bottom: 20px;
        }

        /* Response time card */
        .response-row {
          display: flex; align-items: center; gap: 14px; padding: 14px 0;
          border-bottom: 1px solid var(--border);
        }
        .response-row:last-child { border-bottom: none; padding-bottom: 0; }
        .response-icon {
          width: 38px; height: 38px; border-radius: 10px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          font-size: 16px; background: var(--cream-2); border: 1px solid var(--border);
        }
        .response-type { font-size: 13px; font-weight: 600; color: var(--ink); }
        .response-time { font-size: 12px; color: var(--green); font-weight: 600; margin-top: 2px; }

        /* Direct contacts */
        .direct-link {
          display: flex; align-items: center; gap: 10px; padding: 12px 0;
          border-bottom: 1px solid var(--border); text-decoration: none;
          transition: color 0.2s;
        }
        .direct-link:last-child { border-bottom: none; padding-bottom: 0; }
        .direct-link:hover .direct-label { color: var(--green); }
        .direct-icon { font-size: 16px; flex-shrink: 0; }
        .direct-label { font-size: 13.5px; color: var(--ink); font-weight: 500; }
        .direct-arrow { margin-left: auto; font-size: 11px; color: var(--ink-muted); transition: transform 0.2s; }
        .direct-link:hover .direct-arrow { transform: translateX(3px); }

        /* ── OFFICES ── */
        .offices { background: var(--cream); padding: 100px 80px; }
        .offices-inner { max-width: 1200px; margin: 0 auto; }
        .offices-grid {
          display: grid; grid-template-columns: repeat(3,1fr); gap: 1px;
          background: var(--border); border: 1px solid var(--border);
          border-radius: 20px; overflow: hidden; margin-top: 56px;
        }
        .office-card {
          background: var(--white); padding: 32px 28px; transition: background 0.2s;
        }
        .office-card:hover { background: var(--cream); }
        .office-flag { font-size: 26px; margin-bottom: 14px; display: block; }
        .office-city {
          font-family: 'Instrument Serif', serif; font-size: 22px;
          color: var(--ink); margin-bottom: 4px;
        }
        .office-role {
          font-size: 11px; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase; color: var(--green); margin-bottom: 18px;
        }
        .office-detail {
          font-size: 13px; color: var(--ink-muted); line-height: 1.65; margin-bottom: 6px;
          display: flex; align-items: flex-start; gap: 8px;
        }
        .office-detail-icon { flex-shrink: 0; margin-top: 1px; }

        /* ── FAQ ── */
        .faq { background: var(--white); padding: 100px 80px; }
        .faq-inner { max-width: 800px; margin: 0 auto; }
        .faq-list { display: flex; flex-direction: column; gap: 0; margin-top: 48px; }
        .faq-item {
          border-bottom: 1px solid var(--border); overflow: hidden;
        }
        .faq-item:first-child { border-top: 1px solid var(--border); }
        .faq-trigger {
          width: 100%; display: flex; align-items: center; justify-content: space-between;
          gap: 16px; padding: 22px 0; background: none; border: none; cursor: pointer;
          text-align: left;
        }
        .faq-q {
          font-size: 15px; font-weight: 600; color: var(--ink); line-height: 1.45;
        }
        .faq-chevron {
          font-size: 18px; color: var(--ink-muted); flex-shrink: 0;
          transition: transform 0.25s;
        }
        .faq-chevron.open { transform: rotate(45deg); color: var(--green); }
        .faq-answer {
          font-size: 14.5px; line-height: 1.8; color: var(--ink-soft);
          padding-bottom: 22px; max-height: 0; overflow: hidden;
          transition: max-height 0.3s ease, padding 0.3s ease;
        }
        .faq-answer.open { max-height: 300px; }

        /* ── RESPONSIVE ── */
        @media (max-width: 1200px) {
          .ph { padding-left: 48px; padding-right: 48px; }
          .contact-grid { padding-left: 48px; padding-right: 48px; gap: 48px; }
          .offices, .faq { padding-left: 48px; padding-right: 48px; }
        }
        @media (max-width: 1024px) {
          .ph { padding-left: 40px; padding-right: 40px; }
          .contact-grid {
            grid-template-columns: 1fr; padding-left: 40px; padding-right: 40px;
          }
          .offices, .faq { padding-left: 40px; padding-right: 40px; }
          .offices-grid { grid-template-columns: repeat(2,1fr); }
          .sidebar { flex-direction: row; flex-wrap: wrap; }
          .sidebar-card { flex: 1; min-width: 240px; }
        }
        @media (max-width: 768px) {
          .ph { padding: calc(var(--nav-h) + 40px) 28px 56px; }
          .contact-grid { padding: 0 28px 80px; }
          .offices, .faq { padding: 80px 28px; }
          .form-row { grid-template-columns: 1fr; }
          .form-card { padding: 32px 24px; }
          .sidebar { flex-direction: column; }
          .offices-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 480px) {
          .ph { padding: calc(var(--nav-h) + 28px) 18px 48px; }
          .contact-grid { padding: 0 18px 64px; }
          .offices, .faq { padding: 64px 18px; }
          .form-card { padding: 24px 18px; }
        }
      `}</style>

      {/* ── PAGE HERO ── */}
      <section className="ph">
        <div className="ph-inner">
          <div className="ph-tag">
            <span className="ph-tag-dot" />
            Get In Touch
          </div>
          <h1 className="ph-h1">
            Let's talk about<br />your <em>next project</em>
          </h1>
          <p className="ph-body">
            Whether you're planning a new wind site, want a platform demo, or just have a
            question — our team responds within one business day.
          </p>
        </div>
      </section>

      {/* ── CONTACT GRID ── */}
      <div className="contact-grid">

        {/* FORM */}
        <div className="">
          {status === "success" ? (
            <div className="success-box">
              <div className="success-icon">✓</div>
              <div className="success-title">Message received</div>
              <p className="success-body">
                Thanks for reaching out. Someone from the right team will be in touch
                within one business day — usually much sooner.
              </p>
            </div>
          ) : (
            <div className="form-card">
              <div className="form-title">Send us a message</div>
              <div className="form-subtitle">All fields marked * are required.</div>

              <form onSubmit={handleSubmit} noValidate className="">
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Full name *</label>
                    <input
                      id="name" name="name" type="text"
                      className="form-input" placeholder="Jane Smith"
                      value={form.name} onChange={handleChange} required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Work email *</label>
                    <input
                      id="email" name="email" type="email"
                      className="form-input" placeholder="jane@company.com"
                      value={form.email} onChange={handleChange} required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="company">Company</label>
                    <input
                      id="company" name="company" type="text"
                      className="form-input" placeholder="Acme Energy Ltd"
                      value={form.company} onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="type">Enquiry type</label>
                    <div className="form-select-wrap">
                      <select
                        id="type" name="type"
                        className="form-select"
                        value={form.type} onChange={handleChange}
                      >
                        <option value="">Select one…</option>
                        {ENQUIRY_TYPES.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Message *</label>
                  <textarea
                    id="message" name="message"
                    className="form-textarea"
                    placeholder="Tell us about your project, timeline, or question…"
                    value={form.message} onChange={handleChange} required
                  />
                </div>

                <button
                  type="submit"
                  className="btn-submit"
                  disabled={!isValid || status === "sending"}
                >
                  {status === "sending" ? (
                    <>
                      <span style={{ display: "inline-block", animation: "spin 0.8s linear infinite" }}>◌</span>
                      Sending…
                    </>
                  ) : (
                    "Send message →"
                  )}
                </button>

                <p style={{ fontSize: 12, color: "var(--ink-muted)", textAlign: "center", marginTop: 14, lineHeight: 1.6 }}>
                  By submitting this form you agree to our{" "}
                  <a href="/privacy" style={{ color: "var(--green)", textDecoration: "none" }}>Privacy Policy</a>.
                  We never sell your data.
                </p>
              </form>
            </div>
          )}
        </div>

        {/* SIDEBAR */}
        <aside className="sidebar">
          {/* Response times */}
          <div className="sidebar-card">
            <div className="sidebar-card-title">Response times</div>
            {[
              { icon: "🏗️", type: "New project enquiry",   time: "Within 1 business day" },
              { icon: "📊", type: "Platform demo request",  time: "Within 4 hours"        },
              { icon: "🤝", type: "Partnership / investor", time: "Within 2 business days" },
              { icon: "📰", type: "Press & media",          time: "Within 2 hours"        },
            ].map((r) => (
              <div key={r.type} className="response-row">
                <div className="response-icon">{r.icon}</div>
                <div>
                  <div className="response-type">{r.type}</div>
                  <div className="response-time">{r.time}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Direct contacts */}
          <div className="sidebar-card">
            <div className="sidebar-card-title">Direct contacts</div>
            {[
              { icon: "📧", label: "General",   href: "mailto:hello@nextgenerationpower.com",  val: "hello@nextgenerationpower.com"  },
              { icon: "📞", label: "HQ",        href: "tel:+18435572190",               val: "+1 (843) 557-2190"       },
              { icon: "📠", label: "Fax",       href: "tel:+19546627679",               val: "+1 (954) 662-7679"       },
              { icon: "📰", label: "Press",     href: "mailto:press@nextgenerationpower.com",  val: "press@nextgenerationpower.com"  },
              { icon: "💼", label: "Careers",   href: "/careers",                       val: "View open roles"         },
            ].map((d) => (
              <a key={d.label} href={d.href} className="direct-link" target={d.href.startsWith("http") ? "_blank" : undefined} rel={d.href.startsWith("http") ? "noopener noreferrer" : undefined}>
                <span className="direct-icon">{d.icon}</span>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "var(--ink-muted)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 2 }}>{d.label}</div>
                  <div className="direct-label">{d.val}</div>
                </div>
                <span className="direct-arrow">→</span>
              </a>
            ))}
          </div>

          {/* Trust badge */}
          <div className="sidebar-card" style={{ background: "var(--ink)", border: "none" }}>
            <div style={{ fontSize: 28, marginBottom: 16 }}>🔒</div>
            <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 18, color: "white", marginBottom: 10, lineHeight: 1.3 }}>
              Your data is safe with us
            </div>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.7 }}>
              We use end-to-end encryption for all submissions. We never sell
              or share your contact information with third parties.
            </p>
          </div>
        </aside>
      </div>

      {/* ── OFFICES ── */}
      <section className="offices">
        <div className="offices-inner">
          <span className="section-tag">Global Offices</span>
          <h2 className="section-h2">Find us <em>near you</em></h2>
          <p className="section-body" style={{ maxWidth: 500, marginTop: 14 }}>
            Three regional offices, one standard of service. Whichever team you reach,
            you'll speak to someone who knows your market.
          </p>

          <div className="offices-grid">
            {OFFICES.map((o) => (
              <div key={o.city} className="office-card">
                <span className="office-flag">{o.flag}</span>
                <div className="office-city">{o.city}</div>
                <div className="office-role">{o.role}</div>
                <div className="office-detail">
                  <span className="office-detail-icon">📍</span>
                  <span>{o.address}</span>
                </div>
                <div className="office-detail">
                  <span className="office-detail-icon">📞</span>
                  <a href={`tel:${o.phone.replace(/[\s\-\+\(\)]/g,"")}`} style={{ color: "inherit", textDecoration: "none" }}>{o.phone}</a>
                </div>
                {"fax" in o && o.fax && (
                  <div className="office-detail">
                    <span className="office-detail-icon">📠</span>
                    <span>{o.fax}</span>
                  </div>
                )}
                <div className="office-detail">
                  <span className="office-detail-icon">✉️</span>
                  <a href={`mailto:${o.email}`} style={{ color: "var(--green)", textDecoration: "none" }}>{o.email}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="faq">
        <div className="faq-inner">
          <div style={{ textAlign: "center" }}>
            <span className="section-tag">Common Questions</span>
            <h2 className="section-h2">Before you reach out, <em>check here</em></h2>
          </div>

          <div className="faq-list">
            {FAQS.map((item, i) => (
              <div key={i} className="faq-item">
                <button
                  className="faq-trigger"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span className="faq-q">{item.q}</span>
                  <span className={`faq-chevron${openFaq === i ? " open" : ""}`}>+</span>
                </button>
                <div className={`faq-answer${openFaq === i ? " open" : ""}`}>
                  {item.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </main>
  );
}