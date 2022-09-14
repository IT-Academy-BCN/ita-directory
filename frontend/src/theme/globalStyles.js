import { createGlobalStyle } from 'styled-components'
import RobotoMonoBoldWoff from '../assets/fonts/RobotoMonoBold.woff'
import RobotoMonoBoldWoff2 from '../assets/fonts/RobotoMonoBold.woff2'
import RobotoWoff from '../assets/fonts/Roboto.woff'
import RobotoWoff2 from '../assets/fonts/Roboto.woff2'

const GlobalStyle = createGlobalStyle`
  @font-face {
        font-family: 'Roboto';
        src: local('Roboto'), local('Roboto'),
        url(${RobotoWoff2}) format('woff2'),
        url(${RobotoWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
  }

  @font-face {
        font-family: 'RobotoMonoBold';
        src: local('RobotoMonoBold'), local('RobotoMonoBold'),
        url(${RobotoMonoBoldWoff2}) format('woff2'),
        url(${RobotoMonoBoldWoff}) format('woff');
        font-style: bold;
  }

  body {
    margin: 0;
    padding: 0;
    background: white;
    font-family: 'Roboto'
  }
`

export default GlobalStyle
