import { Instagram, Facebook, Linkedin, Youtube, Twitter, MapPin } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BRAND, ADDRESS, NAV_LINKS } from "../lib/data";
import { ChampionLogo } from "./ChampionLogo";

const socials = [
  { Icon: Instagram, label: "Instagram", href: "#", testid: "social-instagram" },
  { Icon: Facebook, label: "Facebook", href: "#", testid: "social-facebook" },
  { Icon: Linkedin, label: "LinkedIn", href: "#", testid: "social-linkedin" },
  { Icon: Twitter, label: "Twitter", href: "#", testid: "social-twitter" },
  { Icon: Youtube, label: "YouTube", href: "#", testid: "social-youtube" },
];

export const Footer = () => {
  const year = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const handleAnchor = (e, href) => {
    e.preventDefault();
    if (location.pathname === "/") {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <footer
      data-testid="footer"
      className="relative cream-surface border-t border-[#c08e3a]/40 pt-20 pb-10"
    >
      <div className="max-w-[1480px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Top: logo + wordmark */}
        <div className="flex flex-col items-start gap-4 mb-16 border-b border-[#c08e3a]/30 pb-12">
          <div className="flex items-center gap-4">
            <ChampionLogo size={120} />
            <div className="flex flex-col gap-2">
              <span className="text-[10px] tracking-[0.5em] uppercase text-gold">
                {BRAND.tagline}
              </span>
              <span className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-navy">
                Drainage · Engineered for India
              </span>
            </div>
          </div>
          <h2 className="font-display text-[14vw] md:text-[10vw] lg:text-[8rem] leading-[0.85] tracking-tighter uppercase font-bold metallic-text break-all">
            {BRAND.name}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-12 gap-10 md:gap-8">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-5">
              <MapPin size={14} className="text-[#0a2540]" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-gold">
                Get In Touch
              </span>
            </div>
            <address className="not-italic text-navy leading-relaxed text-[15px]" data-testid="footer-address">
              {ADDRESS.line1}
              <br />
              {ADDRESS.line2}
              <br />
              {ADDRESS.line3}
              <br />
              <span className="text-ink text-sm mt-2 block">
                <a href={`tel:${ADDRESS.phone.replace(/\s|-/g, "")}`} className="hover:text-[#1e3a8a]">{ADDRESS.phone}</a>
              </span>
              <span className="text-ink text-sm block">
                <a href={`mailto:${ADDRESS.email}`} className="hover:text-[#1e3a8a] break-all">{ADDRESS.email}</a>
              </span>
              <span className="text-ink text-sm block">
                <a href={`https://${ADDRESS.website}`} target="_blank" rel="noreferrer" className="hover:text-[#1e3a8a] break-all">{ADDRESS.website}</a>
              </span>
            </address>
          </div>

          <div className="md:col-span-3">
            <p className="text-[10px] tracking-[0.4em] uppercase text-gold mb-5">Navigate</p>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={(e) => handleAnchor(e, l.href)}
                    className="text-navy hover:text-[#1e3a8a] text-sm tracking-wide transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  to="/products/cpvc-inspection-chamber"
                  className="text-navy hover:text-[#1e3a8a] text-sm tracking-wide transition-colors"
                >
                  Product Detail
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-[10px] tracking-[0.4em] uppercase text-gold mb-5">Subscribe</p>
            <p className="text-ink text-sm mb-5 leading-relaxed">
              Product updates, distributor notices and case studies from
              Indian construction sites.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center border-b border-[#c08e3a]/50 focus-within:border-[#0a2540] transition-colors"
              data-testid="footer-newsletter-form"
            >
              <input
                type="email"
                placeholder="your@email.com"
                data-testid="footer-newsletter-input"
                className="flex-1 bg-transparent py-3 text-[#0a2540] placeholder:text-[#c08e3a]/60 outline-none text-sm"
              />
              <button
                type="submit"
                data-testid="footer-newsletter-submit"
                className="text-[10px] tracking-[0.3em] uppercase text-navy hover:text-[#1e3a8a] px-3 font-semibold"
              >
                Join →
              </button>
            </form>

            <div className="flex items-center gap-3 mt-8">
              {socials.map(({ Icon, label, href, testid }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  data-testid={testid}
                  className="w-10 h-10 border border-[#c08e3a]/50 hover:border-[#0a2540] hover:bg-[#0a2540] hover:text-white text-[#0a2540] flex items-center justify-center transition-all"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#c08e3a]/30 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-[10px] tracking-[0.3em] uppercase text-gold-mid" data-testid="copyright">
            © {year} {BRAND.fullName} Pvt. Ltd. — All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 text-[10px] tracking-[0.3em] uppercase text-gold-mid">
            <a href="#" className="hover:text-[#0a2540]">Privacy</a>
            <a href="#" className="hover:text-[#0a2540]">Terms</a>
            <a href="#" className="hover:text-[#0a2540]">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
