import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors, device } from '../../../../theme'

const TextAreaInput = styled.textarea`
  width: 18.6rem;
  height: 8.8rem;
  padding: 0.9rem;
  @media ${device.Tablet} {
    width: 22rem;
  }

  display: flex;
  justify-self: center;

  border: none;
  outline: 1px solid ${colors.grey};
  border-radius: 4px;
  &:focus-within {
    outline: 1px solid ${colors.lightGrey};
    border: none;
  }
  @media ${device.Tablet} {
    margin: 0;
  }

  &.error {
    outline: 1px solid #fecaca;
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
  register,
}) {
  return (
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
