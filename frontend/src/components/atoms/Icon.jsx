import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const IconStyled = styled.span`
  font-variation-settings: 'FILL' ${(props) => props.fill}, 'wght' ${(props) => props.wght},
    'GRAD' ${(props) => props.grad}, 'opsz' ${(props) => props.opsz};
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
`

function Icon({ name, size = 24, color = '#333', fill = 0, wght = 400, grad = 0, opsz = 48 }) {
  return (
    <IconStyled
      className="material-symbols-rounded"
      fill={fill}
      wght={wght}
      grad={grad}
      opsz={opsz}
      size={size}
      color={color}
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
}

export default styled(Icon)``
