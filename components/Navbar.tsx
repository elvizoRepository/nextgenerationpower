"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Home",     href: "/"          },
  { label: "Services", href: "/services"  },
  { label: "Platform", href: "/features"  },
  { label: "About",    href: "/about"     },
  { label: "Impact",   href: "/missions"  },
  { label: "Contact",  href: "/contact"   },
];

export default function Navbar() {
  const pathname                    = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled,   setScrolled]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <>
      <style>{`
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
        .nav-logo-img {
          height: 60px !important; width: auto !important;
          object-fit: contain; display: block;
        }
        .nav-links { display: flex; align-items: center; gap: 2px; }
        .nav-a {
          font-size: 13px; font-weight: 500; color: var(--ink-soft);
          text-decoration: none; padding: 6px 11px; border-radius: 6px;
          transition: color 0.2s, background 0.2s;
          letter-spacing: 0.01em; white-space: nowrap;
        }
        .nav-a:hover { color: var(--ink); background: rgba(15,31,20,0.05); }
        .nav-a.active { color: var(--green); font-weight: 600; }
        .btn-nav {
          font-size: 13px; font-weight: 600; color: var(--white); background: var(--green);
          padding: 9px 22px; border-radius: 8px; border: none; text-decoration: none;
          cursor: pointer; transition: background 0.2s, transform 0.18s; white-space: nowrap;
        }
        .btn-nav:hover { background: var(--green-mid); transform: translateY(-1px); }
        .btn-outline-nav {
          font-size: 13px; font-weight: 500; color: var(--ink); background: transparent;
          padding: 9px 20px; border-radius: 8px; border: 1px solid var(--border);
          text-decoration: none; cursor: pointer;
          transition: border-color 0.2s, background 0.2s; white-space: nowrap;
        }
        .btn-outline-nav:hover { border-color: var(--ink-muted); background: rgba(15,31,20,0.03); }
        .mobile-hamburger {
          display: none; background: none; border: none; cursor: pointer;
          font-size: 22px; padding: 4px; color: var(--ink); line-height: 1;
        }

        /* Mobile full-screen overlay */
        .mobile-overlay {
          position: fixed; inset: 0; z-index: 300;
          background: var(--cream);
          display: flex; flex-direction: column;
          padding: 0 28px 48px;
        }
        .mobile-overlay-top {
          display: flex; align-items: center; justify-content: space-between;
          height: var(--nav-h); flex-shrink: 0;
        }
        .mobile-close {
          background: none; border: 1.5px solid var(--border); border-radius: 8px;
          width: 38px; height: 38px; font-size: 16px; cursor: pointer; color: var(--ink);
          display: flex; align-items: center; justify-content: center;
        }
        .mobile-nav-a {
          font-size: 18px; font-weight: 500; color: var(--ink);
          text-decoration: none; padding: 15px 0;
          border-bottom: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
          transition: color 0.2s;
        }
        .mobile-nav-a.active { color: var(--green); font-weight: 700; }
        .mobile-nav-a:hover  { color: var(--green); }
        .mobile-ctas {
          margin-top: auto; padding-top: 28px;
          display: flex; flex-direction: column; gap: 10px;
        }
        .mobile-cta-primary {
          width: 100%; padding: 15px; background: var(--green); color: white;
          font-size: 15px; font-weight: 700; border: none; border-radius: 10px;
          text-align: center; text-decoration: none; font-family: inherit; display: block;
        }
        .mobile-cta-outline {
          width: 100%; padding: 14px; background: transparent; color: var(--ink);
          font-size: 15px; font-weight: 500; border: 1.5px solid var(--border);
          border-radius: 10px; text-align: center; text-decoration: none;
          font-family: inherit; display: block;
        }

        @media (max-width: 1100px) {
          .nav-links, .btn-outline-nav { display: none; }
          .mobile-hamburger { display: block; }
          .nav-wrap, .nav-wrap.scrolled { padding: 0 40px; }
        }
        @media (max-width: 768px) {
          .nav-wrap, .nav-wrap.scrolled { padding: 0 28px; }
          .mobile-overlay { padding: 0 28px 40px; }
        }
        @media (max-width: 480px) {
          .nav-wrap, .nav-wrap.scrolled { padding: 0 18px; }
          .btn-nav { padding: 8px 16px; font-size: 12px; }
          .nav-logo-img { height: 44px !important; }
          .mobile-overlay { padding: 0 18px 32px; }
        }
      `}</style>

      <header className={`nav-wrap${scrolled ? " scrolled" : ""}`}>
        <Link href="/" className="nav-wordmark">
          <img src="/logo.png" alt="Next Generation Power" className="nav-logo-img" />
        </Link>

        <nav className="nav-links">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className={`nav-a${isActive(href) ? " active" : ""}`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Link href="/login"    className="btn-outline-nav">Sign In</Link>
          <Link href="/register" className="btn-nav">Get Started</Link>
          <button
            onClick={() => setMobileOpen(true)}
            className="mobile-hamburger"
            aria-label="Open menu"
          >☰</button>
        </div>
      </header>

      {mobileOpen && (
        <div className="mobile-overlay">
          <div className="mobile-overlay-top">
            <Link href="/" onClick={() => setMobileOpen(false)}>
              <img src="/logo.png" alt="Next Generation Power" style={{ height: 52, objectFit: "contain" }} />
            </Link>
            <button onClick={() => setMobileOpen(false)} className="mobile-close">✕</button>
          </div>

          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className={`mobile-nav-a${isActive(href) ? " active" : ""}`}
              onClick={() => setMobileOpen(false)}
            >
              {label}
              <span style={{ fontSize: 14, opacity: 0.3 }}>→</span>
            </Link>
          ))}

          <div className="mobile-ctas">
            <Link href="/register" className="mobile-cta-primary" onClick={() => setMobileOpen(false)}>
              Get Started →
            </Link>
            <Link href="/login" className="mobile-cta-outline" onClick={() => setMobileOpen(false)}>
              Sign In
            </Link>
          </div>
        </div>
      )}
    </>
  );
}