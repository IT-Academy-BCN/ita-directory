import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors, device } from '../../../theme'

const TextAreaStyled = styled.div.attrs({
  className: 'text-grey mt-4',
})`
  & {
    &.textAreaCreateNewAd {
      @media ${device.Tablet} {
      }
    }

    label {
    }
  }
`

const TextAreaError = styled.div.attrs({
  className: `w-full justify-center`,
})`
  &.textAreaCreateNewAd {
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

const StyledError = styled.small.attrs({
  className: `visible text-redColor mb-9`,
})`
  display: inline-block;
  &.errorProfile {
  }
`

function TextArea({
  placeholder,
  onFocus,
  onBlur,
  labelStyles,
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
  label,
  inputContainerClassName,
  register,
}) {
  return (
    <TextAreaStyled className={inputContainerClassName}>
      <label style={labelStyles} htmlFor={id}>
        {label}
      </label>
      <TextAreaError className={inputContainerClassName}>
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
        <StyledError className={className}>{error}</StyledError>
      </TextAreaError>
    </TextAreaStyled>
  )
}

TextArea.propTypes = {
  placeholder: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  required: PropTypes.bool,
  textStyles: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  label: PropTypes.string,
  labelStyles: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  inputContainerClassName: PropTypes.string,
  register: PropTypes.bool,
  className: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  name: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  minLength: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  maxLength: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  disabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  rows: PropTypes.number,
  cols: PropTypes.number,
  errorText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  error: PropTypes.string,
}

export default styled(TextArea)``
