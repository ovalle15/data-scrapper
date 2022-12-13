import { LoadingButton } from "@mui/lab";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import React, { useState } from "react";

const SplitVideo = ({ disabled, loading, valueIdKey }) => {
    const [isLoadingBtt2, setIsLoadingBtt2] = useState(loading);

    const sceneDetect = () => {
        if (valueIdKey && !loading) {
            console.log(" KEY on SplitFileOnClick  --> ", valueIdKey);
            setIsLoadingBtt2(true);
            return fetch("http://localhost:9000/split", {
                method: "POST",
                body: valueIdKey,
            })
                .then((response) => {
                    console.log("SplitFileOnClick res 1st block:");
                    setIsLoadingBtt2(false);
                    return response.blob();
                })
                .then((data) => {
                    console.log("SplitFileOnClick res 2nd block:", data);
                    setIsLoadingBtt2(false);
                    return data;
                });
        } else {
            console.log("valueIdKey is undefined !!! " + valueIdKey);
            setIsLoadingBtt2(false);
        }
    };

    return (
        <LoadingButton
            size="small"
            variant="outlined"
            color="secondary"
            loading={isLoadingBtt2}
            disabled={disabled}
            onClick={sceneDetect}
            startIcon={<VideoLibraryIcon size="large" />}
        >
            Scene Detect
        </LoadingButton>
    );
};

export default SplitVideo;
