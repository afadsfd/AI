/*
 * Apple-style How It Works Section
 * Clean 3-step horizontal layout with numbered circles
 * Sans-serif typography, fade-up animations
 */

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Download, Apple } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const changelogData = [
  {
    version: "v2.0.6",
    date: "2026.03.22",
    changes: {
      zh: [
        "原生语音识别：接入 macOS SFSpeechRecognizer，支持持续中文听写",
        "连续对话：说完一句自动翻译播放并清空，无缝接下一句",
        "智能静默检测（0.8s），自然断句",
        "音频引擎常驻，零空窗无感切换",
        "本地模型下载支持（SenseVoice ASR / Qwen2.5 / Piper TTS）",
      ],
      en: [
        "Native speech recognition: macOS SFSpeechRecognizer integration with continuous Chinese dictation",
        "Continuous conversation: auto-translate and play after each sentence, seamless next input",
        "Smart silence detection (0.8s) for natural sentence breaks",
        "Persistent audio engine with zero-gap seamless switching",
        "Local model download support (SenseVoice ASR / Qwen2.5 / Piper TTS)",
      ],
    },
  },
  {
    version: "v2.0.0",
    date: "2026.03.21",
    changes: {
      zh: [
        "完全重写：后端从 Python 迁移至 Rust（Tauri v2）",
        "Apple 风格白色 UI，全新设计语言",
        "移除 Python 依赖，安装包从 17MB 缩减至 5.6MB",
        "新增本地模式（云端自动兜底）",
        "新增术语词库管理",
        "新增多音色选择（男声 / 女声）",
        '新增"边说边译"实时翻译模式',
        "翻译缓存（LRU），重复内容零延迟",
      ],
      en: [
        "Full rewrite: backend migrated from Python to Rust (Tauri v2)",
        "Apple-style white UI with new design language",
        "Removed Python dependency, installer reduced from 17MB to 5.6MB",
        "Added local mode (with cloud fallback)",
        "Added terminology glossary management",
        "Added multiple voice options (male / female)",
        'Added "translate as you speak" real-time mode',
        "Translation cache (LRU) for zero-latency repeated content",
      ],
    },
  },
  {
    version: "v1.0.0",
    date: "2026.03.15",
    changes: {
      zh: [
        "首个发布版本",
        "基于 Python + Flask + Socket.IO 架构",
        "支持中文语音输入 → 英文翻译 → 语音播放",
        "依赖在线服务（Google 翻译 + Edge TTS）",
      ],
      en: [
        "Initial release",
        "Built on Python + Flask + Socket.IO architecture",
        "Chinese voice input → English translation → voice playback",
        "Powered by online services (Google Translate + Edge TTS)",
      ],
    },
  },
];

export default function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { t, language } = useLanguage();
  const [changelogOpen, setChangelogOpen] = useState(false);

  const steps = [
    {
      step: "01",
      titleKey: "howitworks.step1",
      descKey: "howitworks.step1.desc",
      detailKey: "howitworks.step1.detail",
    },
    {
      step: "02",
      titleKey: "howitworks.step2",
      descKey: "howitworks.step2.desc",
      detailKey: "howitworks.step2.detail",
    },
    {
      step: "03",
      titleKey: "howitworks.step3",
      descKey: "howitworks.step3.desc",
      detailKey: "howitworks.step3.detail",
    },
  ];

  return (
    <section className="bg-white py-24 md:py-32 lg:py-40" ref={ref}>
      <div className="container">
        {/* Centered section header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold tracking-[0.2em] uppercase text-coral mb-4 font-sans"
          >
            {t("howitworks.label")}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1d1d1f] tracking-tight font-sans"
          >
            {t("howitworks.title")}
            <br />
            <span className="text-coral">{t("howitworks.title.highlight")}</span>
          </motion.h2>
        </div>

        {/* Steps row */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Connecting line on desktop */}
          <div className="hidden md:block absolute top-7 left-[16.67%] right-[16.67%] h-px bg-black/[0.08]" />

          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 + index * 0.15 }}
              className="relative flex flex-col items-center text-center"
            >
              {/* Step number circle */}
              <div className="w-14 h-14 rounded-full bg-coral text-white flex items-center justify-center text-lg font-semibold font-sans mb-6 relative z-10">
                {step.step}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[#1d1d1f] mb-3 tracking-tight font-sans">
                {t(step.titleKey)}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#86868b] leading-relaxed mb-5 max-w-xs font-sans">
                {t(step.descKey)}
              </p>

              {/* Detail tag pill */}
              <span className="inline-block text-xs font-medium px-4 py-1.5 rounded-full bg-coral/10 text-coral font-sans">
                {t(step.detailKey)}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Download CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-20 md:mt-24"
        >
          <div className="rounded-3xl bg-[#1d1d1f] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                <Apple size={36} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight font-sans mb-1">
                  {t("download.title")}
                </h3>
                <p className="text-sm text-white/50 font-sans">
                  {t("download.description")}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-end gap-3 shrink-0">
              <a
                href="/MeetSimul.dmg"
                download
                className="inline-flex items-center gap-3 bg-coral text-white rounded-full px-8 py-3.5 text-sm font-medium font-sans hover:opacity-90 transition-opacity duration-200"
              >
                <Download size={18} />
                {t("download.button")}
              </a>
              <div className="flex items-center gap-4 text-xs text-white/30 font-sans">
                <span>{t("download.version")}</span>
                <span>{t("download.size")}</span>
                <span className="text-white/20">|</span>
                <button
                  onClick={() => setChangelogOpen(true)}
                  className="text-white/50 hover:text-white transition-colors duration-200 underline underline-offset-2"
                >
                  {t("footer.changelog")}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Changelog Dialog */}
      <Dialog open={changelogOpen} onOpenChange={setChangelogOpen}>
        <DialogContent className="max-w-lg max-h-[80vh] overflow-y-auto bg-white border-none shadow-2xl rounded-2xl">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-[#1d1d1f] font-sans">
              {t("changelog.title")}
            </DialogTitle>
            <p className="text-sm text-[#86868b] font-sans">
              {t("changelog.subtitle")}
            </p>
          </DialogHeader>

          <div className="mt-4 space-y-6">
            {changelogData.map((release, index) => (
              <div key={release.version}>
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="text-sm font-semibold text-[#1d1d1f] font-mono">
                    {release.version}
                  </span>
                  <span className="text-xs text-[#86868b] font-sans">
                    {release.date}
                  </span>
                  {index === 0 && (
                    <span className="text-[10px] font-medium text-white bg-coral px-2 py-0.5 rounded-full">
                      Latest
                    </span>
                  )}
                </div>
                <ul className="space-y-1.5 pl-4">
                  {release.changes[language].map((change, i) => (
                    <li
                      key={i}
                      className="text-sm text-[#424245] font-sans relative before:content-['•'] before:absolute before:-left-3 before:text-[#86868b]"
                    >
                      {change}
                    </li>
                  ))}
                </ul>
                {index < changelogData.length - 1 && (
                  <div className="mt-5 border-t border-[#d2d2d7]/40" />
                )}
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
