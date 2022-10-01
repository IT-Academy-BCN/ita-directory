import { createGlobalStyle } from 'styled-components'
import font from './font'

const GlobalStyle = createGlobalStyle`
  div {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    background: white;
    font-family: ${font.fontFamily};
  }
`

export default GlobalStyle
