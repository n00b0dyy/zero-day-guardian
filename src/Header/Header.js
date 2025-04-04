import React, { memo, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Header.css";
import Logo from "../Logo/Logo";
import GlitchText from "../GlitchText/GlitchText";
import Menu from "../Menu/Menu1";
import Menu2 from "../Menu/Menu2";
import MatrixRain from "../MatrixRain/MatrixRain.js";

const useDebouncedCallback = (callback, delay) => {
  const timerRef = useRef(null);

  return useCallback(
    (...args) => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );
};

const Header = () => {
  const { i18n } = useTranslation();

  const changeLanguage = useDebouncedCallback(lng => {
    i18n.changeLanguage(lng);
  }, 300);

  return (
    <header className="header">
      {/* MatrixRain pozostaje na samym dole */}
      <MatrixRain />
      {/* Logo ma wyższy z-index i jest nad MatrixRain */}
      <div className="header-logo">
        <Link to="/about-me">
          <Logo />
        </Link>
      </div>
      <div className="header-content">
        <div className="header-glitch">
          <Link to="/" className="glitch-link">
            <GlitchText />
          </Link>
        </div>
        <div className="header-menus">
          <Menu />
          <Menu2 />
        </div>
        <div className="language-switcher">
          <button onClick={() => changeLanguage("en")} className="lang-btn">
            EN
          </button>
          <button onClick={() => changeLanguage("pl")} className="lang-btn">
            PL
          </button>
          <button onClick={() => changeLanguage("fr")} className="lang-btn">
            FR
          </button>
          <button onClick={() => changeLanguage("no")} className="lang-btn">
            NO
          </button>
          <button onClick={() => changeLanguage("ru")} className="lang-btn">
            RU
          </button>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
