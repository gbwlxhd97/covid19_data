import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
      ${reset}
      * {
        box-sizing: border-box;
      }
      body{
        font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
        margin:0;
        padding:0;
        background-color: #F8F8F8;
      }
      a {
        color: inherit;
        text-decoration: none;
        cursor: pointer;
      }
    `;

export default GlobalStyle;
