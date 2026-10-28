import clsx from "clsx";
import { useTranslation } from "react-i18next";
import Button from "../Button";
import styles from "./LanguageSwitcher.module.scss";

interface ILanguageSwitcher {
  className?: string;
}

const LanguageSwitcher = ({ className }: ILanguageSwitcher) => {
  const { t, i18n } = useTranslation();
  return (
    <div className={clsx(className)}>
      <Button
        className={styles.button}
        onClick={() => i18n.changeLanguage("ru")}
      >
        {t("navigation.languages.ru")}
      </Button>
      <Button
        className={styles.button}
        onClick={() => i18n.changeLanguage("uz")}
      >
        {t("navigation.languages.uz")}
      </Button>
      <Button
        className={styles.button}
        onClick={() => i18n.changeLanguage("en")}
      >
        {t("navigation.languages.en")}
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
