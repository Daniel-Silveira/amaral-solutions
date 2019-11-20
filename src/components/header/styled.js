import styled from "styled-components";
import Button from '../shared/button';

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  @media (max-width: 768px) {
    height: inherit;
    flex-wrap: wrap;
  }
`;
export const StyledImage = styled.div`
  opacity: 0.5;
  width: 40%;
  @media (max-width: 768px) {
    order: -1;
    width: 100%;
  }
`;
export const StyledText = styled.div`
  width: 40%;
  padding-left: 3%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding-left: 0;
    align-items: center;
    position: absolute;
  }
`;

export const StyledButton = styled(Button)`

 width: 15vw;
 height: 9vh;
 @media (max-width: 768px) {
   width:65vw;   
 }

  


`