import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors, dimensions } from '../../theme'
import { FlexBox } from '../../theme/wrappers'

const CardStyled = styled(FlexBox)`
  background: white;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid ${colors.extraLightGrey};
  border-radius: ${dimensions.borderRadius}px;
  padding: 1rem;
`

function Card({ children, className = '' }) {
  return <CardStyled className={className}>{children}</CardStyled>
}
Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default styled(Card)``
