/*
 * Design: Constructivism × Connection Graph
 * Live Demo: Typewriter animation showing real-time translation
 * Terminal-style interface with latency and confidence metrics
 */

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function LiveDemoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useLanguage();
  const [displayText, setDisplayText] = useState("");
  const fullText = "Hello, I'm excited to discuss our Q3 roadmap with the team.";
  const translatedText = "你好，我很高兴能与团队讨论我们的第三季度路线图。";

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

  return (
    <section className="relative py-20 md:py-28 bg-off-white/50" ref={ref}>
      <div className="container">
        {/* Section label */}
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
            MeetSimul / {t("nav.features")}
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-4xl lg:text-5xl text-charcoal mb-16 tracking-tight"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Real-Time Translation in Action
        </motion.h2>

        {/* Demo terminal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-3xl"
        >
          <div className="border border-charcoal/10 bg-charcoal/[0.02] p-8 md:p-10">
            {/* Header */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-border">
              <div>
                <span
                  className="text-xs text-warm-gray"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  MeetSimul — Live Translation
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative w-2 h-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 pulse-dot" />
                </div>
                <span
                  className="text-xs text-warm-gray"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  Live
                </span>
              </div>
            </div>

            {/* Source language */}
            <div className="mb-8">
              <div
                className="text-xs text-warm-gray/60 mb-3 tracking-wide uppercase"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                English (Source)
              </div>
              <div
                className="text-base text-charcoal leading-relaxed font-light"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {displayText}
                {displayText.length < fullText.length && (
                  <span className="animate-pulse">|</span>
                )}
              </div>
            </div>

            {/* Divider */}
            <div className="my-8 h-px bg-border" />

            {/* Translated language */}
            <div className="mb-8">
              <div
                className="text-xs text-coral/60 mb-3 tracking-wide uppercase"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Chinese (Translated)
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={displayText.length === fullText.length ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 }}
                className="text-base text-charcoal leading-relaxed font-light"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {displayText.length === fullText.length && translatedText}
              </motion.div>
            </div>

            {/* Metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={displayText.length === fullText.length ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="flex gap-6 pt-6 border-t border-border text-xs text-warm-gray/60"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              <div>
                <span className="text-coral">Latency:</span> 0.3s
              </div>
              <div>
                <span className="text-coral">Confidence:</span> 98.7%
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
