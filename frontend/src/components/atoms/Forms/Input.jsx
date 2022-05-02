import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import { colors } from '../../../theme'

const InputStyled = styled.input`
  height: 40px;
  width: 90%;
  padding: 0rem 1rem;
  margin: 5px 0px;
  border-radius: 0.5rem;
  border: 1px solid #b0b0b0;
  font-size: 16px;

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
  icon,
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
}) {
  return (
    <div>
      {icon && <FontAwesomeIcon icon={icon} />}
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
        error={error}
        required={required}
        style={inputStyles}
        onChange={onChange}
        ref={ref}
        accept={accept}
        {...(register && register)}
      />
    </div>
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
  icon: PropTypes.node,
  ref: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  register: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  accept: PropTypes.string,
}

export default styled(Input)``
