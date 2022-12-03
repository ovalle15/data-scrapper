import React, { useState } from 'react';


import { PageTitle, SearchBox, VideoDisplay } from '../components';
import { Container } from '@mui/material';

const Home = ({
    pageTitle = "Search YouTube Videos"

}) => {
    const [videos, setVideos] = useState({})
    const [isLoading, setIsLoading] = useState(false);

    const onClickHandler = async (queryString) => {
        setIsLoading(true)

        await fetch('http://localhost:9000/videos', {
            method: 'POST',
            body: queryString
          })
          .then(response => {
            console.log('first then block', { response });
            return response.json();
          })
          .then(data => {
            console.log('second then block', { data });
            if (typeof data === "object" && Object.keys(data).length > 0) {
                console.log("SearchBox: data ==>", data);
                setIsLoading(false);
                console.log("after payload sent ==>",  isLoading);
                return setVideos(data);
            }
            setIsLoading(false);
            return { "message": "no videos :(" };
          });
    }
    return (
        <>
            <Container maxWidth="md" className="container-override">
                <PageTitle
                    titleText={pageTitle}
                />
                <SearchBox
                    onClickHandler={onClickHandler}
                    isLoading={isLoading}
                />
            </Container>
            <Container>
                <VideoDisplay
                    isLoading={isLoading}
                    videos={videos}
                />
            </Container>
        </>
    );
};

export default Home;
