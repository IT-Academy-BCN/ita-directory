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

function CheckBox({ error, register }) {
  return (
    <CheckBoxContainer className="check-box-container">
      <Input type="checkbox" className="input" register={register} />
      {error && <ErrorMessage text={error} />}
    </CheckBoxContainer>
  )
}

CheckBox.propTypes = {
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  register: PropTypes.func,
}

export default CheckBox
