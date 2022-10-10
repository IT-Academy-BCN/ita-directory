import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors, device } from '../../../theme'

const TextAreaStyled = styled.div`
  & {
    &.textAreaCreateNewAd {
      @media ${device.Tablet} {
      }
    }
  }
`

const TextAreaInput = styled.textarea`
  width: 100%;
  height: 8.8rem;
  border-radius: 6px;
  display: flex;
  margin: 0 auto;
  justify-self: center;

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
      <TextAreaInput
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
