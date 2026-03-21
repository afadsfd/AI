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
    "hero.title": "用 AI 重新定义",
    "hero.title.highlight1": "沟通",
    "hero.title.highlight2": "协作",
    "hero.title.end": "的可能性",
    "hero.description":
      "ZeroAI 专注于打造实用的 AI 产品，让前沿技术真正融入工作场景，帮助团队跨越语言、效率与协作的边界。",
    "hero.cta.explore": "探索产品",
    "hero.cta.contact": "联系我们",
    "hero.stat1": "1",
    "hero.stat1.label": "已发布产品",
    "hero.stat2": "50+",
    "hero.stat2.label": "覆盖语种",
    "hero.stat3": "∞",
    "hero.stat3.label": "可能性",

    // Products Showcase
    "products.label": "Our Products",
    "products.title": "产品矩阵",
    "products.meetsimul.badge": "已发布",
    "products.meetsimul.tag": "旗舰产品",
    "products.meetsimul.name": "MeetSimul",
    "products.meetsimul.desc":
      "连接一切会议系统的 AI 同声传译引擎。无需更换会议工具，一键接入实时翻译。支持 Zoom、Teams、Google Meet 等主流平台，让跨语言沟通像母语对话一样自然。",
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
      "MeetSimul 重新定义了会议同传的技术架构。不依赖任何特定平台，不需要复杂的集成流程，只需一个轻量级的桌面应用，就能为任何在线会议添加专业级的同声传译能力。",
    "features.feature1": "亚秒级延迟",
    "features.feature1.desc":
      "端到端翻译延迟低于 500 毫秒，接近人类同传的反应速度。基于流式 ASR 与增量翻译技术，让对话节奏不被打断。",
    "features.feature2": "50+ 语种覆盖",
    "features.feature2.desc":
      "支持中、英、日、韩、法、德、西等 50 余种语言的实时互译。持续扩展语种库，覆盖全球主要商务语言。",
    "features.feature3": "零集成接入",
    "features.feature3.desc":
      "无需安装插件或申请 API 权限。通过系统级音频桥接技术，5 分钟内完成部署，即刻开始使用。",
    "features.feature4": "自然语音合成",
    "features.feature4.desc":
      "采用最新的神经网络语音合成技术，翻译结果以自然流畅的语音输出，告别机械的机器人声音。",

    // How It Works
    "howitworks.label": "MeetSimul / 工作流程",
    "howitworks.title": "三步开启",
    "howitworks.title.highlight": "无障碍",
    "howitworks.step1": "安装启动",
    "howitworks.step1.desc":
      "下载轻量级桌面应用，一键安装。无需管理员权限，无需配置任何会议平台的 API。",
    "howitworks.step1.detail": "< 50MB 安装包",
    "howitworks.step2": "选择语言",
    "howitworks.step2.desc":
      "设置源语言和目标语言对。支持多语言同时输出，一场会议可覆盖多个语种的参会者。",
    "howitworks.step2.detail": "50+ 语言对",
    "howitworks.step3": "开始会议",
    "howitworks.step3.desc":
      "打开任意会议软件，MeetSimul 自动捕获音频流并实时翻译。翻译结果以字幕或语音形式呈现。",
    "howitworks.step3.detail": "全自动运行",

    // Scenarios
    "scenarios.label": "MeetSimul / 场景",
    "scenarios.title": "适用于每一个",
    "scenarios.title.highlight": "跨语言",
    "scenarios.scenario1": "跨国团队协作",
    "scenarios.scenario1.desc":
      "分布在不同国家的团队成员使用各自习惯的会议工具，MeetSimul 在后台默默工作，让每个人都能用母语参与讨论，消除语言壁垒带来的效率损耗。",
    "scenarios.scenario2": "国际商务谈判",
    "scenarios.scenario2.desc":
      "在关键的商务谈判中，精准的语言表达至关重要。MeetSimul 提供专业级的实时翻译，确保每一个商业术语、每一个数字都被准确传达。",
    "scenarios.scenario3": "学术研讨交流",
    "scenarios.scenario3.desc":
      "国际学术会议不再受语言限制。研究者可以用自己最擅长的语言发表观点，同时实时获取其他语言的翻译，促进全球学术思想的碰撞与融合。",
    "scenarios.scenario4": "全球客户支持",
    "scenarios.scenario4.desc":
      "客服团队无需精通多国语言，即可为全球客户提供母语级的技术支持。降低人力成本的同时，显著提升客户满意度和问题解决效率。",

    // Download
    "download.label": "下载",
    "download.title": "下载 MeetSimul",
    "download.description": "专为 macOS 打造的原生应用。轻量、快速、安全，开箱即用。",
    "download.button": "下载 macOS 版本",
    "download.version": "版本 1.0.0",
    "download.size": "48 MB",
    "download.requires": "需要 macOS 13.0 或更高版本",
    "download.free": "免费试用 14 天，无需信用卡",

    // Contact
    "contact.label": "ZeroAI / 联系",
    "contact.title": "准备好打破",
    "contact.title.highlight": "语言边界",
    "contact.title.end": "了吗？",
    "contact.description":
      "填写表单申请免费试用，我们的团队会在 24 小时内与您联系，为您量身定制最佳的同传解决方案。",
    "contact.email": "hello@zeroai.com",
    "contact.trial": "14 天免费试用，无需信用卡",
    "contact.form.name": "姓名",
    "contact.form.name.placeholder": "您的姓名",
    "contact.form.email": "邮箱",
    "contact.form.email.placeholder": "your@email.com",
    "contact.form.company": "公司",
    "contact.form.company.placeholder": "公司名称（选填）",
    "contact.form.message": "需求描述",
    "contact.form.message.placeholder": "请简要描述您的使用场景和需求...",
    "contact.form.submit": "提交申请",
    "contact.success": "感谢您的关注！我们会尽快与您联系。",

    // Footer
    "footer.brand.desc": "ZeroAI 是一个 AI 产品平台。MeetSimul 是我们的无侵入式会议同传引擎。",
    "footer.products": "产品",
    "footer.company": "公司",
    "footer.resources": "资源",
    "footer.copyright": "&copy; 2026 ZeroAI. All rights reserved.",
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
    "hero.title": "Redefine Communication",
    "hero.title.highlight1": "and Collaboration",
    "hero.title.highlight2": "with AI",
    "hero.title.end": "Possibilities",
    "hero.description":
      "ZeroAI is dedicated to building practical AI products that bring cutting-edge technology into real work scenarios, helping teams transcend language, efficiency, and collaboration barriers.",
    "hero.cta.explore": "Explore Products",
    "hero.cta.contact": "Contact Us",
    "hero.stat1": "1",
    "hero.stat1.label": "Product Live",
    "hero.stat2": "50+",
    "hero.stat2.label": "Languages",
    "hero.stat3": "∞",
    "hero.stat3.label": "Possibilities",

    // Products Showcase
    "products.label": "Our Products",
    "products.title": "Product Lineup",
    "products.meetsimul.badge": "Live",
    "products.meetsimul.tag": "Flagship Product",
    "products.meetsimul.name": "MeetSimul",
    "products.meetsimul.desc":
      "An AI-powered simultaneous interpretation engine that connects to any meeting system. No need to switch tools—enable real-time translation with one click. Supports Zoom, Teams, Google Meet, and more, making cross-language communication as natural as speaking your native language.",
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
      "MeetSimul uses proprietary audio bridging technology that requires no API integration or plugin installation from any meeting platform. Through system-level audio capture, it enables non-intrusive simultaneous interpretation for any meeting system. No matter which platform your team uses, you get a consistent translation experience.",
    "product.quote":
      "Not replacing your meeting tools, but giving every meeting tool interpretation capabilities.",

    // Features
    "features.label": "MeetSimul / Features",
    "features.title": "Why Choose",
    "features.title.highlight": "MeetSimul",
    "features.description":
      "MeetSimul redefines the technical architecture of meeting interpretation. It doesn't depend on any specific platform or require complex integration processes. Just one lightweight desktop app, and any online meeting gets professional-grade simultaneous interpretation.",
    "features.feature1": "Sub-second Latency",
    "features.feature1.desc":
      "End-to-end translation latency under 500ms, approaching human interpreter response time. Stream-based ASR and incremental translation keep conversations flowing naturally.",
    "features.feature2": "50+ Language Coverage",
    "features.feature2.desc":
      "Real-time translation between Chinese, English, Japanese, Korean, French, German, Spanish, and 40+ more languages. Continuously expanding language support for global business.",
    "features.feature3": "Zero Integration Effort",
    "features.feature3.desc":
      "No plugins to install or API permissions to request. System-level audio bridging technology gets you running in 5 minutes, ready to use immediately.",
    "features.feature4": "Natural Voice Synthesis",
    "features.feature4.desc":
      "Latest neural network voice synthesis technology delivers natural, fluent speech output. Say goodbye to robotic machine voices.",

    // How It Works
    "howitworks.label": "MeetSimul / How It Works",
    "howitworks.title": "Three Steps to",
    "howitworks.title.highlight": "Barrier-Free",
    "howitworks.step1": "Install & Launch",
    "howitworks.step1.desc":
      "Download the lightweight desktop app and install with one click. No admin rights needed, no meeting platform API configuration required.",
    "howitworks.step1.detail": "< 50MB Package",
    "howitworks.step2": "Choose Languages",
    "howitworks.step2.desc":
      "Set your source and target language pair. Support multiple languages simultaneously—one meeting can serve participants in multiple languages.",
    "howitworks.step2.detail": "50+ Language Pairs",
    "howitworks.step3": "Start Meeting",
    "howitworks.step3.desc":
      "Open any meeting software. MeetSimul automatically captures the audio stream and translates in real-time. Results appear as subtitles or voice output.",
    "howitworks.step3.detail": "Fully Automated",

    // Scenarios
    "scenarios.label": "MeetSimul / Scenarios",
    "scenarios.title": "Works for Every",
    "scenarios.title.highlight": "Cross-Language",
    "scenarios.scenario1": "Global Team Collaboration",
    "scenarios.scenario1.desc":
      "Team members across countries use their preferred meeting tools. MeetSimul works silently in the background, letting everyone participate in their native language, eliminating efficiency loss from language barriers.",
    "scenarios.scenario2": "International Business Negotiations",
    "scenarios.scenario2.desc":
      "In critical business negotiations, precise language is essential. MeetSimul provides professional real-time translation, ensuring every business term and number is conveyed accurately.",
    "scenarios.scenario3": "Academic Conferences",
    "scenarios.scenario3.desc":
      "International academic conferences are no longer limited by language. Researchers present in their strongest language while receiving real-time translation, fostering global academic exchange.",
    "scenarios.scenario4": "Global Customer Support",
    "scenarios.scenario4.desc":
      "Support teams don't need to speak multiple languages to provide native-level technical support to global customers. Reduce costs while significantly improving satisfaction and resolution speed.",

    // Download
    "download.label": "Download",
    "download.title": "Download MeetSimul",
    "download.description": "A native app built for macOS. Lightweight, fast, secure, and ready to use out of the box.",
    "download.button": "Download for macOS",
    "download.version": "Version 1.0.0",
    "download.size": "48 MB",
    "download.requires": "Requires macOS 13.0 or later",
    "download.free": "14-day free trial, no credit card required",

    // Contact
    "contact.label": "ZeroAI / Contact",
    "contact.title": "Ready to Break",
    "contact.title.highlight": "Language Barriers",
    "contact.title.end": "?",
    "contact.description":
      "Fill out the form to request a free trial. Our team will contact you within 24 hours to customize the best interpretation solution for your needs.",
    "contact.email": "hello@zeroai.com",
    "contact.trial": "14-day free trial, no credit card required",
    "contact.form.name": "Name",
    "contact.form.name.placeholder": "Your name",
    "contact.form.email": "Email",
    "contact.form.email.placeholder": "your@email.com",
    "contact.form.company": "Company",
    "contact.form.company.placeholder": "Company name (optional)",
    "contact.form.message": "Requirements",
    "contact.form.message.placeholder": "Briefly describe your use case and requirements...",
    "contact.form.submit": "Submit Request",
    "contact.success": "Thank you for your interest! We'll be in touch soon.",

    // Footer
    "footer.brand.desc":
      "ZeroAI is an AI product platform. MeetSimul is our non-intrusive meeting interpretation engine.",
    "footer.products": "Products",
    "footer.company": "Company",
    "footer.resources": "Resources",
    "footer.copyright": "&copy; 2026 ZeroAI. All rights reserved.",
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
      translations[language][key as keyof (typeof translations)[Language]] ||
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
