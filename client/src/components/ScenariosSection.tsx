/*
 * Apple-style Scenarios Section
 * Dark background with frosted glass cards
 * 2x2 grid, sans-serif typography, fade-up animations
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ScenariosSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useLanguage();

  const scenarios = [
    {
      number: "I",
      titleKey: "scenarios.scenario1",
      descKey: "scenarios.scenario1.desc",
      tags: ["Remote Work", "Agile", "Project Management"],
    },
    {
      number: "II",
      titleKey: "scenarios.scenario2",
      descKey: "scenarios.scenario2.desc",
      tags: ["B2B Sales", "Investor Pitch", "Contract Negotiation"],
    },
    {
      number: "III",
      titleKey: "scenarios.scenario3",
      descKey: "scenarios.scenario3.desc",
      tags: ["Academic Conference", "Thesis Defense", "Research Collaboration"],
    },
    {
      number: "IV",
      titleKey: "scenarios.scenario4",
      descKey: "scenarios.scenario4.desc",
      tags: ["Technical Support", "Customer Success", "After-Sales Service"],
    },
  ];

  return (
    <section
      id="scenarios"
      className="bg-[#1d1d1f] py-24 md:py-32 lg:py-40"
      ref={ref}
    >
      <div className="container">
        {/* Centered section header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold tracking-[0.2em] uppercase text-coral mb-4 font-sans"
          >
            {t("scenarios.label")}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight font-sans"
          >
            {t("scenarios.title")}
            <br />
            <span className="text-coral">{t("scenarios.title.highlight")}</span>
          </motion.h2>
        </div>

        {/* Scenario cards - 2x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {scenarios.map((scenario, index) => (
            <motion.div
              key={scenario.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 + index * 0.12 }}
              className="rounded-2xl bg-white/[0.05] border border-white/[0.08] p-8 md:p-10 hover:bg-white/[0.08] transition-colors duration-500"
            >
              {/* Roman numeral */}
              <span className="text-sm font-semibold text-coral mb-4 block font-sans">
                {scenario.number}
              </span>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 tracking-tight font-sans">
                {t(scenario.titleKey)}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#86868b] leading-relaxed mb-6 font-sans">
                {t(scenario.descKey)}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {scenario.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full border border-white/10 text-[#86868b] font-sans"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
