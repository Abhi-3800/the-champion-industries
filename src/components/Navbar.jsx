import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { NAV_LINKS } from "../lib/data";
import { ChampionLogo } from "./ChampionLogo";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleAnchorClick = (e, href) => {
    if (href.startsWith("/")) {
      e.preventDefault();
      setOpen(false);
      navigate(href);
      return;
    }
    e.preventDefault();
    setOpen(false);
    if (location.pathname === "/") {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate("/");
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-[#c08e3a]/30 shadow-sm"
          : "bg-white/40 backdrop-blur-sm border-b border-transparent"
      }`}
      data-testid="navbar"
    >
      <nav className="max-w-[1480px] mx-auto px-6 md:px-12 lg:px-20 h-20 md:h-24 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3 group"
          data-testid="nav-logo-link"
          aria-label="Champion Industries home"
        >
          <ChampionLogo size={94} className="shrink-0 group-hover:scale-105 transition-transform duration-500" />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link, idx) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                data-testid={link.testid}
                className="group relative text-[13px] tracking-[0.25em] uppercase text-[#0a2540] hover:text-[#1e3a8a] transition-colors duration-300"
              >
                {/* <span className="text-gold-soft mr-2">0{idx + 1}</span> */}
                {link.label}
                <span className="absolute left-0 -bottom-2 h-px w-0 group-hover:w-full bg-gradient-to-r from-[#1e3a8a] to-[#c08e3a] transition-all duration-500" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => handleAnchorClick(e, "#contact")}
            data-testid="nav-cta-button"
            className="hidden md:inline-flex chrome-sheen btn-primary items-center gap-2 px-5 py-3 text-[12px] tracking-[0.25em] uppercase font-semibold transition-all"
          >
            Get In Touch
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-[#0a2540]"
            aria-label="Toggle menu"
            data-testid="mobile-menu-toggle"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-[#c08e3a]/30"
          >
            <ul className="flex flex-col px-6 py-6 gap-2">
              {NAV_LINKS.map((link, idx) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleAnchorClick(e, link.href)}
                    data-testid={`mobile-${link.testid}`}
                    className="flex items-center justify-between py-4 border-b border-[#c08e3a]/20 text-sm tracking-[0.25em] uppercase text-[#0a2540]"
                  >
                    <span>
                      {link.label}
                    </span>
                    <span className="text-gold-soft">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
