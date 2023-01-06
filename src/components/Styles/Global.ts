import {createGlobalStyle} from 'styled-components';
import { shades } from './Theme';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html, body, #root{
        height: 100%;
        width: 100%;
    }
    body{
        background: ${shades.secondary[500]};
        color: #fff;
    }
    *, button, input{
        border: 0;
        font-family: 'Roboto', sans-serif;
    }
    ul{
        list-style: none;
    }
    a{
        text-decoration: none;
    }
`;