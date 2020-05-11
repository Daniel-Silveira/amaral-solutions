import styled from 'styled-components'
import DefaultText from '../shared/text'

export const StyledAbout = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  @media (max-width: 768px) {
    height: inherit;
    flex-wrap: wrap;
  }
`

export const StyledImage = styled.div``

export const StyledText = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  h4 {
    margin-bottom: 1em;
  }
  p {
    line-height: 1.4em;
  }
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & h4,
    p {
      width: 90%;
      margin-left: 5%;
      text-align: center;
    }
  }
`

export const TitleEquip = styled(DefaultText)`
  margin: 1em 0 -3vh;
  @media (max-width: 768px) {
    margin: 5vh 0 1vh!important;
    font-size: 1.3em;
  }
`

export const StyledTitle = styled(DefaultText)`
  padding: 3% 0;
  letter-spacing: 4px;
`
