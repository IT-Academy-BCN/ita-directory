import React from 'react'
import styled from 'styled-components'
import PropType from 'prop-types'
import { colors, device } from '../../theme'

const blueColor = colors.frenchBlue
const lightBlueColor = colors.lightBlue

const Wrapper = styled.div`
  height: 35px;
  width: 50%;
  background: linear-gradient(to left bottom, ${blueColor}, ${lightBlueColor});
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  transform: none;
  margin-right: 1.5%;
  flex-basis: 8%;

  :hover {
    cursor: pointer;
  }

  @media only ${device.Mobile} {
    width: 35px;
    transform: rotate(270deg);
  }
`

function SearchButton({ handleOnClick, className }) {
  return (
    <Wrapper onClick={handleOnClick} className={className}>
      <span style={{ color: 'white' }}> &#x1F50E;&#xFE0E;</span>
    </Wrapper>
  )
}

SearchButton.propTypes = {
  handleOnClick: PropType.func,
  className: PropType.string,
}

export default styled(SearchButton)``
