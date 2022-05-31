import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Text from '../Text'

function LinksMenu({ as, to, text }) {
  return (
    <Link to={to}>
      <Text as={as} text={text} />
    </Link>
  )
}

LinksMenu.propTypes = {
  to: PropTypes.string.isRequired,
  as: PropTypes.string,
  text: PropTypes.string.isRequired,
}

export default LinksMenu
