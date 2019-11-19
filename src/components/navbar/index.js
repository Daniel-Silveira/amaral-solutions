import React, { useState, useLayoutEffect } from "react";
import { StyledNavbar, StyledLogo, StyledMenu, StyledMobile, StyledMenuMobile, Mobile } from "./styled";
import DefaultText from "../shared/text";
const Navbar = ({scroll}) => {
  const data = ["Home", "Sobre", "Exemplos", "Contato"];
  const [selected, setSelected] = useState("Home");

  return (
    <StyledNavbar scroll={scroll > 180}>
      <StyledLogo scroll={scroll > 180}>
        <img src={require("../../assets/img/logo.svg")} />
      </StyledLogo>
      <Mobile/>
      <StyledMenu>
        {data.map(i => (
          <DefaultText
            color={selected === i ? null : "#fff"}
            onClick={() => setSelected(i)}
            type='titleCard'
            text={i}
            pointer
          />
        ))}
      </StyledMenu>
      <StyledMobile>
        <StyledMenuMobile>
          <img src={require("../../assets/img/menu.svg")} />
        </StyledMenuMobile>
      </StyledMobile>
    </StyledNavbar>
  );
};

export default Navbar;
