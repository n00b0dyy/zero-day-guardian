import React, { useState, useEffect, lazy, Suspense } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./App.css";
import "../Body/Body.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import LogoGlowna3 from "../Body/BodyImages/logo glowna3.png";
import LogoGlowna4 from "../Body/BodyImages/logo glowna4.png";
import LogoGlowna5 from "../Body/BodyImages/logo glowna5jpg.png";
import LogoGlowna6 from "../Body/BodyImages/logo glowna6.png";
import InteractiveMap from "../InteractiveMap/InteractiveMap";
import AboutMe from "../AboutMe/AboutMe";
import PrivacyPolicy from "../PrivacyPolicy/PrivacyPolicy";
import RecommendedTools from "../RecommendedTools/RecommendedTools";

const ArticleList = lazy(() => import("../Articles/ArticleList"));
const ArticlePage = lazy(() => import("../Articles/ArticlePage"));

const subcategoryTranslations = {
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

function App() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [latestArticles, setLatestArticles] = useState({});

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const response = await fetch(`/data/articles.${i18n.language}.json`);
        if (!response.ok) {
          throw new Error(`Error fetching articles: ${response.statusText}`);
        }
        const data = await response.json();

        const latest = {};
        Object.entries(subcategoryTranslations[i18n.language]).forEach(
          ([key, translatedSubcategory]) => {
            latest[key] = data
              .filter(article => article.subcategory === translatedSubcategory)
              .sort((a, b) => new Date(b.date) - new Date(a.date))[0];
          }
        );
        setLatestArticles(latest);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    loadArticles();
  }, [i18n.language]);

  const handleClick = subcategory => {
    const latestArticle = latestArticles[subcategory];
    if (latestArticle) {
      navigate(`/articles/${latestArticle.id}`);
    } else {
      console.warn(`No article found for subcategory: ${subcategory}`);
    }
  };

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <main className="App-body">
              <div className="body-images">
                {["Science", "Technology", "Future", "Innovation"].map(cat => (
                  <div
                    key={cat}
                    className="image-wrapper"
                    onClick={() => handleClick(cat)}
                  >
                    <p className="image-label">
                      {t(`body.${cat.toLowerCase()}`)}
                    </p>
                    <p className="image-description">
                      {t(`body.${cat.toLowerCase()}Description`)}
                    </p>
                    <img
                      src={
                        cat === "Science"
                          ? LogoGlowna3
                          : cat === "Technology"
                          ? LogoGlowna4
                          : cat === "Future"
                          ? LogoGlowna5
                          : LogoGlowna6
                      }
                      alt={t(`body.${cat.toLowerCase()}`)}
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
        {/* Menu1 Routes */}
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
        {/* Menu2 Routes */}
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
        {/* Article Details Route */}
        <Route
          path="/articles/:id"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ArticlePage />
            </Suspense>
          }
        />
        <Route path="/about-me" element={<AboutMe />} />
        {/* Route for Privacy Policy */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />{" "}
        {/* Added route */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
