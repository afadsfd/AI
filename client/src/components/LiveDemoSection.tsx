/*
 * Apple-style Live Demo Section
 * Clean sans-serif design with fade-up animations
 * Typewriter animation showing real-time translation
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
            MeetSimul / Demo
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1d1d1f] tracking-tight font-sans"
          >
            Real-Time Translation in Action
          </motion.h2>
        </div>

        {/* Demo card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <div className="rounded-3xl bg-[#f5f5f7] p-10 md:p-12">
            {/* Header */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-black/[0.06]">
              <span className="text-sm text-[#86868b] font-sans">
                MeetSimul — Live Translation
              </span>
              <div className="flex items-center gap-2">
                <div className="relative w-2 h-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 pulse-dot" />
                </div>
                <span className="text-sm text-[#86868b] font-sans">
                  Live
                </span>
              </div>
            </div>

            {/* Source language */}
            <div className="mb-8">
              <div className="text-xs font-semibold tracking-[0.15em] uppercase text-[#86868b] mb-3 font-sans">
                English (Source)
              </div>
              <div className="text-base md:text-lg text-[#1d1d1f] leading-relaxed font-sans">
                {displayText}
                {displayText.length < fullText.length && (
                  <span className="animate-pulse text-coral">|</span>
                )}
              </div>
            </div>

            {/* Divider */}
            <div className="my-8 h-px bg-black/[0.06]" />

            {/* Translated language */}
            <div className="mb-8">
              <div className="text-xs font-semibold tracking-[0.15em] uppercase text-coral mb-3 font-sans">
                Chinese (Translated)
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={displayText.length === fullText.length ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 }}
                className="text-base md:text-lg text-[#1d1d1f] leading-relaxed font-sans"
              >
                {displayText.length === fullText.length && translatedText}
              </motion.div>
            </div>

            {/* Metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={displayText.length === fullText.length ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="flex gap-8 pt-6 border-t border-black/[0.06]"
            >
              <div className="font-sans text-sm">
                <span className="text-coral font-semibold">Latency:</span>{" "}
                <span className="text-[#86868b]">0.3s</span>
              </div>
              <div className="font-sans text-sm">
                <span className="text-coral font-semibold">Confidence:</span>{" "}
                <span className="text-[#86868b]">98.7%</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
