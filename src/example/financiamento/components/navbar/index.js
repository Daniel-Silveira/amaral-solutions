import React from "react";
import { StyledNavbar, StyledMenu } from "./styled";

const Navbar = () => {
  return (
    <StyledNavbar>
      <div></div>
      <StyledMenu>
        <p>Home</p>
        <p>Sobre</p>
        <p>Contato</p>
      </StyledMenu>
      <div></div>
    </StyledNavbar>
  );
};

export default Navbar;
