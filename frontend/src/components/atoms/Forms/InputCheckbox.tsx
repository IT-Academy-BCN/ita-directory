import React, { InputHTMLAttributes } from 'react'
import styled from 'styled-components'
import { colors, dimensions, font } from '../../../theme'

type TInputCheckbox = InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean | string
  label: string
  ref?: React.RefObject<HTMLInputElement>
  register?: object
}

const InputStyled = styled.input<TInputCheckbox>`
  height: 40px;
  width: 100%;
  padding: ${dimensions.spacing.none} ${dimensions.spacing.base};
  margin: 5px ${dimensions.spacing.none};
  border-radius: ${dimensions.borderRadius};
  border: 1px solid #b0b0b0;
  font-size: ${font.base};

  &:hover {
    border: 1px solid ${colors.lightBlue};
  }
  &.error {
    border: 1px solid #fecaca !important;
  }
  &:focus {
    outline: 0 none;
    border: 1px solid ${({ error }) => (error ? 'red' : colors.darkBlue)} !important;
  }
`

function InputCheckbox({ className, error, ref, register, ...rest }: TInputCheckbox) {
  return (
    <div>
      <InputStyled
        className={`${className} ${error ? 'error' : ''}`}
        error={error}
        ref={ref}
        type="checkbox"
        {...rest}
        {...register}
      />
    </div>
  )
}

export default styled(InputCheckbox)``
