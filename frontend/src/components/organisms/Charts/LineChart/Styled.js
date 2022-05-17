import styled from 'styled-components'
import { colors } from '../../../../theme'

// eslint-disable-next-line import/prefer-default-export
export const MySvg = styled.svg`
  .toolLine {
    stroke: #a5a5a5;
    stroke-width: 1px;
    fill: none;
  }
  .tooltip {
    background-color: red;
  }
  .line,
  .circle {
    animation-name: lines;
    animation: fadeIn ease-in 1s;
    width: 10px;
  }

  .tick line {
    opacity: 0.2;
  }

  text {
    font-size: large;
    color: ${colors.lightGrey};
  }

  @keyframes lines {
    0% {
      left: 0%;
    }
    50% {
      left: 50%;
    }
    100% {
      right: 100%;
    }
  }
`
