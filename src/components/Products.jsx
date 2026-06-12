import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Droplets, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { HERO_PRODUCT } from "../lib/data";

const HIGHLIGHTS = [
  { Icon: ShieldCheck, label: "Leakproof CPVC" },
  { Icon: Droplets, label: "Backflow Valves" },
  { Icon: Settings, label: "Configurable Ports" },
];

export const Products = () => {
  const p = HERO_PRODUCT;
  return (
    <section
      id="products"
      data-testid="products-section"
      className="relative bg-white py-24 md:py-32"
    >
      <div className="max-w-[1480px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-12 gap-8 items-end mb-16 md:mb-24"
        >
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[11px] tracking-[0.4em] uppercase text-gold">
                02 — The Product
              </span>
              <span className="w-16 h-px bg-[#c08e3a]/60" />
            </div>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl uppercase font-bold tracking-tighter leading-[0.9]">
              <span className="metallic-text">One product.</span>
              <br />
              <span className="text-navy">Engineered to</span>
              <span className="italic font-light text-gold-soft"> solve everything.</span>
            </h2>
          </div>
          <div className="md:col-span-5 md:pl-10">
            <p className="text-ink leading-relaxed">
              Champion Industries has spent years engineering the perfect
              alternative to the failing brick-chamber and PVC drainage
              systems still in use across India. The result is one product —
              patented, certified, and ready for site.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["CPVC", "Patented", "Pre-Installed Valves", "Inbuilt Slope", "110mm Standard"].map((c) => (
                <span
                  key={c}
                  className="text-[10px] tracking-[0.3em] uppercase text-gold border border-[#c08e3a]/50 px-3 py-1.5"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Single hero product card */}
        <motion.article
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="group relative overflow-hidden border border-[#c08e3a]/40 hover:border-[#c08e3a]/80 paper-card transition-colors duration-500 shadow-[0_8px_40px_-12px_rgba(10,37,64,0.15)]"
          data-testid={`product-card-${p.id}`}
        >
          <div className="grid md:grid-cols-12 gap-0">
            {/* Image side */}
            <div className="md:col-span-7 relative h-[420px] md:h-[640px] overflow-hidden bg-gradient-to-br from-[#fbf6ec] to-white">
              <img
                src={p.coverImage}
                alt={p.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-center opacity-95 group-hover:scale-[1.03] transition-transform duration-1500 ease-out"
              />
              {/* Top eyebrow */}
              <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                <span className="text-[10px] tracking-[0.35em] uppercase text-navy bg-white/85 backdrop-blur-md px-3 py-1.5 border border-[#c08e3a]/50">
                  {p.category}
                </span>
                <span className="text-[10px] tracking-[0.3em] uppercase text-gold bg-white/85 backdrop-blur-md px-3 py-1.5 border border-[#c08e3a]/50">
                  {p.code}
                </span>
              </div>
              {/* Bottom badge */}
              <div className="absolute bottom-6 left-6 text-[10px] tracking-[0.3em] uppercase text-navy bg-white/85 backdrop-blur-md px-3 py-1.5 border border-[#c08e3a]/50">
                ★ India&apos;s First Patented
              </div>
            </div>

            {/* Content side */}
            <div className="md:col-span-5 p-8 md:p-12 lg:p-14 flex flex-col justify-between gap-10 bg-white">
              <div>
                <p className="text-[10px] tracking-[0.4em] uppercase text-gold mb-4">
                  {p.tagline}
                </p>
                <h3 className="font-display text-3xl md:text-4xl lg:text-5xl uppercase font-bold tracking-tight metallic-text leading-[0.95]">
                  {p.name}
                </h3>
                <div className="w-12 h-px bg-[#c08e3a]/70 my-6" />
                <p className="text-ink leading-relaxed text-[15px]">
                  {p.shortDescription}
                </p>

                <div className="mt-8 grid grid-cols-1 gap-4">
                  {HIGHLIGHTS.map(({ Icon, label }) => (
                    <div key={label} className="flex items-center gap-4">
                      <div className="w-10 h-10 border border-[#c08e3a]/50 bg-[#fbf6ec] flex items-center justify-center text-[#0a2540]">
                        <Icon size={16} />
                      </div>
                      <span className="text-[12px] tracking-[0.2em] uppercase text-navy">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-[#c08e3a]/30 pt-6">
                <span className="text-[10px] tracking-[0.3em] uppercase text-gold">
                  Finish · {p.finish}
                </span>
                <Link
                  to="/products/cpvc-inspection-chamber"
                  data-testid="product-view-detail-button"
                  className="chrome-sheen btn-primary inline-flex items-center gap-3 px-5 py-3 text-[11px] tracking-[0.3em] uppercase font-semibold transition-all"
                >
                  View Details
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
};
