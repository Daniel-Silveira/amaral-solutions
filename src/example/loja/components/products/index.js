import React from "react";
import { StyledProducts, Product } from "./styled";

const Products = ({ data, cart, setCart }) => {
  const add = (i) => {
    setCart([...cart, i])
  }
  return (
    <StyledProducts>
      {data.map(i => (
        <Product>
          <div>
            <img src={i.image} />
          </div>
          <h4> {i.name} </h4>
          <h3> R${i.price.toString().replace('.', ',')} </h3>
          <p> {i.description} </p>
          <button onClick={() => add(i)}>Adicionar ao Carrinho</button>
        </Product>
      ))}
    </StyledProducts>
  );
};

export default Products;
