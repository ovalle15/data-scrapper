import React, { useState } from "react";
import styled from "styled-components";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { LoadingButton } from "@mui/lab";

const StyledLoadingButton = styled(LoadingButton)`
    background-color: ${(props) =>
        props.theme ? props.theme.buttonBackgroundColor : ""};
    margin-right: 1em;
`;

const DownloadButton = ({
    videoIdValue, //
}) => {
    const [isLoading, setIsLoading] = useState(false);

    const downloadFileOnClick = () => {
        console.log("downloadFileOnClick: ", { videoIdValue });
        if (videoIdValue) {
            console.log(" KEY on downloadFileOnClick  --> ", videoIdValue);
            setIsLoading(true);
            return fetch("http://localhost:9000/download", {
                method: "POST",
                body: videoIdValue,
            })
                .then((response) => {
                    console.log("DownloadButton res 1st block:");
                    setIsLoading(false);
                    return response.blob();
                })
                .then((data) => {
                    console.log("DownloadButton res 2nd block:", data);
                    setIsLoading(false);
                    return data;
                });
        } else {
            console.log("Key is undefined !!! " + videoIdValue);
            setIsLoading(false);
        }
    };

    return (
        <StyledLoadingButton
            size="small"
            variant="outlined"
            // value={valueIdValue}
            loading={isLoading}
            onClick={downloadFileOnClick}
            startIcon={<FileDownloadOutlinedIcon size="large" />}
        >
            Download
        </StyledLoadingButton>
    );
};

export default DownloadButton;
