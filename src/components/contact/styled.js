import styled, { css } from 'styled-components'

export const StyledContact = styled.div`
  display: flex;
  margin-left: 10vw;
  flex-direction: column;
  padding-top: 10vh;
  @media (max-width: 768px) {
    height: 60vh;
    margin: 0;
  }
`

export const StyledForm = styled.form`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #1c1c1c;
  padding: 1em;
  border-radius: 10px;
  margin-top: 1em;
  z-index: 9999;
  input {
    margin: 0.5em 0;
  }
  @media (max-width: 768px) {
    width: 90%;
    box-sizing: border-box;
    margin-left: 5%;
  }
`

export const BoxContact = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1em;
  p {
    margin-left: 1em;
  }
  div {
    display: flex;
  }
  @media (max-width: 768px) {
    padding: 0;
    flex-direction: column-reverse;
    width: 90%;
    margin-left: 5%;
  }
`

export const StyledWhats = styled.a`
  display: flex;
  text-decoration: none;
  color: #fff;
  text-align: center;
  border: 1px solid #fff;
  padding: 0.5em;
  box-sizing: border-box;
  border-radius: 10px;
  align-items: center;
  @media (max-width: 768px) {
    margin-bottom: 1em;
  }
`

export const StyledGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  input {
    width: 48%;
  }
`

export const GroupButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1em;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  button {
    padding: 1em 3em;
    @media (max-width: 768px) {
      margin-top: 1em;
    }
  }
`

export const StyledMessage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 200;
    ${({ status }) =>
      status &&
      css`
        color: ${status === 'error' ? 'red' : status === 'send' ? 'green' : '#fff'};
      `}
  }
`

export const StyledAnimation = styled.div`
  width: 70%;
  position: absolute;
  right: 0;
  @media (max-width: 768px) {
    margin-left: -75%;
    background: #000;
    position: initial;
    width: initial;
    right: initial;
    z-index: 99999;
  }
  svg g g[clip-path='url(#__lottie_element_781)'] {
    transition: 1s;
    ${({ active }) =>
      active &&
      css`
        transform: matrix(0.75, 0, 0, 0.75, 1137.5, -1000);
      `}
  }
`
