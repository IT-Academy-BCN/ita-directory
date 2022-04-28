import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ErrorStyled = styled.p`
  display: block;
  margin: 0px 0px 8px 0px;
  font-size: 0.6rem;
  font-style: oblique;
  text-align: center;
  font-size: 12px;
  color: red;
`
function ErrorMessage({ error }) {
  return <ErrorStyled>{error}</ErrorStyled>
}

ErrorMessage.propTypes = {
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
}

export default styled(ErrorMessage)``
