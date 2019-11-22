import React from "react";
import { StyledHeader, StyledImage, StyledText, StyledButton } from "./styled";
import DefaultText from "../shared/text";
import { Element, Link } from "react-scroll";
import { StyledAvatarTwo } from "../about/styled";

const Header = () => {
  return (
    <Element name="Home">
      <StyledHeader>
        <StyledText>
        <StyledAvatarTwo>
          <img src={require("../../assets/img/android2.svg")} />
        </StyledAvatarTwo>
          <DefaultText
            text='“A Tecnologia Possibilita Que As Pessoas Tenham Controle Sobre Tudo, Exeto Sobre a Tecnologia ."'
            type="title"
          />
          <Link
            style={{ zIndex: "999" }}
            activeClass="active"
            to="Contato"
            spy={true}
            smooth={true}
            duration={1000}
          >
            <StyledButton text="Fazer orçamento" />
          </Link>
        </StyledText>
        <StyledImage>
          <img src={require("../../assets/img/header.svg")} />
        </StyledImage>
      </StyledHeader>
    </Element>
  );
};

export default Header;
