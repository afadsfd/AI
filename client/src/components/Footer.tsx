import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

const handlePlaceholder = (e: React.MouseEvent) => {
  e.preventDefault();
  toast("Coming soon");
};

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#f5f5f7]">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2.5 h-2.5 rounded-full bg-coral" />
              <span className="text-lg font-semibold text-[#1d1d1f] tracking-tight font-sans">
                ZeroAI
              </span>
            </div>
            <p className="text-sm text-[#86868b] leading-relaxed max-w-xs font-sans">
              {t("footer.brand.desc")}
            </p>
          </div>

          {/* Links - Product */}
          <div className="md:col-span-2 md:col-start-7">
            <h4 className="text-xs font-semibold text-[#1d1d1f] uppercase tracking-wider mb-4 font-sans">
              {t("footer.products")}
            </h4>
            <div className="space-y-3">
              <a
                href="#products"
                className="block text-sm text-[#86868b] hover:text-[#1d1d1f] transition-colors duration-200 font-sans"
              >
                MeetSimul
              </a>
              <a
                href="#"
                onClick={handlePlaceholder}
                className="block text-sm text-[#86868b] hover:text-[#1d1d1f] transition-colors duration-200 font-sans"
              >
                Coming Soon
              </a>
            </div>
          </div>

          {/* Links - Company */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold text-[#1d1d1f] uppercase tracking-wider mb-4 font-sans">
              {t("footer.company")}
            </h4>
            <div className="space-y-3">
              <a
                href="#"
                onClick={handlePlaceholder}
                className="block text-sm text-[#86868b] hover:text-[#1d1d1f] transition-colors duration-200 font-sans"
              >
                About
              </a>
              <a
                href="#"
                onClick={handlePlaceholder}
                className="block text-sm text-[#86868b] hover:text-[#1d1d1f] transition-colors duration-200 font-sans"
              >
                Blog
              </a>
            </div>
          </div>

          {/* Links - Resources */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold text-[#1d1d1f] uppercase tracking-wider mb-4 font-sans">
              {t("footer.resources")}
            </h4>
            <div className="space-y-3">
              <a
                href="#"
                onClick={handlePlaceholder}
                className="block text-sm text-[#86868b] hover:text-[#1d1d1f] transition-colors duration-200 font-sans"
              >
                Docs
              </a>
              <a
                href="#contact"
                className="block text-sm text-[#86868b] hover:text-[#1d1d1f] transition-colors duration-200 font-sans"
              >
                Support
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t border-[#d2d2d7]/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <span
            className="text-xs text-[#86868b] font-sans"
            dangerouslySetInnerHTML={{ __html: t("footer.copyright") }}
          />
          <div className="flex gap-6">
            <a
              href="#"
              onClick={handlePlaceholder}
              className="text-xs text-[#86868b] hover:text-[#1d1d1f] transition-colors duration-200 font-sans"
            >
              Privacy
            </a>
            <a
              href="#"
              onClick={handlePlaceholder}
              className="text-xs text-[#86868b] hover:text-[#1d1d1f] transition-colors duration-200 font-sans"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
