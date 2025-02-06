import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Menu2.css";

const Menu2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  const handleItemClick = () => {
    setIsOpen(false);
  };

  const handleClickOutside = event => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const menuItems = [
    {
      label: t("menu2.artificialIntelligence"),
      path: "/artificial-intelligence",
    },
    { label: t("menu2.hacking"), path: "/hacking" },
    { label: t("menu2.apis"), path: "/apis" },
    { label: t("menu2.blockchainCrypto"), path: "/blockchain-and-crypto" },
    { label: t("menu2.quantumComputing"), path: "/quantum-computing" },
    { label: t("menu2.industry4IoT"), path: "/przemysl-4-0-i-iot" },
  ];

  return (
    <div className="menu2-container" ref={menuRef}>
      <h2 className="menu2-title" onClick={toggleMenu}>
        {t("header.menu2")}
      </h2>

      <ul className={`menu2-list ${isOpen ? "open" : ""}`}>
        {menuItems.map((item, index) => (
          <li key={index} onClick={handleItemClick}>
            <Link to={item.path} className="menu2-link">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu2;
