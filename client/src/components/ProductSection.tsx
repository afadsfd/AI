/*
 * Apple-style Product Detail Section
 * Dark bg, centered header, two-column layout
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const platforms = [
  "Zoom",
  "Microsoft Teams",
  "Google Meet",
  "Webex",
  "腾讯会议",
  "飞书",
  "钉钉",
  "Slack Huddle",
];

export default function ProductSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useLanguage();

  return (
    <section id="meetsimul" className="py-24 md:py-32 lg:py-40 bg-[#1d1d1f]" ref={ref}>
      <div className="max-w-[1120px] mx-auto px-6">
        {/* Centered section header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.2em] uppercase text-coral font-semibold mb-4 font-sans"
          >
            {t("product.label")}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-tight font-sans"
          >
            {t("product.title")}
            <br />
            <span className="text-coral">{t("product.title.highlight")}</span>
          </motion.h2>
        </div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-base md:text-lg text-white/60 leading-relaxed mb-10 font-sans"
            >
              {t("product.description")}
            </motion.p>

            {/* Platform tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap gap-2.5 mb-10"
            >
              {platforms.map((p) => (
                <span
                  key={p}
                  className="px-4 py-2 text-sm rounded-full border border-white/10 text-white/50 hover:border-coral/40 hover:text-coral transition-colors duration-300 font-sans"
                >
                  {p}
                </span>
              ))}
            </motion.div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="border-l-2 border-coral pl-6"
            >
              <p className="text-base text-white/40 leading-relaxed italic font-sans">
                "{t("product.quote")}"
              </p>
            </motion.div>
          </div>

          {/* Right: Connection diagram illustration */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="rounded-3xl bg-white/[0.05] border border-white/[0.08] p-10 md:p-12">
              {/* Central hub */}
              <div className="flex flex-col items-center">
                {/* Platform icons ring */}
                <div className="relative w-64 h-64 md:w-72 md:h-72">
                  {/* Center MeetSimul logo */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-2xl bg-coral flex items-center justify-center shadow-lg shadow-coral/20">
                    <span className="text-white font-semibold text-lg font-sans">M</span>
                  </div>

                  {/* Orbiting platforms */}
                  {platforms.slice(0, 6).map((platform, i) => {
                    const angle = (i * 60 - 90) * (Math.PI / 180);
                    const radius = 110;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;
                    return (
                      <div key={platform} className="absolute top-1/2 left-1/2" style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}>
                        {/* Connecting line */}
                        <svg className="absolute top-1/2 left-1/2 -z-10" width="200" height="200" style={{ transform: 'translate(-50%, -50%)' }}>
                          <line x1="100" y1="100" x2={100 - x} y2={100 - y} stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                        </svg>
                        <div className="w-12 h-12 rounded-xl bg-white/[0.08] border border-white/[0.1] flex items-center justify-center hover:bg-white/[0.12] transition-colors duration-300">
                          <span className="text-[10px] text-white/60 font-medium font-sans text-center leading-tight">{platform.length > 6 ? platform.slice(0, 5) : platform}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Label */}
                <p className="text-sm text-white/30 mt-8 font-sans text-center">
                  System-level Audio Bridge — Zero API Integration
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
