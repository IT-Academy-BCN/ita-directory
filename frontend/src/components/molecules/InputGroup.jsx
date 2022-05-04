import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ErrorMessage, Label, Input } from '../atoms'

const InputGroupStyled = styled.div`
  ${Label}
`

function InputGroup({
  accept,
  className,
  disabled,
  error,
  id,
  inputStyles,
  isError = false,
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
}) {
  return (
    <InputGroupStyled>
      <Label as="label" htmlFor={id} text={label} />
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
        register={register}
      />
      {isError && <ErrorMessage text={error} />}
    </InputGroupStyled>
  )
}

InputGroup.propTypes = {
  accept: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  inputStyles: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  isError: PropTypes.bool,
  label: PropTypes.string.isRequired,
  name: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  ref: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  register: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  required: PropTypes.bool,
  size: PropTypes.number,
  type: PropTypes.string.isRequired,
}

export default styled(InputGroup)``
