import React from 'react'
import PropTypes from 'prop-types'

function ProfileImage({ imgSource, alt }) {
  return <img src={imgSource} alt={alt} />
}

ProfileImage.propTypes = {
  imgSource: PropTypes.node,
  alt: PropTypes.string,
}

export default ProfileImage
