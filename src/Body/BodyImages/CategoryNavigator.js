import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import articlesEn from "../../../data/articles.en.json";
import articlesPl from "../../../data/articles.pl.json";
import articlesFr from "../../../data/articles.fr.json";
import articlesNo from "../../../data/articles.no.json";
import articlesRu from "../../../data/articles.ru.json";

const articlesData = {
  en: articlesEn,
  pl: articlesPl,
  fr: articlesFr,
  no: articlesNo,
  ru: articlesRu,
};

const subcategoryLabels = {
  en: {
    Science: "Science",
    Technology: "Technology",
    Future: "Future",
    Innovation: "Innovation",
  },
  pl: {
    Science: "Nauka",
    Technology: "Technologia",
    Future: "Przyszłość",
    Innovation: "Innowacja",
  },
  fr: {
    Science: "Science",
    Technology: "Technologie",
    Future: "Futur",
    Innovation: "Innovation",
  },
  no: {
    Science: "Vitenskap",
    Technology: "Teknologi",
    Future: "Fremtid",
    Innovation: "Innovasjon",
  },
  ru: {
    Science: "Наука",
    Technology: "Технология",
    Future: "Будущее",
    Innovation: "Инновация",
  },
};

const CategoryNavigator = ({ language }) => {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setArticles(articlesData[language] || articlesEn);
  }, [language]);

  const getLatestArticle = subcategory => {
    return articles
      .filter(article => article.subcategory === subcategory)
      .sort((a, b) => new Date(b.date) - new Date(a.date))[0];
  };

  const handleClick = subcategory => {
    const latestArticle = getLatestArticle(subcategory);
    if (latestArticle) navigate(`/articles/${latestArticle.id}`);
  };

  return (
    <div className="body-images">
      {["Science", "Technology", "Future", "Innovation"].map(subcategory => (
        <div
          className="image-wrapper"
          key={subcategory}
          onClick={() => handleClick(subcategory)}
        >
          <img
            src={`./logo glowna${subcategory === "Future" ? "5jpg" : "4"}.webp`}
            alt={subcategory}
            className="body-image"
          />
          <div className="image-label">
            {subcategoryLabels[language][subcategory]}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryNavigator;
