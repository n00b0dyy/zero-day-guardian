import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./AboutMe.css";

const AboutMe = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {}, [i18n.language]);

  return (
    <main className="about-me-container">
      <header className="about-me-socials">
        <div className="socials-icons">
          <a
            href="https://github.com/n00b0dyy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            <FontAwesomeIcon icon={faGithub} className="social-icon" />
          </a>
          <a
            href="https://x.com/ZeroDayGuardian"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X.com profile"
          >
            <FontAwesomeIcon icon={faXTwitter} className="social-icon" />
          </a>
          <a
            href="https://www.instagram.com/zerodayguardian1/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram profile"
          >
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/kamil-lukas-gorny7"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
          </a>
        </div>
      </header>

      <section className="about-me-photo-container">
        <img
          src="/images/bestprofil.jpeg"
          alt={t("aboutMe.name") + " profile picture"}
          className="about-me-photo"
        />
      </section>

      <section className="about-me-description">
        <p>
          {t("aboutMe.descriptionStart")}{" "}
          <strong className="highlight">{t("aboutMe.name")}</strong>,{" "}
          {t("aboutMe.descriptionMiddle")}{" "}
          <strong className="highlight">{t("aboutMe.computerScience")}</strong>.
        </p>
        <p>{t("aboutMe.pagePurpose")}</p>
      </section>

      <section className="about-me-courses">
        <h2 className="section-title">{t("aboutMe.coursesTitle")}</h2>
        <ul className="courses-list">
          {[
            "powershellBeginner",
            "powershellIntermediate",
            "powershellAdvanced",
            "comptia",
            "pythonBootcamp",
            "cybersecurity1",
            "cybersecurity2",
            "linux",
            "javascriptExpert",
            "reactCourse",
            "pcepCourse",
            "javaCourse",
          ].map((courseKey, index) => (
            <li key={index} className="course-item">
              <div className="course-title">
                {t(`aboutMe.courses.${courseKey}`)}
              </div>
              {courseKey.includes("cybersecurity") && (
                <span className="course-details">
                  {t(`aboutMe.courses.${courseKey}Details`)}
                </span>
              )}
              <a
                className="course-link"
                href={t(`aboutMe.courses.${courseKey}Link`)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View course details for ${t(
                  `aboutMe.courses.${courseKey}`
                )}`}
              >
                {t("aboutMe.courses.viewCertificateLink")}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="about-me-beyond">
        <h2 className="section-title">{t("aboutMe.beyondTechnologyTitle")}</h2>
        <p>{t("aboutMe.beyondTechnologyDescription")}</p>
      </section>
    </main>
  );
};

export default AboutMe;
