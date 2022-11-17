import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '../../../theme'
import Text from '../Text'

const LabelStyled = styled(Text)`
  &.hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
    clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
    clip: rect(1px, 1px, 1px, 1px);
    overflow: hidden;
  }
  ${(props) => props.isError && `color: ${colors.extraDarkRed} `}
`
function Label({ label, htmlFor, isError = false, hiddenLabel = false }) {
  return (
    <LabelStyled
      as="label"
      text={label}
      htmlFor={htmlFor}
      isError={isError}
      className={`${hiddenLabel ? 'hidden' : ''}`}
    />
  )
}

Label.propTypes = {
  label: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  isError: PropTypes.bool,
  hiddenLabel: PropTypes.bool,
}

export default styled(Label)``
