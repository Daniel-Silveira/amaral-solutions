import React from "react";
import { StyledOverlay } from "./styled";

const Overlay = ({open, setOpen}) => {
  return open ? <StyledOverlay onClick={() => setOpen(false)} /> : null;
};

export default Overlay