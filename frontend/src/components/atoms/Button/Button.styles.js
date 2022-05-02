import styled from 'styled-components'
import { colors } from '../../../theme'

const StyledButton = styled.button.attrs({})`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.redPink};
  border: 0;
  color: ${colors.white};
  padding: 0.8rem 1rem;
  border-radius: 0.3rem;
  cursor: pointer;
  font-size: 16px;
  margin: 10px 0px;

  &:hover {
    filter: brightness(1.1);
  }

  &.blue-gradient {
  }
  &.orange-gradient {
  }
  &.green-gradient {
  }
  &.darkRed {
  }
  &.darkBlue {
  }
  &.disabled {
    cursor: not-allowed;
    opacity: 0.57;
  }
  &.animated {
    svg {
      animation: rotation 0.8s ease-in-out infinite;
    }
  }
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

export default StyledButton
