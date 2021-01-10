import { fullObjectPath, i18ObjectPath } from "proxy-object-path";
import React from "react";
import { withTranslation, WithTranslation } from "react-i18next";
import lang from "../../translations/lang";
import { formStateProxy, FormStateType } from "./Form.types";
import { cloneDeep, set } from "lodash";
import Input from "./Input";
import { SignInContainer, SignInForm } from "./Form.styles";

class Form extends React.PureComponent<WithTranslation, FormStateType> {
  state = {
    secret: {
      password: ""
    },
    username: ""
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState((state) =>
      set(cloneDeep(state), e.target.name, e.target.value)
    );
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(this.state);
  };

  render = () => {
    const { t } = this.props;

    return (
      <SignInForm onSubmit={this.handleSubmit}>
        <SignInContainer>
          <h4>{t(i18ObjectPath(lang.signIn.title))}</h4>
          <Input
            name={fullObjectPath(formStateProxy.username)}
            onChange={this.handleChange}
            placeholder={t(i18ObjectPath(lang.signIn.username))}
            state={this.state}
            type="text"
          />
          <Input
            name={fullObjectPath(formStateProxy.secret.password)}
            onChange={this.handleChange}
            placeholder={t(i18ObjectPath(lang.signIn.password))}
            state={this.state}
            type="password"
          />
          <button type="submit">{t(i18ObjectPath(lang.signIn.button))}</button>
        </SignInContainer>
      </SignInForm>
    );
  };
}

export default withTranslation()(Form);
