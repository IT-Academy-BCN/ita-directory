import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ErrorMessage, Label, Icon } from '../atoms'
import { colors } from '../../theme'
import { InputNumber } from '../atoms/Forms'

const InputGroupStyled = styled.div`
  ${Label}
  background-color: pink;
  margin-bottom: 0.8rem;
`
const InputStyled = styled(InputNumber)`
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
  padding: 0.5rem;
  border: 1px solid ${colors.lightGray};
  width: 100%;

  &.error:focus-within {
    border-color: ${colors.redColor};
  }
`
function InputGroupNumber({
  register,
  required,
  name,
  id,
  label,
  hiddenLabel = true,
  className,
  error,
  icon,
  ...rest
}) {
  return (
    <InputGroupStyled>
      <Label htmlFor={id} label={label} hiddenLabel={hiddenLabel} />
      <ContainerStyled className={`${className} ${error ? 'error' : ''}`}>
        {icon && (
          <div className="styledIcon">
            <Icon name={icon} mr="0.5rem" ml="0.15rem" fill={1} />
          </div>
        )}
        <InputStyled
          id={id}
          name={name}
          error={error}
          required={required}
          register={register}
          {...rest}
        />
      </ContainerStyled>
      {error && <ErrorMessage text={error} />}
    </InputGroupStyled>
  )
}

InputGroupNumber.propTypes = {
  className: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  inputStyles: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  hiddenLabel: PropTypes.bool,
  label: PropTypes.string.isRequired,
  name: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  register: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  required: PropTypes.bool,
  icon: PropTypes.node,
  textColor: PropTypes.string,
  iconStyles: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

export default styled(InputGroupNumber)``
