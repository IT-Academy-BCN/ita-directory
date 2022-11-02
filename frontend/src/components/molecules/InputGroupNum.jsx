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
  padding: 0.3rem;
  border: 1px solid ${colors.lightGray};
  & {
    width: 20rem;
  }

  &.error:focus-within {
    border-color: ${colors.redColor};
  }
`
function InputGroupNum({
  ref,
  register,
  required,
  type,
  onChange,
  name,
  id,
  label,
  hiddenLabel = true,
  className,
  error,
  icon,
  textColor,
  ...rest
}) {
  return (
    <InputGroupStyled>
      <Label htmlFor={id} label={label} hiddenLabel={hiddenLabel} />
      <ContainerStyled className={`${className} ${error ? 'error' : ''}`}>
        {icon && (
          <div className="styledIcon">
            <Icon color={textColor} name={icon} mr="0.5rem" ml="0.15rem" fill={1} />
          </div>
        )}
        <InputStyled
          ref={ref}
          type={type}
          id={id}
          name={name}
          error={error}
          required={required}
          onChange={onChange}
          register={register}
        />
      </ContainerStyled>
      {error && <ErrorMessage text={error} />}
    </InputGroupStyled>
  )
}

InputGroupNum.propTypes = {
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

export default styled(InputGroupNum)``
