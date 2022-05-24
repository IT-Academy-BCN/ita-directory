import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
// import Icon from './Icon'
import { colors, font } from '../../theme'

const StyledButton = styled.button.attrs({})`
  display: flex;
  justify-content: center;
  background: ${colors.redPink};
  border: 0;
  color: ${colors.white};
  padding: 0.8rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: ${font.base};
  margin: 10px 0px;

  &:hover {
    filter: brightness(1.1);
  }

  &.blue-gradient {
    background: linear-gradient(90deg, ${colors.lightBlue}, ${colors.darkBlue});
  }
  &.orange-gradient {
    background: linear-gradient(90deg, ${colors.lightOrange}, ${colors.darkOrange});
  }
  &.green-gradient {
    background: linear-gradient(90deg, ${colors.lightGreen}, ${colors.darkGreen});
  }
  &.transparent {
    background: transparent;
    color: ${colors.darkBlue};
  }
  &.darkRed {
    background: ${colors.extraDarkRed};
  }
  &.darkBlue {
    background: ${colors.extraDarkBlue};
  }
  &.disabled {
    cursor: not-allowed;
    opacity: 0.57;
  }
  &.animated {
    svg {
      animation: rotation 0.8s ease-in-out infinite;
    }
  }
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

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

export default styled(Button)``
