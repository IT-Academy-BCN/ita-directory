import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Text from './Text'

function LinkMenu({ as, to, text, fontSize }) {
  return (
    <Link to={to}>
      <Text as={as} text={text} pr={3} fontSize={fontSize} />
    </Link>
  )
}

LinkMenu.propTypes = {
  to: PropTypes.string.isRequired,
  as: PropTypes.string,
  text: PropTypes.string.isRequired,
  fontSize: PropTypes.number,
}

export default LinkMenu
