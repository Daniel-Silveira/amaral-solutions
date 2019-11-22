import React from "react";
import { StyledLoading, StyledCircle } from "./styled";

const Loading = () => {
  return (
    <StyledLoading class='progress-bar'>
      <StyledCircle class='circle border'></StyledCircle>
    </StyledLoading>
  );
};

export default Loading;
