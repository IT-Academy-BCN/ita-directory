import React, { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { colors } from '../../../theme'

type TInput = HTMLAttributes<HTMLInputElement> & {
  error?: boolean
  register?: object
}

const InputStyled = styled.input<TInput>`
  height: 40px;
  width: 100%;
  padding: 0rem 1rem;
  margin: 5px;
  border-radius: 0.5rem;
  border: 1px solid ${colors.lightGray};

  &:hover {
    border: 1px solid ${colors.lightBlue};
  }
  &.error {
    border: 1px solid ${colors.paleRed};
  }
  &:focus {
    outline: 0 none;
    border: 1px solid ${({ error }) => (error ? colors.redColor : colors.darkBlue)};
  }
`

function InputNumber({ error, register, ...rest }: TInput) {
  return <InputStyled type="number" error={error} {...register} {...rest} />
}

export default styled(InputNumber)``
