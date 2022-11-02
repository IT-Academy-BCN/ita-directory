import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const InputStyled = styled.input`
  width: 100%;
  border: none;

  outline: 0 none;
  border: none;

  &:hover {
    outline: 0 none;
    border: none;
  }
  &:focus {
    outline: 0 none;
    border: none;
  }
  &:focus-within {
    outline: 0 none;
    border: none;
  }
  &[type='number'] {
    -moz-appearance: textfield;
  }
`

function Input({ register, required, type, name, id, className, error, ...rest }) {
  return (
    <InputStyled
      type={type}
      className={className}
      id={id}
      name={name}
      error={error}
      required={required}
      {...(register && register)}
      {...rest}
    />
  )
}

Input.propTypes = {
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
}

export default styled(Input)``
