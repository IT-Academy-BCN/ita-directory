import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ErrorMessage, Label, Icon } from '../atoms'
import { colors } from '../../theme'
import { InputText } from '../atoms/Forms'
import { FlexBox } from '../../theme/wrappers'

const InputGroupStyled = styled.div`
  ${Label}
  margin-bottom: 0.8rem;
  error:focus-within {
    border-color: ${({ error }) => (error ? colors.redColor : 'inherit')};
  }
  .styledIcon {
    position: absolute;
    margin-left: 1rem;
    margin-top: 1rem;
    padding: 0;
  }
`

const InputMapStyled = styled(InputText)`
  display: flex;
  height: 3rem;
  padding-left: 2.5rem;
  font-size: 0.9rem;
  color: ${colors.darkGrey};
`

function InputMap({
  value,
  name,
  id,
  label,
  hiddenLabel = false,
  className,
  error,
  icon,
  setLocation,
  ...rest
}) {
  return (
    <InputGroupStyled>
      <Label htmlFor={id} label={label} hiddenLabel={hiddenLabel} />
      <FlexBox>
        {icon && (
          <div className="styledIcon">
            <Icon name={icon} fill={1} />
          </div>
        )}
        <InputMapStyled
          onChange={(event) => {
            setLocation(event.target.value)
          }}
          id={id}
          name={name}
          error={error}
          value={value}
          {...rest}
        />
      </FlexBox>
      {error && <ErrorMessage text={error} />}
    </InputGroupStyled>
  )
}

InputMap.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  hiddenLabel: PropTypes.bool,
  label: PropTypes.string.isRequired,
  name: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  icon: PropTypes.node,
  setLocation: PropTypes.func,
}

export default styled(InputMap)``
