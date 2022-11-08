import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Input } from './Forms'

const InputMapStyled = styled.div`
  width: 100%;
  padding: 0 3px;
  ${Input} {
    box-shadow: 0 3px 6px #00000029;
    border: none;
    align-items: center;
  }
`

export default function InputMap({ value, placeholder, name, onChange }) {
  return (
    <InputMapStyled>
      <Input type="text" value={value} placeholder={placeholder} onChange={onChange} name={name} />
    </InputMapStyled>
  )
}

InputMap.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
}
