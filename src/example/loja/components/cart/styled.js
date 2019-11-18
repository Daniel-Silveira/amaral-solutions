import styled from "styled-components";

export const StyledCart = styled.div`
  width: 20%;
  position: absolute;
  background: #fff;
  top: 0;
  right: 0;
  bottom: 0;
  box-shadow: -1px 0 3px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  position: fixed;
  overflow: auto;
`;
export const Card = styled.div`
  width: 90%;
  border-radius: 10px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin: 2% 0;
`;

export const StyledGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    text-align: center;
    font-size: 1em;
    margin: 0;
  }
`;

export const StyledImage = styled.div`
  width: 50%;
  img {
    border-radius: 10px 0 10px 0;
  }
`;

export const StyledButton = styled.div`
  padding: 7%;
  border: none;
  border-radius: 6px 6px 0 0;
  background: #1976d2;
  color: #fff;
  box-sizing: border-box;
  cursor: pointer;
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
`;

export const StyledHeader = styled.div`
  width: 100%;
  text-align: center;
`;
