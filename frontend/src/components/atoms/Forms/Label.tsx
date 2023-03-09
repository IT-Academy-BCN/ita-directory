import React, { LabelHTMLAttributes } from 'react'
import styled from 'styled-components'
import { colors, font } from '../../../theme'
import Text from '../Text'

type TLabel = LabelHTMLAttributes<HTMLLabelElement> & {
  label: string
  isError?: boolean | string
  hiddenLabel?: boolean
  labelStyles?: object
}

const LabelStyled = styled(Text)<TLabel>`
  color: ${colors.lightGrey};
  font-size: 0.8rem;
  font-weight: bold;
  font-family: ${font.fontFamily};
  &.hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
    clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
    clip: rect(1px, 1px, 1px, 1px);
    overflow: hidden;
  }
  ${({ isError }) => isError && `color: ${colors.extraDarkRed} `}
`
function Label({ label, htmlFor, isError = false, hiddenLabel = false, labelStyles }: TLabel) {
  return (
    <LabelStyled
      as="label"
      label={label}
      text={label}
      htmlFor={htmlFor}
      isError={isError}
      className={`${hiddenLabel ? 'hidden' : ''}`}
      style={{ ...labelStyles }}
    />
  )
}

export default styled(Label)``
