import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-6 w-full">
        {/* Centered hero text */}
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-sans text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-semibold leading-[1.05] tracking-tight text-[#1d1d1f] mx-auto"
          >
            {t("hero.title")}
            <br />
            <span className="bg-gradient-to-r from-coral to-coral-light bg-clip-text text-transparent">
              {t("hero.title.highlight1")}
            </span>
            {" "}
            <span className="bg-gradient-to-r from-coral to-coral-light bg-clip-text text-transparent">
              {t("hero.title.highlight2")}
            </span>
            {t("hero.title.end") && (
              <>
                <br />
                {t("hero.title.end")}
              </>
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-sans text-lg md:text-xl text-[#86868b] max-w-2xl mx-auto mt-6 leading-relaxed"
          >
            {t("hero.description")}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mt-10"
          >
            <a
              href="#products"
              className="font-sans inline-flex items-center gap-2 px-8 py-3.5 bg-coral text-white text-sm rounded-full hover:brightness-105 transition-all duration-200"
            >
              {t("hero.cta.explore")}
            </a>
            <a
              href="#contact"
              className="font-sans inline-flex items-center gap-2 px-8 py-3.5 border border-[#1d1d1f]/20 text-[#1d1d1f] text-sm rounded-full hover:border-[#1d1d1f]/40 transition-all duration-200"
            >
              {t("hero.cta.contact")}
            </a>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center gap-16 mt-20"
        >
          {[
            { value: t("hero.stat1"), label: t("hero.stat1.label") },
            { value: t("hero.stat2"), label: t("hero.stat2.label") },
            { value: t("hero.stat3"), label: t("hero.stat3.label") },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-sans text-3xl md:text-4xl font-semibold text-[#1d1d1f] tracking-tight">
                {stat.value}
              </div>
              <div className="font-sans text-xs text-[#86868b] mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
