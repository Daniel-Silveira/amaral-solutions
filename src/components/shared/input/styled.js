import styled, {css} from "styled-components";

export const StyledInput = styled.input`
  outline: none;
  border: 2px solid #f9b253;
  border-radius: 8px;
  padding: 1.5%;
  box-sizing: border-box;
  color: #f9b253;
  background: transparent;
  &::-webkit-outer-spin-button{
    appearance: none;

  }
  &::placeholder {
    color: #f9b253;
    font-family: "Roboto", sans-serif;
  }
  ${({ error }) =>
    error &&
    css`
      border-color: #f44336;
      &::placeholder {
        color: #f44336;
      }
    `}
`;

export const StyledArea = styled.textarea`
  outline: none;
  border: 2px solid #f9b253;
  border-radius: 10px;
  padding: 1.5%;
  box-sizing: border-box;
  color: #f9b253;
  background: transparent;
  resize: none;
  height: 15vh;
  &::placeholder {
    color: #f9b253;
    font-family: "Roboto", sans-serif;
  }
  ${({ error }) =>
    error &&
    css`
      border-color: #f44336;
      &::placeholder {
        color: #f44336;
      }
    `}
`;
