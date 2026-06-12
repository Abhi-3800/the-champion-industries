import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";
import { FOUNDERS } from "../lib/data";

const FounderCard = ({ f, i }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.8, delay: i * 0.15 }}
    className="group relative paper-card border border-[#c08e3a]/40 hover:border-[#c08e3a]/80 transition-all duration-500 overflow-hidden shadow-[0_8px_32px_-16px_rgba(10,37,64,0.18)]"
    data-testid={`founder-card-${i}`}
  >
    <div className="grid md:grid-cols-12 gap-0">
      <div className="md:col-span-5 relative h-80 md:h-[420px] overflow-hidden bg-[#fbf6ec]">
        <img
          src={f.url}
          alt={f.name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/30" />
        <div className="absolute top-5 left-5 text-[10px] tracking-[0.4em] uppercase text-navy bg-white/85 backdrop-blur-md px-3 py-1.5 border border-[#c08e3a]/50">
          0{i + 1} / 02
        </div>
      </div>
      <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-between gap-8 bg-white">
        <div>
          <p className="text-[11px] tracking-[0.4em] uppercase text-gold mb-4">
            {f.role}
          </p>
          <h3 className="font-display text-4xl md:text-5xl uppercase font-bold tracking-tight metallic-text leading-tight">
            {f.name}
          </h3>
          <div className="w-12 h-px bg-[#c08e3a]/70 my-6" />
          <p className="text-ink leading-relaxed text-[15px]">{f.bio}</p>
        </div>
        <div className="flex items-center justify-between gap-4 border-t border-[#c08e3a]/30 pt-6">
          <span className="text-[10px] tracking-[0.4em] uppercase text-gold-mid max-w-xs italic">
            “{f.quote}”
          </span>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#"
              aria-label="LinkedIn"
              data-testid={`founder-${i}-linkedin`}
              className="w-9 h-9 border border-[#c08e3a]/50 hover:border-[#0a2540] hover:bg-[#0a2540] hover:text-white text-[#0a2540] flex items-center justify-center transition-all"
            >
              <Linkedin size={14} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              data-testid={`founder-${i}-twitter`}
              className="w-9 h-9 border border-[#c08e3a]/50 hover:border-[#0a2540] hover:bg-[#0a2540] hover:text-white text-[#0a2540] flex items-center justify-center transition-all"
            >
              <Twitter size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

export const Founders = () => {
  return (
    <section
      id="founders"
      data-testid="founders-section"
      className="relative py-24 md:py-32 cream-surface"
    >
      <div className="max-w-[1480px] mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-12 gap-8 items-end mb-16 md:mb-20"
        >
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[11px] tracking-[0.4em] uppercase text-gold">
                03 — The Team
              </span>
              <span className="w-16 h-px bg-[#c08e3a]/60" />
            </div>
            <h2 className="font-display text-5xl md:text-7xl uppercase font-bold tracking-tighter leading-[0.9]">
              <span className="text-navy">Two engineers.</span>
              <br />
              <span className="metallic-text">One mission.</span>
            </h2>
          </div>
          <p className="md:col-span-5 md:pl-10 text-ink leading-relaxed">
            Champion Industries was founded by a polymer engineer and a
            manufacturing operator who refused to accept that drainage in
            India had to mean failure, foul smell, and yearly repair bills.
          </p>
        </motion.div>

        <div className="grid gap-6 md:gap-10">
          {FOUNDERS.map((f, i) => (
            <FounderCard key={f.name} f={f} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
