'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { routes } from './constants';
import { Home } from './pages';

import client from './client';

const App = () => {

    const publicViews = (
        <Switch>
            <Route exact path={routes.HOME} component={Home} />
        </Switch>
    );

    return (
        <Router>
            {/* <NavBar /> */}
            <div className="app--main">
                <div className="view-container">
                    {publicViews}
                </div>
            </div>
        </Router>
    );
};

ReactDOM.render(
	<App />,
	document.getElementById('react')
);
