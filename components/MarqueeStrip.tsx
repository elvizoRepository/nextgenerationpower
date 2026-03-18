interface StripItem {
  val: string;
  label: string;
}

interface MarqueeStripProps {
  items?: StripItem[];
  bg?: string;
  speed?: number;
}

const DEFAULT_ITEMS: StripItem[] = [
  { label: "Smart Wind Analysis", val: "AI-Powered" },
  { label: "Carbon Certified",    val: "ISO 14001"  },
  { label: "Countries Active",    val: "50+"        },
  { label: "Projects Delivered",  val: "180+"       },
  { label: "Years Experience",    val: "15+"        },
  { label: "Satisfaction Rate",   val: "98%"        },
];

export default function MarqueeStrip({
  items,
  bg = "var(--ink)",
  speed = 22,
}: MarqueeStripProps) {
  const display: StripItem[] = items && items.length > 0 ? items : DEFAULT_ITEMS;

  return (
    <div className="strip" style={{ background: bg }}>
      <div className="strip-inner" style={{ animationDuration: `${speed}s` }}>
        {[0, 1].map((_, i) => (
          <div key={i} style={{ display: "flex" }}>
            {display.map((item) => (
              <div key={item.label + i} className="strip-item">
                <span>{item.val}</span>{item.label}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}