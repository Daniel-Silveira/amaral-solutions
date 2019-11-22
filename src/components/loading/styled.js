import styled from "styled-components";

export const StyledLoading = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  margin-left: 1em;
`;

export const StyledCircle = styled.div`
  height: 100%;
  right: 0px;
  position: absolute;
  border: solid 3px #222222;
  border-top-color: #00ffd1;
  border-radius: 50%;

  width: 100%;
  transform: rotate(135deg);
  animation: spin 1.3s steps(2) 0.2s infinite;
  -webkit-animation: spin 1.3s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
