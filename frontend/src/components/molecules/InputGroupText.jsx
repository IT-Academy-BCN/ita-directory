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
`
const InputStyled = styled(InputText)`
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
// const ContainerStyled = styled.div`
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
//   flex-wrap: nowrap;
//   border-radius: 5px;
//   padding: 0.5rem;
//   border: 1px solid ${colors.lightGray};
//   width: 100%;

//   &.error:focus-within {
//     border-color: ${colors.redColor};
//   }
// `
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
            <Icon name={icon} mr="0.5rem" ml="0.15rem" fill={1} />
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
