import styled from 'styled-components'

export const StyledProfessional = styled.div`
  width: 100%;
  height: 100vh;
  background: #000;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  opacity: 0.07;
  top: 0;
  left: 0;
  position: absolute;
  background-size: 100%;
  background-repeat: no-repeat;
  background-image: url('https://cdn.pixabay.com/photo/2016/03/09/09/17/computer-1245714_1280.jpg');
`

export const Logo = styled.div`
  width: 10%;
  padding: 1em;
  box-sizing: border-box;
  @media (max-width: 768px) {
    width: 40%;
    margin-left: 30%;
  }
`

export const Perfil = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.8em;
  h1 {
    color: #f9b253;
    margin: 1em 0 0.4em;
    font-weight: 400;
  }
  h2 {
    color: #fff;
    font-weight: 200;
  }
`
export const Photo = styled.div`
  width: 8em;
  height: 8em;
  img {
    border-radius: 50%;
  }
  @media (max-width: 768px) {
    width: 30%;
    margin-top: 3em;
  }
`

export const Line = styled.div`
  width: 100vw;
  height: 1px;
  background: #f9b253;
  margin: 2em 0;
`

export const ContainerSkills = styled.div`
  color: #fff;
  background: #000;
  h2 {
    text-align: center;
    font-weight: 400;
  }
`

export const Box = styled.div`
  width: 20%;
  height: 50vh;
  border-radius: 15px;
  border: 2px solid #f9b253;
  margin: 0 2em;
  background-color: #000;
  @media (max-width: 768px) {
    width: 90%;
    margin: 1em 0;
  }
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1em;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`

export const Header = styled.div`
  border-bottom: 2px solid #f9b253;
  padding: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  p {
    font-size: 1.2em;
    color: #f9b253;
  }
`

export const Skill = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em;
  box-sizing: border-box;
`

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  div {
    width: 70% !important;
    height: 70% !important;
  }
`
