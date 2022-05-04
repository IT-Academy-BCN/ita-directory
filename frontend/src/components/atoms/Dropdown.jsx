// create dropdown component with props using useClickOutside hook
import React, { useState, useRef, useEffect } from 'react'
import PropType from 'prop-types'
import styled from 'styled-components'
import { colors } from '../../theme'

import useOnClickOutside from '../../hooks/useOnClickOutside'
import useWindowSize from '../../hooks/useWindowSize'
import getParentPosition from '../../utils/getParentPosition'

function Dropdown({ dropdownVisible, setDropdownVisible, children, parentId }) {
  const [width, height] = useWindowSize()
  const parentPosition = getParentPosition(parentId)
  const [position, setPosition] = useState(parentPosition)
  // console.log(parentPosition)
  // console.log('position', position)

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
  dropdownVisible: PropType.bool.isRequired,
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

  ul {
    list-style-type: none;
    padding: 0px;
    margin-top: 10px;
    position: absolute;
    box-shadow: 0px 4px 10px ${colors.darkerShadow};
    background: transparent;
    border-radius: 6px;

    li {
      border: 1px solid ${colors.lighterGrey};
      align-items: center;
      text-align: left;
      padding-left: 15px;
      min-width: 6rem;
      width: 150px;
      display: block;
      background-color: ${colors.white};
      position: relative;
      z-index: 2;
      line-height: 2.5rem;
      border-bottom: 0;
      right: 0;

      border-left: 0.3rem solid white;
      border-right: 0.3rem solid white;

      &:hover {
        /* box-shadow: 0 2px 0.4rem ${colors.redPink}; */
        border-left: 0.3rem solid ${colors.redPink};
        border-right: 0.3rem solid ${colors.redPink};

        a {
          color: ${colors.redPink};
        }
      }

      &:first-child {
        border-top-right-radius: 6px;
        border-top-left-radius: 6px;
      }

      &:last-child {
        border-bottom-right-radius: 6px;
        border-bottom-left-radius: 6px;
      }

      a,
      Link {
        text-decoration: none;
        color: ${colors.grey};
      }
    }
  }
`

export default Dropdown
