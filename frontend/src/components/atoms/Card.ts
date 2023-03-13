import styled from 'styled-components'
import { colors, dimensions } from '../../theme'
import { FlexBox } from '../../theme/wrappers'

const Card = styled(FlexBox)`
  background: white;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid ${colors.extraLightGrey};
  border-radius: ${dimensions.borderRadius}px;
  padding: ${dimensions.spacing.base};
`

export default Card
