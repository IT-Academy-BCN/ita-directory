import styled from 'styled-components'
import { device, colors } from '../../../theme'

export const InputNumberStyled = styled.div`
  display: flex;
  flex-direction: row;

  @media ${device.Tablet} {
    flex-direction: column;
  }

  label {
    display: flex;
    flex-direction: row;
    padding: 3px 45px 0 0;
    color: #999999;
  }

  .inputsContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  border-radius: 5px;
  width: 18.6rem;
  height: 2.6rem;
  padding: 5px;

  border-bottom: 1px solid ${colors.lightGray};

  &:hover {
    border-radius: 1rem;
    border-bottom: 1px solid ${colors.redPink};
  }
  &.error {
    border: 1px solid #fecaca !important;
  }
  &:focus {
    outline: 0 none;
    border-radius: 1rem;
    border: 1px solid ${(props) => (props.error ? 'red' : colors.darkBlue)} !important;
  }

  /* &.error {
		border: 1px solid ${colors.redColor};
		color: #7d868b;
	} */
  &:focus-within {
    /* outline: 0 none;
		border: 2px solid #000 !important; */
  }

  &.error:focus-within {
    border-color: red !important;
  }

  .styledIcon {
    display: flex;
    margin-right: 6px;
    color: #999999;
    flex-basis: 20px;
  }
`

export const StyledInput = styled.input`
  width: 18.6rem;
  height: 2rem;
  border: none;
  display: flex;
  font: normal normal normal 16px/32px Helvetica Neue;
  font-size: 14px;
  color: #393939;
  padding: 0.75rem;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type='number'] {
    -moz-appearance: textfield;
  }
  &:focus-within {
    outline: 0 none;
    border: none;
  }
  &.error {
    border: none;
    outline: 0 none;
  }
`

export const StyledError = styled.small`
  color: #e74c3c;
  left: 0;
  top: 0;
  visibility: visible;
  margin-bottom: 15px;
  &.errorProfile {
    position: static;
  }
`
