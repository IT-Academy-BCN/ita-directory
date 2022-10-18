import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors, device } from '../../../theme'

const TextAreaStyled = styled.div.attrs({
  className: 'text-grey mt-4',
})`
  label {
    border: 0;
    clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
    clip: rect(1px, 1px, 1px, 1px);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
  & {
    &.textAreaCreateNewAd {
      @media ${device.Tablet} {
      }
    }
  }
`

const TextAreaInput = styled.textarea.attrs((props) => ({
  rows: 8,
  className: `textarea
				border
				
				rounded
				block
				text-xs
				text-1x2
				p-3
				overflow-y-auto
				resize-none
				text-darkGray
				`,
}))`
  width: 93%;
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
      <label htmlFor={id}>{label}</label>
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
}

export default styled(TextArea)``
