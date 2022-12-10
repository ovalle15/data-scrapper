import React, { useState } from 'react';
import styled from 'styled-components';
import { styled as muiStyled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { LoadingButton } from '@mui/lab';
import SplitVideo from './SplitVideo';

const Item = muiStyled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary
}));

const StyledItem = styled(Item)`
  min-height: 300px;
`;

const VideoEmbed = styled.embed`
  display: block;
  height: 20em;
  margin: 0 auto;
  width: 100%;
`;

const VideoTitle = styled.span`
  display: block;
  margin: 0 15px;
  font-size: 1.2em
`;

const VideoDisplay = ({ videos }) => {
  const [isLoadingBtt, setIsLoadingBtt] = useState(false);
  const [key, updateKey] = useState("");

  const downloadFileOnClick = (value) => {
    if (value){
      console.log(" KEY on downloadFileOnClick  --> " , value);
      setIsLoadingBtt(true)
      return fetch('http://localhost:9000/download', {
        method: 'POST',
        body: value
      })
      .then(response => {
        console.log("DownloadButton res 1st block:");
        setIsLoadingBtt(false)
        return response.blob();
      })
      .then(data => {
        console.log("DownloadButton res 2nd block:", data);
        setIsLoadingBtt(false)
        return data;
      });
    }
    else {
      console.log("Key is undefined !!! " + key)
      setIsLoadingBtt(false)
    }
  }

  const updateKeyToFetch = (e) => {
    const value = (e || {}).target.value;
    updateKey(value)
    downloadFileOnClick(value);
  }


  return (


    <Box sx={{ flexGrow: 1 , pt: 2}}>
      <Grid item xs={1}>
        <LoadingButton
          style={{"display": "none"}}
          loading={isLoadingBtt}
          sx={{ m:1 }}
          variant="outlined"
          size="large"
          // onClick={localOnClick}
        >
            Download All
        </LoadingButton>
      </Grid>
      <Grid
        container
        spacing={3}
      >
        {Object.keys(videos).map((key, index) => (
          <Grid item xs={6} key={index}>
            <StyledItem >
              <VideoEmbed
                src={`https://www.youtube.com/embed/${key}`}
              />
              <VideoTitle>
                {videos[key]}
              </VideoTitle>
            </StyledItem>
            <Box sx={{ pt: 2 , display: "flex", justifyContent:"space-between"}}>
              <LoadingButton
                  size="small"
                  variant="outlined"
                  value={key}
                  loading={isLoadingBtt}
                  onClick={updateKeyToFetch}
                  startIcon={<FileDownloadOutlinedIcon size="large" />}
                  >
                    Download
                </LoadingButton>
                <SplitVideo
                  value={key}
                  >
                </SplitVideo>
              </Box>
          </Grid>
        ))}
      </Grid>

    </Box>
  );
}

export default VideoDisplay;