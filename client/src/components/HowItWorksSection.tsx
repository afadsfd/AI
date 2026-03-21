/*
 * Apple-style How It Works Section
 * Clean 3-step horizontal layout with numbered circles
 * Sans-serif typography, fade-up animations
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Download, Apple } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

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
    <section className="bg-white py-24 md:py-32 lg:py-40" ref={ref}>
      <div className="container">
        {/* Centered section header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold tracking-[0.2em] uppercase text-coral mb-4 font-sans"
          >
            {t("howitworks.label")}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1d1d1f] tracking-tight font-sans"
          >
            {t("howitworks.title")}
            <br />
            <span className="text-coral">{t("howitworks.title.highlight")}</span>
          </motion.h2>
        </div>

        {/* Steps row */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Connecting line on desktop */}
          <div className="hidden md:block absolute top-7 left-[16.67%] right-[16.67%] h-px bg-black/[0.08]" />

          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 + index * 0.15 }}
              className="relative flex flex-col items-center text-center"
            >
              {/* Step number circle */}
              <div className="w-14 h-14 rounded-full bg-coral text-white flex items-center justify-center text-lg font-semibold font-sans mb-6 relative z-10">
                {step.step}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[#1d1d1f] mb-3 tracking-tight font-sans">
                {t(step.titleKey)}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#86868b] leading-relaxed mb-5 max-w-xs font-sans">
                {t(step.descKey)}
              </p>

              {/* Detail tag pill */}
              <span className="inline-block text-xs font-medium px-4 py-1.5 rounded-full bg-coral/10 text-coral font-sans">
                {t(step.detailKey)}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Download CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-20 md:mt-24"
        >
          <div className="rounded-3xl bg-[#1d1d1f] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                <Apple size={36} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight font-sans mb-1">
                  {t("download.title")}
                </h3>
                <p className="text-sm text-white/50 font-sans">
                  {t("download.description")}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-end gap-3 shrink-0">
              <a
                href="/MeetSimul.dmg"
                download
                className="inline-flex items-center gap-3 bg-coral text-white rounded-full px-8 py-3.5 text-sm font-medium font-sans hover:opacity-90 transition-opacity duration-200"
              >
                <Download size={18} />
                {t("download.button")}
              </a>
              <div className="flex items-center gap-4 text-xs text-white/30 font-sans">
                <span>{t("download.version")}</span>
                <span>{t("download.size")}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
