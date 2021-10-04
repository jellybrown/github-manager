import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyles = createGlobalStyle` 
    ${reset}
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    a{
        text-decoration: none;
        color: inherit;
    }
    input, button {
        background-color: transparent;
        border: none;
        outline: none;
    }

`;
