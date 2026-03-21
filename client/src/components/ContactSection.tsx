import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Send } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="bg-[#f5f5f7] py-24 md:py-32 lg:py-40"
      ref={ref}
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Centered header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-coral font-semibold text-sm tracking-wide uppercase mb-4 font-sans"
          >
            {t("contact.label")}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1d1d1f] tracking-tight leading-tight font-sans"
          >
            {t("contact.title")}
            <br />
            <span className="text-coral">{t("contact.title.highlight")}</span>
            {t("contact.title.end")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 text-lg text-[#86868b] max-w-2xl mx-auto font-sans"
          >
            {t("contact.description")}
          </motion.p>
        </div>

        {/* Contact cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto"
        >
          {/* Email card */}
          <a
            href="mailto:lz3862680@gmail.com"
            className="group bg-white rounded-3xl shadow-sm p-8 flex flex-col items-center text-center hover:shadow-md transition-shadow duration-300"
          >
            <div className="w-14 h-14 rounded-2xl bg-coral/10 flex items-center justify-center mb-5 group-hover:bg-coral/15 transition-colors duration-300">
              <Mail size={24} className="text-coral" />
            </div>
            <p className="text-xs tracking-[0.15em] uppercase text-[#86868b] mb-2 font-sans">
              {t("contact.email.label")}
            </p>
            <p className="text-base font-medium text-[#1d1d1f] font-sans">
              lz3862680@gmail.com
            </p>
          </a>

          {/* Telegram card */}
          <a
            href="https://t.me/sky87531"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-3xl shadow-sm p-8 flex flex-col items-center text-center hover:shadow-md transition-shadow duration-300"
          >
            <div className="w-14 h-14 rounded-2xl bg-coral/10 flex items-center justify-center mb-5 group-hover:bg-coral/15 transition-colors duration-300">
              <Send size={24} className="text-coral" />
            </div>
            <p className="text-xs tracking-[0.15em] uppercase text-[#86868b] mb-2 font-sans">
              Telegram
            </p>
            <p className="text-base font-medium text-[#1d1d1f] font-sans">
              @sky87531
            </p>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
