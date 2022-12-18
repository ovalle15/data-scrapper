import React from "react";

import { VideoDisplay } from "../components";

const Videos = ({
    pageTitle = "This is the home page", //
}) => {
    return (
        <div id="video-content">
            <VideoDisplay pageTitle={pageTitle} />
        </div>
    );
};

export default Videos;
