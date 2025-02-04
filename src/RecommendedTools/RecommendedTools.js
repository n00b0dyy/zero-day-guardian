import React from "react";
import { useTranslation } from "react-i18next";
import "./RecommendedTools.css";

const recommendedItems = [
  {
    id: "chatgpt",
    logo: "/images/RecommendedToolsImages/ChatGPT_logo.svg",
    link: "https://openai.com/chatgpt/",
  },
  {
    id: "githubCopilot",
    logo: "/images/RecommendedToolsImages/coopilot.svg",
    link: "https://github.com/features/copilot",
  },
  {
    id: "figma",
    logo: "/images/RecommendedToolsImages/figma-logo-svgrepo-com.svg",
    link: "https://www.figma.com/",
  },
  {
    id: "canva",
    logo: "/images/RecommendedToolsImages/canva-svgrepo-com.svg",

    link: "https://www.canva.com/",
  },
  {
    id: "mdnFigure",
    logo: "/images/RecommendedToolsImages/MDN_Web_Docs-Logo.wine.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure#browser_compatibility",
  },
  {
    id: "deWatermark",
    logo: "/images/RecommendedToolsImages/dewatermark.svg",
    link: "https://dewatermark.ai/upload",
  },
  {
    id: "tinypng",
    logo: "/images/RecommendedToolsImages/tinypng.svg",
    link: "https://tinypng.com/",
  },
  {
    id: "ezgif",
    logo: "/images/RecommendedToolsImages/ezgif.svg",
    link: "https://ezgif.com/",
  },
  {
    id: "webaim",
    logo: "/images/RecommendedToolsImages/webaim.svg",
    link: "https://webaim.org/resources/contrastchecker/",
  },
  {
    id: "uigoodies",
    logo: "/images/RecommendedToolsImages/uigoodies.svg",
    link: "https://uigoodies.com/",
  },
  {
    id: "imagetotext",
    logo: "/images/RecommendedToolsImages/imagetotext.svg",
    link: "https://www.imagetotext.info/",
  },
  {
    id: "coolors",
    logo: "/images/RecommendedToolsImages/coolors.svg",
    link: "https://coolors.co/",
  },
  {
    id: "htmlColorCodes",
    logo: "/images/RecommendedToolsImages/colors html.svg",
    link: "https://html-color-codes.info/",
  },
  {
    id: "pdf2docx",
    logo: "/images/RecommendedToolsImages/pdf2docs.svg",
    link: "https://pdf2docx.com/",
  },
  {
    id: "smodin",
    logo: "/images/RecommendedToolsImages/smodin.svg",
    link: "https://smodin.io/",
  },
  {
    id: "patorjk",
    logo: "/images/RecommendedToolsImages/patorjk.svg",
    link: "https://patorjk.com/",
  },
  {
    id: "deepseek",
    logo: "/images/RecommendedToolsImages/deepseek.svg",
    link: "https://deepseek.io/",
  },
  {
    id: "vercelHosting",
    logo: "/images/RecommendedToolsImages/vercel-hosting.svg",
    link: "https://vercel.com/",
  },
];

const RecommendedTools = () => {
  const { t } = useTranslation();

  return (
    <section className="recommended-tools">
      <h2>{t("recommendedTools.title")}</h2>
      <div className="tools-list">
        {recommendedItems.map(item => (
          <div className="tool-card" key={item.id}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img
                src={item.logo}
                alt={t(`recommendedTools.tools.${item.id}.name`)}
                className="tool-logo"
              />
            </a>
            <h3>{t(`recommendedTools.tools.${item.id}.name`)}</h3>
            <p>{t(`recommendedTools.tools.${item.id}.description`)}</p>
            <span className="tool-price">
              {t(`recommendedTools.tools.${item.id}.price`)}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecommendedTools;
