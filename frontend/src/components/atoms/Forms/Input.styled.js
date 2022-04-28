import styled from 'styled-components'
import { colors } from '../../../theme'

export const ContainerInput = styled.div`
  width: 75%;
`

export const InputStyled = styled.input`
  height: 40px;
  width: 90%;
  padding: 0rem 1rem;
  border-radius: 0;
  margin: 5px 0px;
  border-radius: 0.5rem;
  border: 1px solid #b0b0b0;
  font-size: 16px;

  &:hover {
    border: 1px solid ${colors.redPink};
  }
  &.error {
    border: 1px solid #fecaca !important;
  }
  &:focus {
    outline: 0 none;
    border: 1px solid ${(props) => (props.error ? 'red' : colors.darkBlue)} !important;
  }
`
export const ErrorStyled = styled.p`
  display: block;
  margin: 0px 0px 8px 0px;
  font-size: 0.6rem;
  font-style: oblique;
  text-align: center;
  font-size: 12px;
  color: red;
`
