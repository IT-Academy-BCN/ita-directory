import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors, device } from '../../../theme'
import Label from './Label'

const TextAreaStyled = styled.div``

const TextAreaInput = styled.textarea.attrs((props) => ({
  className: `textarea`,
}))`
  width: 93%;
  display: flex;
  margin: 0 auto;
  justify-self: center;
  height: 10em;

  @media ${device.Tablet} {
    margin: 0;
  }

  &.error {
    border: 1px solid #fecaca !important;
  }
  &:focus {
    outline: 0 none;
    border: 1px solid ${(props) => (props.error ? 'red' : colors.darkBlue)} !important;
  }
`

function TextArea({
  placeholder,
  onFocus,
  onBlur,
  className,
  id,
  name,
  label,
  minLength,
  maxLength,
  disabled,
  required = false,
  rows,
  cols,
  error,
  inputContainerClassName,
  register,
}) {
  return (
    <TextAreaStyled className={inputContainerClassName}>
      <Label label={label} htmlFor={id} hidden />
      <TextAreaInput
        placeholder={placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
        className={`${className} ${error ? 'error' : ''}`}
        id={id}
        label={label}
        name={name}
        disabled={disabled}
        maxLength={maxLength}
        minLength={minLength}
        rows={rows}
        cols={cols}
        required={required}
        error={error}
        {...(register && register)}
      />
    </TextAreaStyled>
  )
}

TextArea.propTypes = {
  placeholder: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  required: PropTypes.bool,
  inputContainerClassName: PropTypes.string,
  label: PropTypes.string.isRequired,
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
}

export default styled(TextArea)``
