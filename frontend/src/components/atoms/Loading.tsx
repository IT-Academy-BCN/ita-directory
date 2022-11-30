// _@ts-nocheck

import React from 'react'
import styled from 'styled-components'
import { colors } from '../../theme'

type Props = {
  size: number
}
// const shouldForwardProp = <CustomProps extends Record<string, unknown>>(
//   props: Array<keyof CustomProps>,
//   prop: PropertyKey,
// ): boolean => !props.includes(prop as string);

const LoadingStyled = styled.div.withConfig({
  // shouldForwardProp: (prop, defaultProps) => !['size'].includes(prop) && defaultProps(prop),
})`
  --width-height: ${({ size }: Props) => (size < 50 ? 50 : size)}px;
  --width-height-after: calc(var(--width-height) - 16px);

  display: inline-block;
  width: var(--width-height);
  height: var(--width-height);

  &:after {
    content: ' ';
    display: block;
    width: var(--width-height-after);
    height: var(--width-height-after);
    margin: 8px;
    border-radius: 50%;
    border: 6px solid ${colors.redPink};
    border-color: ${colors.redPink} transparent ${colors.white} transparent;
    animation: ring 1.2s ease-in-out infinite;
  }
  @keyframes ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

function Loading({ size = 80, ...rest }: Props): JSX.Element {
  return <LoadingStyled size={size} {...rest} data-testid="loading" />
}

export default styled(Loading)``
