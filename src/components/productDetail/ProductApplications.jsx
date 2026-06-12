import { motion } from "framer-motion";
import {
  Home,
  Building2,
  Factory,
  Trees,
  HardHat,
  Droplet,
} from "lucide-react";
import { APPLICATIONS } from "../../lib/data";

const ICONS = { Home, Building2, Factory, Trees, HardHat, Droplet };

const ApplicationCard = ({ app, index }) => {
  const Icon = ICONS[app.icon] || Home;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group paper-card border border-[#c08e3a]/40 hover:border-[#0a2540]/60 p-6 md:p-8 flex flex-col items-center text-center gap-4 transition-all shadow-[0_4px_16px_-8px_rgba(10,37,64,0.1)]"
      data-testid={`application-card-${index}`}
    >
      <div className="w-14 h-14 border border-[#c08e3a]/50 bg-white group-hover:border-[#0a2540] group-hover:bg-[#0a2540] group-hover:text-white flex items-center justify-center text-[#0a2540] transition-all">
        <Icon size={22} />
      </div>
      <span className="text-[11px] tracking-[0.2em] uppercase text-navy leading-tight">
        {app.label}
      </span>
    </motion.div>
  );
};

export const ProductApplications = () => (
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
            03 — Where It Goes
          </span>
          <span className="w-16 h-px bg-[#c08e3a]/60" />
        </div>
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl uppercase font-bold tracking-tighter leading-[0.95]">
          <span className="metallic-text">Applications</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {APPLICATIONS.map((a, i) => (
          <ApplicationCard key={a.label} app={a} index={i} />
        ))}
      </div>
    </div>
  </section>
);
