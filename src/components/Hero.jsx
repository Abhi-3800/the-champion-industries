import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { HERO_PRODUCT, STATS } from "../lib/data";
import { ChampionLogo } from "./ChampionLogo";

export const Hero = () => {
  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white pt-32 md:pt-40 pb-12"
    >
      {/* Soft cream radial accents */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] cream-glow opacity-60" />
        <div className="absolute bottom-0 -right-40 w-[700px] h-[700px] blue-glow opacity-70" />
        {/* faint engineering grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#0a2540" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Vertical eyebrow */}
      <div className="hidden lg:flex absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 z-20 [writing-mode:vertical-rl] rotate-180 items-center gap-6">
        <div className="h-20 w-px bg-[#c08e3a]/60" />
        <span className="text-[10px] tracking-[0.5em] uppercase text-gold">
          PATENTED · pvc · INDIA
        </span>
        <div className="h-20 w-px bg-[#c08e3a]/60" />
      </div>

      <div className="relative z-20 max-w-[1480px] mx-auto w-full px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: copy */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex items-center gap-3 mb-7"
            >
              <span className="w-12 h-px bg-[#c08e3a]" />
              <span className="text-[11px] tracking-[0.4em] uppercase text-gold">
                India&apos;s First Patented pvc Inspection Chamber
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="font-display font-bold uppercase leading-[0.86] text-[12vw] sm:text-[11vw] lg:text-[4.5rem] xl:text-[5.5rem] 2xl:text-[6.5rem] tracking-tighter break-words [overflow-wrap:anywhere] lg:[overflow-wrap:normal]"
              data-testid="hero-headline"
            >
              <span className="block metallic-text">Drainage,</span>
              <span className="block text-navy">
                Re<span className="italic font-light text-gold-soft">engineered.</span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-8 text-ink text-base md:text-lg leading-relaxed max-w-2xl"
            >
              Champion Industries solves the drainage problem at its source.
              Our patented pvc Inspection Chamber replaces unreliable brick
              chambers with a leakproof, backflow-protected, factory-built
              unit — installed in minutes, engineered to last decades.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="mt-10 flex flex-wrap items-center gap-6"
            >
              <a
                href="#products"
                data-testid="hero-explore-button"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#products").scrollIntoView({ behavior: "smooth" });
                }}
                className="chrome-sheen btn-primary inline-flex items-center gap-4 px-8 py-5 text-[12px] tracking-[0.3em] uppercase font-semibold transition-all"
              >
                View The Product
                <ArrowDownRight size={16} />
              </a>
              <a
                href="/founders"
                data-testid="hero-story-button"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#founders").scrollIntoView({ behavior: "smooth" });
                }}
                className="text-[12px] tracking-[0.3em] uppercase text-navy hover:text-[#1e3a8a] border-b border-[#0a2540]/40 hover:border-[#0a2540] pb-1 transition-all"
              >
                Our Story
              </a>
            </motion.div>
          </div>

          {/* Right: Logo + product visual stack */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="lg:col-span-4 relative flex flex-col items-center justify-center"
          >
            {/* Large logo (width-based so the wordmark renders at natural aspect) */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-[420px]"
            >
              <div className="absolute -inset-10 cream-glow opacity-80 blur-2xl" />
              <ChampionLogo width="100%" className="relative w-full h-auto" />
            </motion.div>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 md:mt-20 pt-8 border-t border-[#c08e3a]/30 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col gap-1">
              <span className="font-display text-3xl md:text-4xl metallic-text">
                {s.value}
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-gold">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
