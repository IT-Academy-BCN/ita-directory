// Components
import styled from 'styled-components'
import Input from './Forms/Input'

export const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  & input {
    width: 1rem;
    margin: 0;
    margin-right: 0.25rem;
  }

  & small {
    align-self: flex-start;
  }
`

function CheckBox() {
  return (
    <CheckBoxContainer className="CheckBoxContainer">
      <Input type="checkbox" className="Input " />
    </CheckBoxContainer>
  )
}

export default CheckBox
