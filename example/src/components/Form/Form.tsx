import { fullObjectPath, i18ObjectPath } from "proxy-object-path";
import React from "react";
import { useTranslation } from "react-i18next";
import lang from "../../translations/lang";
import { formStateProxy, FormValuesType } from "./Form.types";
import { set } from "lodash";
import { SignInContainer, SignInForm } from "./Form.styles";

const formValues: FormValuesType = {
  secret: {
    password: ""
  },
  username: ""
};

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  set(formValues, e.target.name, e.target.value)
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log(formValues);
};

const Form = () => {
  const { t } = useTranslation();

  return (
    <SignInForm onSubmit={handleSubmit}>
      <SignInContainer>
        <h4>{t(i18ObjectPath(lang.signIn.title))}</h4>
        <input
          name={fullObjectPath(formStateProxy.username)}
          onChange={handleChange}
          placeholder={t(i18ObjectPath(lang.signIn.username))}
          type="text"
        />
        <input
          name={fullObjectPath(formStateProxy.secret.password)}
          onChange={handleChange}
          placeholder={t(i18ObjectPath(lang.signIn.password))}
          type="password"
        />
        <button type="submit">{t(i18ObjectPath(lang.signIn.button))}</button>
      </SignInContainer>
    </SignInForm>
  );
}

export default Form;
