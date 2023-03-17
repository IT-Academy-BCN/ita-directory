import React from 'react'
import { space, typography } from 'styled-system'
import styled from 'styled-components'
import { colors, font } from '../../theme'

type TTitleStyled = {
  fontSize: string
  order: number
  color: string
}

const TitleStyled = styled.h1<TTitleStyled>`
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  ${typography};
  ${space};
` as React.FC<TTitle & { as?: string | undefined }>

type TTitle = {
  text: string
} & Partial<TTitleStyled>

function Title({
  fontSize = `${font.base}`,
  color = `${colors.darkGrey}`,
  text = '',
  order = 1,
  ...props
}: TTitle) {
  return (
    <TitleStyled as={`h${order}`} fontSize={fontSize} color={color} text={text} {...props}>
      {text}
    </TitleStyled>
  )
}

export default styled(Title)``
