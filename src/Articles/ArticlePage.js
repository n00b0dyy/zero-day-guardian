import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./ArticlePage.css";

const ArticlePage = () => {
  const { id } = useParams(); // Pobieranie ID artykułu z URL
  const [article, setArticle] = useState(null);
  const [error, setError] = useState(null); // Obsługa błędów
  const { i18n, t } = useTranslation();

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        // Pobieranie artykułów w zależności od języka
        const response = await fetch(`/data/articles.${i18n.language}.json`);
        if (!response.ok) {
          throw new Error(`Error fetching articles: ${response.statusText}`);
        }
        const data = await response.json();

        // Szukanie konkretnego artykułu na podstawie ID
        const foundArticle = data.find(item => item.id === parseInt(id));
        if (!foundArticle) {
          throw new Error("Article not found");
        }
        setArticle(foundArticle);
      } catch (err) {
        console.error("Error fetching article:", err);
        setError(err.message); // Ustawienie błędu
      }
    };

    fetchArticle();
  }, [id, i18n.language]);

  // Wyświetlenie błędu (jeśli wystąpił)
  if (error) {
    return (
      <p className="error-message">
        {t("article.error")}: {error}
      </p>
    );
  }

  // Wyświetlenie komunikatu ładowania
  if (!article) {
    return <p className="loading-message">{t("article.loading")}</p>;
  }

  // Renderowanie artykułu
  return (
    <div className="article-page">
      <h1 className="article-title">{article.title}</h1>
      {article.image && (
        <img
          src={article.image}
          alt={article.title}
          className="article-image"
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
