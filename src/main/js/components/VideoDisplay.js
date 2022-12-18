import React, { useState } from "react";
import styled from "styled-components";
import { styled as muiStyled } from "@mui/material/styles";
import { LoadingButton } from "@mui/lab";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import { DownloadButton, SplitVideoButton } from "../components/buttons";

const Item = muiStyled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

const StyledItem = styled(Item)`
    display: flex;
    flex-direction: column;
    min-height: 28em;
    /* max-width: 30%; */
`;

const VideoEmbed = styled.embed`
    display: block;
    height: 24em;
    margin: 0 auto;
    width: 100%;
`;

const VideoTitle = styled.span`
    align-self: center;
    display: flex;
    margin: auto;
    font-size: 1.2em;
`;

const StyledBox = styled(Box)`
    display: flex;
    justify-content: center;
`;

const VideoDisplay = ({ videos }) => {
    const [isLoadingBtt, setIsLoadingBtt] = useState(false);

    return (
        <Box sx={{ flexGrow: 1, pt: 2 }}>
            <Grid item xs={1}>
                <LoadingButton
                    style={{ display: "none" }}
                    loading={isLoadingBtt}
                    sx={{ m: 1 }}
                    variant="outlined"
                    size="large"
                    // onClick={localOnClick}
                >
                    Download All
                </LoadingButton>
            </Grid>
            <Grid container spacing={3}>
                {Object.keys(videos).map((videoId) => {
                    return (
                        <Grid item xs={4} key={videoId}>
                            <StyledItem>
                                <VideoEmbed
                                    src={`https://www.youtube.com/embed/${videoId}`}
                                />
                                <VideoTitle>{videos[videoId]}</VideoTitle>
                            </StyledItem>
                            <StyledBox
                                sx={{
                                    pt: 2,
                                }}
                            >
                                <DownloadButton videoIdValue={videoId}>
                                    Download
                                </DownloadButton>
                                <SplitVideoButton
                                    videoIdValue={videoId}
                                ></SplitVideoButton>
                            </StyledBox>
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
};

export default VideoDisplay;
