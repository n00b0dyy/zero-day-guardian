import React, { useState, useEffect, Suspense } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import ArticleList from "../Articles/ArticleList";
import ArticlePage from "../Articles/ArticlePage";
import "../Body/Body.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import InteractiveMap from "../InteractiveMap/InteractiveMap";
import AboutMe from "../AboutMe/AboutMe";
import PrivacyPolicy from "../PrivacyPolicy/PrivacyPolicy";
import CookieBanner from "../CookieBanner/CookieBanner";
import RecommendedTools from "../RecommendedTools/RecommendedTools";

import LogoGlowna3 from "../Body/BodyImages/logo glowna3.png";
import LogoGlowna4 from "../Body/BodyImages/logo glowna4.png";
import LogoGlowna5 from "../Body/BodyImages/logo glowna5jpg.png";
import LogoGlowna6 from "../Body/BodyImages/logo glowna6.png";

const categories = [
  { id: "Science", img: LogoGlowna3 },
  { id: "Technology", img: LogoGlowna4 },
  { id: "Future", img: LogoGlowna5 },
  { id: "Innovation", img: LogoGlowna6 },
];

function App() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [latestArticles, setLatestArticles] = useState({});

  // 🔄 Odśwież stronę tylko raz po 500ms
  useEffect(() => {
    if (!sessionStorage.getItem("hasRefreshed")) {
      sessionStorage.setItem("hasRefreshed", "true");
      setTimeout(() => window.location.reload(), 500);
    }
  }, []);

  // 📡 Pobieranie artykułów
  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data/articles.${i18n.language}.json`)
      .then(response => {
        if (!response.ok)
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        return response.json();
      })
      .then(data => {
        const latest = {};
        categories.forEach(cat => {
          latest[cat.id] = data
            .filter(
              article =>
                article.subcategory === t(`body.${cat.id.toLowerCase()}`)
            )
            .sort((a, b) => new Date(b.date) - new Date(a.date))[0];
        });
        setLatestArticles(latest);
      })
      .catch(error => console.error("Error fetching articles:", error));
  }, [i18n.language]);

  // 🔗 Kliknięcie w kategorię → Nawigacja do artykułu
  const handleClick = category => {
    const latestArticle = latestArticles[category];
    latestArticle
      ? navigate(`/articles/${latestArticle.id}`)
      : console.warn(`No article for: ${category}`);
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Zero-Day-Guardian - Technology & Cybersecurity</title>
        <meta
          name="description"
          content="Explore the latest insights in technology, cybersecurity, AI, and programming at Zero-Day-Guardian."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <Header />
      <CookieBanner />

      <Routes>
        {/* Strona główna */}
        <Route
          path="/"
          element={
            <main className="App-body">
              <div className="body-images">
                {categories.map(cat => (
                  <div
                    key={cat.id}
                    className="image-wrapper"
                    onClick={() => handleClick(cat.id)}
                  >
                    <p className="image-label">
                      {t(`body.${cat.id.toLowerCase()}`)}
                    </p>
                    <p className="image-description">
                      {t(`body.${cat.id.toLowerCase()}Description`)}
                    </p>
                    <img
                      src={cat.img}
                      alt={t(`body.${cat.id.toLowerCase()}`)}
                      className="body-image"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
              <InteractiveMap />
              <RecommendedTools />
            </main>
          }
        />

        {/* Menu 1 - Algorytmy, programowanie itd. */}
        <Route
          path="/algorithms"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ArticleList menuCategory="Algorithms" />
            </Suspense>
          }
        />
        <Route
          path="/programming"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ArticleList menuCategory="Programming" />
            </Suspense>
          }
        />
        <Route
          path="/geometry-analysis"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ArticleList menuCategory="Geometry and Mathematical Analysis" />
            </Suspense>
          }
        />
        <Route
          path="/cybersecurity"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ArticleList menuCategory="Cybersecurity" />
            </Suspense>
          }
        />
        <Route
          path="/hardware-engineering"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ArticleList menuCategory="Hardware and Reverse Engineering" />
            </Suspense>
          }
        />

        {/* Menu 2 - AI, Blockchain, IoT itd. */}
        <Route
          path="/artificial-intelligence"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ArticleList menuCategory="Artificial Intelligence" />
            </Suspense>
          }
        />
        <Route
          path="/hacking"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ArticleList menuCategory="Hacking" />
            </Suspense>
          }
        />
        <Route
          path="/apis"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ArticleList menuCategory="APIs" />
            </Suspense>
          }
        />
        <Route
          path="/blockchain-and-crypto"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ArticleList menuCategory="Blockchain and Crypto" />
            </Suspense>
          }
        />
        <Route
          path="/quantum-computing"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ArticleList menuCategory="Quantum Computing" />
            </Suspense>
          }
        />
        <Route
          path="/przemysl-4-0-i-iot"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ArticleList menuCategory="Industry 4.0 and IoT" />
            </Suspense>
          }
        />

        {/* Artykuły i strony statyczne */}
        <Route path="/articles/:id" element={<ArticlePage />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
