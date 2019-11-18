import React from "react";
import { StyledArea, StyledInput } from "./styled";

const Input = ({ type, ...rest }) => {
  return type === "textArea" ? <StyledArea {...rest} /> : <StyledInput {...rest} />;
};

export default Input;
