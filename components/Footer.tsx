import Link from "next/link";
import Image from "next/image";
import { companyConfig } from "@/lib/siteConfig";

const FOOTER_COLS = [
  {
    heading: "Company",
    links: [
      { label: "About Us",    href: "/about"    },
      { label: "Our Mission", href: "/missions" },
      { label: "Careers",     href: "/careers"  },
      { label: "Press Kit",   href: "/press"    },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Onshore Installation",  href: "/solution/onshore"     },
      { label: "Offshore Installation", href: "/solution/offshore"    },
      { label: "Civil & Engineering",   href: "/solution/engineering" },
      { label: "O&M & Support",         href: "/solution/om"          },
    ],
  },
  {
    heading: "Platform",
    links: [
      { label: "Wind Analysis",    href: "/solution/wind-analysis" },
      { label: "Monitoring",       href: "/solution/monitoring"    },
      { label: "Grid Integration", href: "/solution/grid-intergration"          },
      { label: "Carbon Reporting", href: "/solution/carbon-reporting"        },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Blog & Articles", href: "/blog"         },
      { label: "Case Studies",    href: "/case-studies" },
      { label: "Documentation",   href: "/docs"         },
      { label: "Contact Us",      href: "/contact"      },
    ],
  },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy",   href: "/privacy" },
  { label: "Terms of Service", href: "/terms"   },
  { label: "Cookie Policy",    href: "/cookies" },
];

export default function Footer() {
  return (
    <footer id="footer">
      <style>{`
        .footer-grid-cols { grid-template-columns: 1.8fr 1fr 1fr 1fr 1fr !important; }
        .footer-social-btn {
          font-size: 11px; font-weight: 700; letter-spacing: 0.06em;
          color: rgba(255,255,255,0.4); text-decoration: none;
          border: 1px solid rgba(255,255,255,0.1); border-radius: 6px;
          padding: 5px 10px; transition: color 0.2s, border-color 0.2s;
        }
        .footer-social-btn:hover { color: var(--lime); border-color: rgba(168,217,108,0.3); }
        @media (max-width: 1200px) { .footer-grid-cols { grid-template-columns: 1fr 1fr 1fr !important; } }
        @media (max-width: 768px)  { .footer-grid-cols { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 480px)  { .footer-grid-cols { grid-template-columns: 1fr !important; } }
      `}</style>

      <div className="footer-grid footer-grid-cols">
        {/* ── Brand column ── */}
        <div>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <Image src={companyConfig.company.logo} alt={companyConfig.company.name} width={34} height={34} style={{ objectFit: "contain" }} />
            <span style={{ fontFamily: "'Instrument Sans', sans-serif", fontWeight: 700, fontSize: 14, color: "white", lineHeight: 1.3 }}>
              {companyConfig.company.name}
            </span>
          </Link>
          <p className="footer-brand-tagline">
            Engineering, installing, and operating world-class wind energy systems
            since 2017 — from the first site survey to the last carbon certificate.
          </p>
          <div style={{ display: "flex", gap: 8, marginTop: 20, flexWrap: "wrap" }}>
            {[
              { label: "LinkedIn", href: "https://linkedin.com" },
              { label: "X",        href: "https://x.com"        },
              { label: "YouTube",  href: "https://youtube.com"  },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="footer-social-btn">
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* ── Link columns ── */}
        {FOOTER_COLS.map((col) => (
          <div key={col.heading}>
            <div className="footer-col-heading">{col.heading}</div>
            <div className="footer-links">
              {col.links.map((l) => (
                <Link key={l.label} href={l.href} className="footer-a">{l.label}</Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ── Bottom bar ── */}
      <div className="footer-bottom">
        <p className="footer-copy">
          © {new Date().getFullYear()} {companyConfig.company.name} AS. All rights reserved.
        </p>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
          {LEGAL_LINKS.map((l) => (
            <Link key={l.label} href={l.href} className="footer-a" style={{ fontSize: 12 }}>
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}