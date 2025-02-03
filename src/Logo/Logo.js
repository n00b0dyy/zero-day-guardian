// src/Logo/Logo.js
import React from "react";
import logo from "./output.png";

import "./Logo.css";

const Logo = () => {
  return (
    <div className="logo-wrapper">
      <img src={logo} alt="Logo" className="logo" />{" "}
    </div>
  );
};

export default Logo;
