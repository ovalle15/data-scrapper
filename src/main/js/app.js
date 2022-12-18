"use strict";

import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router, //
    Route,
    Routes,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { routes } from "./constants";
import { Home } from "./pages";
import GlobalStyles from "./styles/GlobalStyles";
import { XmasTheme } from "./styles/themes";

const App = () => {
    console.log({ routes });

    const publicViews = (
        <Routes>
            <Route path={routes.HOME} element={<Home />} />
            <Route path="*" element={<p>Path not resolved</p>} />
        </Routes>
    );

    return (
        <ThemeProvider theme={XmasTheme}>
            <Router>
                <GlobalStyles />
                <div className="app-main">{publicViews}</div>
            </Router>
        </ThemeProvider>
    );
};

let rootEl;
let attempts = 0;
const MAX_ATTEMPTS = 50;

let initInterval = setInterval(function () {
    rootEl =
        document &&
        typeof document.getElementById === "function" &&
        document.getElementById("react");

    if (rootEl instanceof HTMLElement) {
        ReactDOM.render(<App />, rootEl);
        clearInterval(initInterval);
        return;
    } else if (attempts >= MAX_ATTEMPTS) {
        clearInterval(initInterval);
        return;
    }

    attempts++;
}, 100);
