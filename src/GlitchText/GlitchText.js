import React, { useEffect, useRef } from "react";
import "./GlitchText.css";
import { useTranslation } from "react-i18next";

const GlitchText = () => {
  const glitchRef = useRef(null);

  const { t } = useTranslation();

  useEffect(() => {
    const glitchElement = glitchRef.current;

    const startGlitch = () => {
      glitchElement.classList.remove("glitch");
      void glitchElement.offsetWidth;
      glitchElement.classList.add("glitch");
    };

    const glitchInterval = setInterval(startGlitch, 5000);

    return () => {
      clearInterval(glitchInterval);
    };
  }, []);

  return (
    <div className="glitch-container">
      <h1 ref={glitchRef} className="glitch">
        {t("header.title")}
      </h1>
    </div>
  );
};

export default GlitchText;
