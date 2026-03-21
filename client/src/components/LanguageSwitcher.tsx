/*
 * Design: Constructivism × Connection Graph
 * Language Switcher: Minimal toggle button in navbar
 */

import { useLanguage, type Language } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; label: string }[] = [
    { code: "zh", label: "中文" },
    { code: "en", label: "EN" },
  ];

  return (
    <div className="flex items-center gap-1 border border-charcoal/10 p-1">
      {languages.map((lang) => (
        <motion.button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-3 py-1.5 text-xs tracking-wide transition-all duration-300 ${
            language === lang.code
              ? "bg-charcoal text-off-white"
              : "text-charcoal hover:text-coral"
          }`}
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {lang.label}
        </motion.button>
      ))}
    </div>
  );
}
