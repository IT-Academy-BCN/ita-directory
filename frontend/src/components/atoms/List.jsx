import React from 'react'
import PropTypes from 'prop-types'

function List({ className, children }) {
  return <ul className={className}>{children}</ul>
}

List.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default List
