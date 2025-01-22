import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./AboutMe.css";

const AboutMe = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    console.log("Language changed to:", i18n.language);
  }, [i18n.language]);

  return (
    <div className="about-me-container">
      <div className="about-me-socials">
        <div className="socials-icons">
          <a
            href="https://github.com/n00b0dyy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} className="social-icon" />
          </a>
          <a
            href="https://x.com/ZeroDayGuardian"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X.com"
          >
            <FontAwesomeIcon icon={faXTwitter} className="social-icon" />
          </a>
          <a
            href="https://www.instagram.com/zerodayguardian1/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
          </a>
        </div>
      </div>

      <div className="about-me-photo-container">
        <img
          src="\images\bestprofil.jpeg"
          alt={t("aboutMe.name")}
          className="about-me-photo"
        />
      </div>

      {/* <h1 className="about-me-title">{t("aboutMe.title")}</h1> */}

      <div className="about-me-description">
        <p>
          {t("aboutMe.descriptionStart")}{" "}
          <strong className="highlight">{t("aboutMe.name")}</strong>,{" "}
          {t("aboutMe.descriptionMiddle")}{" "}
          <strong className="highlight">{t("aboutMe.computerScience")}</strong>.
        </p>
        <p>{t("aboutMe.pagePurpose")}</p>
      </div>

      <div className="about-me-courses">
        <h2 className="section-title">{t("aboutMe.coursesTitle")}</h2>
        <ul className="courses-list">
          <li>
            {t("aboutMe.courses.powershellBeginner")} <br />
            <a
              className="course-link"
              href={t("aboutMe.courses.powershellBeginnerLink")}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("aboutMe.courses.viewCourseLink")}
            </a>
          </li>
          <li>
            {t("aboutMe.courses.powershellIntermediate")} <br />
            <a
              className="course-link"
              href={t("aboutMe.courses.powershellIntermediateLink")}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("aboutMe.courses.viewCertificateLink")}
            </a>
          </li>
          <li>
            {t("aboutMe.courses.powershellAdvanced")} <br />
            <a
              className="course-link"
              href={t("aboutMe.courses.powershellAdvancedLink")}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("aboutMe.courses.viewCertificateLink")}
            </a>
          </li>
          <li>
            {t("aboutMe.courses.comptia")} <br />
            <a
              className="course-link"
              href={t("aboutMe.courses.comptiaLink")}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("aboutMe.courses.viewCourseLink")}
            </a>
          </li>
          <li>
            {t("aboutMe.courses.pythonBootcamp")} <br />
            <a
              className="course-link"
              href={t("aboutMe.courses.pythonBootcampLink")}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("aboutMe.courses.viewCourseLink")}
            </a>
          </li>
          <li>
            {t("aboutMe.courses.cybersecurity1")} <br />
            <span>{t("aboutMe.courses.cybersecurity1Details")}</span> <br />
            <a
              className="course-link"
              href={t("aboutMe.courses.cybersecurity1Link")}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("aboutMe.courses.viewCertificateLink")}
            </a>
          </li>
          <li>
            {t("aboutMe.courses.cybersecurity2")} <br />
            <span>{t("aboutMe.courses.cybersecurity2Details")}</span> <br />
            <a
              className="course-link"
              href={t("aboutMe.courses.cybersecurity2Link")}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("aboutMe.courses.viewCertificateLink")}
            </a>
          </li>
          <li>
            {t("aboutMe.courses.linux")} <br />
            <a
              className="course-link"
              href={t("aboutMe.courses.linuxLink")}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("aboutMe.courses.viewCertificateLink")}
            </a>
          </li>
          <li>
            {t("aboutMe.courses.javascriptExpert")} <br />
            <a
              className="course-link"
              href={t("aboutMe.courses.javascriptExpertLink")}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("aboutMe.courses.viewCertificateLink")}
            </a>
          </li>
        </ul>
      </div>

      <div className="about-me-beyond">
        <h2 className="section-title">{t("aboutMe.beyondTechnologyTitle")}</h2>
        <p>{t("aboutMe.beyondTechnologyDescription")}</p>
      </div>
    </div>
  );
};

export default AboutMe;
