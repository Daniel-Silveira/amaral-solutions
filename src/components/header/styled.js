import styled from "styled-components";
import Button from '../shared/button';

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    
  }
`;

export const StyledText = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 2.5%;
  margin-top: 2%;
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding-left: 0;
    align-items: center;
    padding-top: 7%;
    position: absolute;
  }
`

export const StyledButton = styled(Button)`
 width: 15vw;
 height: 7vh;
 color: #f9b253;
 @media (max-width: 768px) {
   width:65vw;   
 }
`

export const StyledAnimation = styled.div`
    position: absolute;
    bottom: -1;
    right: 0;
    width: 64%;

`

export const StyledDrone = styled.div`
    position: absolute;
    animation: drone 30s infinite;
    width: 30%;
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