import React, { useState, useRef, useEffect } from 'react'
import PropType from 'prop-types'
import styled from 'styled-components'
import { colors } from '../../theme'

import useOnClickOutside from '../../hooks/useOnClickOutside'
import useWindowSize from '../../hooks/useWindowSize'
import getParentPosition from '../../utils/getParentPosition'

  //fc (change visibility of dropdown) obj(HTML list) string (btn-dropdown)
function Dropdown({ setDropdownVisible, children, parentId }) {
  const [width, height] = useWindowSize() // hook =>first render return  window size
  // fc=> information about size and position of an element relative to the viewport.
  // meaning=> get btn-dropdown HTML node position
  const parentPosition = getParentPosition(parentId) 
  // position: initial state===btn-dropdown position
  const [position, setPosition] = useState(parentPosition)

  const ref = useRef(null)
   //hook(appOwn)=> onClick outside DropdownStyled close drowpdown menu
  useOnClickOutside(ref, () => setDropdownVisible(false)) 

  useEffect(() => {
    //if parentPosition is not the same as btn-dropdown ?setPosition(btn-dropdown)
    if (parentPosition.x !== position.x || parentPosition.y !== position.y) {
      setPosition(parentPosition)
    }
  }, [width, height, parentId, parentPosition, position])

  return (
    <DropdownStyled ref={ref} position={position}>
    {/*Invoca una función en cada hijo inmediato dentro de children (child). Si children es un array, será recorrido y la función será llamada para cada hijo en el array. 
    Si children es null o undefined, este método retornará null o undefined en vez de un array. */}
    {/* meaning=> map over UL list, returning li */}
      {React.Children.map(children, (child) => {
        return child
      })}
    </DropdownStyled>
  )
}
//props must be obj,string,fc
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
