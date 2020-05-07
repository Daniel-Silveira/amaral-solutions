import styled from 'styled-components'
import Button from '../shared/button'

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    display: block;
  }
`

export const StyledText = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 2.5%;
  margin-top: 2%;

  @media (max-width: 768px) {
    width: 90%;
    margin-left: 5%;
    margin-top: 17vh;
    text-align: center;
    position: absolute;
    padding: 0;
  }
  @media (height: 812px) {
    margin-top: 20vh;
  }
  h1 {
    @media (max-height: 660px) {
      font-size: 1.3em;
    }
  }
  h4 {
    margin: 1em 0;
    @media (max-width: 768px) {
      margin: 2em 0;
    }
  }
`

export const StyledButton = styled(Button)`
  width: 15vw;
  height: 7vh;
  color: #f9b253;
  @media (width: 1024px) {
    width: 20vw;
  }
  @media (max-width: 768px) {
    width: 58vw;
    height: 6vh;
  }
`

export const StyledAnimation = styled.div`
  position: absolute;
  right: 0;
  width: 64%;
  bottom: 0;
  margin-bottom: -2vh;
  @media (width: 1024px) {
    width: 70%;
  }
  @media (max-width: 768px) {
    width: 111%;
  }
`

export const StyledDrone = styled.div`
  position: fixed;
  animation: drone 30s infinite;
  width: 30%;
  @media (max-width: 768px) {
    display: none;
  }
  @keyframes drone {
    0% {
      bottom: 0;
      left: 0;
    }
    20% {
      bottom: 5vh;
      left: 20vw;
    }
    40% {
      width: 10%;
      left: 40vw;
    }
    50% {
      bottom: 90vh;
      left: 40vw;
    }
    60% {
      width: 30%;
    }
    80% {
      bottom: 5vh;
      left: 90vw;
    }
    100% {
      bottom: 0;
      left: 0;
    }
  }
`
