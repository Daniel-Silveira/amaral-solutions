import styled, { css } from 'styled-components'

export const StyledAdmin = styled.div`
  background-color: #000;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
`

export const Logo = styled.div`
  width: 20%;
  position: absolute;
  top: 5vh;
  left: 40%;
`

export const Form = styled.div`
  width: 30vw;
  height: 30vh;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 2em;
  box-sizing: border-box;
  border: 2px solid #f9b253;
  align-items: center;
  input {
    width: 90%;
  }
  ${({ big }) =>
    big &&
    css`
      width: 30vw;
      height: 70vh;
      justify-content: initial;
    `}
`

export const Input = styled.input`
  border: 1px solid #f9b253;
  border-radius: 10px;
  outline: none;
  padding: 1em;
  background-color: transparent;
  color: #f9b253;
  ::placeholder {
    color: #f9b253;
  }
  ${({ margin }) =>
    margin &&
    css`
      margin: 2em 0;
    `}
`

export const Button = styled.button`
  border: none;
  border: 1px solid #f9b253;
  border-radius: 10px;
  outline: none;
  padding: 1em;
  background-color: transparent;
  text-align: center;
  width: 30%;
  color: #f9b253;
  cursor: pointer;
  :hover {
    color: white;
    background-color: #f9b253;
  }
`
