/*
 * Design: Constructivism × Connection Graph
 * MeetSimul Detail: Deep dive into the flagship product
 * Asymmetric 2-col layout, platform logos, connection diagram
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const CONNECTION_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445986574/Jj7onUvNJQ2rzeC6pnzA7s/connection-diagram-RcMHX5Fkr3Xcveznw5QyK9.webp";

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
    <section id="meetsimul" className="py-20 md:py-28 bg-charcoal relative overflow-hidden grain" ref={ref}>
      {/* Diagonal grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(45deg, #faf8f5 1px, transparent 1px),
            linear-gradient(-45deg, #faf8f5 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container relative z-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="w-8 h-px bg-coral" />
          <span
            className="text-xs tracking-[0.25em] uppercase text-off-white/50"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {t("product.label")}
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <div className="lg:col-span-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-off-white mb-6 leading-[1.1]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {t("product.title")}
              <br />
              <span className="text-coral italic">{t("product.title.highlight")}</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-sm md:text-base text-off-white/60 leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {t("product.description")}
            </motion.p>

            {/* Platform tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-2 mb-10"
            >
              {platforms.map((p) => (
                <span
                  key={p}
                  className="px-3 py-1.5 text-xs border border-off-white/10 text-off-white/50 hover:border-coral/40 hover:text-coral transition-colors duration-300"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {p}
                </span>
              ))}
            </motion.div>

            {/* Key differentiator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="border-l-2 border-coral pl-5"
            >
              <p
                className="text-sm text-off-white/40 leading-relaxed"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                "{t("product.quote")}"
              </p>
            </motion.div>
          </div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:col-span-6"
          >
            <div className="relative">
              <img
                src={CONNECTION_IMG}
                alt="MeetSimul connection diagram"
                className="w-full h-auto"
              />
              {/* Decorative frame */}
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-coral/20 -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
