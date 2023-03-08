import React, { InputHTMLAttributes } from 'react'
import styled from 'styled-components'
import { colors } from '../../../theme'

type TInputCheckbox = InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean | string
  label: string
  ref?: React.RefObject<HTMLInputElement>
  register?: object
}

const InputStyled = styled.input<TInputCheckbox>`
  height: 40px;
  width: 100%;
  padding: 0rem 1rem;
  margin: 5px 0px;
  border-radius: 0.5rem;
  border: 1px solid #b0b0b0;
  font-size: 16px;

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
