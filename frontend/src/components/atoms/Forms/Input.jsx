import React from 'react'
import PropTypes from 'prop-types'
import { InputStyled, ErrorStyled, ContainerInput } from './Input.styled'

function Input({
  type,
  placeholder,
  onFocus,
  onBlur,
  inputStyles,
  className,
  id,
  name,
  minlength,
  maxlength,
  size,
  error,
  disabled,
  label,
  required,
  icon,
  register,
  onChange,
  ref,
  accept,
}) {
  return (
    <ContainerInput>
      <InputStyled
        type={type}
        placeholder={placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
        className={`${className} ${error ? 'error' : ''}`}
        id={id}
        name={name}
        disabled={disabled}
        minLength={minlength}
        maxLength={maxlength}
        size={size}
        error={error}
        required={required}
        style={inputStyles}
        onChange={onChange}
        ref={ref}
        accept={accept}
        {...(register && register)}
      />
      <ErrorStyled>{error}</ErrorStyled>
    </ContainerInput>
  )
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  textStyles: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  inputStyles: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  labelStyles: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  name: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  minlength: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  maxlength: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  size: PropTypes.number,
  disabled: PropTypes.bool,
  errorText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  success: PropTypes.bool,
  inputContainerClassName: PropTypes.string,
  required: PropTypes.bool,
  minMarginTop: PropTypes.bool,
  onChange: PropTypes.func,
  ref: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  label: PropTypes.string,
  icon: PropTypes.node,
  register: PropTypes.bool,
  accept: PropTypes.string,
}

export default Input
