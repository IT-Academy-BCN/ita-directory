// Components
import PropTypes from 'prop-types'
import React from 'react'
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

// @ts-ignore
function CheckBox({ error, register }) {
  return (
    <CheckBoxContainer className="check-box-container">
      <Input type="checkbox" className="input" register={register} />
      {error && <ErrorMessage text={error} />}
    </CheckBoxContainer>
  )
}

CheckBox.propTypes = {
  // @ts-ignore
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  register: PropTypes.object,
  id: PropTypes.string,
  name: PropTypes.string,
}

export default CheckBox
