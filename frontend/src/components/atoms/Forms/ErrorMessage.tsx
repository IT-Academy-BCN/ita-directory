import React from 'react'
import styled from 'styled-components'
import { colors, font } from '../../../theme'

type TErrorMessage = {
  text?: boolean | string
}

const ErrorStyled = styled.p`
  margin: 0px 0px 8px 10px;
  font-size: ${font.xss};
  font-style: oblique;
  color: ${colors.bloodRed};
`
function ErrorMessage({ text }: TErrorMessage) {
  return (
    <ErrorStyled as="span" data-testid="error">
      {text}
    </ErrorStyled>
  )
}

export default styled(ErrorMessage)``
