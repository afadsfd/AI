import { useLanguage, type Language } from "@/contexts/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; label: string }[] = [
    { code: "zh", label: "中文" },
    { code: "en", label: "EN" },
  ];

  return (
    <div className="flex items-center rounded-full bg-[#f5f5f7] p-0.5">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`font-sans px-3 py-1 text-xs rounded-full transition-all duration-200 ${
            language === lang.code
              ? "bg-white text-[#1d1d1f] shadow-sm"
              : "text-[#86868b] hover:text-[#1d1d1f]"
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}
