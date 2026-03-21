/*
 * Design: Constructivism × Connection Graph
 * Contact/CTA: Bold call to action with diagonal accent
 * Simple form for trial request, minimal fields
 */

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { Send } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t("contact.success"));
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-24 md:py-32" ref={ref}>
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-charcoal/[0.02] -skew-x-12 translate-x-20" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left CTA text */}
          <div className="lg:col-span-5">
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
                {t("contact.label")}
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl text-charcoal leading-tight tracking-tight mb-6"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {t("contact.title")}
              <br />
              <span className="text-coral italic">{t("contact.title.highlight")}</span>
              {t("contact.title.end")}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-sm md:text-base text-warm-gray leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {t("contact.description")}
            </motion.p>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 bg-coral rounded-full" />
                <span
                  className="text-sm text-warm-gray"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {t("contact.email")}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 bg-coral rounded-full" />
                <span
                  className="text-sm text-warm-gray"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {t("contact.trial")}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-6 lg:col-start-7"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    className="text-xs text-warm-gray mb-2 block tracking-wide"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {t("contact.form.name")}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-0 py-3 bg-transparent border-b border-border focus:border-coral outline-none text-charcoal text-sm transition-colors duration-300"
                    style={{ fontFamily: "var(--font-sans)" }}
                    placeholder={t("contact.form.name.placeholder")}
                  />
                </div>
                <div>
                  <label
                    className="text-xs text-warm-gray mb-2 block tracking-wide"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {t("contact.form.email")}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-0 py-3 bg-transparent border-b border-border focus:border-coral outline-none text-charcoal text-sm transition-colors duration-300"
                    style={{ fontFamily: "var(--font-sans)" }}
                    placeholder={t("contact.form.email.placeholder")}
                  />
                </div>
              </div>

              <div>
                <label
                  className="text-xs text-warm-gray mb-2 block tracking-wide"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {t("contact.form.company")}
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="w-full px-0 py-3 bg-transparent border-b border-border focus:border-coral outline-none text-charcoal text-sm transition-colors duration-300"
                  style={{ fontFamily: "var(--font-sans)" }}
                  placeholder={t("contact.form.company.placeholder")}
                />
              </div>

              <div>
                <label
                  className="text-xs text-warm-gray mb-2 block tracking-wide"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {t("contact.form.message")}
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-0 py-3 bg-transparent border-b border-border focus:border-coral outline-none text-charcoal text-sm resize-none transition-colors duration-300"
                  style={{ fontFamily: "var(--font-sans)" }}
                  placeholder={t("contact.form.message.placeholder")}
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-3 px-8 py-4 bg-charcoal text-off-white text-sm hover:bg-coral transition-colors duration-300 group"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {t("contact.form.submit")}
                <Send
                  size={14}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
