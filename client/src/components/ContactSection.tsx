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
    <section
      id="contact"
      className="bg-[#f5f5f7] py-24 md:py-32 lg:py-40"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-6">
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

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-2xl mx-auto"
        >
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl shadow-sm p-10 space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#1d1d1f] mb-2 font-sans">
                  {t("contact.form.name")}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-[#f5f5f7] rounded-xl px-4 py-3 border-none outline-none text-[#1d1d1f] text-sm font-sans placeholder:text-[#86868b]/60 focus:ring-2 focus:ring-coral/30 transition-shadow duration-200"
                  placeholder={t("contact.form.name.placeholder")}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1d1d1f] mb-2 font-sans">
                  {t("contact.form.email")}
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-[#f5f5f7] rounded-xl px-4 py-3 border-none outline-none text-[#1d1d1f] text-sm font-sans placeholder:text-[#86868b]/60 focus:ring-2 focus:ring-coral/30 transition-shadow duration-200"
                  placeholder={t("contact.form.email.placeholder")}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1d1d1f] mb-2 font-sans">
                {t("contact.form.company")}
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                className="w-full bg-[#f5f5f7] rounded-xl px-4 py-3 border-none outline-none text-[#1d1d1f] text-sm font-sans placeholder:text-[#86868b]/60 focus:ring-2 focus:ring-coral/30 transition-shadow duration-200"
                placeholder={t("contact.form.company.placeholder")}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1d1d1f] mb-2 font-sans">
                {t("contact.form.message")}
              </label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-[#f5f5f7] rounded-xl px-4 py-3 border-none outline-none text-[#1d1d1f] text-sm font-sans resize-none placeholder:text-[#86868b]/60 focus:ring-2 focus:ring-coral/30 transition-shadow duration-200"
                placeholder={t("contact.form.message.placeholder")}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-coral text-white rounded-full px-8 py-3.5 font-medium text-sm font-sans hover:opacity-90 transition-opacity duration-200 flex items-center justify-center gap-2"
            >
              {t("contact.form.submit")}
              <Send size={15} />
            </button>
          </form>
        </motion.div>

        {/* Contact info below card */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-[#86868b] font-sans"
        >
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-coral" />
            <span>{t("contact.email")}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-coral" />
            <span>{t("contact.trial")}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
