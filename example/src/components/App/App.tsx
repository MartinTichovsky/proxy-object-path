import { i18ObjectPath } from "proxy-object-path";
import { useTranslation } from "react-i18next";
import lang from "../../translations/lang";
import {AppHeader, Button, ChoseLanguage} from "./App.styles";
import Form from "../Form";

const languages = ["cs-CZ", "de-DE", "en-US"];

const App = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => () => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <AppHeader>
        {t(i18ObjectPath(lang.shared.hello))} @{" "}
        {t(i18ObjectPath(lang.shared.title))}
        <ChoseLanguage>
          {languages.map((value, index) => (
            <Button onClick={changeLanguage(value)} key={index}>
              {value}
            </Button>
          ))}
        </ChoseLanguage>
      </AppHeader>
      <Form />
    </div>
  );
};

export default App;