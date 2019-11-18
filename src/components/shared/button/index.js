import React from "react";
import { StyledButton } from "./styled";
import DefaultText from '../text'

const Button = ({text, ...rest}) => {
  return (
    <StyledButton {...rest}>
      <DefaultText text={text} />
    </StyledButton>
  );
};

export default Button;
