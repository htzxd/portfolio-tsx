import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    
    background-color: ${({ theme })=> theme.colors.bg_secondary};
  }

  body, h1, h2, p, a, footer, button {
    font-family: 'Roboto', sans-serif;
    color: ${({ theme })=> theme.colors.text_color};
  }

  h1, h2 {
    color: ${({ theme })=> theme.colors.title_color}
  }
`