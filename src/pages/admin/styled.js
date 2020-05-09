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
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 2em;
  box-sizing: border-box;
  border: 2px solid #f9b253;
  align-items: center;
  @media (max-width: 768px) {
    width: 90%;
  }
  input {
    width: 90%;
    margin: 1em 0;
  }
  ${({ big }) =>
    big &&
    css`
      width: 80vw;
      height: 98vh;
      justify-content: space-around;
      align-items: initial;
    `}
`

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #f9b253;
`

export const Input = styled.input`
  border: 1px solid #f9b253;
  border-radius: 10px;
  outline: none;
  padding: 1em;
  background-color: transparent;
  color: #f9b253;
  box-sizing: border-box;
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

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  input {
    width: 48%;
  }
`

export const Skills = styled.div`
  display: flex;
  justify-content: space-between;
`

export const AddBox = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  svg {
    fill: #f9b253;
    cursor: pointer;
    margin-left: 1em;
  }
`

export const Box = styled.div`
  width: 100%;
  height: 45vh;
  margin-top: 1em;
  border-radius: 15px;
  border: 1px solid #f9b253;
  background-color: #000;
`

export const Container = styled.div`
  width: 30%;
  h2 {
    margin-bottom: 1.5em;
    color: #fff;
    font-size: 1em;
  }
`

export const Skill = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em;
  box-sizing: border-box;
  p {
    color: #fff;
  }
`

export const Group = styled.div`
  display: flex;
  align-items: center;
`

export const BoxButton = styled.div`
  display: flex;
  justify-content: center;
  button {
    :hover {
      color: #000;
    }
  }
`

export const Register = styled.p`
  cursor: pointer;
  color: #fff;
  margin: 1em 0;
`
