import PropTypes from 'prop-types'
import styled from 'styled-components'
import Text from '../Text'

const LabelStyle = styled.span`
  .hidden {
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
`
function Label({ label, htmlFor, isError = false, hiddenLabel }) {
  return (
    <LabelStyle>
      <Text
        as="label"
        text={label}
        htmlFor={htmlFor}
        className={`${hiddenLabel ? 'hidden' : ''}`}
      />
    </LabelStyle>
  )
}

Label.propTypes = {
  label: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  isError: PropTypes.bool,
  hiddenLabel: PropTypes.bool,
}

export default styled(Label)``
