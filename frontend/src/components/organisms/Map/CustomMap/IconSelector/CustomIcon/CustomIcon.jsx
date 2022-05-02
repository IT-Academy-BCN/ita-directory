import React from 'react'
import PropTypes from 'prop-types'
import { IconImg } from '../IconsSelector.styles'

function CustomIcon({ icono, handelOnClickIcon }) {
  return (
    <IconImg
      key={icono.key}
      onClick={() => {
        handelOnClickIcon(icono.url)
      }}
    >
      <img src={icono.url} alt={icono.key} />
    </IconImg>
  )
}

CustomIcon.propTypes = {
  icono: PropTypes.object.isRequired,
  handelOnClickIcon: PropTypes.func.isRequired,
}

export default CustomIcon
