import React from "react";
import { withTranslation, WithTranslation } from "react-i18next";
import { FormStateType } from "./Form.types";
import { cloneDeep, set } from "lodash";
import { SignInContainer, SignInForm } from "./Form.styles";

/*
  Imagine this form on a larger scale with at least 20 inputs.
  What will this code look like?
  This code will be unsafe, too many not referenced strings = you can easily make a typo and you won't know.
*/

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
          <h4>{t("signIn:title")}</h4>
          <input
            name="username"
            placeholder={t("signIn:name")}
            onChange={this.handleChange}
            type="text"
            value={this.state.username}
          />
          <input
            name="secret.password"
            placeholder={t("signIn:password")}
            onChange={this.handleChange}
            type="password"
            value={this.state.secret.password}
          />
          <button type="submit">{t("signIn:button")}</button>
        </SignInContainer>
      </SignInForm>
    );
  };
}

export default withTranslation()(Form);
