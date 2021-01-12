import React from "react";
import { withTranslation, WithTranslation } from "react-i18next";
import { FormStateType } from "./Form.types";
import { SignInContainer, SignInForm } from "./Form.styles";

/*
  Imagine this form on a larger scale with at least 20 inputs.
  What will this code look like?
  In this case, it doesn't matter what names the inputs have.
*/

class Form extends React.PureComponent<WithTranslation, FormStateType> {
  state = {
    secret: {
      password: ""
    },
    username: ""
  };

  handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      ...this.state,
      secret: {
        password: e.target.value
      }
    });
  };

  handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      ...this.state,
      username: e.target.value
    });
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
            name="usr"
            placeholder={t("signIn:name")}
            onChange={this.handleUsernameChange}
            type="text"
            value={this.state.username}
          />
          <input
            name="psw"
            placeholder={t("signIn:password")}
            onChange={this.handlePasswordChange}
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
