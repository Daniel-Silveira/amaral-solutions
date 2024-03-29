import styled, { css } from 'styled-components'

export const StyledNavbar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1% 3%;
  box-sizing: border-box;
  position: fixed;
  z-index: 9999;
  transition: 1s;
  height: 10vh;
  @media (max-width: 768px) {
    padding: 4%;
    background: #000;
  }
  ${({ scroll }) =>
    scroll &&
    css`
      padding: 0% 3%;
      background-color: red;
      height: 5vh;
      font-size: 0.8em;
    `}
`
export const StyledLogo = styled.div`
  width: 13%;
  transition: 1s;
  @media (max-width: 768px) {
    order: 2;
    width: 50%;
  }
  ${({ scroll }) =>
    scroll &&
    css`
      @media (max-width: 768px) {
        width: 23%;
      }
      width: 5%;
    `}
`
export const Mobile = styled.div`
  order: 3;
  width: 18%;
  @media (min-width: 768px) {
    display: none;
  }
`
export const StyledMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  @media (max-width: 768px) {
    display: none;
  }
`

export const StyledMobile = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`

export const StyledMenuMobile = styled.div`
  width: 50%;
  order: 1;
  transition: 2s;
  ${({ scroll }) =>
    scroll &&
    css`
      width: 30%;
    `}
`

export const Toogle = styled.div`
  z-index: 9999;
  transition: 0.3s;
  left: -60%;
  position: fixed;
  width: 60%;
  background: #000;
  top: 0;
  bottom: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ open }) =>
    open &&
    css`
      left: 0;
    `}
`

export const StyledGroup = styled.div`
  border-top: 2px solid #f9b253;
  width: 100%;
  text-align: center;
  padding-top: 3%;
`

export const StyledLogoMobile = styled.div`
  width: 50%;
  padding: 3.5% 0;
`
