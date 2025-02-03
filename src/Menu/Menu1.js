import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Menu1.css";

const Menu1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  const handleItemClick = () => {
    setIsOpen(false);
  };

  const menuItems = [
    { label: t("menu1.algorithms"), path: "/algorithms" },
    { label: t("menu1.programming"), path: "/programming" },
    { label: t("menu1.geometryAnalysis"), path: "/geometry-analysis" },
    { label: t("menu1.cybersecurity"), path: "/cybersecurity" },
    { label: t("menu1.hardwareEngineering"), path: "/hardware-engineering" },
  ];

  return (
    <div className="menu-container">
      <h2 className="menu-title" onClick={toggleMenu}>
        {t("header.menu1")}
      </h2>

      <ul className={`menu-list ${isOpen ? "open" : ""}`}>
        {menuItems.map((item, index) => (
          <li key={index} onClick={handleItemClick}>
            <Link to={item.path} className="menu-link">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu1;
