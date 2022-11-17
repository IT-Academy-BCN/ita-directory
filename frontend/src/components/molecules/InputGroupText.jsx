import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ErrorMessage, Label, Icon } from '../atoms'
import { colors } from '../../theme'
import { InputText } from '../atoms/Forms'
import { FlexBox } from '../../theme/wrappers'

const InputGroupStyled = styled.div`
  ${Label} {
    margin-bottom: 0.8rem;
  }

  error:focus-within {
    border-color: ${({ error }) => (error ? colors.redColor : 'inherit')};
  }

  .styledIcon {
    position: absolute;
    margin-left: 1rem;
    margin-top: 0.2rem;
    padding: 0;
  }

  ${InputText} {
    display: flex;
    height: 3rem;
    padding: 1rem;
    font-size: 0.9rem;
    color: ${colors.darkGrey};
    padding-left: ${({ hasIcon }) => (hasIcon ? '2.5rem;' : '1rem')};
  }
`

function InputGroupText({
  value,
  name,
  id,
  label,
  hiddenLabel = false,
  className = '',
  error,
  icon,
  ...rest
}) {
  return (
    <InputGroupStyled hasIcon={!!icon} className={className}>
      <Label htmlFor={id} label={label} hiddenLabel={hiddenLabel} isError={!!error} />
      <FlexBox justifyContent="flex-start" alignItems="center" flexWrap="nowrap">
        {!!icon && (
          <div className="styledIcon">
            <Icon name={icon} fill={1} />
          </div>
        )}
        <InputText value={value} id={id} name={name} error={error} {...rest} />
      </FlexBox>
      {!!error && <ErrorMessage text={error} />}
    </InputGroupStyled>
  )
}

InputGroupText.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  hiddenLabel: PropTypes.bool,
  label: PropTypes.string.isRequired,
  name: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  icon: PropTypes.node,
}

export default styled(InputGroupText)``
