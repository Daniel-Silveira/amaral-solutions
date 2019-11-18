import styled from "styled-components";
import DefaultText from "../shared/text";

export const StyledAbout = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  @media (max-width: 768px) {
    height: inherit;
    flex-wrap: wrap;
  }
`;

export const StyledImage = styled.div``;

export const StyledText = styled.div`
  width: 40%;
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & h4, p {
      width: 80%;
      text-align: center;
    }
  }
`;

export const StyledTitle = styled(DefaultText)`
  padding: 3% 0;
  letter-spacing: 4px;
`;
