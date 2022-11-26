'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';

import { routes } from './constants';
import { Home, Videos } from './pages';


const App = () => {

    console.log({ routes })

    const publicViews = (
        <Routes>
            <Route path={routes.HOME} element={<Home />} />
            <Route path={routes.VIDEOS} element={<Videos />} />
            <Route path="*" element={<p>Path not resolved</p>} />
        </Routes>
    );

    return (
        <Router>
            {/* <NavBar /> */}
            <div className="app-main">
                {/* <div className="view-container"> */}
                    {publicViews}
                {/* </div> */}
            </div>
        </Router>
    );
};

let rootEl;
let attempts = 0;
const MAX_ATTEMPTS = 50;

let initInterval = setInterval(function() {
    rootEl = document && document.getElementById('react')
    if (rootEl instanceof HTMLElement) {
        ReactDOM.render(
            <App />,
            rootEl
        );
        clearInterval(initInterval);
        return;
    } else if (attempts >= MAX_ATTEMPTS) {
        clearInterval(initInterval);
        return;
    } else {
        attempts++;
    }
}, 100);


