import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ErrorMessage, Label, Icon } from '../atoms'
import { colors } from '../../theme'
import { InputNum } from '../atoms/Forms'

const InputGroupStyled = styled.div`
  ${Label}
`
const InputStyled = styled(InputNum)`
  height: 2rem;
  border: none;
  display: flex;
  font-size: 0.8rem;
  color: ${colors.darkGrey};
  padding: 0.75rem;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`
const ContainerStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  border-radius: 5px;
  padding: 0.2rem;
  border: 1px solid ${colors.lightGray};
  & {
    width: 20rem;
  }

  &.error:focus-within {
    border-color: ${colors.redColor};
  }
`
function InputGroup({
  accept,
  className,
  disabled,
  error,
  hiddenLabel = true,
  id,
  inputStyles,
  label,
  name,
  onBlur,
  onChange,
  onFocus,
  placeholder,
  ref,
  register,
  required,
  size,
  type,
  icon,
  textColor,
  iconStyles,
}) {
  return (
    <InputGroupStyled>
      <Label htmlFor={id} label={label} hiddenLabel={hiddenLabel} />
      <ContainerStyled className={`${className} ${error ? 'error' : ''}`}>
        {icon && (
          <div className="styledIcon">
            <Icon color={textColor} name={icon} mr="0.5rem" fill={1} style={{ ...iconStyles }} />
          </div>
        )}
        <InputStyled
          type={type}
          placeholder={placeholder}
          onFocus={onFocus}
          onBlur={onBlur}
          id={id}
          name={name}
          disabled={disabled}
          size={size}
          error={error}
          required={required}
          style={inputStyles}
          onChange={onChange}
          ref={ref}
          accept={accept}
          register={register}
        />
      </ContainerStyled>
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
  hiddenLabel: PropTypes.bool,
  label: PropTypes.string.isRequired,
  name: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  ref: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  register: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  required: PropTypes.bool,
  size: PropTypes.number,
  type: PropTypes.string.isRequired,
  icon: PropTypes.node,
  textColor: PropTypes.string,
  iconStyles: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

export default styled(InputGroup)``
