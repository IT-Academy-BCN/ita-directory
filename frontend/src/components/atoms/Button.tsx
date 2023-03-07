import React, { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'
import { colors, font } from '../../theme'
import Icon from './Icon'
import Text from './Text'

type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text?: string
  textColor?: string
  loadingText?: string
  iconPosition?: 'left' | 'right'
  isLoading?: boolean
  icon?: string
  buttonStyles?: object
  textStyles?: object
  iconStyles?: object
  animated?: boolean
}

const StyledButton = styled.button<{
  iconPosition?: TButtonProps['iconPosition']
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.redPink};
  border: 0;
  padding: 0.8rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: ${font.base};
  margin: 10px 0px;
  display: flex;
  flex-direction: ${(props) => (props.iconPosition === 'left' ? 'row' : 'row-reverse')};

  &:hover {
    filter: brightness(1.1);
  }

  &.blue-gradient {
    background: linear-gradient(90deg, ${colors.lightBlue}, ${colors.darkBlue});
  }
  &.blue-gradientWidth {
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
    padding: 0.8rem 1.5rem;
  }
  &.darkBlue {
    background: ${colors.extraDarkBlue};
    padding: 0.8rem 1.5rem;
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
  type = 'submit',
  text = '',
  textColor = 'white',
  iconPosition = 'left',
  loadingText = '',
  isLoading = false,
  disabled = false,
  icon = undefined,
  className = '',
  buttonStyles = undefined,
  textStyles = {},
  iconStyles = undefined,
  animated = false,
  ...props
}: TButtonProps) {
  return (
    <StyledButton
      type={type}
      className={`${className} ${animated ? 'animated' : ''} ${disabled ? 'disabled' : ''}`}
      style={{ ...buttonStyles }}
      iconPosition={iconPosition}
      {...props}
    >
      {!isLoading && icon ? <Icon color={textColor} name={icon} style={{ ...iconStyles }} /> : null}
      {(loadingText || text) && (
        <Text
          text={isLoading ? loadingText : text}
          color={textColor}
          as="span"
          style={{ ...textStyles }}
        />
      )}
    </StyledButton>
  )
}

export default styled(Button)``
