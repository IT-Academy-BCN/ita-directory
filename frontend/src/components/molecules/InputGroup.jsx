import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ErrorMessage, Label, Input } from '../atoms'

const InputGroupStyled = styled.div`
  ${Label}
`

function InputGroup({
  type,
  placeholder,
  onFocus,
  onBlur,
  inputStyles,
  className,
  id,
  name,
  size,
  error,
  disabled,
  required,
  register,
  onChange,
  ref,
  accept,
  label,
  htmlFor,
  isError = false,
}) {
  console.log(error)
  return (
    <InputGroupStyled>
      <Label as="label" htmlFor={htmlFor} text={label} />
      <Input
        type={type}
        placeholder={placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
        className={`${className} ${error ? 'error' : ''}`}
        id={id}
        name={name}
        disabled={disabled}
        size={size}
        error={error}
        required={required}
        style={inputStyles}
        onChange={onChange}
        ref={ref}
        accept={accept}
        {...(register && register)}
      />
      <ErrorMessage error={error} />
    </InputGroupStyled>
  )
}

InputGroup.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  inputStyles: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  name: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  size: PropTypes.number,
  disabled: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  success: PropTypes.bool,
  inputContainerClassName: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  ref: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  register: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  accept: PropTypes.string,
  label: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  isError: PropTypes.bool,
}

export default InputGroup
