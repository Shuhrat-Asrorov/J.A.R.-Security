import Text from "./components/Text";
import styles from "./App.module.scss";
import { useTranslation } from "react-i18next";

const App = () => {
  const { t } = useTranslation();
  return (
    <>
      <Text as="h1" fontFamily="Montserrat">
        {t("hero.eyebrow")}
      </Text>
    </>
  );
};

export default App;
