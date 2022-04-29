import styled from 'styled-components'
import { colors } from '../../../theme'

// eslint-disable-next-line import/prefer-default-export
export const InputStyled = styled.input`
  height: 40px;
  width: 90%;
  padding: 0rem 1rem;
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
