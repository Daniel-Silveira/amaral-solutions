import styled from 'styled-components'

export const StyledButton = styled.button`
  border: 2px solid #f9b253;
  border-radius: 40px;
  background: transparent;
  outline: none;
  box-sizing: border-box;
  cursor: pointer;
  padding: 1em;
  p {
    font-weight: 400;
    font-size: 1em;
  }

  &:hover {
    background: #f9b253;
    p {
      color: #000;
    }
  }
  @media (max-width: 768px) {
    width: 50%;
  }
`
