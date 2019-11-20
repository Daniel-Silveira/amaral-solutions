import React from "react";
import { StyledOverlay } from "./styled";

const Overlay = ({ open, setOpen, onClick }) => {
  return open ? <StyledOverlay onClick={() => onClick || setOpen(false)} /> : null;
};

export default Overlay;
