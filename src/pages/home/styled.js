import styled from "styled-components";

export const StyledHome = styled.div`
  background: #000;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    color: #00ffd1;
    font-family: "Baloo Bhai", cursive;
    margin: 0;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 0;
    background-color: #000;
  }

  ::-webkit-scrollbar {
    width: 8px;
    background-color: #000;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #00ffd1;
  }
`;
