import React from "react";
import { Title, Subtitle, TitleCard, Default } from "./styled";

const DefaultText = ({ type, text, color, pointer, ...rest }) => {
  return type === "title" ? (
    <Title color={color} {...rest} >
      {text}
    </Title>
  ) : type === "subtitle" ? (
    <Subtitle color={color} {...rest} >
      {text}
    </Subtitle>
  ) : type === "titleCard" ? (
    <TitleCard color={color} pointer={pointer} {...rest} >
      {text}
    </TitleCard>
  ) : (
    <Default color={color} {...rest} >
      {text}
    </Default>
  );
};

export default DefaultText;
