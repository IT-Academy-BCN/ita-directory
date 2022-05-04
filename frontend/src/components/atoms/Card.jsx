import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors, device } from '../../theme'

const CardStyled = styled.div`
  display: flex;
  background: ${colors.white} 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid ${colors.extraLightGrey};
  border-radius: 6px;
  opacity: 1;
  align-items: center;
  flex-direction: column;
  @media only ${device.Tablet} {
    flex-direction: row;
  }
`

function Card({ children }) {
  return <CardStyled>{children}</CardStyled>
}
Card.propTypes = {
  children: PropTypes.node,
}

export default styled(Card)``
