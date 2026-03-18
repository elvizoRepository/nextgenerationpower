"use client";
import { useState } from "react";

type CookieType = {
  name: string;
  required: boolean;
  desc: string;
  examples: string[];
};

const COOKIE_TYPES: CookieType[] = [
  {
    name: "Strictly Necessary",
    required: true,
    desc: "Essential for the platform to function. Cannot be disabled.",
    examples: [
      "Session authentication",
      "CSRF protection token",
      "Load balancer affinity",
      "Cookie consent preference"
    ],
  },
  {
    name: "Functional",
    required: false,
    desc: "Remember your preferences and settings to improve your experience.",
    examples: [
      "Dashboard layout preferences",
      "Selected fleet/time range",
      "Language and timezone settings",
      "Collapsed sidebar state"
    ],
  },
  {
    name: "Analytics",
    required: false,
    desc: "Help us understand how the platform is used so we can improve it.",
    examples: [
      "Page views and navigation paths",
      "Feature usage frequency",
      "Error and performance tracking",
      "A/B test assignment"
    ],
  },
  {
    name: "Marketing",
    required: false,
    desc: "Used to measure the effectiveness of marketing campaigns.",
    examples: [
      "Campaign attribution",
      "Retargeting pixels",
      "Referral source tracking",
      "Conversion events"
    ],
  },
];

export default function CookiesPage() {
  const [prefs, setPrefs] = useState<Record<string, boolean>>({
    Functional: true,
    Analytics: true,
    Marketing: false,
  });

  return (
    <main style={{ fontFamily: "'Instrument Sans','DM Sans',sans-serif", overflowX:"hidden" }}>

<style>{`

/* HERO — identical spacing to features */
.legal-hero{
  background:var(--ink);
  padding:calc(var(--nav-h) + 72px) 80px 80px;
  position:relative;
  overflow:hidden;
}

.legal-hero-inner{
  max-width:900px;
  margin:0 auto;
}

.legal-tag{
  font-size:11px;
  font-weight:700;
  letter-spacing:.12em;
  text-transform:uppercase;
  color:var(--lime);
  margin-bottom:18px;
  display:block;
}

.legal-h1{
  font-family:'Instrument Serif',serif;
  font-size:clamp(40px,5vw,64px);
  color:white;
  line-height:1.1;
  letter-spacing:-.02em;
  margin-bottom:14px;
}

.legal-h1 em{
  color:var(--lime);
  font-style:italic;
}

.legal-sub{
  font-size:16px;
  color:rgba(255,255,255,.6);
  max-width:520px;
  line-height:1.7;
  margin-bottom:18px;
}

.legal-updated{
  font-size:12px;
  color:rgba(255,255,255,.4);
}

/* BODY SECTION */
.cookie-body{
  background:var(--cream);
  padding:100px 80px;
}

.cookie-body-inner{
  max-width:1100px;
  margin:0 auto;
}

.cookie-intro{
  font-size:15px;
  color:var(--ink-soft);
  line-height:1.8;
  max-width:640px;
  margin-bottom:56px;
}

/* GRID same as overview grid */
.cookie-cards{
  display:grid;
  grid-template-columns:repeat(2,1fr);
  gap:24px;
}

/* CARD STYLE matching platform cards */
.cookie-card{
  background:white;
  border:1px solid var(--border);
  border-radius:16px;
  padding:28px;
  transition:.2s;
}

.cookie-card:hover{
  box-shadow:0 10px 30px rgba(15,31,20,.08);
}

/* HEADER */
.cookie-card-header{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:12px;
}

.cookie-card-title{
  font-weight:600;
  font-size:15px;
  color:var(--ink);
}

.cookie-required-badge{
  font-size:11px;
  font-weight:600;
  background:rgba(30,107,52,.1);
  color:var(--green);
  padding:4px 8px;
  border-radius:6px;
}

/* DESCRIPTION */
.cookie-card-desc{
  font-size:13px;
  color:var(--ink-muted);
  line-height:1.6;
  margin-bottom:16px;
}

/* EXAMPLES */
.cookie-examples{
  display:flex;
  flex-wrap:wrap;
  gap:8px;
}

.cookie-example{
  font-size:11px;
  background:var(--cream);
  border:1px solid var(--border);
  padding:5px 8px;
  border-radius:6px;
}

/* TOGGLE */
.cookie-toggle{
  position:relative;
  width:40px;
  height:22px;
}

.cookie-toggle input{
  opacity:0;
  width:0;
  height:0;
}

.toggle-slider{
  position:absolute;
  inset:0;
  background:#ccc;
  border-radius:20px;
  transition:.2s;
}

.toggle-slider:before{
  content:"";
  position:absolute;
  height:16px;
  width:16px;
  left:3px;
  top:3px;
  background:white;
  border-radius:50%;
  transition:.2s;
}

.cookie-toggle input:checked + .toggle-slider{
  background:var(--green);
}

.cookie-toggle input:checked + .toggle-slider:before{
  transform:translateX(18px);
}

/* SAVE BUTTON */
.save-btn{
  margin-top:48px;
  font-size:14px;
  font-weight:600;
  background:var(--green);
  color:white;
  border:none;
  padding:14px 28px;
  border-radius:8px;
  cursor:pointer;
  transition:.2s;
}

.save-btn:hover{
  background:var(--green-mid);
  transform:translateY(-1px);
}

/* RESPONSIVE — identical system */
@media(max-width:1024px){
  .legal-hero{padding:calc(var(--nav-h) + 48px) 40px 64px;}
  .cookie-body{padding:80px 40px;}
  .cookie-cards{grid-template-columns:1fr;}
}

@media(max-width:768px){
  .legal-hero{padding:calc(var(--nav-h) + 32px) 28px 56px;}
  .cookie-body{padding:64px 28px;}
}

`}</style>


<section className="legal-hero">
  <div className="legal-hero-inner">
    <span className="legal-tag">Legal</span>
    <h1 className="legal-h1">Cookie <em>Policy</em></h1>
    <p className="legal-sub">
      This policy explains how Next Generation Power Technologies uses cookies
      and similar technologies across our platform and website.
    </p>
    <div className="legal-updated">
      Last updated: 1 March 2025
    </div>
  </div>
</section>


<section className="cookie-body">
  <div className="cookie-body-inner">

    <p className="cookie-intro">
      We use cookies to ensure our platform functions correctly,
      remember your preferences, and understand how our services are
      used. You can manage your preferences below. Strictly necessary
      cookies cannot be disabled as they are required for the platform
      to operate.
    </p>

    <div className="cookie-cards">
      {COOKIE_TYPES.map((c)=>(
        <div key={c.name} className="cookie-card">

          <div className="cookie-card-header">
            <div style={{display:"flex",alignItems:"center",gap:10}}>
              <span className="cookie-card-title">{c.name}</span>
              {c.required && (
                <span className="cookie-required-badge">
                  Required
                </span>
              )}
            </div>

            <label className="cookie-toggle">
              <input
                type="checkbox"
                checked={c.required ? true : prefs[c.name]}
                disabled={c.required}
                onChange={()=>!c.required &&
                  setPrefs(p=>({...p,[c.name]:!p[c.name]}))
                }
              />
              <span className="toggle-slider"/>
            </label>
          </div>

          <p className="cookie-card-desc">{c.desc}</p>

          <div className="cookie-examples">
            {c.examples.map(e=>(
              <span key={e} className="cookie-example">
                {e}
              </span>
            ))}
          </div>

        </div>
      ))}
    </div>

    <button
      className="save-btn"
      onClick={()=>alert("Preferences saved")}
    >
      Save Preferences →
    </button>

  </div>
</section>

</main>
);
}