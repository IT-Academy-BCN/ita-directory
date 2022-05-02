import styled from 'styled-components'
import { colors, font } from '../../../theme'

const StyledButton = styled.button.attrs({})`
  display: flex;
  justify-content: center;
  background: ${colors.redPink};
  border: 0;
  color: ${colors.white};
  padding: 0.8rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: ${font.base};
  margin: 10px 0px;

  &:hover {
    filter: brightness(1.1);
  }

  &.blue-gradient {
    background: linear-gradient(90deg, ${colors.lightBlue}, ${colors.darkBlue});
  }
  &.orange-gradient {
    background: linear-gradient(90deg, ${colors.lightOrange}, ${colors.darkOrange});
  }
  &.green-gradient {
    background: linear-gradient(90deg, ${colors.lightGreen}, ${colors.darkGreen});
  }
  &.darkRed {
    background: ${colors.extraDarkRed};
  }
  &.darkBlue {
    background: ${colors.extraDarkBlue};
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
