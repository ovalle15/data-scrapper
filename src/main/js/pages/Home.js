import React from 'react';

import { PageTitle } from '../components';

const Home = ({
    children,
    pageTitle = "This is the home page. :)"
}) => {
    return (
        <div id="home-content">
            <PageTitle
                titleText={pageTitle}
            />
            {children}
        </div>
    );
};

export default Home;
