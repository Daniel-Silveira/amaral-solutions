import React from "react";
import { StyledHeader, StyledImage, StyledText, StyledButton } from "./styled";
import DefaultText from "../shared/text";
import { Element, Link } from "react-scroll";

const Header = () => {
  return (
    <Element name='Home'>
      <StyledHeader>
        <StyledText>
          <DefaultText
            text='“A TECNOLOGIA POSSIBILITA QUE AS PESSOAS TENHAM CONTROLE SOBRE TUDO, EXCETO SOBRE A TECNOLOGIA ."'
            type='title'
          />
          <Link style={{zIndex:'999'}} activeClass='active' to='Contato' spy={true} smooth={true} duration={1000}>
            <StyledButton text='Fazer orçamento' />
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
