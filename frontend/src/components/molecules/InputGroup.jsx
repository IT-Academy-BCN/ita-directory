import React from 'react'
import styled from 'styled-components'
import { ErrorMessage, Label, Input } from '../atoms'

const InputGroupStyled = styled.div`
  ${Label}
`

function InputGroup() {
  return (
    <InputGroupStyled>
      <Label />
      <Input />
      <ErrorMessage />
    </InputGroupStyled>
  )
}

export default InputGroup
