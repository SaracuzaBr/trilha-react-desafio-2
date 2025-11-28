import  { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    *, body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: linear-gradient(135deg, #0f1419 0%, #161b22 50%, #1c2128 100%);
        color: #FFFFFF;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
        min-height: 100vh;
    }

`