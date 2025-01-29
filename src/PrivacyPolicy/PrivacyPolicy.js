import React from "react";
import { useTranslation } from "react-i18next";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  return (
    <div className="privacy-policy">
      <h1>{t("privacyPolicy.title")}</h1>
      <p>{t("privacyPolicy.introduction")}</p>
      <h2>{t("privacyPolicy.dataCollection.title")}</h2>
      <p>{t("privacyPolicy.dataCollection.description")}</p>
      <h2>{t("privacyPolicy.dataUsage.title")}</h2>
      <p>{t("privacyPolicy.dataUsage.description")}</p>
      <h2>{t("privacyPolicy.dataProtection.title")}</h2>
      <p>{t("privacyPolicy.dataProtection.description")}</p>
      <h2>{t("privacyPolicy.cookies.title")}</h2>
      <p>{t("privacyPolicy.cookies.description")}</p>
      <h2>{t("privacyPolicy.userRights.title")}</h2>
      <p>{t("privacyPolicy.userRights.description")}</p>
      <h2>{t("privacyPolicy.changes.title")}</h2>
      <p>{t("privacyPolicy.changes.description")}</p>
    </div>
  );
};

export default PrivacyPolicy;
