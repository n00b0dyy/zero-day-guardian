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
    console.log("🔍 ArticlePage mounted. Fetching article...");
    console.log(`🛠 Language detected: ${i18n.language}`);
    console.log(`🛠 Fetching from: /data/articles.${i18n.language}.json`);

    // Tworzenie obiektu XMLHttpRequest
    const xhr = new XMLHttpRequest();
    const url = `/data/articles.${i18n.language}.json`;

    console.log(`📡 Fetching data from: ${url}`);

    xhr.open("GET", url, false); // false = synchronizacja (blokowanie)
    xhr.setRequestHeader("Cache-Control", "no-store");

    try {
      xhr.send(); // Wysyłanie zapytania

      console.log("📩 Response received:", xhr);

      if (xhr.status !== 200) {
        console.error(`❌ HTTP Error ${xhr.status}: ${xhr.statusText}`);
        throw new Error(`HTTP ${xhr.status}: ${xhr.statusText}`);
      }

      const contentType = xhr.getResponseHeader("Content-Type");
      if (!contentType || !contentType.includes("application/json")) {
        console.error("❌ Expected JSON but received:", contentType);
        throw new Error("Invalid JSON response from server.");
      }

      const data = JSON.parse(xhr.responseText);
      console.log("✅ Successfully fetched articles:", data);

      const foundArticle = data.find(item => item.id.toString() === id);
      if (!foundArticle) {
        console.warn(`⚠️ Article with ID ${id} not found in dataset.`);
        throw new Error("Article not found");
      }

      console.log("📝 Found article:", foundArticle);
      setArticle(foundArticle);
    } catch (err) {
      console.error("🚨 Error fetching article:", err);
      setError(err.message);
    }
  }, [id, i18n.language]);

  if (error) {
    console.warn(`⚠️ Rendering error message: ${error}`);
    return (
      <p className="error-message">
        {t("article.error")}: {error}
      </p>
    );
  }

  if (!article) {
    console.log("⏳ Article data not loaded yet. Showing loading message.");
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
