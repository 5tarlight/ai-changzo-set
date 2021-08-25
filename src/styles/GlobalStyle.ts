import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: white;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: antialiased;
  }
`
