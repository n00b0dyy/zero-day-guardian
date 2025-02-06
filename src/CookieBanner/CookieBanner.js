import React, { useState, useEffect } from "react";
import "./CookieBanner.css";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const storedConsent = localStorage.getItem("cookieConsent");
    if (!storedConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const consent = { essential: true, analytics: true, marketing: true };
    localStorage.setItem("cookieConsent", JSON.stringify(consent));
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    const consent = { essential: true, analytics: false, marketing: false };
    localStorage.setItem("cookieConsent", JSON.stringify(consent));
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("cookieConsent", JSON.stringify(preferences));
    setShowBanner(false);
  };

  return showBanner ? (
    <div className="cookie-banner">
      <p>
        We use cookies to enhance your experience. Choose whether to accept or
        customize your preferences.
      </p>
      <div className="cookie-options">
        <button onClick={handleAcceptAll} className="accept-btn">
          Accept All
        </button>
        <button onClick={handleRejectAll} className="reject-btn">
          Reject All
        </button>
      </div>
      <div className="cookie-customize">
        <label>
          <input
            type="checkbox"
            checked={preferences.analytics}
            onChange={() =>
              setPreferences(prev => ({
                ...prev,
                analytics: !prev.analytics,
              }))
            }
          />
          Analytics Cookies
        </label>
        <label>
          <input
            type="checkbox"
            checked={preferences.marketing}
            onChange={() =>
              setPreferences(prev => ({
                ...prev,
                marketing: !prev.marketing,
              }))
            }
          />
          Marketing Cookies
        </label>
        <button onClick={handleSavePreferences} className="save-btn">
          Save Preferences
        </button>
      </div>
    </div>
  ) : null;
};

export default CookieBanner;
