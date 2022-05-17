import styled from 'styled-components'
import Colors from '../../../theme/colors'

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const Wrapper = styled.div`
  margin-bottom: 25px;
  p {
    color: ${Colors.grey};
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
  .Map-container {
    min-width: 300px;
  }
`

export const StyledSmall = styled.small`
  color: ${Colors.redColor};
`
