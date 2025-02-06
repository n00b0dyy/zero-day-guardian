import React from "react";
import "./Footer.css";

const FooterTop = () => (
  <div className="footer-top">
    <div className="footer-links">
      <a href="/privacy-policy">Privacy Policy</a>
    </div>
  </div>
);

const FooterBottom = () => (
  <div className="footer-bottom">
    <p>© 2025 Zer0-Day Guardian by N00b0dy. All rights reserved.</p>
  </div>
);

const Footer = () => (
  <footer className="App-footer">
    <FooterTop />
    <FooterBottom />
  </footer>
);

export default Footer;
