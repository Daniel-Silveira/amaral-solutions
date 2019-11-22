import styled, { css } from "styled-components";
import DefaultText from "../shared/text";

export const StyledServices = styled.div`
  display: flex;
  justify-content: space-around;
  height: 100vh;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    height: inherit;
  }
`;

export const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 40vh;
  text-align: center;
  width: 25%;
  p {
    height: 4em;
    width: 85%;
  }
  h4 {
    letter-spacing: 5px;
    font-size: 1.2em;
  }
  @media (max-width: 768px) {
    width: 80%;
    margin-bottom: 15%;
    p {
      height: inherit;
    }
  }
`;

export const StyledImage = styled.div`
  width: 40%;
`;

export const StyledText = styled(DefaultText)`
  padding: 3% 0;
  letter-spacing: 4px;
`;
