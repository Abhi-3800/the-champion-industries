import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { ChampionLogo } from "../ChampionLogo";

export const ProductCTA = () => (
  <section className="relative py-20 md:py-28 border-t border-[#c08e3a]/30 overflow-hidden bg-white">
    <div className="absolute inset-0 cream-glow opacity-70" />
    <div className="relative max-w-[1480px] mx-auto px-6 md:px-12 lg:px-20 text-center flex flex-col items-center gap-8">
      <ChampionLogo size={120} />
      <h2 className="font-display text-4xl md:text-6xl lg:text-7xl uppercase font-bold tracking-tighter leading-[0.95]">
        <span className="text-navy">Strong. Reliable.</span>
        <br />
        <span className="metallic-text">Engineered for Performance.</span>
      </h2>
      <p className="text-ink max-w-2xl leading-relaxed">
        Built to deliver superior drainage performance at every project.
        Contact Champion Industries to specify the CPVC Inspection Chamber
        for your next site.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-6">
        <a
          href="/contact-us"
          className="chrome-sheen btn-primary inline-flex items-center gap-4 px-8 py-5 text-[12px] tracking-[0.3em] uppercase font-semibold transition-all"
        >
          Contact Us
          <ArrowUpRight size={16} />
        </a>
        <Link
          to="/"
          className="text-[12px] tracking-[0.3em] uppercase text-navy hover:text-[#1e3a8a] border-b border-[#0a2540]/40 hover:border-[#0a2540] pb-1 transition-all"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  </section>
);
