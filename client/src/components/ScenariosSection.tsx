/*
 * Design: Constructivism × Connection Graph
 * Scenarios: Horizontal scrolling cards with diagonal accents
 * Each scenario has a bold number, title, and description
 * Wave pattern image as section background accent
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const WAVE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445986574/Jj7onUvNJQ2rzeC6pnzA7s/wave-pattern-MWCb6hPVB94BP2fSvybxGJ.webp";

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
    <section id="scenarios" className="relative bg-charcoal diagonal-top diagonal-bottom overflow-hidden" ref={ref}>
      {/* Wave pattern background */}
      <div className="absolute inset-0 opacity-[0.06]">
        <img
          src={WAVE_IMG}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container relative z-10 py-20 md:py-28">
        {/* Section header */}
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
            {t("scenarios.label")}
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 text-3xl md:text-4xl lg:text-5xl text-off-white leading-tight tracking-tight"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {t("scenarios.title")}
            <br />
            <span className="text-coral italic">{t("scenarios.title.highlight")}</span>
            {t("nav.contact")}
          </motion.h2>
        </div>

        {/* Scenario cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {scenarios.map((scenario, index) => (
            <motion.div
              key={scenario.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 + index * 0.15 }}
              className="group relative border border-white/10 p-8 md:p-10 hover:border-coral/30 transition-all duration-500"
            >
              {/* Large number */}
              <span
                className="text-6xl md:text-7xl text-white/[0.04] absolute top-4 right-6 select-none"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {scenario.number}
              </span>

              {/* Content */}
              <div className="relative z-10">
                <h3
                  className="text-xl md:text-2xl text-off-white mb-4 tracking-tight"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {t(scenario.titleKey)}
                </h3>
                <p
                  className="text-sm text-warm-gray leading-relaxed mb-6"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {t(scenario.descKey)}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {scenario.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 border border-white/10 text-light-gray/60"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 w-0 h-px bg-coral group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
