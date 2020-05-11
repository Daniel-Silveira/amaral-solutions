import styled from 'styled-components'
import Button from '../shared/button'
import { Link } from 'react-router-dom'

export const ListProfessionals = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    justify-content: space-around;
    width: 100%;
    flex-wrap: wrap;
  }
`

export const BoxProfessional = styled.div`
  padding: 1em;
  border: 1px solid #f9b253;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1em;
  border-radius: 10px;
  width: 20%;
  justify-content: space-between;
  @media (max-width: 768px) {
    border-radius: 10px;
    width: 42%;
    box-sizing: border-box;
    margin: 2em 0;
  }
  h4 {
    margin: 1em 0 0.4em;
    text-transform: capitalize;
    color: #f9b253;
    font-weight: 400;
    text-align: center;
  }
  p {
    margin-bottom: 1em;
    font-weight: 300;
    font-size: 0.8em;
  }
`

export const Photo = styled.div`
  width: 5em;
  height: 5em;
  img {
    border-radius: 50%;
  }
`
export const StyledLink = styled(Link)`
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const StyledButton = styled(Button)`
  padding: 0.4em 1.5em;
  font-size: 1em;
  color: #f9b253;
  border-width: 1px;
  p {
    margin: 0;
    font-weight: initial;
  }
  @media (max-width: 768px) {
    padding: 5px;
    width: 100%;
  }
`
