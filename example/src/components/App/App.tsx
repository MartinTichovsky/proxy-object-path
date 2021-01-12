import { i18ObjectPath } from "proxy-object-path";
import { useTranslation } from "react-i18next";
import lang from "../../translations/lang";
import { AppHeader } from "./App.styles";
import Form from "../Form";
import React from "react";
import ChoseLanguage from "./ChoseLanguage";

const App = () => {
  const { t } = useTranslation();

  return (
    <div>
      <AppHeader>
        {t(i18ObjectPath(lang.shared.hello))} @{" "}
        {t(i18ObjectPath(lang.shared.title))}
        <ChoseLanguage />
      </AppHeader>
      <Form />
    </div>
  );
};

export default App;