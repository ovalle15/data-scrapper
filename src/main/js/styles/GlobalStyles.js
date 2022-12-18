import React from "react";
import { createGlobalStyle } from "styled-components";
import { colorHexCodes } from "./styleVars";

const { white } = colorHexCodes;

const GlobalStyles = createGlobalStyle`
    html {
        background: ${(props) =>
            props.theme ? props.theme.htmlBackground : white};
        height: 100%;
        max-width: 100vw;
        min-height: 1000px;
        overflow-y: scroll;
        position: relative;
        width: 100%;
    }

    body {
        background: transparent;
        height: 100%;
        min-height: 100vh;
        min-width: 100vw;
        overflow-y: scroll;
        position: fixed;
        width: 100%;
    }

    #react {
        height: 100%;
        padding: 10px 20px;
        width: 100%;
    }

    .app-main {
        max-width: 100vw;
        padding-bottom: 20vh;
    }

    .container-override {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }
`;

export default GlobalStyles;
