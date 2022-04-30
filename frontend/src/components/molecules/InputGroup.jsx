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
  className,
  id,
  name,
  size,
  error,
  disabled,
  required,
  register,
  onChange,
  accept,
  label,
  inputRef,
  htmlFor,
  isError = false,
}) {
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
        required={required}
        onChange={onChange}
        accept={accept}
        innerRef={inputRef}
        register={register}
      />
      <ErrorMessage error={error} />
    </InputGroupStyled>
  )
}

InputGroup.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  className: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  name: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  size: PropTypes.number,
  disabled: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  required: PropTypes.bool,
  onChange: PropTypes.func,
  register: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  accept: PropTypes.string,
  inputRef: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  label: PropTypes.string,
  htmlFor: PropTypes.string,
  isError: PropTypes.bool,
}

export default styled(InputGroup)``
