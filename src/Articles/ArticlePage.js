import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./ArticlePage.css";

const ArticlePage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const { i18n, t } = useTranslation();

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(`/data/articles.${i18n.language}.json`);
        if (!response.ok) {
          throw new Error(`Error fetching articles: ${response.statusText}`);
        }
        const data = await response.json();
        const foundArticle = data.find(item => item.id === parseInt(id));
        setArticle(foundArticle);
      } catch (error) {
        console.error("Error fetching article:", error);
      }
    };

    fetchArticle();
  }, [id, i18n.language]);

  if (!article) {
    return <p>{t("article.loading")}</p>;
  }

  return (
    <div className="article-page">
      <h1>{article.title}</h1>
      {article.image && (
        <img
          src={article.image}
          alt={article.title}
          className="article-page-image"
          loading="lazy"
        />
      )}

      <div
        className="article-content"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
      <p>
        <strong>{t("article.author")}:</strong> {article.author}
      </p>
      <p>
        <strong>{t("article.date")}:</strong> {article.date}
      </p>
    </div>
  );
};

export default ArticlePage;
