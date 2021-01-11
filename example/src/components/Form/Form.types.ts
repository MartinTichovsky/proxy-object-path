import { createProxy } from "proxy-object-path";

export type FormStateType = {
  secret: {
    password: string;
  };
  username: string;
};

export const formStateProxy = createProxy<FormStateType>();
