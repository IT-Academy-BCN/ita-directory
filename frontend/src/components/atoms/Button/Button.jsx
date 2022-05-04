import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import StyledButton from './Button.styles'

function Button({
  type,
  text,
  loadingText,
  isLoading,
  disabled,
  icon,
  iconPosition,
  className,
  buttonStyles,
  textStyles,
  iconStyles,
  animated,
  onClick,
}) {
  return (
    <StyledButton
      type={type}
      disabled={disabled}
      className={`${className} ${animated ? 'animated' : ''} ${disabled ? 'disabled' : ''}`}
      style={{ ...buttonStyles }}
      onClick={onClick}
    >
      {iconPosition === 'left' &&
        (isLoading && icon ? <FontAwesomeIcon icon={faSpinner} style={{ ...iconStyles }} /> : null)}
      <span style={{ ...textStyles }}>{isLoading ? loadingText : text}</span>
      {iconPosition === 'right' &&
        (isLoading && icon ? <FontAwesomeIcon icon={faSpinner} style={{ ...iconStyles }} /> : null)}
    </StyledButton>
  )
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string,
  loadingText: PropTypes.string,
  isLoading: PropTypes.bool,
  iconPosition: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.node,
  buttonStyles: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  textStyles: PropTypes.object,
  iconStyles: PropTypes.object,
  animated: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
}

export default Button
