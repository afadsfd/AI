/*
 * Design: Constructivism × Connection Graph
 * Hero: ZeroAI brand-level hero — AI product studio positioning
 * Asymmetric layout, left-heavy text with right abstract visual
 * Large Instrument Serif heading, coral accent
 */

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445986574/Jj7onUvNJQ2rzeC6pnzA7s/hero-bg-4mbUiRpCosCaTapoyb2UMm.webp";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Subtle grid pattern background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #1c1917 1px, transparent 1px),
            linear-gradient(to bottom, #1c1917 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Diagonal accent line */}
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-coral/20 to-transparent transform rotate-12 translate-x-[30vw]" />

      <div className="container relative z-10 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left content - takes 7 columns */}
          <div className="lg:col-span-7">
            {/* Brand badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="relative w-2.5 h-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-coral pulse-dot" />
              </div>
              <span
                className="text-xs tracking-[0.2em] uppercase text-warm-gray"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {t("hero.badge")}
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-charcoal mb-6"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {t("hero.title")}
              <br />
              <span className="text-coral">{t("hero.title.highlight1")}</span>与
              <span className="text-coral">{t("hero.title.highlight2")}</span>
              <br />
              {t("hero.title.end")}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-base md:text-lg text-warm-gray max-w-lg leading-relaxed mb-10"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {t("hero.description")}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#products"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-charcoal text-off-white text-sm hover:bg-coral transition-colors duration-300"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {t("hero.cta.explore")}
                <span className="text-xs opacity-60">→</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-charcoal/20 text-charcoal text-sm hover:border-coral hover:text-coral transition-colors duration-300"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {t("hero.cta.contact")}
              </a>
            </motion.div>

            {/* Brand stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex gap-10 mt-14 pt-8 border-t border-border"
            >
              {[
                { value: t("hero.stat1"), label: t("hero.stat1.label") },
                { value: t("hero.stat2"), label: t("hero.stat2.label") },
                { value: t("hero.stat3"), label: t("hero.stat3.label") },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    className="text-2xl md:text-3xl text-charcoal tracking-tight"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs text-warm-gray mt-1 tracking-wide"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right visual - takes 5 columns */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative">
              <img
                src={HERO_BG}
                alt="Abstract constructivist network visualization"
                className="w-full h-auto"
              />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-coral/30" />
              <div className="absolute -top-4 -right-4 w-16 h-16 border border-charcoal/10" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={16} className="text-warm-gray/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
