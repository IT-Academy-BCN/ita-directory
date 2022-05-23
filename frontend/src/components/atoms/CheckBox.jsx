// Components
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Input, ErrorMessage } from './Forms'

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

function CheckBox({ error }) {
  return (
    <CheckBoxContainer className="CheckBoxContainer">
      <Input type="checkbox" className="Input " />
      {error && <ErrorMessage text={error} />}
    </CheckBoxContainer>
  )
}

CheckBox.propTypes = {
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
}

export default CheckBox
