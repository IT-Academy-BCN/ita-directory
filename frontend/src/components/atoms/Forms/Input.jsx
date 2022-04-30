import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors, font } from '../../../theme'

const InputStyled = styled.input`
  height: 40px;
  width: 90%;
  padding: 0rem 1rem;
  margin: 5px 0px;
  border-radius: 0.5rem;
  border: 1px solid #b0b0b0;
  font-size: ${font.base};

  &:hover {
    border: 1px solid ${colors.redPink};
  }
  &.error {
    border: 1px solid #fecaca !important;
  }
  &:focus {
    outline: 0 none;
    border: 1px solid ${(props) => (props.error ? 'red' : colors.darkBlue)} !important;
  }
`

function Input({
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
  innerRef,
  accept,
}) {
  return (
    <InputStyled
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
      ref={innerRef}
      accept={accept}
      {...(register && register)}
    />
  )
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
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
  innerRef: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  register: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  accept: PropTypes.string,
}

export default styled(Input)``
