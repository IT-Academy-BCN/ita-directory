import styled from 'styled-components'
import { colors, font } from '../../theme'

const Text = styled.p.attrs((props) => {
  return {
    fontSize: props.fontSize || `${font.base}`,
    color: props.color || `${colors.grey}`,
    children: props.text,
  }
})``

export default Text
