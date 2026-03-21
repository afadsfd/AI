import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Apple, Download } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function DownloadSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useLanguage();

  return (
    <section
      id="download"
      className="bg-[#1d1d1f] py-24 md:py-32 lg:py-40"
      ref={ref}
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Apple icon container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center justify-center w-28 h-28 rounded-3xl bg-white/10 mb-10"
        >
          <Apple size={64} className="text-white" />
        </motion.div>

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-coral font-semibold text-sm tracking-wide uppercase mb-4 font-sans"
        >
          {t("download.label")}
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-tight font-sans"
        >
          {t("download.title")}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-5 text-lg md:text-xl text-[#86868b] max-w-2xl mx-auto font-sans"
        >
          {t("download.description")}
        </motion.p>

        {/* Download button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10"
        >
          <a
            href="/MeetSimul.dmg"
            download
            className="inline-flex items-center gap-3 bg-coral text-white rounded-full px-10 py-4 text-base font-medium font-sans hover:opacity-90 transition-opacity duration-200"
          >
            <Download size={20} />
            {t("download.button")}
          </a>
        </motion.div>

        {/* System info row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-[#86868b] font-sans"
        >
          <span>{t("download.version")}</span>
          <span className="w-1 h-1 rounded-full bg-[#86868b]/40" />
          <span>{t("download.size")}</span>
          <span className="w-1 h-1 rounded-full bg-[#86868b]/40" />
          <span>{t("download.requires")}</span>
        </motion.div>

        {/* Free badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="mt-6"
        >
          <span className="inline-block text-xs font-medium text-coral bg-coral/10 rounded-full px-4 py-1.5 font-sans">
            {t("download.free")}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
