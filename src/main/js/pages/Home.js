import React from 'react';

import { PageTitle , VideoDisplay } from '../components';

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
            <VideoDisplay></VideoDisplay>
        </div>
    );
};

export default Home;
