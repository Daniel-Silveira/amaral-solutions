import styled from "styled-components";

export const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1% 5%;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  img {
    cursor: pointer;
  }
`;

export const StyledBall = styled.div`
  width: 1em;
  height: 1em;
  background: red;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2%;
  box-sizing: border-box;
  border-radius: 50%;
  p {
    color: #fff;
    margin: 0;
    font-size: 0.8em;
  }
`;

export const StyledCard = styled.div`
  display: flex;
`;
