import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Rajdhani', sans-serif;
  }

  button, input {
    border: 0;
    background: 0;
  }

  button {
    cursor: pointer;
  }

  :root {
    --white: rgb(195, 195, 195);
    --secondary: rgb(128, 78, 239);
  }
`