import React from "react";
import { Button, ChoseLanguageContainer } from "./ChoseLanguage.style";
import i18n from "../../translations/i18n";

const languages = ["cs-CZ", "de-DE", "en-US"];

const changeLanguage = (language: string) => () => {
  i18n.changeLanguage(language);
};

const ChoseLanguage = () => (
  <ChoseLanguageContainer>
    {languages.map((value, index) => (
      <Button onClick={changeLanguage(value)} key={index}>
        {value}
      </Button>
    ))}
  </ChoseLanguageContainer>
);

export default React.memo(ChoseLanguage, () => true);