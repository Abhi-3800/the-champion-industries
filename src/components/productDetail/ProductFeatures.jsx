import { motion } from "framer-motion";
import {
  Wrench,
  Droplets,
  ShieldCheck,
  Triangle,
  Settings,
  Shield,
  Clock,
} from "lucide-react";
import { FEATURES } from "../../lib/data";

const ICONS = { Wrench, Droplets, ShieldCheck, Triangle, Settings, Shield, Clock };

const FeatureCard = ({ feature, index }) => {
  const Icon = ICONS[feature.icon] || ShieldCheck;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.06 }}
      className="group bg-white hover:bg-[#fbf6ec] border border-[#c08e3a]/30 hover:border-[#0a2540]/60 p-8 md:p-10 flex flex-col gap-5 transition-all duration-500 shadow-[0_4px_20px_-12px_rgba(10,37,64,0.1)]"
      data-testid={`feature-card-${index}`}
    >
      <div className="w-14 h-14 border border-[#c08e3a]/50 bg-[#fbf6ec] group-hover:border-[#0a2540] group-hover:bg-[#0a2540] group-hover:text-white flex items-center justify-center text-[#0a2540] transition-all">
        <Icon size={22} />
      </div>
      <h3 className="font-display text-xl md:text-2xl uppercase font-semibold tracking-tight text-navy">
        {feature.title}
      </h3>
      <p className="text-ink leading-relaxed text-sm">{feature.body}</p>
    </motion.div>
  );
};

export const ProductFeatures = () => (
  <section className="relative py-20 md:py-28 border-t border-[#c08e3a]/30 bg-white">
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
            01 — Why It Works
          </span>
          <span className="w-16 h-px bg-[#c08e3a]/60" />
        </div>
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl uppercase font-bold tracking-tighter leading-[0.95]">
          <span className="metallic-text">Key Features</span>
          <br />
          <span className="text-navy">& Benefits</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {FEATURES.map((f, i) => (
          <FeatureCard key={f.title} feature={f} index={i} />
        ))}
      </div>
    </div>
  </section>
);
