import styled from 'styled-components'
import PropTypes from 'prop-types'
import { space, typography } from 'styled-system'
import { colors } from '../../theme'

const IconStyled = styled.span`
  font-variation-settings: 'FILL' ${(props) => props.fill}, 'wght' ${(props) => props.wght},
    'GRAD' ${(props) => props.grad}, 'opsz' ${(props) => props.opsz};
  color: ${(props) => props.color};
  font-size: ${(props) => props.size}px;
  ${space}
  ${typography}
`

function Icon({
  name,
  size = 24,
  color = colors.lightGrey,
  fill = 0,
  wght = 400,
  grad = 0,
  opsz = 48,
  className = '',
  ...props
}) {
  return (
    <IconStyled
      className={`material-symbols-outlined ${className}`}
      fill={fill}
      wght={wght}
      grad={grad}
      opsz={opsz}
      size={size}
      color={color}
      {...props}
    >
      {name}
    </IconStyled>
  )
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  fill: PropTypes.number,
  wght: PropTypes.number,
  grad: PropTypes.number,
  opsz: PropTypes.number,
  className: PropTypes.string,
}

export default styled(Icon)``
