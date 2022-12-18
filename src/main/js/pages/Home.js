import React, { useState } from "react";
import { Container } from "@mui/material";
import styled from "styled-components";

import {
    PageTitle, //
    SearchBox,
    VideoDisplay,
} from "../components";

const StyledContainer = styled(Container)`
    margin: 0 auto;
    max-width: 95vw !important;
`;

const Home = ({
    pageTitle = "Search YouTube Videos", //
}) => {
    const [videos, setVideos] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const onClickHandler = async (queryString) => {
        setIsLoading(true);

        await fetch("http://localhost:9000/videos", {
            method: "POST",
            body: queryString,
        })
            .then((response) => {
                console.log("first then block", { response });
                return response.json();
            })
            .then((data) => {
                console.log("second then block", { data });
                if (typeof data === "object" && Object.keys(data).length > 0) {
                    console.log("SearchBox: data ==>", data);
                    setIsLoading(false);
                    console.log("after payload sent ==>", isLoading);
                    return setVideos(data);
                }
                setIsLoading(false);
                return setVideos({ length: 0, message: "no videos :(" });
            });
    };

    const handleEmptyState = (emptyVideos) => {
        return isLoading ? ( //
            ""
        ) : (
            <div>
                {emptyVideos.message ||
                    "No results... try searching something else!"}
            </div>
        );
    };

    return (
        <>
            <Container maxWidth="md" className="container-override">
                <PageTitle titleText={pageTitle} />
                <SearchBox
                    onClickHandler={onClickHandler}
                    isLoading={isLoading}
                />
            </Container>
            <StyledContainer>
                {!isLoading && videos.length !== 0 ? (
                    <VideoDisplay isLoading={isLoading} videos={videos} />
                ) : (
                    handleEmptyState(videos)
                )}
            </StyledContainer>
        </>
    );
};

export default Home;
