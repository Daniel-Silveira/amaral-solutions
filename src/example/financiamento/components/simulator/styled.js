import styled, { css } from "styled-components";

export const StyledSimulator = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 40vh;
  background: #dddd;
  padding: 1%;
  justify-content: space-around;
  border-radius: 8px;
`;
export const StyledGroupSelect = styled.div`
  display: flex;
  align-items: center;
  & button:first-child {
    border-radius: 100px 0 0 100px !important;
  }
  & button:nth-child(2) {
    border-radius: 0 !important;
    border-left: none;
    border-right: none;
  }
  & button:last-child {
    border-radius: 0 100px 100px 0 !important;
  }
`;

export const StyledHome = styled.div`
  input[type="range"] {
    appearance: none;
    width: 100%;
    height: 0.25rem;
    outline: none;
    border-radius: 0.25rem;
    &::-webkit-slider-thumb {
      appearance: none;
      width: 1.5rem;
      height: 1.5rem;
      background-color: blue;
      border: 0.25rem solid white;
      border-radius: 1rem;
      cursor: pointer;
    }
  }
`;

export const StyledSelected = styled.button`
  padding: 2%;
  box-sizing: border-box;
  border: 1px solid #000;
  border-radius: 100px;
  width: 33%;
  cursor: pointer;
  outline: none;
  ${({ selected }) =>
    selected &&
    css`
      border: 1px solid #000;
      background: #000;
      color: #fff;
    `}
`;

export const StyledButton = styled.button`
  padding: 2%;
  box-sizing: border-box;
  border: 1px solid;
  border-radius: 100px;
  width: 10vw;
  cursor: pointer;
  outline: none;
  :hover {
    background: #000;
    color: #fff;
  }
`;
export const StyledGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
