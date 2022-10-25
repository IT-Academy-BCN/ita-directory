import PropTypes from 'prop-types'
import styled from 'styled-components'
import Text from '../Text'

function Label({ label, htmlFor, isError = false, hiddenLabel }) {
  return (
    <Text as="label" text={label} htmlFor={htmlFor} className={`${hiddenLabel ? 'hidden' : ''}`} />
  )
}

Label.propTypes = {
  label: PropTypes.string.isRequired,
  htmlFor: PropTypes.string,
  isError: PropTypes.bool,
  hiddenLabel: PropTypes.bool,
}

export default styled(Label)``
