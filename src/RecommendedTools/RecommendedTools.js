import React from "react";
import { useTranslation } from "react-i18next";
import "./RecommendedTools.css";

const recommendedItems = [
  {
    id: "chatgpt",
    logo: "/images/chatgpt-logo.png",
    link: "https://openai.com/chatgpt/",
  },
  {
    id: "githubCopilot",
    logo: "/images/github-copilot-logo.png",
    link: "https://github.com/features/copilot",
  },
  {
    id: "figma",
    logo: "/images/figma-logo.png",
    link: "https://www.figma.com/",
  },
  {
    id: "canva",
    logo: "/images/canva-logo.png",
    link: "https://www.canva.com/",
  },
  {
    id: "mdnFigure",
    logo: "/images/mdn-logo.png",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure#browser_compatibility",
  },
  {
    id: "deWatermark",
    logo: "/images/dewatermark-logo.png",
    link: "https://dewatermark.ai/upload",
  },
  {
    id: "tinypng",
    logo: "/images/tinypng-logo.png",
    link: "https://tinypng.com/",
  },
  {
    id: "ezgif",
    logo: "/images/ezgif-logo.png",
    link: "https://ezgif.com/",
  },
  {
    id: "webaim",
    logo: "/images/webaim-logo.png",
    link: "https://webaim.org/resources/contrastchecker/",
  },
  {
    id: "uigoodies",
    logo: "/images/uigoodies-logo.png",
    link: "https://uigoodies.com/",
  },
  {
    id: "imagetotext",
    logo: "/images/imagetotext-logo.png",
    link: "https://www.imagetotext.info/",
  },
  {
    id: "coolors",
    logo: "/images/coolors-logo.png",
    link: "https://coolors.co/",
  },
  {
    id: "htmlColorCodes",
    logo: "/images/htmlcolorcodes-logo.png",
    link: "https://html-color-codes.info/",
  },
  {
    id: "pdf2docx",
    logo: "/images/pdf2docx-logo.png",
    link: "https://pdf2docx.com/",
  },
  {
    id: "smodin",
    logo: "/images/smodin-logo.png",
    link: "https://smodin.io/",
  },
  {
    id: "patorjk",
    logo: "/images/patorjk-logo.png",
    link: "https://patorjk.com/",
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
