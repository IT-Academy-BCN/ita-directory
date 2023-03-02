import React from 'react'
import styled from 'styled-components'
import { colors } from '../../../theme'
import Label from './Label'

interface InputStyledProps {
  error?: boolean
}

const InputStyled = styled.input<InputStyledProps>`
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
interface InputProps {
  accept?: string
  className?: string
  disabled?: boolean
  error?: boolean
  id?: string
  inputStyles?: React.CSSProperties
  label?: string
  name?: string
  onBlur?: () => void
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onFocus?: () => void
  placeholder?: string
  ref?: React.RefObject<HTMLInputElement>
  register?: object
  required?: boolean
  size?: number
  type: string
  value?: string | number
}

function Input({
  accept,
  className,
  disabled,
  error,
  id,
  inputStyles,
  label,
  name,
  onBlur,
  onChange,
  onFocus,
  placeholder,
  ref,
  register,
  required,
  size,
  type,
  value,
}: InputProps) {
  return (
    <div>
      <Label label={label} htmlFor={id} hiddenLabel />
      <InputStyled
        {...register}
        accept={accept}
        className={`${className} ${error ? 'error' : ''}`}
        disabled={disabled}
        error={error}
        id={id}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        placeholder={placeholder}
        ref={ref}
        required={required}
        size={size}
        style={inputStyles}
        type={type}
        value={value}
      />
    </div>
  )
}

export default styled(Input)``
