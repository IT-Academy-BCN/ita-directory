import { createGlobalStyle } from 'styled-components'
import font from './font'

const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
    background: white;
    font-family: ${font.fontFamily};
    overflow-y: scroll;
    overflow-x: hidden;
  }
`

export default GlobalStyle
