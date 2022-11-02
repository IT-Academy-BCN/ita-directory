import React from 'react'
import PropTypes from 'prop-types'

export default function ProfileImage({ imgSource }) {
  return <img src={imgSource} alt="Foto de perfil" />
}

ProfileImage.propTypes = {
  imgSource: PropTypes.node,
}
