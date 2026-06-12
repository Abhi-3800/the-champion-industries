import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { WHY_CHAMPION, TECH_SPECS } from "../../lib/data";

const WhyItem = ({ text, index }) => (
  <motion.li
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    className="flex items-start gap-4 border-b border-[#c08e3a]/30 pb-4"
    data-testid={`why-card-${index}`}
  >
    <div className="w-7 h-7 rounded-full bg-[#0a2540]/8 border border-[#0a2540]/40 flex items-center justify-center text-[#0a2540] shrink-0 mt-0.5">
      <Check size={13} />
    </div>
    <span className="text-ink text-[15px] leading-relaxed">{text}</span>
  </motion.li>
);

const SpecRow = ({ spec, isLast }) => (
  <div
    className={`grid grid-cols-12 ${
      !isLast ? "border-b border-[#c08e3a]/30" : ""
    } hover:bg-[#fbf6ec] transition-colors`}
  >
    <div className="col-span-5 md:col-span-4 px-5 md:px-6 py-4 text-[11px] tracking-[0.25em] uppercase text-gold border-r border-[#c08e3a]/30 bg-[#fbf6ec]/50">
      {spec.label}
    </div>
    <div className="col-span-7 md:col-span-8 px-5 md:px-6 py-4 text-navy text-sm md:text-[15px]">
      {spec.value}
    </div>
  </div>
);

export const ProductWhyAndSpecs = () => (
  <section
    id="specs"
    className="relative py-20 md:py-28 border-t border-[#c08e3a]/30 cream-surface"
  >
    <div className="max-w-[1480px] mx-auto px-6 md:px-12 lg:px-20">
      <div className="grid md:grid-cols-12 gap-10 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:col-span-5"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[11px] tracking-[0.4em] uppercase text-gold">
              04 — Why Champion
            </span>
            <span className="w-16 h-px bg-[#c08e3a]/60" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl uppercase font-bold tracking-tighter leading-[0.95] mb-10">
            <span className="text-navy">Why Choose</span>
            <br />
            <span className="metallic-text">Champion Industries?</span>
          </h2>

          <ul className="flex flex-col gap-4">
            {WHY_CHAMPION.map((w, i) => (
              <WhyItem key={w} text={w} index={i} />
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="md:col-span-7"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[11px] tracking-[0.4em] uppercase text-gold">
              05 — Technical Specifications
            </span>
            <span className="w-16 h-px bg-[#c08e3a]/60" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl uppercase font-bold tracking-tighter leading-[0.95] mb-10">
            <span className="metallic-text">The Numbers.</span>
          </h2>

          <div className="border border-[#c08e3a]/40 bg-white shadow-[0_4px_20px_-12px_rgba(10,37,64,0.12)]" data-testid="specs-table">
            {TECH_SPECS.map((s, i) => (
              <SpecRow
                key={s.label}
                spec={s}
                isLast={i === TECH_SPECS.length - 1}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);
