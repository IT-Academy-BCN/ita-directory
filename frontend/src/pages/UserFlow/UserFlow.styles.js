import styled from 'styled-components'
import { colors } from '../../theme'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 65vh; */
  padding-bottom: 4rem;
`

export const Form = styled.form`
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  box-shadow: 0 2px 7px ${colors.darkerShadow};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 2rem 1.5rem 2rem;
  width: 22rem;

  & > input {
    margin: 0;
  }

  & > input:not(:first-of-type) {
    margin-top: 1.5rem;
  }
`

export const RedirectStyled = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  color: ${colors.grey};
  font-size: 0.8rem;

  & > a {
    text-decoration: none;
    color: ${colors.darkRed};
    margin-left: 0.2rem;

    &:hover {
      color: ${colors.extraDarkBlue};
    }
  }
`

export const LabelStyled = styled.label`
  display: inline-block;
  font: normal normal 300 14px/18px Helvetica Neue;
`
