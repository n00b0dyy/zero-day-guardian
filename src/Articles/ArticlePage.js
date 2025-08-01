import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./ArticlePage.css";

const ArticlePage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [error, setError] = useState(null);
  const { i18n, t } = useTranslation();

  useEffect(() => {
    const xhr = new XMLHttpRequest();
    const url = `/data/articles.${i18n.language}.json`;

    xhr.open("GET", url, false);
    xhr.setRequestHeader("Cache-Control", "no-store");

    try {
      xhr.send();

      if (xhr.status !== 200) {
        throw new Error(`HTTP ${xhr.status}: ${xhr.statusText}`);
      }

      const contentType = xhr.getResponseHeader("Content-Type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Invalid JSON response from server.");
      }

      const data = JSON.parse(xhr.responseText);
      const foundArticle = data.find(item => item.id.toString() === id);

      if (!foundArticle) {
        throw new Error("Article not found");
      }

      setArticle(foundArticle);
    } catch (err) {
      setError(err.message);
    }
  }, [id, i18n.language]);

  if (error) {
    return (
      <p className="error-message">
        {t("article.error")}: {error}
      </p>
    );
  }

  if (!article) {
    return <p className="loading-message">{t("article.loading")}</p>;
  }

  return (
    <div className="article-page">
      <h1 className="article-title">{article.title}</h1>
      {article.image && (
        <img
          src={article.image}
          alt={article.title}
          className="article-main-image"
          loading="lazy"
        />
      )}
      <div
        className="article-content"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
      <p className="article-author">
        <strong>{t("article.author")}:</strong> {article.author}
      </p>
      <p className="article-date">
        <strong>{t("article.date")}:</strong> {article.date}
      </p>
    </div>
  );
};

export default ArticlePage;
