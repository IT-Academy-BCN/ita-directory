// @ts-nocheck
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ErrorMessage, Label, Input } from '../atoms'

const InputGroupStyled = styled.div`
  ${Label}
`

function InputGroup({
  accept,
  className,
  disabled,
  error,
  hiddenLabel = false,
  id,
  inputStyles,
  labelStyles,
  label,
  name,
  onChange,
  placeholder,
  ref,
  register,
  required,
  size,
  type,
}) {
  return (
    <InputGroupStyled>
      <Label htmlFor={id} label={label} hiddenLabel={hiddenLabel} labelStyles={labelStyles} />
      <Input
        type={type}
        placeholder={placeholder}
        className={`${className} ${error ? 'error' : ''}`}
        id={id}
        name={name}
        disabled={disabled}
        size={size}
        error={error}
        required={required}
        inputStyles={inputStyles}
        onChange={onChange}
        ref={ref}
        accept={accept}
        register={register}
      />
      {error && <ErrorMessage text={error} />}
    </InputGroupStyled>
  )
}

InputGroup.propTypes = {
  accept: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  inputStyles: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  labelStyles: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  hiddenLabel: PropTypes.bool,
  label: PropTypes.string.isRequired,
  name: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  ref: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  register: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  required: PropTypes.bool,
  size: PropTypes.number,
  type: PropTypes.string.isRequired,
}

export default styled(InputGroup)``
