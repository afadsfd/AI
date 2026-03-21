/*
 * Design: Constructivism × Connection Graph
 * Navbar: Minimal, left-aligned brand with right nav links
 * Uses Instrument Serif for brand, Geist Sans for links
 * Coral red accent on hover, thin bottom border
 */

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-off-white/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Brand */}
        <a
          href="#"
          className="flex items-center gap-3 group"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <div className="relative w-8 h-8 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-coral" />
            <div className="absolute w-8 h-8 rounded-full border border-charcoal/20 group-hover:border-coral/50 transition-colors duration-300" />
          </div>
          <span
            className="text-xl tracking-tight text-charcoal"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            ZeroAI
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-warm-gray hover:text-charcoal transition-colors duration-300 relative group"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-coral group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <div className="w-px h-6 bg-border" />
          <LanguageSwitcher />
          <a
            href="#contact"
            className="text-sm px-5 py-2 bg-charcoal text-off-white hover:bg-coral transition-colors duration-300"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            {t("hero.cta.explore")}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-charcoal"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-off-white/95 backdrop-blur-md border-b border-border overflow-hidden"
          >
            <div className="container py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-base text-charcoal py-2 border-b border-border/50"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="py-4 border-b border-border/50">
                <LanguageSwitcher />
              </div>
              <a
                href="#contact"
                className="text-sm px-5 py-3 bg-charcoal text-off-white text-center mt-2"
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
