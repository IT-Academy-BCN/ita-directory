import React from 'react'
import styled from 'styled-components'
import { space, typography } from 'styled-system'
import { colors } from '../../theme'

type TIconStyled = {
  size: number
  color: string
  fill: number
  wght: number
  grad: number
  opsz: number
  className: string
}

const IconStyled = styled.span<TIconStyled>`
  font-variation-settings: 'FILL' ${(props) => props.fill}, 'wght' ${(props) => props.wght},
    'GRAD' ${(props) => props.grad}, 'opsz' ${(props) => props.opsz};
  color: ${(props) => props.color};
  font-size: ${(props) => props.size}px;
  ${space}
  ${typography}
`
type TIcon = {
  name: string
} & Partial<TIconStyled>

function Icon({
  name,
  size = 24,
  color = colors.lightGrey,
  fill = 0,
  wght = 400,
  grad = 0,
  opsz = 48,
  className = '',
  ...props
}: TIcon) {
  return (
    <IconStyled
      className={`material-symbols-outlined ${className}`}
      fill={fill}
      wght={wght}
      grad={grad}
      opsz={opsz}
      size={size}
      color={color}
      {...props}
    >
      {name}
    </IconStyled>
  )
}

export default styled(Icon)``
