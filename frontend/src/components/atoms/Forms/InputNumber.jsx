import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { device } from '../../../theme'
import Icon from '../Icon'

const InputNumberStyled = styled.div`
  display: flex;
  flex-direction: row;

  @media ${device.Tablet} {
    flex-direction: column;
  }

  label {
    display: flex;
    flex-direction: row;
    padding: 3px 45px 0 0;
    color: #999999;
  }

  .inputsContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

const StyledInput = styled.input`
  width: 18.6rem;
  height: 2rem;
  border: none;
  display: flex;
  font: normal normal normal 16px/32px Helvetica Neue;
  font-size: 14px;
  color: #393939;
  padding: 0.75rem;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type='number'] {
    -moz-appearance: textfield;
  }
  &:focus-within {
    outline: 0 none;
    border: none;
  }
  &.error {
    border: none;
    outline: 0 none;
  }
`

const StyledError = styled.small`
  color: #e74c3c;
  left: 0;
  top: 0;
  visibility: visible;
  margin-bottom: 15px;
  &.errorProfile {
    position: static;
  }
`

function InputNumber({
  placeholder,
  onFocus,
  onBlur,
  textStyles,
  inputStyles,
  labelStyles,
  className,
  id,
  name,
  min,
  max,
  size,
  error,
  errorStyles,
  disabled,
  step,
  icon,
  label,
  register,
  type,
  iconStyles,
  textColor,
}) {
  return (
    <InputNumberStyled>
      <label htmlFor={id}>{label}</label>
      <div className="inputsContainer">
        <StyledContainer className={`${className} ${error ? 'error' : ''}`}>
          {icon && (
            <div className="styledIcon">
              <Icon color={textColor} name={icon} mr="0.5rem" style={{ ...iconStyles }} />
            </div>
          )}
          <StyledInput
            type={type}
            placeholder={placeholder}
            onFocus={onFocus}
            onBlur={onBlur}
            className={`${className} ${error ? 'error' : ''}`}
            id={id}
            name={name}
            min={min}
            max={max}
            disabled={disabled}
            step={step}
            textStyles={textStyles}
            inputStyles={inputStyles}
            labelStyles={labelStyles}
            size={size}
            errorStyles={errorStyles}
            error={error}
            {...(register && register)}
          />
        </StyledContainer>
        <StyledError className={className}>{error}</StyledError>
      </div>
    </InputNumberStyled>
  )
}

InputNumber.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  textStyles: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  inputStyles: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  labelStyles: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  name: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  min: PropTypes.number,
  max: PropTypes.number,
  size: PropTypes.number,
  disabled: PropTypes.bool,
  errorText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  errorStyles: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  step: PropTypes.number,
  required: PropTypes.bool,
  error: PropTypes.bool,
  icon: PropTypes.node,
  label: PropTypes.string,
  register: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  type: PropTypes.string,
  iconStyles: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  textColor: PropTypes.string,
}

export default styled(InputNumber)``
