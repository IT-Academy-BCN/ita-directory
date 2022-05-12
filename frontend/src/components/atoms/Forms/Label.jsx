import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Text from '../Text'

function Label({ label, htmlFor, isError = false, hiddenLabel }) {
  return <Text as="label" htmlFor={htmlFor} text={label} hidden={hiddenLabel} />
}

Label.propTypes = {
  label: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  isError: PropTypes.bool,
  hiddenLabel: PropTypes.bool,
}

export default styled(Label)``
