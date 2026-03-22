import React, { createContext, useContext, useState } from "react";

export type Language = "zh" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const translations = {
  zh: {
    // Navbar
    "nav.products": "产品",
    "nav.features": "特性",
    "nav.scenarios": "场景",
    "nav.contact": "联系",
    "nav.download": "下载",

    // Hero
    "hero.badge": "AI-Powered Products",
    "hero.title": "你说中文",
    "hero.title.highlight1": "世界",
    "hero.title.highlight2": "听懂",
    "hero.title.end": "",
    "hero.description":
      "ZeroAI 打造无感同传技术，让跨语言会议像母语对话一样自然。",
    "hero.cta.explore": "探索产品",
    "hero.cta.contact": "联系我们",
    "hero.stat1": "<0.5s",
    "hero.stat1.label": "翻译延迟",
    "hero.stat2": "50+",
    "hero.stat2.label": "支持语种",
    "hero.stat3": "macOS",
    "hero.stat3.label": "原生体验",

    // Products Showcase
    "products.label": "Our Products",
    "products.title": "我们的产品",
    "products.meetsimul.badge": "已发布",
    "products.meetsimul.tag": "旗舰产品",
    "products.meetsimul.name": "MeetSimul",
    "products.meetsimul.desc":
      "开会说中文，对方听到英文。无需切换工具，无需安装插件，MeetSimul 在后台静默运行，让 Zoom、Teams、Google Meet 等平台一键拥有同传能力。",
    "products.meetsimul.metric1": "<0.5s",
    "products.meetsimul.metric1.label": "延迟",
    "products.meetsimul.metric2": "50+",
    "products.meetsimul.metric2.label": "语种",
    "products.meetsimul.metric3": "0",
    "products.meetsimul.metric3.label": "集成成本",
    "products.meetsimul.cta": "了解详情",
    "products.coming": "Coming Soon",
    "products.coming.tag": "AI 驱动的下一代产品",
    "products.coming.desc": "我们正在打造更多 AI 产品，敬请期待。",
    "products.coming2.tag": "更多可能，即将揭晓",
    "products.coming2.desc": "关注我们，第一时间获取新产品发布信息。",

    // Product Section
    "product.label": "MeetSimul",
    "product.title": "一个引擎，",
    "product.title.highlight": "无限连接",
    "product.description":
      "MeetSimul 采用独创的音频桥接技术，无需任何会议平台的 API 集成或插件安装。通过系统级音频捕获，实现对任意会议系统的无侵入式同声传译。无论您的团队使用哪个平台，都能获得一致的翻译体验。",
    "product.quote": "不替代你的会议工具，而是让每一个会议工具都拥有同传能力。",

    // Features
    "features.label": "MeetSimul / 特性",
    "features.title": "为什么选择",
    "features.title.highlight": "MeetSimul",
    "features.description":
      "不依赖特定平台，不需要复杂集成。一个轻量桌面应用，让任何在线会议拥有专业级同声传译。",
    "features.feature1": "亚秒级延迟",
    "features.feature1.desc":
      "对方话音未落，翻译已到。低于 0.5 秒的延迟，让对话节奏完全不被打断。",
    "features.feature2": "50+ 语种覆盖",
    "features.feature2.desc":
      "中英日韩法德西，50+ 语种实时互译，覆盖全球主要商务场景。",
    "features.feature3": "零集成接入",
    "features.feature3.desc":
      "不改会议工具，不装插件，不申请权限。下载、安装、开用，5 分钟搞定。",
    "features.feature4": "自然语音合成",
    "features.feature4.desc":
      "告别机器人腔调。AI 合成的声音自然流畅，让对方感受不到翻译的存在。",

    // How It Works
    "howitworks.label": "MeetSimul / 工作流程",
    "howitworks.title": "三步开启",
    "howitworks.title.highlight": "无障碍",
    "howitworks.step1": "安装启动",
    "howitworks.step1.desc":
      "下载轻量级桌面应用，一键安装。无需管理员权限，无需配置任何会议平台的 API。",
    "howitworks.step1.detail": "< 50MB 安装包",
    "howitworks.step2": "语音输入",
    "howitworks.step2.desc":
      "用中文自然说话，搭配讯飞输入法等语音工具。MeetSimul 实时翻译，你说中文，输出英文。",
    "howitworks.step2.detail": "说中文，出英文",
    "howitworks.step3": "切换麦克风",
    "howitworks.step3.desc":
      "在会议软件里切换到 MeetSimul 虚拟麦克风，对方直接听到流畅的英文。就这么简单。",
    "howitworks.step3.detail": "一键切换，即刻生效",

    // Scenarios
    "scenarios.label": "MeetSimul / 场景",
    "scenarios.title": "适用于每一个",
    "scenarios.title.highlight": "跨语言",
    "scenarios.scenario1": "跨国团队协作",
    "scenarios.scenario1.desc":
      "每个人用母语开会，MeetSimul 在后台默默翻译，语言不再是团队协作的门槛。",
    "scenarios.scenario2": "国际商务谈判",
    "scenarios.scenario2.desc":
      "每个术语、每个数字都被精准传达。关键谈判，不容有失。",
    "scenarios.scenario3": "学术研讨交流",
    "scenarios.scenario3.desc":
      "用最擅长的语言发表观点，实时获取翻译，让学术交流不受语言限制。",
    "scenarios.scenario4": "全球客户支持",
    "scenarios.scenario4.desc":
      "客服无需精通多语种，即可提供母语级支持，降本增效一步到位。",

    // Download
    "download.label": "下载",
    "download.title": "立即体验无障碍沟通",
    "download.description": "macOS 原生应用，5.6MB 轻量安装，开箱即用。",
    "download.button": "下载 macOS 版本",
    "download.version": "版本 2.0.7",
    "download.size": "5.6 MB",
    "download.requires": "需要 macOS 13.0 或更高版本",
    "download.free": "免费试用 14 天，无需信用卡",

    // Contact
    "contact.label": "ZeroAI / 联系",
    "contact.title": "准备好打破",
    "contact.title.highlight": "语言边界",
    "contact.title.end": "了吗？",
    "contact.description":
      "通过邮件或 Telegram 联系我，获取产品试用或合作咨询。",
    "contact.email.label": "邮箱",

    // Footer
    "footer.brand.desc": "ZeroAI — 用 AI 消除沟通边界。",
    "footer.products": "产品",
    "footer.company": "公司",
    "footer.resources": "资源",
    "footer.changelog": "更新记录",
    "footer.copyright": "&copy; 2026 ZeroAI. All rights reserved.",

    // Changelog
    "changelog.title": "版本记录",
    "changelog.subtitle": "MeetSimul 更新历史",
  },
  en: {
    // Navbar
    "nav.products": "Products",
    "nav.features": "Features",
    "nav.scenarios": "Scenarios",
    "nav.contact": "Contact",
    "nav.download": "Download",

    // Hero
    "hero.badge": "AI-Powered Products",
    "hero.title": "You Speak Your Language.",
    "hero.title.highlight1": "The World",
    "hero.title.highlight2": "Understands",
    "hero.title.end": "",
    "hero.description":
      "ZeroAI builds seamless interpretation technology that makes cross-language meetings feel as natural as speaking your native tongue.",
    "hero.cta.explore": "Explore Products",
    "hero.cta.contact": "Contact Us",
    "hero.stat1": "<0.5s",
    "hero.stat1.label": "Latency",
    "hero.stat2": "50+",
    "hero.stat2.label": "Languages",
    "hero.stat3": "macOS",
    "hero.stat3.label": "Native App",

    // Products Showcase
    "products.label": "Our Products",
    "products.title": "Our Products",
    "products.meetsimul.badge": "Live",
    "products.meetsimul.tag": "Flagship Product",
    "products.meetsimul.name": "MeetSimul",
    "products.meetsimul.desc":
      "Speak your language, they hear theirs. No tools to switch, no plugins to install. MeetSimul runs silently in the background, giving Zoom, Teams, Google Meet, and more instant interpretation capabilities.",
    "products.meetsimul.metric1": "<0.5s",
    "products.meetsimul.metric1.label": "Latency",
    "products.meetsimul.metric2": "50+",
    "products.meetsimul.metric2.label": "Languages",
    "products.meetsimul.metric3": "0",
    "products.meetsimul.metric3.label": "Integration Cost",
    "products.meetsimul.cta": "Learn More",
    "products.coming": "Coming Soon",
    "products.coming.tag": "Next-generation AI products",
    "products.coming.desc": "We're building more AI products. Stay tuned.",
    "products.coming2.tag": "More possibilities coming",
    "products.coming2.desc": "Follow us to be the first to know about new product launches.",

    // Product Section
    "product.label": "MeetSimul",
    "product.title": "One Engine,",
    "product.title.highlight": "Infinite Connections",
    "product.description":
      "MeetSimul uses proprietary audio bridging technology that requires no API integration or plugin installation from any meeting platform. Through system-level audio capture, it enables non-intrusive simultaneous interpretation for any meeting system.",
    "product.quote":
      "Not replacing your meeting tools, but giving every meeting tool interpretation capabilities.",

    // Features
    "features.label": "MeetSimul / Features",
    "features.title": "Why Choose",
    "features.title.highlight": "MeetSimul",
    "features.description":
      "No platform dependency, no complex integration. One lightweight desktop app gives any online meeting professional-grade simultaneous interpretation.",
    "features.feature1": "Sub-second Latency",
    "features.feature1.desc":
      "The translation arrives before they finish speaking. Under 0.5s latency keeps conversations flowing without interruption.",
    "features.feature2": "50+ Languages",
    "features.feature2.desc":
      "English, Chinese, Japanese, Korean, French, German, Spanish — 50+ languages with real-time translation for global business.",
    "features.feature3": "Zero Integration",
    "features.feature3.desc":
      "No tool changes, no plugins, no permissions. Download, install, go. Five minutes to get started.",
    "features.feature4": "Natural Voice",
    "features.feature4.desc":
      "No more robotic voices. AI-synthesized speech sounds natural and fluent — the other side won't even notice it's translated.",

    // How It Works
    "howitworks.label": "MeetSimul / How It Works",
    "howitworks.title": "Three Steps to",
    "howitworks.title.highlight": "Barrier-Free",
    "howitworks.step1": "Install & Launch",
    "howitworks.step1.desc":
      "Download the lightweight desktop app and install with one click. No admin rights needed, no meeting platform API configuration required.",
    "howitworks.step1.detail": "< 50MB Package",
    "howitworks.step2": "Voice Input",
    "howitworks.step2.desc":
      "Speak naturally in your language using a voice input tool like iFlytek Input. MeetSimul translates in real-time — you speak Chinese, it outputs English.",
    "howitworks.step2.detail": "Speak Chinese, Get English",
    "howitworks.step3": "Switch Microphone",
    "howitworks.step3.desc":
      "Switch to the MeetSimul virtual microphone in your meeting app. They hear fluent English. It's that simple.",
    "howitworks.step3.detail": "One Click, Instant Effect",

    // Scenarios
    "scenarios.label": "MeetSimul / Scenarios",
    "scenarios.title": "Works for Every",
    "scenarios.title.highlight": "Cross-Language",
    "scenarios.scenario1": "Global Team Collaboration",
    "scenarios.scenario1.desc":
      "Everyone speaks their own language. MeetSimul translates silently in the background. Language is no longer a barrier to teamwork.",
    "scenarios.scenario2": "International Business Negotiations",
    "scenarios.scenario2.desc":
      "Every term, every number, precisely conveyed. In high-stakes negotiations, accuracy is everything.",
    "scenarios.scenario3": "Academic Conferences",
    "scenarios.scenario3.desc":
      "Present in your strongest language, receive translations in real-time. Academic exchange without language limits.",
    "scenarios.scenario4": "Global Customer Support",
    "scenarios.scenario4.desc":
      "Support teams deliver native-level service in any language. Cut costs and boost satisfaction in one step.",

    // Download
    "download.label": "Download",
    "download.title": "Experience Barrier-Free Communication",
    "download.description": "Native macOS app. 5.6MB lightweight install. Ready out of the box.",
    "download.button": "Download for macOS",
    "download.version": "Version 2.0.7",
    "download.size": "5.6 MB",
    "download.requires": "Requires macOS 13.0 or later",
    "download.free": "14-day free trial, no credit card required",

    // Contact
    "contact.label": "ZeroAI / Contact",
    "contact.title": "Ready to Break",
    "contact.title.highlight": "Language Barriers",
    "contact.title.end": "?",
    "contact.description":
      "Reach out via email or Telegram for product trials or collaboration.",
    "contact.email.label": "Email",

    // Footer
    "footer.brand.desc":
      "ZeroAI — Breaking communication barriers with AI.",
    "footer.products": "Products",
    "footer.company": "Company",
    "footer.resources": "Resources",
    "footer.changelog": "Changelog",
    "footer.copyright": "&copy; 2026 ZeroAI. All rights reserved.",

    // Changelog
    "changelog.title": "Changelog",
    "changelog.subtitle": "MeetSimul Release History",
  },
};

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguage] = useState<Language>("zh");

  const t = (key: string): string => {
    return (
      translations[language][key as keyof (typeof translations)[Language]] ??
      key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
