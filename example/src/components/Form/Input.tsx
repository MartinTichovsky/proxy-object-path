import React from "react";
import { get } from "lodash";
import { InputProps } from "./Input.types";

const Input = <T,>(
  props: React.InputHTMLAttributes<HTMLInputElement> & InputProps<T>
) => (
  <input
    {...props}
    {...(props.name && { value: get(props.state, props.name) })}
  />
);

export default Input;
