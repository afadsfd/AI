/*
 * Design: Constructivism × Connection Graph
 * Footer: Minimal, left-aligned brand with right links
 * Thin top border, monospace details
 */

import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

const handlePlaceholder = (e: React.MouseEvent) => {
  e.preventDefault();
  toast("Coming soon");
};

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-6 h-6 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-coral" />
                <div className="absolute w-6 h-6 rounded-full border border-charcoal/20" />
              </div>
              <span
                className="text-lg text-charcoal tracking-tight"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                ZeroAI
              </span>
            </div>
            <p
              className="text-xs text-warm-gray leading-relaxed max-w-xs"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {t("footer.brand.desc")}
            </p>
          </div>

          {/* Links - Product */}
          <div className="md:col-span-2 md:col-start-7">
            <h4
              className="text-xs tracking-[0.15em] uppercase text-warm-gray mb-4"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {t("footer.products")}
            </h4>
            <div className="space-y-2">
              <a
                href="#products"
                className="block text-xs text-warm-gray/60 hover:text-charcoal transition-colors duration-300"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                MeetSimul
              </a>
              <a
                href="#"
                onClick={handlePlaceholder}
                className="block text-xs text-warm-gray/60 hover:text-charcoal transition-colors duration-300"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Coming Soon
              </a>
            </div>
          </div>

          {/* Links - Company */}
          <div className="md:col-span-2">
            <h4
              className="text-xs tracking-[0.15em] uppercase text-warm-gray mb-4"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {t("footer.company")}
            </h4>
            <div className="space-y-2">
              <a
                href="#"
                onClick={handlePlaceholder}
                className="block text-xs text-warm-gray/60 hover:text-charcoal transition-colors duration-300"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                About
              </a>
              <a
                href="#"
                onClick={handlePlaceholder}
                className="block text-xs text-warm-gray/60 hover:text-charcoal transition-colors duration-300"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Blog
              </a>
            </div>
          </div>

          {/* Links - Resources */}
          <div className="md:col-span-2">
            <h4
              className="text-xs tracking-[0.15em] uppercase text-warm-gray mb-4"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {t("footer.resources")}
            </h4>
            <div className="space-y-2">
              <a
                href="#"
                onClick={handlePlaceholder}
                className="block text-xs text-warm-gray/60 hover:text-charcoal transition-colors duration-300"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Docs
              </a>
              <a
                href="#contact"
                className="block text-xs text-warm-gray/60 hover:text-charcoal transition-colors duration-300"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Support
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6">
          <span
            className="text-xs text-warm-gray/60"
            style={{ fontFamily: "var(--font-mono)" }}
            dangerouslySetInnerHTML={{ __html: t("footer.copyright") }}
          />
          <div className="flex gap-6">
            <a
              href="#"
              onClick={handlePlaceholder}
              className="text-xs text-warm-gray/60 hover:text-charcoal transition-colors duration-300"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Privacy
            </a>
            <a
              href="#"
              onClick={handlePlaceholder}
              className="text-xs text-warm-gray/60 hover:text-charcoal transition-colors duration-300"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
