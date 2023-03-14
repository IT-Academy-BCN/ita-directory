import styled from 'styled-components'
import { boxShadow, colors, dimensions } from '../../theme'
import { FlexBox } from '../../theme/wrappers'

const Card = styled(FlexBox)`
  background: white;
  box-shadow: ${boxShadow.base};
  border: 1px solid ${colors.extraLightGrey};
  border-radius: ${dimensions.borderRadius}px;
  padding: ${dimensions.spacing.base};
`

export default Card
