import React from 'react';


import { PageTitle, SearchBox, VideoDisplay } from '../components';
import { Container } from '@mui/material';


const Home = ({
    pageTitle = "This is the home page"

}) => {
    const [videos, setVideos] = React.useState({})
    console.log("HOME: return videos ==>", videos)

    const onClickHandler = async (queryString) => {

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

              return setVideos(data);
            }
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
                />

            </Container>
            <Container>
                <VideoDisplay
                    videos={videos}
                />
            </Container>
        </>
    );
};

export default Home;
