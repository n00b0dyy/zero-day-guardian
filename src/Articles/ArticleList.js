import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./ArticleList.css";

const ArticleList = ({ menuCategory }) => {
  const [articles, setArticles] = useState([]);
  const { i18n } = useTranslation();

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(`/data/articles.${i18n.language}.json`);
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, [i18n.language]);

  const filteredArticles = articles.filter(
    article => article.category.trim() === menuCategory.trim()
  );

  return (
    <div className="article-list">
      <h2 className="category-title">{menuCategory}</h2>{" "}
      {filteredArticles.length > 0 ? (
        filteredArticles.map(article => (
          <Link
            to={`/articles/${article.id}`}
            key={article.id}
            className="article-link"
          >
            <div className="article-banner">
              <img
                src={article.image}
                alt={article.title}
                className="article-image"
              />
              <div className="article-info">
                <h3>{article.title}</h3>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <p>Brak artykułów w tej kategorii.</p>
      )}
    </div>
  );
};

export default ArticleList;
