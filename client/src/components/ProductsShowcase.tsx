/*
 * Apple-style Products Showcase
 * Centered section header, featured card, coming soon cards
 */

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Brain, FileSearch, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ProductsShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useLanguage();

  // Typewriter demo animation
  const fullText = "Hello, I'm excited to discuss our Q3 roadmap with the team.";
  const translatedText = "你好，我很高兴能与团队讨论我们的第三季度路线图。";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (!isInView) return;
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [isInView]);

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
              {/* Live demo animation */}
              <div className="relative overflow-hidden md:aspect-auto flex flex-col justify-center p-8 md:p-10 bg-gradient-to-br from-[#e8e8ed] to-[#f5f5f7]">
                {/* Live badge */}
                <div className="absolute top-5 left-5 flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 backdrop-blur-sm">
                  <div className="relative w-2 h-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 pulse-dot" />
                  </div>
                  <span className="text-xs font-medium text-green-600 font-sans">
                    {t("products.meetsimul.badge")}
                  </span>
                </div>

                <div className="mt-6">
                  {/* Source language */}
                  <div className="mb-5">
                    <div className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#86868b] mb-2 font-sans">
                      English (Source)
                    </div>
                    <div className="text-sm text-[#1d1d1f] leading-relaxed font-sans min-h-[3em]">
                      {displayText}
                      {displayText.length < fullText.length && (
                        <span className="animate-pulse text-coral">|</span>
                      )}
                    </div>
                  </div>

                  <div className="h-px bg-black/[0.06] my-4" />

                  {/* Translated language */}
                  <div className="mb-5">
                    <div className="text-[10px] font-semibold tracking-[0.15em] uppercase text-coral mb-2 font-sans">
                      Chinese (Translated)
                    </div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={displayText.length === fullText.length ? { opacity: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="text-sm text-[#1d1d1f] leading-relaxed font-sans min-h-[3em]"
                    >
                      {displayText.length === fullText.length && translatedText}
                    </motion.div>
                  </div>

                  {/* Metrics */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={displayText.length === fullText.length ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="flex gap-6 pt-4 border-t border-black/[0.06]"
                  >
                    <div className="font-sans text-xs">
                      <span className="text-coral font-semibold">Latency:</span>{" "}
                      <span className="text-[#86868b]">0.3s</span>
                    </div>
                    <div className="font-sans text-xs">
                      <span className="text-coral font-semibold">Confidence:</span>{" "}
                      <span className="text-[#86868b]">98.7%</span>
                    </div>
                  </motion.div>
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
                <div className="flex gap-8 mb-6">
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

                {/* Platform tags */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {["Zoom", "Teams", "Google Meet", "Webex", "腾讯会议", "飞书", "钉钉"].map((p) => (
                    <span key={p} className="px-2.5 py-1 text-[11px] rounded-full bg-[#e8e8ed] text-[#86868b] font-sans">
                      {p}
                    </span>
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
