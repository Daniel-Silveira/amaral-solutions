import styled, { css } from 'styled-components'

export const SelectBox = styled.div`
  border: 1px solid #f9b253;
  border-radius: 10px;
  color: #f9b253;
  font-size: 0.9em;
  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `}
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const SelectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  cursor: pointer;
`

export const Option = styled.div`
  padding: 1em;
  cursor: pointer;
  :hover {
    color: #000;
    background: #f9b253;
  }
`
