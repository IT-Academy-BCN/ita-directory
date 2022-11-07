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
    margin-top: 0.2rem;
    padding: 0;
  }
`
const InputStyled = styled(InputText)`
  display: flex;
  height: 3rem;
  padding: 1rem;
  font-size: 0.8rem;
  color: ${colors.darkGrey};
`

function InputGroupText({
  value,
  name,
  id,
  label,
  hiddenLabel = false,
  className,
  error,
  icon,
  ...rest
}) {
  return (
    <InputGroupStyled>
      <Label htmlFor={id} label={label} hiddenLabel={hiddenLabel} />
      <FlexBox justifyContent="flex-start" alignItems="center" flexWrap="nowrap">
        {icon && (
          <div className="styledIcon">
            <Icon name={icon} mr="0.5rem" fill={1} />
          </div>
        )}
        <InputStyled value={value} id={id} name={name} error={error} {...rest} />
      </FlexBox>
      {error && <ErrorMessage text={error} />}
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
  textColor: PropTypes.string,
  iconStyles: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

export default styled(InputGroupText)``
