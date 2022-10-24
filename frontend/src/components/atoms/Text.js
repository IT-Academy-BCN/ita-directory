import styled from 'styled-components'
import { space, typography } from 'styled-system'
import { colors, font } from '../../theme'

const Text = styled.p.attrs((props) => ({
  children: props.text,
}))`
  /* font-size: ${(props) => props.fontSize || font.base}px; */
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : `${font.base}px`)};
  color: ${(props) => props.color || colors.grey};
  ${space}
  ${typography}
`

export default Text
