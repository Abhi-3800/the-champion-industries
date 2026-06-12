import { motion } from "framer-motion";
import { HERO_PRODUCT, PRODUCT_VIEWS } from "../../lib/data";

const ViewLabel = ({ label, index }) => (
  <div className="flex items-center gap-3 border border-[#c08e3a]/40 bg-white px-4 py-3">
    <span className="text-[10px] tracking-[0.3em] uppercase text-gold">
      0{index + 1}
    </span>
    <span className="text-[11px] tracking-[0.15em] uppercase text-navy">
      {label}
    </span>
  </div>
);

export const ProductViews = () => {
  const p = HERO_PRODUCT;
  return (
    <section className="relative py-20 md:py-28 border-t border-[#c08e3a]/30 cream-surface">
      <div className="max-w-[1480px] mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 md:mb-20 grid md:grid-cols-12 gap-8 items-end"
        >
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[11px] tracking-[0.4em] uppercase text-gold">
                02 — Product Views
              </span>
              <span className="w-16 h-px bg-[#c08e3a]/60" />
            </div>
            <h2 className="font-display text-4xl md:text-6xl uppercase font-bold tracking-tighter leading-[0.95]">
              <span className="text-navy">Engineered</span>{" "}
              <span className="metallic-text">from every angle.</span>
            </h2>
          </div>
          <p className="md:col-span-5 text-ink leading-relaxed">
            Six precision-engineered views. Every face of the chamber is
            designed for site-ready installation, configurable inlets and
            outlets, and lifetime leakproof performance.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-2 bg-gradient-to-br from-[#c08e3a]/20 via-transparent to-[#1e3a8a]/15 blur-xl" />
          <div className="relative border border-[#c08e3a]/50 bg-white p-2 md:p-3 shadow-[0_12px_40px_-12px_rgba(10,37,64,0.18)]">
            <img
              src={p.viewsPage}
              alt="All product views"
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {PRODUCT_VIEWS.map((v, i) => (
            <ViewLabel key={v.label} label={v.label} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
