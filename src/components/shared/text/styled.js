import styled, { css } from 'styled-components'

export const Title = styled.h1`
  font-size: 2.5em;
  font-weight: 300;
  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
  @media (max-width: 768px) {
    font-size: 1.5em;
  }
  ${({ center }) =>
    center &&
    css`
      text-align: center;
    `}
`
export const Subtitle = styled.h2`
  font-size: 1.8em;
  font-weight: 300;
  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
  ${({ center }) =>
    center &&
    css`
      text-align: center;
    `}
`
export const TitleCard = styled.h4`
  font-size: 1.5em;
  font-weight: 300;
  @media (max-width: 768px) {
    font-size: 1em;
  }
  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
    ${({ pointer }) =>
      pointer &&
      css`
        cursor: pointer;
      `}
    ${({ center }) =>
      center &&
      css`
        text-align: center;
      `}
      
`
export const Default = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}

  ${({ button }) =>
    button &&
    css`
      font-size: 1.5em;
    `}
`
