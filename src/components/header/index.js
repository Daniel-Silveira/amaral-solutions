import React from "react";
import { StyledHeader, StyledImage, StyledText } from "./styled";
import DefaultText from "../shared/text";
import Button from "../shared/button";
import { Element, Link } from "react-scroll";

const Header = () => {
  return (
    <Element name='Home'>
      <StyledHeader>
        <StyledText>
          <DefaultText
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
            type='title'
          />
          <Link activeClass='active' to='Contato' spy={true} smooth={true} duration={1000}>
            <Button text='Fazer orçamento' />
          </Link>
        </StyledText>
        <StyledImage>
          <img src={require("../../assets/img/header.png")} />
        </StyledImage>
      </StyledHeader>
    </Element>
  );
};

export default Header;
