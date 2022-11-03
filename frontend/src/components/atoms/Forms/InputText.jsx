import PropTypes from 'prop-types'
import styled from 'styled-components'

const InputStyled = styled.input`
  width: 100%;
  border: none;

  outline: 0 none;
  border: none;

  &:hover {
    outline: 0 none;
    border: none;
  }
  &:focus {
    outline: 0 none;
    border: none;
  }
  &:focus-within {
    outline: 0 none;
    border: none;
  }
  &[type='number'] {
    -moz-appearance: textfield;
  }
`

function Input({ register, required, value, name, id, className, error, ...rest }) {
  return (
    <InputStyled
      type="text"
      value={value}
      className={className}
      id={id}
      name={name}
      error={error}
      required={required}
      {...register}
      {...rest}
    />
  )
}

Input.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  className: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  name: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  required: PropTypes.bool,
  onChange: PropTypes.func,
  register: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
}

export default styled(Input)``
