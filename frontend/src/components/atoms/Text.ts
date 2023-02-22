import styled from 'styled-components'
import { space, typography } from 'styled-system'
import { colors, font } from '../../theme'

interface TText {
  text?: string
  fontSize?: number
}

const Text = styled.p.attrs((props: TText) => ({
  children: props.text,
}))<TText>`
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : `${font.base}px`)};
  color: ${(props) => props.color || colors.grey};
  ${space}
  ${typography}
`

export default Text
