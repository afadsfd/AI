/*
 * Design: Constructivism × Connection Graph
 * Products Showcase: Multi-product grid with MeetSimul as flagship
 * 2-3 Coming Soon placeholder cards for future products
 * Asymmetric card sizes, featured product takes more space
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Languages, Brain, FileSearch, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const PRODUCT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445986574/Jj7onUvNJQ2rzeC6pnzA7s/product-concept-j9q8h6TtB7vUhTSMtkgPY6.webp";

export default function ProductsShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useLanguage();

  const comingSoonProducts = [
    {
      icon: Brain,
      name: t("products.coming"),
      tagline: t("products.coming.tag"),
      description: t("products.coming.desc"),
    },
    {
      icon: FileSearch,
      name: t("products.coming"),
      tagline: t("products.coming2.tag"),
      description: t("products.coming2.desc"),
    },
  ];

  return (
    <section id="products" className="py-20 md:py-28" ref={ref}>
      <div className="container">
        {/* Section header */}
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
            {t("products.label")}
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-charcoal mb-16"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          {t("products.title")}
        </motion.h2>

        {/* Products grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Featured product: MeetSimul — spans 8 columns */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-8"
          >
            <a
              href="#meetsimul"
              className="group block border border-charcoal/10 hover:border-coral/40 transition-all duration-500 bg-white overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Product image */}
                <div className="relative overflow-hidden aspect-[4/3] md:aspect-auto">
                  <img
                    src={PRODUCT_IMG}
                    alt="MeetSimul - AI simultaneous interpretation"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Live badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-charcoal/80 backdrop-blur-sm">
                    <div className="relative w-1.5 h-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400 pulse-dot" />
                    </div>
                    <span
                      className="text-[10px] tracking-[0.15em] uppercase text-off-white"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {t("products.meetsimul.badge")}
                    </span>
                  </div>
                </div>

                {/* Product info */}
                <div className="p-8 md:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Languages size={20} className="text-coral" />
                      <span
                        className="text-xs tracking-[0.15em] uppercase text-warm-gray"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {t("products.meetsimul.tag")}
                      </span>
                    </div>

                    <h3
                      className="text-2xl md:text-3xl tracking-tight text-charcoal mb-3"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      {t("products.meetsimul.name")}
                    </h3>

                    <p
                      className="text-sm text-warm-gray leading-relaxed mb-6"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      {t("products.meetsimul.desc")}
                    </p>

                    {/* Key metrics */}
                    <div className="flex gap-6 mb-6">
                      {[
                        { value: t("products.meetsimul.metric1"), label: t("products.meetsimul.metric1.label") },
                        { value: t("products.meetsimul.metric2"), label: t("products.meetsimul.metric2.label") },
                        { value: t("products.meetsimul.metric3"), label: t("products.meetsimul.metric3.label") },
                      ].map((m) => (
                        <div key={m.label}>
                          <div
                            className="text-lg text-charcoal"
                            style={{ fontFamily: "var(--font-serif)" }}
                          >
                            {m.value}
                          </div>
                          <div
                            className="text-[10px] text-warm-gray tracking-wide uppercase"
                            style={{ fontFamily: "var(--font-mono)" }}
                          >
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-charcoal group-hover:text-coral transition-colors duration-300">
                    <span style={{ fontFamily: "var(--font-sans)" }}>{t("products.meetsimul.cta")}</span>
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </a>
          </motion.div>

          {/* Coming Soon products — span 4 columns, stacked */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {comingSoonProducts.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.15 }}
                className="flex-1 border border-dashed border-charcoal/10 p-8 flex flex-col justify-between bg-off-white/50 hover:border-charcoal/20 transition-colors duration-300"
              >
                <div>
                  <product.icon size={20} className="text-warm-gray/40 mb-4" />
                  <h3
                    className="text-lg tracking-tight text-charcoal/40 mb-2"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {product.name}
                  </h3>
                  <p
                    className="text-xs text-warm-gray/50 leading-relaxed"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {product.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-dashed border-charcoal/5">
                  <span
                    className="text-[10px] tracking-[0.2em] uppercase text-warm-gray/30"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {product.tagline}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
