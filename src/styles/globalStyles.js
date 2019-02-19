import { createGlobalStyle } from 'styled-components';
import { dark, gray} from './colors';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');
  html {
    font-size: 10px;
  }
  body {
    font-size: 1.6rem;
    padding: 0;
    margin: 0;
    color: ${dark};
  }
  h1, h2, h3, h4, h5, h6 {
    color: ${dark};
  }
  p{
      color: ${gray};
  }

  input{
    margin: 2rem;
  }

  input:focus{
      outline: none;
  }

  ::placeholder, input[type="text"],input[type="email"], input[type="password"]{
      font-size: 2.2rem;
      padding-bottom: 1rem;
      color: ${gray};
  }

  input[type="text"], input[type="email"], input[type="password"]{
      border: none;
      border-bottom: 1px solid ${gray};
  }

`;

export default GlobalStyle;
