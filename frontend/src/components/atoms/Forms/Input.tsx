import React from 'react'
import styled from 'styled-components'
import { colors } from '../../../theme'

type TInputStyled = {
  error?: boolean
}

const InputStyled = styled.input<TInputStyled>`
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
type TInput = {
  accept?: string
  className?: string
  disabled?: boolean
  error?: boolean
  id?: string
  inputStyles?: React.CSSProperties
  name?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  ref?: React.RefObject<HTMLInputElement>
  register?: object
  required?: boolean
  size?: number
  type: string
}

function Input({
  accept,
  className,
  disabled,
  error,
  id,
  inputStyles,
  name,
  onChange,
  placeholder,
  ref,
  register,
  required,
  size,
  type,
  ...rest
}: TInput) {
  return (
    <div>
      <InputStyled
        accept={accept}
        className={`${className} ${error ? 'error' : ''}`}
        disabled={disabled}
        error={error}
        id={id}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        ref={ref}
        required={required}
        size={size}
        style={inputStyles}
        type={type}
        {...rest}
        {...register}
      />
    </div>
  )
}

export default styled(Input)``
