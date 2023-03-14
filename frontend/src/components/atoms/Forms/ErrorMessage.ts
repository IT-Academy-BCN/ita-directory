import styled from 'styled-components'
import { colors, font } from '../../../theme'

const ErrorMessage = styled.p`
  margin: 0px 0px 8px 10px;
  font-size: ${font.xss};
  font-style: oblique;
  color: ${colors.bloodRed};
`

export default ErrorMessage
