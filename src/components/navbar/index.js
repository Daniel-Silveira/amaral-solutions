import React, { useState } from "react";
import { StyledNavbar, StyledLogo, StyledMenu, StyledMobile, StyledMenuMobile } from "./styled";
import DefaultText from "../shared/text";
const Navbar = () => {
  const data = ["Home", "Sobre", "Exemplos", "Contato"];
  const [selected, setSelected] = useState("Home");
  return (
    <StyledNavbar>
      <StyledLogo />
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
            <img src={require('../../assets/img/menu.svg')} /> 
          </StyledMenuMobile>
      </StyledMobile>
    </StyledNavbar>
  );
};

export default Navbar;
