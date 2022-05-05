import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Label, TextArea, ErrorMessage } from '../atoms'

const TextAreaGroupStyled = styled.div`
  ${Label}
`

function TextAreaGroup({
  placeholder,
  onFocus,
  onBlur,
  className,
  id,
  name,
  minLength,
  maxLength,
  disabled,
  required = false,
  rows,
  cols,
  error,
  isError = false,
  label,
  register,
}) {
  return (
    <TextAreaGroupStyled>
      <Label as="label" htmlFor={id} text={label} />
      <TextArea
        placeholder={placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
        className={`${className} ${error ? 'error' : ''}`}
        id={id}
        name={name}
        disabled={disabled}
        maxLength={maxLength}
        minLength={minLength}
        rows={rows}
        cols={cols}
        required={required}
        error={error}
        register={register}
      />
      {isError && <ErrorMessage text={error} />}
    </TextAreaGroupStyled>
  )
}

TextAreaGroup.propTypes = {
  placeholder: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  required: PropTypes.bool,
  label: PropTypes.string,
  register: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  className: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  name: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  minLength: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  maxLength: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  disabled: PropTypes.bool,
  rows: PropTypes.number,
  cols: PropTypes.number,
  error: PropTypes.string,
  isError: PropTypes.bool,
}

export default styled(TextAreaGroup)``
