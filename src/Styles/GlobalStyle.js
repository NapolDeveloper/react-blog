import styled, { createGlobalStyle, keyframes } from 'styled-components';
import reset from 'styled-reset';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const GlobalStyle = createGlobalStyle`
    ${reset};
    *{
        // margin:0;
        // padding: 0;
        // // box-sizing: border-box;
    }
    body{
        padding: 0;
        margin: 0;
        font-family: 'Poppins', sans-serif;
        /* background-color: gray; */
    };
    button{
        border: none;
    }
    `;

export default GlobalStyle;
