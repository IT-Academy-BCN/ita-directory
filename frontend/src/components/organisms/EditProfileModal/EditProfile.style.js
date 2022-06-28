import styled from 'styled-components'
import { colors } from '../../../theme'

export const EditModalStyled = styled.form`
  display: flex;
  /* height: auto; */
  justify-content: center;
  flex-direction: column;
  font: normal normal normal 16px/24px Arial;
  background: 0% 0% no-repeat padding-box;
  border-radius: 6px;
  opacity: 1;
  color: #4a4a4a;

  .inputsWrapper {
    display: flex;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;

    input {
      margin-bottom: 50px;
    }
    label {
      display: flex;
      flex-direction: row;
      margin-right: 3rem;
      p {
        margin-top: 0;
        font-style: italic;
      }
    }
  }
`

// BOX PHOTO
export const PhotoWrapper = styled.div`
  display: flex;

  .profileContain {
    display: flex;
    flex-direction: column;
    width: 22rem;
    margin-left: 2rem;
    justify-self: stretch;
  }

  .containerImage {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10rem;
    height: 10rem;
    margin: 3%;
    box-shadow: 0px 6px 8px rgba(25, 50, 47, 0.08), 0px 3px 4px rgba(18, 71, 52, 0.02),
      0px 1px 16px rgba(18, 71, 52, 0.03);
    border-radius: 2%;
  }

  .StyledSubtitle {
    display: flex;
    justify-content: start;
    flex-direction: column;
    font: 18px Arial;
    font-weight: normal;
    background: 0% 0% no-repeat padding-box;
    color: #4a4a4a;
  }
  .StyledTextProfile {
    display: flex;
    justify-content: start;
    flex-direction: column;
    font: 13px Arial;
    font-weight: normal;
    background: 0% 0% no-repeat padding-box;
    color: #4a4a4a;
    line-height: 2rem;
  }
`

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const StyledSmall = styled.small`
  color: ${colors.redColor};
`
