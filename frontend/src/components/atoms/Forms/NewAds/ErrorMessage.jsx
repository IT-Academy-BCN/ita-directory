import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors, font } from '../../../../theme'

const ErrorStyled = styled.p`
  margin: 0px 0px 8px 10px;
  font-size: ${font.xss};
  font-style: oblique;
  color: ${colors.bloodRed};
`
function ErrorMessage({ text }) {
  return (
    <ErrorStyled as="span" data-testid="error">
      {text}
    </ErrorStyled>
  )
}

ErrorMessage.propTypes = {
  text: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
}

export default styled(ErrorMessage)``
