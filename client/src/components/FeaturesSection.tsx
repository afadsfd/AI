/*
 * Apple-style Features Section
 * Light gray bg, centered header, 2x2 card grid
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Globe, Cpu, Headphones } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const features = [
  {
    icon: Zap,
    title: "features.feature1",
    description: "features.feature1.desc",
  },
  {
    icon: Globe,
    title: "features.feature2",
    description: "features.feature2.desc",
  },
  {
    icon: Cpu,
    title: "features.feature3",
    description: "features.feature3.desc",
  },
  {
    icon: Headphones,
    title: "features.feature4",
    description: "features.feature4.desc",
  },
];

export default function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useLanguage();

  return (
    <section id="features" className="py-24 md:py-32 lg:py-40 bg-[#f5f5f7]" ref={ref}>
      <div className="max-w-[1120px] mx-auto px-6">
        {/* Centered section header */}
        <div className="text-center mb-16 md:mb-20 max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.2em] uppercase text-coral font-semibold mb-4 font-sans"
          >
            {t("features.label")}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1d1d1f] mb-5 font-sans"
          >
            {t("features.title")}
            <br />
            <span className="text-coral">{t("features.title.highlight")}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-[#86868b] leading-relaxed font-sans"
          >
            {t("features.description")}
          </motion.p>
        </div>

        {/* 2x2 Feature cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-2xl p-10 group"
              >
                {/* Number */}
                <span className="text-xs text-[#86868b]/40 font-sans mb-6 block">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Icon container */}
                <div className="w-12 h-12 rounded-xl bg-[#f5f5f7] flex items-center justify-center mb-5">
                  <Icon
                    size={22}
                    className="text-[#1d1d1f] group-hover:text-coral transition-colors duration-300"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-[#1d1d1f] mb-3 tracking-tight font-sans">
                  {t(feature.title)}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#86868b] leading-relaxed font-sans">
                  {t(feature.description)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
