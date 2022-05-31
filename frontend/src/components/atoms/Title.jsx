import React from 'react'
import { space, typography } from 'styled-system'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { colors, font } from '../../theme'

const TitleStyled = styled.h1`
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  ${typography};
  ${space};
`

function Title({
  fontSize = `${font.base}`,
  color = `${colors.darkGrey}`,
  text = '',
  order = 1,
  ...props
}) {
  return (
    <TitleStyled as={`h${order}`} fontSize={fontSize} color={color} text={text} {...props}>
      {text}
    </TitleStyled>
  )
}

Title.propTypes = {
  fontSize: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string.isRequired,
  order: PropTypes.number.isRequired,
}

export default styled(Title)``
