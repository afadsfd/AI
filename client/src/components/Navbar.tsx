import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { label: t("nav.products"), href: "#products" },
    { label: t("nav.features"), href: "#features" },
    { label: t("nav.scenarios"), href: "#scenarios" },
    { label: t("nav.contact"), href: "#contact" },
    { label: t("nav.download"), href: "/MeetSimul.dmg", download: true },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl backdrop-saturate-[1.8] border-b border-black/[0.08]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-12">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 group"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <div className="w-2.5 h-2.5 rounded-full bg-coral" />
          <span className="font-sans font-semibold text-base text-[#1d1d1f]">
            ZeroAI
          </span>
        </a>

        {/* Center nav links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              {...(link.download ? { download: true } : {})}
              className="font-sans text-xs font-normal text-[#1d1d1f]/80 hover:text-[#1d1d1f] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitcher />
          <a
            href="#contact"
            className="font-sans text-xs bg-coral text-white rounded-full px-4 py-1.5 hover:brightness-105 transition-all duration-200"
          >
            {t("hero.cta.explore")}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-1.5 text-[#1d1d1f]"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white/80 backdrop-blur-xl backdrop-saturate-[1.8] border-b border-black/[0.08] overflow-hidden"
          >
            <div className="max-w-5xl mx-auto px-6 py-5 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  {...(link.download ? { download: true } : {})}
                  className="font-sans text-sm text-[#1d1d1f] py-2.5 border-b border-black/[0.04]"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="py-3">
                <LanguageSwitcher />
              </div>
              <a
                href="#contact"
                className="font-sans text-sm bg-coral text-white rounded-full text-center py-2.5 mt-1"
                onClick={() => setMobileOpen(false)}
              >
                {t("hero.cta.explore")}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
