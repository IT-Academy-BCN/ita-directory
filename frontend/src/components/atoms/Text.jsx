import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { colors, font } from '../../theme'

const TextStyled = styled.p`
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
`

function Text({ fontSize = `${font.base}`, color = `${colors.darkGrey}`, text = '', as = 'p' }) {
  return (
    <TextStyled as={as} fontSize={fontSize} color={color} text={text}>
      {text}
    </TextStyled>
  )
}

Text.propTypes = {
  fontSize: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string.isRequired,
  as: PropTypes.string,
}

export default styled(Text)``
