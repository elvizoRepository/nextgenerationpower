import Image from "next/image";
import { companyConfig } from "@/lib/siteConfig";
const DEFAULT_ITEMS = [
  {
    name: "Sarah Mitchell",
    role: "Director, GreenGrid Corp",
    stars: 5,
    image: "/sarah.png",
    text: `${companyConfig.company.name}'s turbines exceeded every performance benchmark we set. The monitoring dashboard alone saves our operations team over 200 hours per year in manual reporting.`,
  },
  {
    name: "Omar Alami",
    role: "CEO, AfriWind Solutions",
    stars: 5,
    image: "/omar.png",
    text: `Partnering with ${companyConfig.company.name} transformed our rural electrification project in ways we hadn't anticipated. 40,000 homes now have access to reliable, affordable clean power.`,
  },
  {
    name: "Lena Bergström",
    role: "Chief Sustainability Officer, NordicPower",
    stars: 5,
    image: "/lena.png",
    text: "The carbon reporting tools are best-in-class for enterprise sustainability teams. We hit our 2030 decarbonisation targets six full years ahead of schedule.",
  },
];

export default function TestimonialsSection({
  tag = "Client Voices",
  headline = (
    <>
      Trusted by Energy
      <br />
      Leaders <em>Worldwide</em>
    </>
  ),
  items = DEFAULT_ITEMS,
}) {
  return (
    <section className="testi-section">
      <style jsx>{`

        .testi-section {
          background: var(--white);
          padding: 100px 24px;
        }

        .testi-wrap {
          max-width: 1200px;
          margin: 0 auto;
        }

        .testi-grid {
          margin-top: 64px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }

        .testi-card {
          background: white;
          border-radius: 16px;
          padding: 32px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.05);
        }

        .testi-stars {
          color: #f5b50a;
          margin-bottom: 12px;
          font-size: 18px;
        }

        .testi-quote {
          font-size: 15px;
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .testi-author {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .testi-avatar {
          width: 48px;
          height: 48px;
          position: relative;
          border-radius: 50%;
          overflow: hidden;
        }

        .testi-name {
          font-weight: 600;
        }

        .testi-role {
          font-size: 13px;
          color: #666;
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .testi-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* Mobile */
        @media (max-width: 640px) {
          .testi-section {
            padding: 72px 18px;
          }

          .testi-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .testi-card {
            padding: 24px;
          }

          .testi-quote {
            font-size: 14px;
          }
        }

      `}</style>

      <div className="testi-wrap">
        <div style={{ textAlign: "center" }}>
          <span className="section-tag">{tag}</span>
          <h2 className="section-h2">{headline}</h2>
        </div>

        <div className="testi-grid">
          {items.map((t) => (
            <div key={t.name} className="testi-card">
              <div className="testi-stars">{"★".repeat(t.stars)}</div>

              <p className="testi-quote">"{t.text}"</p>

              <div className="testi-author">
                <div className="testi-avatar">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
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
  );
}
