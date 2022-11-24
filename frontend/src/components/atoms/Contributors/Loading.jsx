// @ts-nocheck
import styled from 'styled-components'
import { colors } from '../../../theme'

const LoadingStyled = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  transform: translateX(50%);

  &:after {
    content: ' ';
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid ${colors.redPink};
    border-color: ${colors.redPink} transparent #fff transparent;
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

function Loading() {
  return <LoadingStyled />
}

export default styled(Loading)``
