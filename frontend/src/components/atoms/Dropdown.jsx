import React, { useState, useRef, useEffect } from 'react'
import PropType from 'prop-types'
import styled from 'styled-components'
import { colors } from '../../theme'

import useOnClickOutside from '../../hooks/useOnClickOutside'
import useWindowSize from '../../hooks/useWindowSize'
import getParentPosition from '../../utils/getParentPosition'

function Dropdown({ setDropdownVisible, children, parentId }) {
  const [width, height] = useWindowSize() 
  const parentPosition = getParentPosition(parentId) 
  const [position, setPosition] = useState(parentPosition)

  const ref = useRef(null)
  useOnClickOutside(ref, () => setDropdownVisible(false)) 

  useEffect(() => {
    if (parentPosition.x !== position.x || parentPosition.y !== position.y) {
      setPosition(parentPosition)
    }
  }, [width, height, parentId, parentPosition, position])

  return (
    <DropdownStyled ref={ref} position={position}>
      {React.Children.map(children, (child) => {
        return child
      })}
    </DropdownStyled>
  )
}

Dropdown.propTypes = {
  children: PropType.object.isRequired,
  parentId: PropType.string.isRequired,
  setDropdownVisible: PropType.func.isRequired,
}

const DropdownStyled = styled.div`
  position: absolute;
  padding: 0;
  z-index: 1;
  top: ${(props) => props.position.y + props.position.height}px;
  left: ${(props) => props.position.x}px;
  text-align: center;
  background: transparent 0% 0% no-repeat padding-box;
  border: 1px solid ${colors.lighterGrey};
  border-radius: 10px;
  opacity: 1;

  a,
  Link {
    text-decoration: none;
    color: ${colors.grey};
    &:hover {
      color: ${colors.redPink};
    }
  }
`

export default Dropdown
