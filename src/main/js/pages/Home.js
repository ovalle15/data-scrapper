import React from 'react';


import { PageTitle, SearchBox } from '../components';
import { Container } from '@mui/material';

const Home = ({
    pageTitle = "This is the home page"

}) => {
    return (
        // <div>
            <Container maxWidth="md" className="container-override">
                <PageTitle
                        titleText={pageTitle}
                    />
            <SearchBox/>
            </Container>

        // </div>
    );
};

export default Home;
