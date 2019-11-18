import React from "react";
import { StyledCart, Card, StyledGroup, StyledImage, StyledButton, StyledHeader } from "./styled";

const Cart = ({ open, cart }) => {
  return open ? (
    <StyledCart>
        <StyledHeader>
            <h3>Carrinho</h3>
        </StyledHeader>
      {cart.map(i => (
        <Card>
          <StyledGroup>
            <StyledImage>
              <img src={i.image} />
            </StyledImage>
            <div>
              <h2> {i.name} </h2>
            </div>
          </StyledGroup>
          <p> {i.description} </p>
          <h3> R$ {i.price} </h3>
        </Card>
      ))}
      <StyledButton>Finalizar Compra</StyledButton>
    </StyledCart>
  ) : null;
};

export default Cart;
