"use client";
import { companyConfig } from "@/lib/siteConfig";
import { useState, ChangeEvent } from "react";

// ─── TYPES ───────────────────────────────────────────────
type Plan = {
  id: string;
  name: string;
  price: string;
  desc: string;
};

type FormState = {
  name: string;
  company: string;
  email: string;
  password: string;
};

// ─── DATA ───────────────────────────────────────────────
const PLANS: Plan[] = [
  { id: "starter", name: "Starter", price: "Free", desc: "Up to 5 turbines, 7-day data retention, basic alerts." },
  { id: "pro", name: "Pro", price: "€299/mo", desc: "Up to 100 turbines, 2-year retention, AI predictions." },
  { id: "enterprise", name: "Enterprise", price: "Custom", desc: "Unlimited fleet, dedicated support, SLA guarantee." },
];

// ─── COMPONENT ─────────────────────────────────────────
export default function RegisterPage() {
  const [step, setStep] = useState<number>(1);
  const [plan, setPlan] = useState<string>("pro");
  const [form, setForm] = useState<FormState>({
    name: "",
    company: "",
    email: "",
    password: "",
  });

  // Typed setter for form fields
  const set = (k: keyof FormState) => (e: ChangeEvent<HTMLInputElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const benefits: string[] = [
    "No hardware required — works with any SCADA",
    "Free 30-day trial on Pro plan",
    "SOC 2 Type II certified platform",
    "Dedicated onboarding support included"
  ];

  return (
    <main style={{ fontFamily:"'Instrument Sans','DM Sans',sans-serif", minHeight:"100vh", display:"grid", gridTemplateColumns:"1fr 1fr" }}>
      <style>{`
        :root{--ink:#0f1f14;--ink-soft:#3a4f40;--ink-muted:#7a9182;--green:#2a7a45;--green-sat:#3db85f;--lime:#b6e87a;--cream:#f5f2eb;--white:#fff;--border:#e3ded4;}
        *{box-sizing:border-box;}
        .auth-left{background:var(--green);display:flex;flex-direction:column;justify-content:space-between;padding:48px;position:relative;overflow:hidden;}
        .auth-left::before{content:'';position:absolute;top:-10%;right:-10%;width:500px;height:500px;border-radius:50%;background:radial-gradient(circle,rgba(182,232,122,.15) 0%,transparent 65%);pointer-events:none;}
        .auth-logo{font-family:'Instrument Serif',Georgia,serif;font-size:20px;color:#fff;text-decoration:none;position:relative;z-index:2;}
        .auth-logo span{color:var(--lime);}
        .auth-left-copy{position:relative;z-index:2;}
        .auth-left-tag{font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.6);margin-bottom:16px;display:block;}
        .auth-left-h{font-family:'Instrument Serif',serif;font-size:clamp(26px,3vw,40px);color:#fff;font-weight:400;line-height:1.1;margin:0 0 16px;letter-spacing:-.02em;}
        .auth-left-h em{font-style:italic;color:var(--lime);}
        .auth-left-p{font-size:14px;color:rgba(255,255,255,.65);line-height:1.75;max-width:320px;}
        .reg-benefits{display:flex;flex-direction:column;gap:12px;position:relative;z-index:2;}
        .reg-benefit{display:flex;align-items:center;gap:12px;font-size:14px;color:rgba(255,255,255,.8);}
        .reg-benefit-icon{width:24px;height:24px;border-radius:50%;background:rgba(255,255,255,.15);display:flex;align-items:center;justify-content:center;font-size:11px;flex-shrink:0;}
        .auth-right{background:var(--cream);display:flex;align-items:center;justify-content:center;padding:48px;overflow-y:auto;}
        .auth-form-wrap{width:100%;max-width:440px;}
        .auth-step-bar{display:flex;align-items:center;gap:8px;margin-bottom:32px;}
        .step-dot{width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;transition:all .2s;flex-shrink:0;}
        .step-dot.done{background:var(--green-sat);color:#fff;}
        .step-dot.active{background:var(--ink);color:#fff;}
        .step-dot.pending{background:var(--border);color:var(--ink-muted);}
        .step-line{flex:1;height:2px;background:var(--border);border-radius:2px;}
        .step-line.done{background:var(--green-sat);}
        .auth-form-title{font-family:'Instrument Serif',serif;font-size:30px;color:var(--ink);font-weight:400;letter-spacing:-.02em;margin:0 0 6px;}
        .auth-form-title em{font-style:italic;color:var(--green);}
        .auth-form-sub{font-size:14px;color:var(--ink-muted);margin-bottom:28px;}
        .auth-form-sub a{color:var(--green);text-decoration:none;font-weight:500;}
        .field{margin-bottom:18px;}
        .field-label{display:block;font-size:12px;font-weight:600;color:var(--ink);margin-bottom:6px;}
        .field-input{width:100%;padding:13px 16px;border:1.5px solid var(--border);border-radius:10px;font-size:14px;font-family:inherit;color:var(--ink);background:var(--white);outline:none;transition:border-color .2s;}
        .field-input:focus{border-color:var(--green-sat);}
        .field-input::placeholder{color:var(--ink-muted);}
        .field-row{display:grid;grid-template-columns:1fr 1fr;gap:14px;}
        .plan-grid{display:flex;flex-direction:column;gap:10px;margin-bottom:24px;}
        .plan-option{border:1.5px solid var(--border);border-radius:12px;padding:16px 18px;cursor:pointer;transition:border-color .2s,background .2s;display:flex;align-items:center;gap:14px;}
        .plan-option.selected{border-color:var(--green-sat);background:rgba(42,122,69,.04);}
        .plan-radio{width:18px;height:18px;border-radius:50%;border:2px solid var(--border);flex-shrink:0;display:flex;align-items:center;justify-content:center;transition:border-color .2s;}
        .plan-option.selected .plan-radio{border-color:var(--green-sat);}
        .plan-radio-dot{width:8px;height:8px;border-radius:50%;background:var(--green-sat);opacity:0;transition:opacity .2s;}
        .plan-option.selected .plan-radio-dot{opacity:1;}
        .plan-name{font-size:14px;font-weight:600;color:var(--ink);margin-bottom:2px;}
        .plan-desc{font-size:12px;color:var(--ink-muted);}
        .plan-price{margin-left:auto;font-family:'Instrument Serif',serif;font-size:18px;color:var(--ink);flex-shrink:0;}
        .submit-btn{width:100%;padding:14px;background:var(--green-sat);color:#fff;font-size:15px;font-weight:600;border:none;border-radius:10px;cursor:pointer;font-family:inherit;transition:background .2s,transform .15s;margin-bottom:12px;}
        .submit-btn:hover{background:#2fa050;transform:translateY(-1px);}
        .back-btn{width:100%;padding:12px;background:none;border:1.5px solid var(--border);border-radius:10px;font-size:14px;font-weight:500;color:var(--ink-muted);cursor:pointer;font-family:inherit;transition:border-color .2s;}
        .back-btn:hover{border-color:var(--ink-soft);color:var(--ink);}
        .terms-note{font-size:12px;color:var(--ink-muted);text-align:center;margin-top:12px;line-height:1.6;}
        .terms-note a{color:var(--green);text-decoration:none;}

        /* ── SUCCESS STEP ── */
        .success-wrap{width:100%;max-width:440px;text-align:center;}
        .check-circle{width:72px;height:72px;border-radius:50%;background:rgba(42,122,69,.1);border:2px solid rgba(61,184,95,.25);display:flex;align-items:center;justify-content:center;margin:0 auto 24px;animation:popIn .5s cubic-bezier(0.34,1.56,0.64,1) both;}
        @keyframes popIn{from{transform:scale(0);opacity:0}to{transform:scale(1);opacity:1}}
        .check-icon{font-size:32px;color:var(--green-sat);font-weight:700;animation:iconFade .3s .3s ease both;}
        @keyframes iconFade{from{opacity:0;transform:scale(.5)}to{opacity:1;transform:scale(1)}}
        .success-title{font-family:'Instrument Serif',Georgia,serif;font-size:clamp(24px,3.5vw,34px);font-weight:400;color:var(--ink);letter-spacing:-.02em;margin:0 0 10px;animation:slideUp .4s .1s ease both;}
        .success-title em{font-style:italic;color:var(--green);}
        @keyframes slideUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
        .success-body{font-size:14px;line-height:1.8;color:var(--ink-muted);margin-bottom:20px;animation:slideUp .4s .2s ease both;}
        .success-email-pill{display:inline-flex;align-items:center;gap:8px;background:var(--white);border:1.5px solid var(--border);border-radius:100px;padding:8px 20px;font-size:13px;font-weight:600;color:var(--ink);margin-bottom:28px;animation:slideUp .4s .25s ease both;}
        .success-email-dot{width:8px;height:8px;border-radius:50%;background:var(--green-sat);flex-shrink:0;animation:pulse 2s ease-in-out infinite;}
        @keyframes pulse{0%,100%{box-shadow:0 0 0 0 rgba(61,184,95,.3)}50%{box-shadow:0 0 0 5px rgba(61,184,95,0)}}
        .success-divider{height:1px;background:var(--border);margin:0 0 24px;animation:slideUp .4s .3s ease both;}
        .success-next-label{font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:14px;text-align:left;animation:slideUp .4s .35s ease both;}
        .success-steps{display:flex;flex-direction:column;gap:14px;margin-bottom:32px;animation:slideUp .4s .4s ease both;}
        .success-step{display:flex;align-items:flex-start;gap:12px;text-align:left;}
        .success-step-num{width:22px;height:22px;border-radius:50%;background:var(--white);border:1.5px solid var(--border);display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;color:var(--ink-muted);flex-shrink:0;margin-top:2px;}
        .success-step-title{font-size:13px;font-weight:600;color:var(--ink);margin-bottom:2px;}
        .success-step-desc{font-size:12px;color:var(--ink-muted);line-height:1.6;}
        .success-cta{display:flex;align-items:center;justify-content:center;gap:8px;width:100%;padding:14px;background:var(--green-sat);color:#fff;font-size:15px;font-weight:600;border:none;border-radius:10px;cursor:pointer;font-family:inherit;text-decoration:none;transition:background .2s,transform .15s;animation:slideUp .4s .45s ease both;}
        .success-cta:hover{background:#2fa050;transform:translateY(-1px);}
        .success-resend{font-size:12px;color:var(--ink-muted);margin-top:14px;animation:slideUp .4s .5s ease both;}
        .success-resend button{background:none;border:none;color:var(--green);font-size:12px;font-weight:600;cursor:pointer;font-family:inherit;padding:0;}
        .success-resend button:hover{text-decoration:underline;}

        @media(max-width:1024px){main{grid-template-columns:1fr;}.auth-left{display:none;}}
        @media(max-width:480px){.auth-right{padding:32px 20px;}.field-row{grid-template-columns:1fr;}}
      `}</style>

      {/* LEFT PANEL */}
      <div className="auth-left">
        <a href="/" className="auth-logo">{companyConfig.company.name}</a>
        <div className="auth-left-copy">
          <span className="auth-left-tag">Get started free</span>
          <h2 className="auth-left-h">Connect your<br /><em>first turbine</em><br />in minutes</h2>
          <p className="auth-left-p">No credit card required for the free tier. Upgrade any time as your fleet grows.</p>
        </div>
        <div className="reg-benefits">
          {benefits.map((b: string) => (
            <div key={b} className="reg-benefit">
              <div className="reg-benefit-icon">✓</div>
              {b}
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="auth-right">
        <div className={step === 3 ? "success-wrap" : "auth-form-wrap"}>

          {/* Step indicator — only steps 1 & 2 */}
          {step < 3 && (
            <div className="auth-step-bar">
              {[1, 2].map((s: number, i: number) => (
                <div key={s + "-step"} style={{ display:"flex", alignItems:"center", gap:4 }}>
                  <div className={`step-dot ${step > s ? "done" : step === s ? "active" : "pending"}`}>
                    {step > s ? "✓" : s}
                  </div>
                  {i < 1 && <div key={`line-${s}`} className={`step-line ${step > s ? "done" : ""}`} />}
                </div>
              ))}
              <span style={{ fontSize:12, color:"var(--ink-muted)", marginLeft:8 }}>
                {step === 1 ? "Account details" : "Choose plan"}
              </span>
            </div>
          )}

          {/* ── STEP 1 ── */}
          {step === 1 && (
            <>
              <h1 className="auth-form-title">Create your <em>account</em></h1>
              <p className="auth-form-sub">Already have one? <a href="/login">Sign in →</a></p>

              <div className="field-row">
                <div className="field">
                  <label className="field-label">Full name</label>
                  <input className="field-input" placeholder="Clara" value={form.name} onChange={set("name")} />
                </div>
                <div className="field">
                  <label className="field-label">Company</label>
                  <input className="field-input" placeholder="Acme Wind GmbH" value={form.company} onChange={set("company")} />
                </div>
              </div>
              <div className="field">
                <label className="field-label">Work email</label>
                <input className="field-input" type="email" placeholder="you@company.com" value={form.email} onChange={set("email")} />
              </div>
              <div className="field">
                <label className="field-label">Password</label>
                <input className="field-input" type="password" placeholder="Min. 8 characters" value={form.password} onChange={set("password")} />
              </div>
              <button className="submit-btn" onClick={() => setStep(2)}>Continue →</button>
              <div className="terms-note">
                By continuing you agree to our <a href="/terms">Terms</a> and <a href="/privacy">Privacy Policy</a>.
              </div>
            </>
          )}

          {/* ── STEP 2 ── */}
          {step === 2 && (
            <>
              <h1 className="auth-form-title">Choose your <em>plan</em></h1>
              <p className="auth-form-sub">All plans include a 30-day free trial on Pro features.</p>

              <div className="plan-grid">
                {PLANS.map((p: Plan) => (
                  <div key={p.id} className={`plan-option${plan === p.id ? " selected" : ""}`} onClick={() => setPlan(p.id)}>
                    <div className="plan-radio"><div className="plan-radio-dot" /></div>
                    <div style={{ flex:1 }}>
                      <div className="plan-name">{p.name}</div>
                      <div className="plan-desc">{p.desc}</div>
                    </div>
                    <div className="plan-price">{p.price}</div>
                  </div>
                ))}
              </div>

              <button className="submit-btn" onClick={() => setStep(3)}>Create Account →</button>
              <button className="back-btn" onClick={() => setStep(1)}>← Back</button>
              <div className="terms-note">No credit card required for Starter plan.</div>
            </>
          )}

          {/* ── STEP 3 — SUCCESS ── */}
          {step === 3 && (
            <>
              <div className="check-circle">
                <span className="check-icon">✓</span>
              </div>

              <h1 className="success-title">
                Thanks, <em>{form.name.split(" ")[0] || "there"}</em>!
              </h1>

              <p className="success-body">
                Your account has been created. We've sent confirmation and onboarding details to:
              </p>

              <div className="success-email-pill">
                <span className="success-email-dot" />
                {form.email || "your email address"}
              </div>

              <div className="success-divider" />

              <div className="success-next-label">What happens next</div>
              <div className="success-steps">
                {[
                  { title: "Check your inbox", desc: "A confirmation email is on its way. Click the link inside to verify your address." },
                  { title: "We'll be in touch", desc: "Our team will reach out to you at the email above within 1 business day." },
                  { title: "Connect your first turbine", desc: "Once verified, you can add turbines and start monitoring straight away." },
                ].map((s, i: number) => (
                  <div key={i} className="success-step">
                    <div className="success-step-num">{i + 1}</div>
                    <div>
                      <div className="success-step-title">{s.title}</div>
                      <div className="success-step-desc">{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <a href="/" className="success-cta">Back to Homepage →</a>

              <div className="success-resend">
                Didn't receive an email?{" "}
                <button onClick={() => {}}>Resend confirmation</button>
              </div>
            </>
          )}

        </div>
      </div>
    </main>
  );
}