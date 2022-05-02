import { createGlobalStyle } from 'styled-components'
import font from './font'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: white;
    font-family: ${font.fontFamily}
  }

  h1,h2,h3,h4,h5,h6 {
      font-family: ${font.fontFamilyHeaders}
  }
`

export default GlobalStyle
