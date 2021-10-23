import { createGlobalStyle } from 'styled-components'
import resetStyles from './resetStyles'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600&display=swap');
  ${resetStyles}

  // App wide global styles
  html {
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
  }
`

export default GlobalStyles
