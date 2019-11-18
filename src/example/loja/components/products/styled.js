import styled from "styled-components";

export const StyledProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 13%;
  margin: 3%;
  border-radius: 7px;
  box-shadow: 0 0 3px rgba(0,0,0,.2);

  button {
    padding: 7%;
    border: none;
    border-radius: 6px;
    background: #1976d2;
    color: #fff;
    box-sizing: border-box;
    margin-bottom: 10%;
    cursor: pointer;
  }
  p {
      text-align: center;
  }
  img {
    border-radius: 7px 7px 0 0;
  }
`;
