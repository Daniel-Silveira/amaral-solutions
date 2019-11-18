import styled from "styled-components";

export const StyledNavbar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1% 3%;
  box-sizing: border-box;
  position: fixed;
  z-index: 9999;
  @media (max-width: 768px) {
    padding: 4%;
  }
`;
export const StyledLogo = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;
export const StyledMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledMobile = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;

export const StyledMenuMobile = styled.div`
  width: 50%;
`
