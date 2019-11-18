import React from "react";
import { StyledHeader, StyledImage, StyledText } from "./styled";
import DefaultText from '../shared/text'
import Button from '../shared/button'

const Header = () => {
  return (
    <StyledHeader>
      <StyledText>
        <DefaultText text='Lorem ipsum dolor sit amet, consectetur adipiscing elit' type="title" />
        <Button text="Fazer orçamento"/>
      </StyledText>
      <StyledImage>
        <img src={require("../../assets/img/header.png")} />
      </StyledImage>
    </StyledHeader>
  );
};

export default Header;
