import styled from 'styled-components'
import { colors } from '../../../theme'

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${colors.lightGray};
`

export const Wrapper = styled.div`
  margin-bottom: 25px;
  p {
    color: ${colors.grey};
    font-size: 0.95rem;
    font-family: 'Arial';
    width: auto;
    letter-spacing: 0px;
    opacity: 1;
    width: auto;
  }

  .input-container {
    width: 100%;
  }

  label {
    padding-right: 0;
    width: auto;
  }
`

export const StyledSmall = styled.small`
  color: ${colors.redColor};
`