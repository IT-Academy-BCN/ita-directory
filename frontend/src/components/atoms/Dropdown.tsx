import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { colors, dimensions } from '../../theme'

import useOnClickOutside from '../../hooks/useOnClickOutside'
import useWindowSize from '../../hooks/useWindowSize'
import getParentPosition from '../../utils/getParentPosition'

type TDropdown = {
  children: object
  parentId: string
  setDropdownVisible: (value: boolean) => void
}

type TPosition = {
  x: number
  y: number
  height: number
}

type TDropdownStyled = {
  position: TPosition
}

const DropdownStyled = styled.div<TDropdownStyled>`
  position: absolute;
  padding: ${dimensions.spacing.none};
  z-index: 1;
  top: ${({ position }) => position.y + position.height}px;
  left: ${({ position }) => position.x}px;
  text-align: center;
  background: transparent 0% 0% no-repeat padding-box;
  border: 1px solid ${colors.lighterGrey};
  border-radius: ${dimensions.borderRadius.sm};
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

function Dropdown({ setDropdownVisible, children, parentId }: TDropdown) {
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
      {React.Children.map(children, (child) => child)}
    </DropdownStyled>
  )
}

export default Dropdown
