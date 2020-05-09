import styled, { css } from 'styled-components'
import DefaultText from '../shared/text'
import { Element } from 'react-scroll'

export const StyledServices = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    height: inherit;
  }
`

export const StyledElement = styled(Element)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100vh;
  @media (max-width: 768px) {
    height: initial;
    margin-top: 5vh;
  }
`

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
    font-size: 1em;
    font-weight: 200;
    width: 85%;
  }
  h4 {
    letter-spacing: 5px;
    font-size: 1.2em;
  }
  @media (max-width: 768px) {
    width: 80%;
    margin: 7.5% 0;
    height: initial;
    h4 {
      margin: 1em 0;
    }
    p {
      height: inherit;
    }
  }
`

export const StyledImage = styled.div`
  width: 40%;
`

export const StyledText = styled(DefaultText)`
  letter-spacing: 4px;
  @media (max-width: 768px) {
    margin-bottom: 2em;
  }
`
