import { createGlobalStyle } from 'styled-components';
import { fontFamily } from './types'
import { gray, dark } from './Colors';


const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');
  html {
    font-size: 10px;
  }
  body {
    ${fontFamily};
    font-size: 1.6rem;
    padding: 0;
    margin: 0;
    color: ${gray}
  }
  h1, h2, h3, h4, h5, h6 {
    color: ${dark};
  }

  input{
    margin: 2rem;
  }

  input:focus{
      outline: none
  }

  ::placeholder, input[type="text"],input[type="email"], input[type="password"]{
      font-size: 2.2rem;
      padding-bottom: 1rem;
      color: ${gray};
  }

  input[type="text"], input[type="email"], input[type="password"]{
      border: none;
      border-bottom: 1px solid ${dark};
  }

`;

export default GlobalStyle;
