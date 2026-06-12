import { Asterisk } from "lucide-react";
import { MARQUEE_ITEMS } from "../lib/data";

export const Marquee = () => {
  const loop = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div
      className="relative w-full overflow-hidden py-10 border-y border-[#c08e3a]/40 cream-surface"
      data-testid="marquee"
    >
      <div className="marquee-track flex whitespace-nowrap items-center gap-12">
        {loop.map((t, i) => (
          <div key={`marquee-${t}-${i}`} className="flex items-center gap-12">
            <span className="font-display text-3xl md:text-5xl tracking-tight uppercase metallic-text">
              {t}
            </span>
            <Asterisk className="text-[#c08e3a]" size={26} />
          </div>
        ))}
      </div>
    </div>
  );
};
