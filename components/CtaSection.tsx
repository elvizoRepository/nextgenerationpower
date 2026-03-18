/**
 * CtaSection
 *
 * Props:
 *  headline    – JSX or string, supports <em> for italic green text
 *  subline     – body text below headline
 *  primaryText – label for primary (white) button
 *  primaryHref – href for primary button
 *  secondaryText – label for outline button
 *  secondaryHref – href for outline button
 */
export default function CtaSection({
  headline     = <>"Ready to go<br /><em>net zero?</em>"</>,
  subline      = "Join 12 million customers already powered by clean, reliable turbine energy.",
  primaryText  = "Get Started Free →",
  primaryHref  = "/register",
  secondaryText = "Talk to our team",
  secondaryHref = "/contact",
}) {
  return (
    <section className="cta-section">
      <div style={{ position: "relative", zIndex: 2 }}>
        <h2 className="cta-h2">{headline}</h2>
        <p className="cta-body">{subline}</p>
        <div className="cta-btns">
          <a href={primaryHref}   className="btn-white">{primaryText}</a>
          <a href={secondaryHref} className="btn-outline-white">{secondaryText}</a>
        </div>
      </div>
    </section>
  );
}