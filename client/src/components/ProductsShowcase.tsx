/*
 * Apple-style Products Showcase
 * Centered section header, featured card, coming soon cards
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Languages, Brain, FileSearch, ArrowRight, Globe, Mic, Volume2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ProductsShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useLanguage();

  const comingSoonProducts = [
    {
      icon: Brain,
      name: t("products.coming"),
      tagline: t("products.coming.tag"),
      description: t("products.coming.desc"),
    },
    {
      icon: FileSearch,
      name: t("products.coming"),
      tagline: t("products.coming2.tag"),
      description: t("products.coming2.desc"),
    },
  ];

  return (
    <section id="products" className="py-24 md:py-32 lg:py-40" ref={ref}>
      <div className="max-w-[1120px] mx-auto px-6">
        {/* Centered section header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.2em] uppercase text-coral font-semibold mb-4 font-sans"
          >
            {t("products.label")}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1d1d1f] font-sans"
          >
            {t("products.title")}
          </motion.h2>
        </div>

        {/* Featured product: MeetSimul */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-6"
        >
          <a
            href="#meetsimul"
            className="group block rounded-3xl bg-[#f5f5f7] overflow-hidden transition-shadow duration-500 hover:shadow-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Product illustration */}
              <div className="relative overflow-hidden aspect-[4/3] md:aspect-auto flex items-center justify-center p-10 md:p-14 bg-gradient-to-br from-[#e8e8ed] to-[#f5f5f7]">
                {/* App window mockup */}
                <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl overflow-hidden group-hover:scale-[1.03] transition-transform duration-700">
                  {/* Window titlebar */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-[#fafafa] border-b border-[#e5e5e5]">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                    <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                    <span className="ml-3 text-[11px] text-[#86868b] font-sans">MeetSimul</span>
                  </div>
                  {/* App content */}
                  <div className="p-5 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Mic size={14} className="text-coral" />
                        <span className="text-xs font-medium text-[#1d1d1f] font-sans">English</span>
                      </div>
                      <Globe size={14} className="text-[#86868b]" />
                      <div className="flex items-center gap-2">
                        <Volume2 size={14} className="text-coral" />
                        <span className="text-xs font-medium text-[#1d1d1f] font-sans">中文</span>
                      </div>
                    </div>
                    <div className="h-px bg-[#f0f0f0]" />
                    <div className="space-y-2">
                      <div className="h-2.5 bg-[#f0f0f0] rounded-full w-full" />
                      <div className="h-2.5 bg-[#f0f0f0] rounded-full w-4/5" />
                      <div className="h-2.5 bg-[#f0f0f0] rounded-full w-3/5" />
                    </div>
                    <div className="h-px bg-[#f0f0f0]" />
                    <div className="space-y-2">
                      <div className="h-2.5 bg-coral/10 rounded-full w-full" />
                      <div className="h-2.5 bg-coral/10 rounded-full w-4/5" />
                      <div className="h-2.5 bg-coral/10 rounded-full w-2/5" />
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-[10px] text-[#86868b] font-sans">Latency: 0.3s</span>
                      <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        <span className="text-[10px] text-green-600 font-sans">Live</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Live badge */}
                <div className="absolute top-5 left-5 flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 backdrop-blur-sm">
                  <div className="relative w-2 h-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 pulse-dot" />
                  </div>
                  <span className="text-xs font-medium text-green-600 font-sans">
                    {t("products.meetsimul.badge")}
                  </span>
                </div>
              </div>

              {/* Product info */}
              <div className="p-10 md:p-12 flex flex-col justify-center">
                <p className="text-xs tracking-[0.15em] uppercase text-coral font-semibold mb-3 font-sans">
                  {t("products.meetsimul.tag")}
                </p>

                <h3 className="text-3xl font-semibold tracking-tight text-[#1d1d1f] mb-4 font-sans">
                  {t("products.meetsimul.name")}
                </h3>

                <p className="text-base text-[#86868b] leading-relaxed mb-8 font-sans">
                  {t("products.meetsimul.desc")}
                </p>

                {/* Key metrics */}
                <div className="flex gap-8 mb-8">
                  {[
                    { value: t("products.meetsimul.metric1"), label: t("products.meetsimul.metric1.label") },
                    { value: t("products.meetsimul.metric2"), label: t("products.meetsimul.metric2.label") },
                    { value: t("products.meetsimul.metric3"), label: t("products.meetsimul.metric3.label") },
                  ].map((m) => (
                    <div key={m.label}>
                      <div className="text-2xl font-semibold text-[#1d1d1f] font-sans">
                        {m.value}
                      </div>
                      <div className="text-xs text-[#86868b] mt-1 font-sans">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-coral font-medium font-sans group-hover:gap-3 transition-all duration-300">
                  <span>{t("products.meetsimul.cta")}</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          </a>
        </motion.div>

        {/* Coming Soon cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {comingSoonProducts.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 + index * 0.15 }}
              className="rounded-2xl bg-[#f5f5f7] border border-dashed border-[#86868b]/20 p-8 md:p-10 flex flex-col justify-between opacity-70"
            >
              <div>
                <product.icon size={24} className="text-[#86868b]/40 mb-5" strokeWidth={1.5} />
                <h3 className="text-lg font-semibold text-[#1d1d1f]/40 mb-2 font-sans">
                  {product.name}
                </h3>
                <p className="text-sm text-[#86868b]/60 leading-relaxed font-sans">
                  {product.description}
                </p>
              </div>
              <div className="mt-6 pt-5 border-t border-dashed border-[#86868b]/10">
                <span className="text-xs tracking-[0.15em] uppercase text-[#86868b]/40 font-sans">
                  {product.tagline}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
