import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { HERO_PRODUCT } from "../../lib/data";

const BADGES = ["Patented", "CPVC", "Leakproof", "Pre-Installed Valves", "110mm"];

export const ProductDetailHero = () => {
  const p = HERO_PRODUCT;

  return (
    <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden bg-white">
      <div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
        <div className="absolute top-1/2 -translate-y-1/2 right-[-10%] w-[700px] h-[700px] cream-glow" />
        <div className="absolute top-20 left-[-15%] w-[500px] h-[500px] blue-glow opacity-60" />
      </div>

      <div className="relative z-10 max-w-[1480px] mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link
            to="/"
            data-testid="product-back-link"
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-navy hover:text-[#1e3a8a] transition-colors group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:col-span-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[11px] tracking-[0.4em] uppercase text-gold">{p.category}</span>
              <span className="w-12 h-px bg-[#c08e3a]/60" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-gold-mid">{p.code}</span>
            </div>

            <h1
              data-testid="product-detail-title"
              className="font-display text-5xl md:text-6xl lg:text-7xl uppercase font-bold tracking-tighter leading-[0.92]"
            >
              <span className="metallic-text">CPVC Drainage</span>
              <br />
              <span className="text-navy">Inspection Chamber</span>
            </h1>

            <p className="mt-6 text-gold text-sm md:text-base tracking-[0.15em] uppercase">
              {p.tagline}
            </p>

            <p className="mt-8 text-ink leading-relaxed text-[15px] md:text-base max-w-xl">
              {p.longDescription}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {BADGES.map((b) => (
                <span
                  key={b}
                  className="text-[10px] tracking-[0.3em] uppercase text-gold border border-[#c08e3a]/50 px-3 py-1.5"
                >
                  {b}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href="/#contact"
                data-testid="product-detail-cta"
                className="chrome-sheen btn-primary inline-flex items-center gap-4 px-8 py-5 text-[12px] tracking-[0.3em] uppercase font-semibold transition-all"
              >
                Request Quote
                <ArrowUpRight size={16} />
              </a>
              <a
                href="#specs"
                className="text-[12px] tracking-[0.3em] uppercase text-navy hover:text-[#1e3a8a] border-b border-[#0a2540]/40 hover:border-[#0a2540] pb-1 transition-all"
              >
                Technical Specs ↓
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="md:col-span-6"
          >
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-br from-[#c08e3a]/25 via-transparent to-[#1e3a8a]/15 blur-2xl" />
              <div className="relative border border-[#c08e3a]/50 bg-white p-2 md:p-3 shadow-[0_12px_40px_-12px_rgba(10,37,64,0.2)]">
                <img
                  src={p.coverImage}
                  alt={p.name}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="mt-4 flex items-center justify-between text-[10px] tracking-[0.3em] uppercase text-gold-mid">
                <span>Champion Industries</span>
                <span>2026 Edition</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
