import React, { useEffect, useState } from 'react'
import {
  StyledCart,
  Card,
  StyledGroup,
  StyledImage,
  StyledButton,
  StyledHeader,
  StyledTotal,
  BottomFixed,
} from './styled'

const Cart = ({ open, cart }) => {
  const [total, setTotal] = useState(0)
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
          <h3> R$ {i.price.toString().replace('.', ',')} </h3>
        </Card>
      ))}
      <BottomFixed>
        <StyledTotal>
          <h5>Total</h5>
          <p> {total.toString().replace('.', ',')} </p>
        </StyledTotal>
        <StyledButton>Finalizar Compra</StyledButton>
      </BottomFixed>
    </StyledCart>
  ) : null
}

export default Cart
