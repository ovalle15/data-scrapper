import React, { useState } from "react";
import styled from "styled-components";
import { LoadingButton } from "@mui/lab";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";

const StyledLoadingButton = styled(LoadingButton)`
    background-color: ${(props) =>
        props.theme ? props.theme.buttonBackgroundColor : ""};
    margin-left: 1em;
`;

const SplitVideoButton = ({ videoIdValue }) => {
    const [isLoadingBtt, setIsLoadingBtt] = useState(false);

    console.log("SplitVideoButton: ", { videoIdValue });

    const splitFileOnClick = () => {
        console.log("splitFileOnClick: ", { videoIdValue });

        if (videoIdValue && !isLoadingBtt) {
            console.log(" KEY on SplitFileOnClick  --> ", videoIdValue);
            setIsLoadingBtt(true);
            return fetch("http://localhost:9000/split", {
                method: "POST",
                body: videoIdValue,
            })
                .then((response) => {
                    console.log("SplitFileOnClick res 1st block:");
                    return response.blob();
                })
                .then((data) => {
                    console.log("SplitFileOnClick res 2nd block:", data);
                    setIsLoadingBtt(false);
                    return data;
                });
        } else {
            console.log("videoIdValue is undefined !!! " + videoIdValue);
        }
    };

    const updateKeyToFetch = (e) => {
        splitFileOnClick();
    };

    return (
        <StyledLoadingButton
            size="small"
            variant="outlined"
            color="secondary"
            // value={videoIdValue}
            loading={isLoadingBtt}
            onClick={updateKeyToFetch}
            startIcon={<VideoLibraryIcon size="large" />}
        >
            Scene Detect
        </StyledLoadingButton>
    );
};

export default SplitVideoButton;
