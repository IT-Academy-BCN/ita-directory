import React from 'react'
import styled from 'styled-components'
import { colors, device } from '../../../theme'

interface TextAreaProps {
  error?: boolean
}

const TextAreaStyled = styled.textarea<TextAreaProps>`
  width: 93%;
  display: flex;
  margin: 0 auto;
  justify-self: center;

  @media ${device.Tablet} {
    margin: 0;
  }

  &.error {
    border: 1px solid #fecaca !important;
  }
  &:focus {
    outline: 0 none;
    border: 1px solid ${(props) => (props.error ? 'red' : colors.darkBlue)} !important;
  }
`

interface TextAreaProps {
  className?: string
  cols?: number
  disabled?: boolean
  error?: boolean
  id?: string
  label: string
  maxLength?: number
  minLength?: number
  name?: string
  placeholder?: string
  register?: object
  required?: boolean
  rows?: number
}

function TextArea({
  className,
  cols,
  disabled,
  error,
  id,
  label,
  maxLength,
  minLength,
  name,
  placeholder,
  register,
  required = false,
  rows,
  ...rest
}: TextAreaProps) {
  return (
    <TextAreaStyled
      placeholder={placeholder}
      className={`${className} ${error ? 'error' : ''}`}
      id={id}
      label={label}
      name={name}
      disabled={disabled}
      maxLength={maxLength}
      minLength={minLength}
      rows={rows}
      cols={cols}
      required={required}
      error={error}
      {...rest}
      {...register}
    />
  )
}

export default styled(TextArea)``
