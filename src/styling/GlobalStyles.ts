import { createGlobalStyle } from 'styled-components'
import resetStyles from './resetStyles'

const GlobalStyles = createGlobalStyle`
  ${resetStyles}

  // App wide global styles
  html {
    font-family: 'Open Sans';
    font-size: 16px;
  }
`

export default GlobalStyles
