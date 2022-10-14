import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '../../../../theme'
import Icon from '../../Icon'

const StyledContainer = styled.div`
  display: flex;
  padding: 0.5rem;

  align-items: center;
  flex-wrap: nowrap;

  border: none;
  border-radius: 4px;
  outline: 1px solid ${colors.grey};
  &:focus-within {
    outline: 1px solid ${colors.lightGrey};
    border: none;
  }
  &:focus {
    outline: 0 none;
    border: 1px solid ${(props) => (props.error ? 'red' : colors.darkBlue)} !important;
  }
`

const InputStyled = styled.input`
  width: 100%;
  font: normal normal normal 16px/32px Helvetica Neue;
  border: none;
  &:focus {
    outline: 0 none;
  }
`

function Input({
  type,
  placeholder,
  onFocus,
  onBlur,
  inputStyles,
  className,
  inputContainerClassName,
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
  icon,
  iconStyles,
  textColor,
}) {
  return (
    <StyledContainer className={`${className} ${error ? 'error' : ''}`}>
      {icon && (
        <Icon color={textColor} name={icon} fill={1} mr="0.5rem" style={{ ...iconStyles }} />
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
