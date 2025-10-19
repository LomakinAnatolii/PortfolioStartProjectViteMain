import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme.tsx";



export const GlobalStyles = createGlobalStyle`
    *,
    *:before,
    *:after {
        box-sizing: border-box;
    }
    
    body {
        margin: 0;
        padding: 0;
        font-family: Poppins, sans-serif;
        color: ${theme.colors.font}
    }

    a {
        display: inline-block;
        text-decoration: none;
        outline: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    button {
        display: block;
        background-color: transparent;
        border: none;
        outline: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    

    h1, h2, h3, h4, h5, h6, p, figure, dl, dt, dd, ul, li, ol, button {
        margin: 0;
        padding: 0;
    }

    ul, li, ol {
        list-style: none
    }

    img {
        max-width: 100%;
        height: auto;
        object-fit: cover;
    }

    input, textarea {
        background-color: transparent;
        border: none;
        outline: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    //.visually-hidden:not(:focus):not(:active),
    //input[type="checkbox"].visually-hidden,
    //input[type="radio"].visually-hidden {
    //    position: absolute;
    //    width: 1px;
    //    height: 1px;
    //    margin: -1px;
    //    border: 0;
    //    padding: 0;
    //    white-space: nowrap;
    //    clip-path: inset(100%);
    //    clip: rect(0 0 0 0);
    //    overflow: hidden;
    //}
    
    section:nth-of-type(odd) {
        background-color: ${theme.colors.primaryBg}
    }

    section:nth-of-type(even) {
        background-color: ${theme.colors.secondaryBg}
    }
`
