import React from 'react'
import styled from 'styled-components'
import { colors, dimensions } from '../../theme'
import { FlexBox } from '../../theme/wrappers'

type TCard = {
  children?: React.ReactNode
  className?: string
}

const CardStyled = styled(FlexBox)`
  background: white;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid ${colors.extraLightGrey};
  border-radius: ${dimensions.borderRadius}px;
  padding: 1rem;
`

function Card({ children, className = '' }: TCard) {
  return <CardStyled className={className}>{children}</CardStyled>
}

export default styled(Card)``
