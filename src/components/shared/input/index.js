import React from "react";
import { StyledArea, StyledInput } from "./styled";

const Input = ({ textArea, ...rest }) => {
  return textArea ? <StyledArea {...rest} /> : <StyledInput {...rest} />;
};

export default Input;
