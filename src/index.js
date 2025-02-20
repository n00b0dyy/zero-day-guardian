import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App/App";
import "./i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
window.addEventListener("error", e => {
  if (e.message.includes("Loading chunk")) {
    console.warn("Chunk load failed. Reloading...");
    window.location.reload();
  }
});
