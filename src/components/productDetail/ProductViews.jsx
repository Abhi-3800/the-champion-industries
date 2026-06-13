import { motion } from "framer-motion";
import { HERO_PRODUCT, PRODUCT_VIEWS } from "../../lib/data";

const ViewLabel = ({ label, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="flex items-center gap-3 border border-[#c08e3a]/40 bg-white px-4 py-3 hover:bg-[#fbf6ec] hover:border-[#c08e3a]/70 transition-all cursor-pointer group"
  >
    <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-semibold group-hover:text-[#d4a574] transition-colors">
      0{index + 1}
    </span>
    <span className="text-[11px] tracking-[0.15em] uppercase text-navy group-hover:text-[#0a2540]/80 transition-colors">
      {label}
    </span>
  </motion.div>
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
          className="mb-14 md:mb-20"
        >
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
        </motion.div>

        {/* Main Layout: Views on Left, Image on Right */}
        <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Side - Views List */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-4 lg:col-span-3"
          >
            <div className="mb-4">
              <p className="text-ink leading-relaxed text-[14px] mb-6">
                Six precision-engineered views. Every face of the chamber is
                designed for site-ready installation, configurable inlets and
                outlets, and lifetime leakproof performance.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {PRODUCT_VIEWS.map((v, i) => (
                <ViewLabel key={v.label} label={v.label} index={i} />
              ))}
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-8 lg:col-span-9"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#c08e3a]/15 via-transparent to-[#1e3a8a]/10 blur-2xl rounded-lg" />
              <div className="relative border border-[#c08e3a]/50 bg-gradient-to-br from-white to-[#fbf6ec] p-6 md:p-8 rounded-lg shadow-[0_20px_48px_-12px_rgba(10,37,64,0.18)]">
                <div className="bg-white rounded-md overflow-hidden flex items-center justify-center h-[450px] lg:h-[500px]">
                  <img
                    src={p.viewsPage}
                    alt="All product views"
                    className="max-h-full w-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};