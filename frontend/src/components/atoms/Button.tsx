import React from 'react'
import styled from 'styled-components'
import { colors, font } from '../../theme'
import Icon from './Icon'
import Text from './Text'

type MouseEventHandler<T extends HTMLElement> = (event: React.MouseEvent<T, MouseEvent>) => void

type TButtonProps = {
  type?: 'submit' | 'button' | 'reset'
  text?: string
  textColor?: string
  loadingText?: string
  iconPosition?: 'left' | 'right'
  isLoading?: boolean
  disabled?: boolean
  icon?: string
  className?: string
  buttonStyles?: object
  textStyles?: object
  iconStyles?: object
  animated?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
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
  text = undefined,
  textColor = 'white',
  iconPosition = 'left',
  loadingText = undefined,
  isLoading = false,
  disabled = false,
  icon = undefined,
  className = undefined,
  buttonStyles = undefined,
  textStyles = undefined,
  iconStyles = undefined,
  animated = false,
  onClick,
  ...props
}: TButtonProps) {
  return (
    <StyledButton
      type={type}
      disabled={disabled}
      className={`${className} ${animated ? 'animated' : ''} ${disabled ? 'disabled' : ''}`}
      style={{ ...buttonStyles }}
      onClick={onClick}
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
