/*
 * Design: Constructivism × Connection Graph
 * Features: Modular cards with asymmetric grid, numbered items
 * Each feature card has a top accent line and geometric decoration
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
    accent: true,
  },
  {
    icon: Globe,
    title: "features.feature2",
    description: "features.feature2.desc",
    accent: false,
  },
  {
    icon: Cpu,
    title: "features.feature3",
    description: "features.feature3.desc",
    accent: true,
  },
  {
    icon: Headphones,
    title: "features.feature4",
    description: "features.feature4.desc",
    accent: false,
  },
];

export default function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useLanguage();

  return (
    <section id="features" className="relative py-24 md:py-32" ref={ref}>
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #1c1917 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container relative z-10">
        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 md:mb-20">
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-8 h-px bg-coral" />
              <span
                className="text-xs tracking-[0.25em] uppercase text-warm-gray"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {t("features.label")}
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl text-charcoal leading-tight tracking-tight"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {t("features.title")}
              <br />
              <span className="text-coral italic">{t("features.title.highlight")}</span>
            </motion.h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-7 flex items-end">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-sm md:text-base text-warm-gray leading-relaxed"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {t("features.description")}
            </motion.p>
          </div>
        </div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-background p-8 md:p-10 group hover:bg-off-white transition-colors duration-500 relative"
              >
                {/* Top accent line for highlighted cards */}
                {feature.accent && (
                  <div className="absolute top-0 left-0 right-0 h-px bg-coral" />
                )}

                {/* Number */}
                <span
                  className="text-xs text-light-gray mb-6 block"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div className="w-10 h-10 flex items-center justify-center mb-5 border border-charcoal/10 group-hover:border-coral/30 transition-colors duration-300">
                  <Icon
                    size={18}
                    className="text-charcoal group-hover:text-coral transition-colors duration-300"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Title */}
                <h3
                  className="text-xl text-charcoal mb-3 tracking-tight"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {t(feature.title)}
                </h3>

                {/* Description */}
                <p
                  className="text-sm text-warm-gray leading-relaxed"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
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
