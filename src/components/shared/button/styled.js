import styled from "styled-components";

export const StyledButton = styled.button`
  border: 2px solid #00ffd1;
  border-radius: 40px;
  background: transparent;
  outline: none;
  padding: 3%;
  box-sizing: border-box;
  cursor: pointer;
  width: 14vw;
  &:hover {
    background: #00ffd1;
    p {
        color: #000;
    }
  }
  @media (max-width: 768px) {
    width: 50%;
  }
`;
