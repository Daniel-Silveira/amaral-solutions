import React from "react";
import { StyledNavbar, StyledBall, StyledCard } from "./styled";
import Cart from "../cart";

const Navbar = ({ cart, setOpen }) => {
  return (
    <StyledNavbar>
      <div></div>
      <div></div>
      <StyledCard onClick={() => setOpen(true)}>
        <div>
          <img src={require("../../../../assets/img/shop.svg")} />
        </div>
        {!!cart.length && (
          <StyledBall>
            <p>{cart.length}</p>
          </StyledBall>
        )} 
      </StyledCard>
    </StyledNavbar>
  );
};

export default Navbar;
