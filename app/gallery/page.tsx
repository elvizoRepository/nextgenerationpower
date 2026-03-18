"use client";

import { useState } from "react";
import Image from "next/image";

const CATEGORIES = ["All", "Installation", "Engineering", "Survey", "Assembly"];

const CATEGORY_MAP = {
  Installation: [1, 2, 8, 9, 12, 20, 24, 29],
  Engineering:  [4, 5, 15, 17, 18, 19, 21, 22, 30],
  Survey:       [6, 7, 10, 11, 23, 25, 27, 28],
  Assembly:     [3, 13, 14, 16, 26, 31],
};

const CLASSES = ["tall", "sq", "wide", "sq", "wide", "tall"];

const PHOTOS = Array.from({ length: 31 }, (_, i) => {
  const num = i + 1;
  const category =
    Object.entries(CATEGORY_MAP).find(([, nums]) => nums.includes(num))?.[0] ??
    "Installation";
  return {
    src: `/gallery/${num}.jpeg`,
    caption: `Project Documentation #${num}`,
    category,
    cls: CLASSES[num % CLASSES.length],
  };
});

export default function GalleryPage() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === "All" ? PHOTOS : PHOTOS.filter((p) => p.category === active);

  return (
    <main style={{ fontFamily: "'Instrument Sans', 'DM Sans', sans-serif", overflowX: "hidden" }}>
      <style>{`
        :root {
          --ink: #0f1f14;
          --ink-soft: #3a4f40;
          --ink-muted: #7a9182;
          --green: #2a7a45;
          --green-sat: #3db85f;
          --lime: #b6e87a;
          --cream: #f5f2eb;
          --white: #ffffff;
          --border: #e3ded4;
          --nav-h: 72px;
        }

        .gallery-hero {
          background: var(--ink);
          padding: calc(var(--nav-h) + 72px) 80px 80px;
          position: relative; overflow: hidden;
        }
        .gallery-hero::before {
          content: '';
          position: absolute; top: -20%; left: -5%;
          width: 700px; height: 700px; border-radius: 50%;
          background: radial-gradient(circle, rgba(45,145,71,0.13) 0%, transparent 65%);
          pointer-events: none;
        }
        .gallery-hero::after {
          content: ''; position: absolute; inset: 0; pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E");
          opacity: 0.6; mix-blend-mode: screen;
        }
        .gallery-hero-inner {
          max-width: 1200px; margin: 0 auto;
          display: flex; align-items: flex-end;
          justify-content: space-between; gap: 40px;
          flex-wrap: wrap; position: relative; z-index: 2;
        }
        .gallery-hero-tag {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 11px; font-weight: 600; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--lime); margin-bottom: 20px;
        }
        .gallery-hero-tag-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--lime); box-shadow: 0 0 0 3px rgba(182,232,122,0.2);
          animation: pulse-lime 2.4s ease-in-out infinite;
        }
        @keyframes pulse-lime {
          0%,100% { box-shadow: 0 0 0 3px rgba(182,232,122,0.2); }
          50%      { box-shadow: 0 0 0 7px rgba(182,232,122,0.06); }
        }
        .gallery-hero-h1 {
          font-family: 'Instrument Serif', Georgia, serif;
          font-size: clamp(40px, 5.5vw, 72px);
          font-weight: 400; line-height: 1.05;
          color: var(--white); letter-spacing: -0.02em; margin: 0;
        }
        .gallery-hero-h1 em { font-style: italic; color: var(--lime); }
        .gallery-hero-right { max-width: 340px; }
        .gallery-hero-body {
          font-size: 15px; line-height: 1.75;
          color: rgba(255,255,255,0.45); margin-bottom: 24px;
        }
        .gallery-count-row { display: flex; gap: 28px; }
        .gallery-count-item { text-align: left; }
        .gallery-count-val {
          font-family: 'Instrument Serif', serif;
          font-size: 28px; color: var(--white); line-height: 1; margin-bottom: 4px;
        }
        .gallery-count-label {
          font-size: 11px; font-weight: 600;
          color: rgba(255,255,255,0.35);
          letter-spacing: 0.07em; text-transform: uppercase;
        }

        .filter-bar {
          background: var(--white);
          border-bottom: 1px solid var(--border);
          position: sticky; top: var(--nav-h); z-index: 20;
          padding: 0 80px;
        }
        .filter-bar-inner {
          max-width: 1200px; margin: 0 auto;
          display: flex; align-items: center; gap: 4px;
          overflow-x: auto; scrollbar-width: none;
        }
        .filter-bar-inner::-webkit-scrollbar { display: none; }
        .filter-btn {
          flex-shrink: 0; padding: 16px 20px;
          font-size: 13px; font-weight: 500; color: var(--ink-muted);
          background: none; border: none; border-bottom: 2px solid transparent;
          cursor: pointer; transition: color 0.2s, border-color 0.2s;
          letter-spacing: 0.02em; white-space: nowrap;
        }
        .filter-btn:hover { color: var(--ink); }
        .filter-btn.active {
          color: var(--green); border-bottom-color: var(--green-sat); font-weight: 600;
        }
        .filter-bar-count {
          margin-left: auto; flex-shrink: 0;
          font-size: 12px; color: var(--ink-muted);
          padding: 16px 0 16px 20px;
          border-left: 1px solid var(--border); margin-left: 16px;
        }

        .gallery-body { background: var(--cream); padding: 56px 80px 100px; }
        .masonry-wrap { max-width: 1200px; margin: 0 auto; columns: 4; column-gap: 16px; }
        .masonry-item {
          break-inside: avoid; margin-bottom: 16px;
          border-radius: 16px; overflow: hidden;
          position: relative; cursor: pointer; background: var(--border);
          animation: fadeUp 0.45s ease both;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .masonry-item:nth-child(1)  { animation-delay: 0.00s; }
        .masonry-item:nth-child(2)  { animation-delay: 0.05s; }
        .masonry-item:nth-child(3)  { animation-delay: 0.10s; }
        .masonry-item:nth-child(4)  { animation-delay: 0.15s; }
        .masonry-item:nth-child(5)  { animation-delay: 0.20s; }
        .masonry-item:nth-child(6)  { animation-delay: 0.25s; }
        .masonry-item:nth-child(7)  { animation-delay: 0.30s; }
        .masonry-item:nth-child(8)  { animation-delay: 0.35s; }
        .masonry-item:nth-child(9)  { animation-delay: 0.40s; }
        .masonry-item:nth-child(10) { animation-delay: 0.45s; }
        .masonry-item:nth-child(11) { animation-delay: 0.50s; }
        .masonry-item:nth-child(12) { animation-delay: 0.55s; }
        .masonry-item img {
          width: 100%; display: block;
          transition: transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94);
        }
        .masonry-item:hover img { transform: scale(1.05); }
        .masonry-item.tall img  { aspect-ratio: 3/4; object-fit: cover; }
        .masonry-item.wide img  { aspect-ratio: 4/3; object-fit: cover; }
        .masonry-item.sq   img  { aspect-ratio: 1/1; object-fit: cover; }
        .masonry-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(10,25,15,0.72) 0%, rgba(10,25,15,0.1) 45%, transparent 70%);
          opacity: 0; transition: opacity 0.35s;
          display: flex; flex-direction: column;
          justify-content: flex-end; padding: 20px 18px;
        }
        .masonry-item:hover .masonry-overlay { opacity: 1; }
        .masonry-cat {
          font-size: 10px; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: var(--lime); margin-bottom: 5px;
        }
        .masonry-caption {
          font-family: 'Instrument Serif', serif;
          font-size: 15px; color: white; line-height: 1.3;
        }
        .masonry-expand {
          position: absolute; top: 14px; right: 14px;
          width: 32px; height: 32px; border-radius: 8px;
          background: rgba(255,255,255,0.12); backdrop-filter: blur(6px);
          border: 1px solid rgba(255,255,255,0.18);
          display: flex; align-items: center; justify-content: center;
          font-size: 13px; color: white;
          opacity: 0; transition: opacity 0.3s;
        }
        .masonry-item:hover .masonry-expand { opacity: 1; }

        .gallery-empty { text-align: center; padding: 80px 20px; color: var(--ink-muted); font-size: 15px; }
        .gallery-empty-icon { font-size: 40px; margin-bottom: 16px; }

        .lightbox-backdrop {
          position: fixed; inset: 0; z-index: 100;
          background: rgba(10,20,14,0.92); backdrop-filter: blur(12px);
          display: flex; align-items: center; justify-content: center; padding: 24px;
          animation: fadeIn 0.2s ease;
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .lightbox-card {
          background: var(--ink); border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px; overflow: hidden;
          max-width: 820px; width: 100%;
          box-shadow: 0 40px 120px rgba(0,0,0,0.6);
          animation: scaleIn 0.25s cubic-bezier(0.34,1.56,0.64,1);
        }
        @keyframes scaleIn {
          from { transform: scale(0.92); opacity: 0; }
          to   { transform: scale(1);    opacity: 1; }
        }
        .lightbox-img-wrap { position: relative; width: 100%; aspect-ratio: 16/10; background: #0a1a0e; }
        .lightbox-footer {
          padding: 24px 28px;
          display: flex; align-items: flex-start;
          justify-content: space-between; gap: 16px;
        }
        .lightbox-cat {
          font-size: 10px; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--lime); margin-bottom: 6px;
        }
        .lightbox-title {
          font-family: 'Instrument Serif', serif;
          font-size: 22px; color: var(--white); line-height: 1.2;
        }
        .lightbox-close {
          flex-shrink: 0; width: 40px; height: 40px; border-radius: 10px;
          background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.5); font-size: 18px; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.2s, color 0.2s;
        }
        .lightbox-close:hover { background: rgba(255,255,255,0.12); color: white; }
        .lightbox-nav { display: flex; gap: 8px; margin-top: 16px; }
        .lightbox-nav-btn {
          padding: 8px 16px; border-radius: 8px;
          background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.5); font-size: 12px; font-weight: 500;
          cursor: pointer; transition: all 0.2s;
        }
        .lightbox-nav-btn:hover { background: rgba(255,255,255,0.12); color: white; }

        @media (max-width: 1200px) {
          .gallery-hero, .filter-bar, .gallery-body { padding-left: 48px; padding-right: 48px; }
          .masonry-wrap { columns: 3; }
        }
        @media (max-width: 1024px) {
          .gallery-hero, .filter-bar, .gallery-body { padding-left: 40px; padding-right: 40px; }
          .masonry-wrap { columns: 3; }
        }
        @media (max-width: 768px) {
          .gallery-hero, .filter-bar, .gallery-body { padding-left: 24px; padding-right: 24px; }
          .gallery-hero { padding-top: calc(var(--nav-h) + 48px); padding-bottom: 56px; }
          .gallery-hero-inner { flex-direction: column; align-items: flex-start; gap: 28px; }
          .gallery-hero-right { max-width: 100%; }
          .masonry-wrap { columns: 2; }
          .gallery-body { padding-top: 40px; padding-bottom: 72px; }
        }
        @media (max-width: 480px) {
          .gallery-hero, .filter-bar, .gallery-body { padding-left: 16px; padding-right: 16px; }
          .masonry-wrap { columns: 1; }
          .lightbox-card { border-radius: 14px; }
          .lightbox-footer { flex-direction: column; }
        }
      `}</style>

      {/* ── HERO BANNER ── */}
      <section className="gallery-hero">
        <div className="gallery-hero-inner">
          <div>
            <div className="gallery-hero-tag">
              <span className="gallery-hero-tag-dot" />
              Field Documentation
            </div>
            <h1 className="gallery-hero-h1">
              Projects <em>Captured</em><br />in the Field
            </h1>
          </div>
          <div className="gallery-hero-right">
            <p className="gallery-hero-body">
              From desert cable runs to offshore crane lifts — a visual record of every project
              milestone, in every corner of the world.
            </p>
            <div className="gallery-count-row">
              {[
                { val: "180+", label: "Projects" },
                { val: "50+",  label: "Countries" },
                { val: "12",   label: "Categories" },
              ].map((c) => (
                <div key={c.label} className="gallery-count-item">
                  <div className="gallery-count-val">{c.val}</div>
                  <div className="gallery-count-label">{c.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FILTER BAR ── */}
      <div className="filter-bar">
        <div className="filter-bar-inner">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`filter-btn${active === cat ? " active" : ""}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
          <div className="filter-bar-count">
            {filtered.length} photo{filtered.length !== 1 ? "s" : ""}
          </div>
        </div>
      </div>

      {/* ── MASONRY GRID ── */}
      <div className="gallery-body">
        {filtered.length === 0 ? (
          <div className="gallery-empty">
            <div className="gallery-empty-icon">🌬️</div>
            No photos in this category yet.
          </div>
        ) : (
          <div className="masonry-wrap" key={active}>
            {filtered.map((photo, i) => (
              <div
                key={`${photo.src}-${i}`}
                className={`masonry-item ${photo.cls}`}
                onClick={() => setLightbox(i)}
              >
                <Image
                  src={photo.src}
                  alt={photo.caption}
                  width={800}
                  height={1000}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
                <div className="masonry-overlay">
                  <div className="masonry-cat">{photo.category}</div>
                  <div className="masonry-caption">{photo.caption}</div>
                </div>
                <div className="masonry-expand">⤢</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ── LIGHTBOX ── */}
      {lightbox !== null && (
        <div
          className="lightbox-backdrop"
          onClick={(e) => { if (e.target === e.currentTarget) setLightbox(null); }}
        >
          <div className="lightbox-card">
            <div className="lightbox-img-wrap">
              <Image
                src={filtered[lightbox].src}
                alt={filtered[lightbox].caption}
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            <div className="lightbox-footer">
              <div style={{ flex: 1 }}>
                <div className="lightbox-cat">{filtered[lightbox].category}</div>
                <div className="lightbox-title">{filtered[lightbox].caption}</div>
                <div className="lightbox-nav">
                  <button
                    className="lightbox-nav-btn"
                    onClick={() =>
                      setLightbox((lightbox - 1 + filtered.length) % filtered.length)
                    }
                  >
                    ← Prev
                  </button>
                  <button
                    className="lightbox-nav-btn"
                    onClick={() => setLightbox((lightbox + 1) % filtered.length)}
                  >
                    Next →
                  </button>
                  <span style={{ fontSize: 12, color: "rgba(255,255,255,0.25)", alignSelf: "center", marginLeft: 8 }}>
                    {lightbox + 1} / {filtered.length}
                  </span>
                </div>
              </div>
              <button className="lightbox-close" onClick={() => setLightbox(null)}>✕</button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}