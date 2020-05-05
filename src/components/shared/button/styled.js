import styled from "styled-components";

export const StyledButton = styled.button`
  border: 2px solid #f9b253;
  border-radius: 40px;
  background: transparent;
  outline: none;
  padding: 3%;
  box-sizing: border-box;
  cursor: pointer;
  width: 14vw;
  &:hover {
    background: #f9b253;
    p {
        color: #000;
    }
  }
  @media (max-width: 768px) {
    width: 50%;
  }
`;
