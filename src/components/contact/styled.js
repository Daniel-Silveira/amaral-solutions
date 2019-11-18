import styled from "styled-components";

export const StyledContact = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  @media(max-width: 768px) {
      height: 60vh;
  }
`;

export const StyledForm = styled.form`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 50vh;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const StyledGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  input {
    width: 48%;
  }
`;

export const GroupButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
