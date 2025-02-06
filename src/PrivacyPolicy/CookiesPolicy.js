import React from "react";
import { useTranslation } from "react-i18next";
import "./CookiesPolicy.css"; // Upewnij się, że masz plik stylów

const CookiesPolicy = () => {
  const { t } = useTranslation();

  return (
    <div className="cookies-policy">
      <h1>Cookies Policy</h1>
      <p>
        Last Updated: <strong>[Insert Date]</strong>
      </p>

      <h2>What Are Cookies?</h2>
      <p>
        Cookies are small text files stored on your device (computer, tablet, or
        mobile) when you visit a website. They help us improve your experience
        by remembering preferences, enhancing security, and analyzing website
        performance.
      </p>

      <h2>Why Do We Use Cookies?</h2>
      <p>We use cookies to:</p>
      <ul>
        <li>✅ Ensure the proper functionality of our website.</li>
        <li>
          ✅ Improve user experience by remembering settings and preferences.
        </li>
        <li>✅ Analyze website performance and optimize the content.</li>
        <li>✅ Provide personalized content and recommendations.</li>
        <li>✅ Enhance security and prevent fraud.</li>
      </ul>

      <h2>Types of Cookies We Use</h2>

      <h3>🔹 Essential Cookies</h3>
      <p>These cookies are necessary for the website to function correctly.</p>

      <h3>🔹 Performance & Analytics Cookies</h3>
      <p>
        We use analytics cookies to track visitor behavior and improve the
        website.
      </p>

      <h3>🔹 Functional Cookies</h3>
      <p>
        These cookies store your preferences, such as language and dark mode
        settings.
      </p>

      <h3>🔹 Advertising & Third-Party Cookies</h3>
      <p>
        Some cookies come from third-party services like Google, YouTube, or
        social media widgets.
      </p>

      <h2>Managing Your Cookie Preferences</h2>

      <p>
        Alternatively, you can block or delete cookies using your browser
        settings:
      </p>
      <ul>
        <li>
          🌍{" "}
          <a
            href="https://support.google.com/chrome/answer/95647?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Chrome
          </a>
        </li>
        <li>
          🦊{" "}
          <a
            href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mozilla Firefox
          </a>
        </li>
        <li>
          🔵{" "}
          <a
            href="https://support.microsoft.com/en-us/microsoft-edge/view-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
            target="_blank"
            rel="noopener noreferrer"
          >
            Microsoft Edge
          </a>
        </li>
        <li>
          🍏{" "}
          <a
            href="https://support.apple.com/en-us/HT201265"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apple Safari
          </a>
        </li>
      </ul>

      <h2>Google Analytics & Tracking</h2>
      <p>
        We use Google Analytics to understand how visitors interact with our
        email.
        <strong>
          {" "}
          Google Analytics is only enabled if you accept cookies.
        </strong>
      </p>
      <p>
        To opt out, disable cookies in the consent banner or use the
        <a
          href="https://tools.google.com/dlpage/gaoptout"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Google Analytics Opt-Out Add-on
        </a>
        .
      </p>

      <h2>Third-Party Services & Embedded Content</h2>
      <p>Our website may include services like:</p>
      <ul>
        <li>▶️ YouTube Videos (for tutorials and explanations).</li>
        <li>🔗 Social Media Widgets (Facebook, Twitter, Instagram).</li>
        <li>📍 Google Maps (for location-based content).</li>
      </ul>
      <p>
        These services may use their own cookies to track usage. Please refer to
        their individual privacy policies.
      </p>

      <h2>Data Retention & Security</h2>
      <p>
        We do <strong>not</strong> store personal data through cookies. All
        cookie-based data is secured with encryption and expires after a set
        period (typically 1-12 months).
      </p>

      <h2>Changes to This Cookies Policy</h2>
      <p>
        We may update this policy from time to time. If we make significant
        changes, we will notify users via a website notice.
      </p>
      <p>
        <strong>Last Updated:</strong> [Insert Date]
      </p>

      <h2>Contact Us</h2>
      <p>If you have any questions about this Cookies Policy, contact us at:</p>
      <p>
        📧 <strong>Email:</strong>{" "}
        <a href="mailto:your@email.com">your@email.com</a>
      </p>

      <h3>✅ Summary of Your Choices:</h3>
      <ul>
        <li>✅ Accept all cookies → Enjoy full website features</li>
        <li>❌ Decline cookies → Only essential features will work</li>
      </ul>

      <p>
        Thank you for visiting <strong>Zer0-Day Guardian</strong>! 🚀
      </p>
    </div>
  );
};

export default CookiesPolicy;
