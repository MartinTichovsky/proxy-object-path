import { createProxy } from "proxy-object-path";

export type FormValuesType = {
  secret: {
    password: string;
  };
  username: string;
};

export type FormStateType = FormValuesType;

export const formStateProxy = createProxy<FormStateType>();
