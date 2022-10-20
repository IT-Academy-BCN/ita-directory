import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const LabelStyle = styled.div`
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
function Label({ label, htmlFor, isError = false, hidden }) {
  return (
    <LabelStyle>
      <label className={hidden && 'hidden'} htmlFor={htmlFor}>
        {label}
      </label>
    </LabelStyle>
  )
}

Label.propTypes = {
  label: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  isError: PropTypes.bool,
  hidden: PropTypes.bool,
}

export default styled(Label)``
