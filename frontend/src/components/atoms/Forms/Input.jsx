import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '../../../theme'
import Icon from '../Icon'

const InputStyled = styled.input`
  height: 2.5rem;
  padding: 0rem 1rem;
  margin: 5px 0px;
  border-radius: 6px;
  border: 1px solid ${colors.grey};
  font-size: 16px;

  &:hover {
    border-color: ${colors.darkGrey};
  }
  &.error {
    border-color: ${colors.darkRed};
  }
  &:focus {
    // outline: 0 none;
    // border: 1px solid ${(props) => (props.error ? 'red' : colors.darkBlue)} !important;
  }
`
const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  width: 18.6rem;
  height: 2.6rem;

  &:hover {
  }
  &.error {
  }
  &:focus {
  }

  &:focus-within {
  }

  &.error:focus-within {
  }

  .styledIcon {
    display: flex;
    margin-right: 6px;
    color: #999999;
    flex-basis: 20px;
  }
`

function Input({
  type,
  placeholder,
  onFocus,
  onBlur,
  inputStyles,
  className,
  id,
  icon,
  name,
  size,
  error,
  disabled,
  required,
  register,
  onChange,
  ref,
  accept,
  iconStyles,
  textColor,
}) {
  return (
    <div>
      <StyledContainer className={`${className} ${error ? 'error' : ''}`}>
        {icon && (
          <div className="styledIcon">
            <Icon color={textColor} name={icon} mr="0.5rem" style={{ ...iconStyles }} />
          </div>
        )}
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
      </StyledContainer>
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
  icon: PropTypes.node,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  success: PropTypes.bool,
  inputContainerClassName: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  ref: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  register: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  accept: PropTypes.string,
  iconStyles: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  textColor: PropTypes.string,
}

export default styled(Input)``
