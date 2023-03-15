import React, { useRef } from 'react'
import styled from 'styled-components'
import { colors, dimensions } from '../../theme'

import useOnClickOutside from '../../hooks/useOnClickOutside'

type TDropdown = {
  children: React.ReactNode
  setDropdownVisible: (value: boolean) => void
}

const DropdownStyled = styled.div`
  position: absolute;
  padding: ${dimensions.spacing.none};
  z-index: 1;
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

function Dropdown({ setDropdownVisible, children }: TDropdown) {
  const ref = useRef(null)
  useOnClickOutside(ref, () => setDropdownVisible(false))

  return <DropdownStyled ref={ref}>{children}</DropdownStyled>
}

export default Dropdown
