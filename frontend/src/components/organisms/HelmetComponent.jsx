import React from 'react'
import { Helmet } from 'react-helmet-async'
import PropTypes from 'prop-types'

export default function HelmetComponent({ text }) {
  return (
    <Helmet>
      <title>{text}</title>
    </Helmet>
  )
}

HelmetComponent.propTypes = {
  text: PropTypes.string.isRequired,
}
