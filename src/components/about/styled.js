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

export const StyledTitle = styled(DefaultText)`
  padding: 3% 0;
  letter-spacing: 4px;
`

export const StyledAvatarOne = styled.div`
  width: 20%;
  opacity: 15%;
`

export const StyledAvatarTwo = styled.div`
  width: 20%;
  opacity: 15%;
`
