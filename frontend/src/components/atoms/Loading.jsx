// @ts-nocheck
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '../../theme'

const LoadingStyled = styled.div`
  --width-height: ${({ size }) => (size < 50 ? 50 : size)}px;
  --width-height-after: calc(var(--width-height) - 16px);

  display: inline-block;
  width: var(--width-height);
  height: var(--width-height);
  /* transform: translateX(50%); */

  &:after {
    content: ' ';
    display: block;
    width: var(--width-height-after);
    height: var(--width-height-after);
    margin: 8px;
    border-radius: 50%;
    border: 6px solid ${colors.redPink};
    border-color: ${colors.redPink} transparent ${colors.white} transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

function Loading({ size = 80, ...rest }) {
  return <LoadingStyled size={size} {...rest} />
}

Loading.propTypes = {
  size: PropTypes.number,
}

export default styled(Loading)``
