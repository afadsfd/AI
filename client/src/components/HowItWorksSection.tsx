/*
 * Design: Constructivism × Connection Graph
 * How It Works: 3-step process with connecting lines
 * Horizontal flow on desktop, vertical on mobile
 * Connection diagram image as visual accent
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const CONNECTION_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445986574/Jj7onUvNJQ2rzeC6pnzA7s/connection-diagram-RcMHX5Fkr3Xcveznw5QyK9.webp";

export default function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useLanguage();

  const steps = [
    {
      step: "01",
      titleKey: "howitworks.step1",
      descKey: "howitworks.step1.desc",
      detailKey: "howitworks.step1.detail",
    },
    {
      step: "02",
      titleKey: "howitworks.step2",
      descKey: "howitworks.step2.desc",
      detailKey: "howitworks.step2.detail",
    },
    {
      step: "03",
      titleKey: "howitworks.step3",
      descKey: "howitworks.step3.desc",
      detailKey: "howitworks.step3.detail",
    },
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden" ref={ref}>
      <div className="container relative z-10">
        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 md:mb-20">
          <div className="lg:col-span-5">
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
                {t("howitworks.label")}
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl text-charcoal leading-tight tracking-tight"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {t("howitworks.title")}
              <br />
              <span className="text-coral italic">{t("howitworks.title.highlight")}</span>
              {t("nav.contact")}
            </motion.h2>
          </div>

          {/* Connection diagram */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-6 lg:col-start-7 hidden lg:block"
          >
            <img
              src={CONNECTION_IMG}
              alt="Network connection diagram"
              className="w-full h-auto max-h-64 object-contain opacity-60"
            />
          </motion.div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 + index * 0.2 }}
              className="relative group"
            >
              {/* Connecting line (desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 right-0 w-full h-px">
                  <div className="absolute right-0 w-1/2 h-px bg-border" />
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 + index * 0.3 }}
                    className="absolute right-0 w-1/2 h-px bg-coral/30 origin-left"
                  />
                </div>
              )}

              <div className="p-8 md:p-10 border-t border-border group-hover:border-coral/30 transition-colors duration-500">
                {/* Step number */}
                <div className="flex items-center gap-4 mb-6">
                  <span
                    className="text-3xl md:text-4xl text-charcoal"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {step.step}
                  </span>
                  <div className="flex-1 h-px bg-border" />
                </div>

                {/* Title */}
                <h3
                  className="text-xl text-charcoal mb-3 tracking-tight"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {t(step.titleKey)}
                </h3>

                {/* Description */}
                <p
                  className="text-sm text-warm-gray leading-relaxed mb-4"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {t(step.descKey)}
                </p>

                {/* Detail tag */}
                <span
                  className="text-xs text-coral"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {t(step.detailKey)}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
