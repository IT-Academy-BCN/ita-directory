import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '../../../theme'
import Icon from '../Icon'

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  border: none;
  outline: 1px solid ${colors.grey};
  border-radius: 4px;
  &:focus-within {
    outline: 1px solid ${colors.lightGrey};
    border: none;
  }
  &[type='number'] {
    -moz-appearance: textfield;
  }
  &.error {
    border: none;
    outline: 0 none;
  }
`

const StyledInput = styled.input`
  width: 100%;
  display: flex;
  font: normal normal normal 16px/32px Helvetica Neue;
  color: ${colors.lightGrey};

  border: none;
  &:focus {
    outline: none;
    color: ${colors.grey};
  }
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
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
  register,
  type,
  iconStyles,
  textColor,
}) {
  return (
    <div className={className}>
      <StyledContainer className={`${className} ${error ? 'error' : ''}`}>
        {icon && (
          <Icon
            color={textColor}
            name={icon}
            fill={1}
            mr="0.5rem"
            ml="0.5rem"
            style={{ ...iconStyles }}
          />
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
