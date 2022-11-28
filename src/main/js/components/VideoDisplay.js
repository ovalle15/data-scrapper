import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { styled as muiStyled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

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

function YouTubeDisplay ({ videos }) {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={3}
      >

        {Object.keys(videos).map((key, index) => (
          <Grid item xs={6} key={index}>
            <StyledItem href={`https://www.youtube.com/embed/${key}`}>
              <VideoEmbed
                src={`https://www.youtube.com/embed/${key}`}
              />
              <VideoTitle>
                {videos[key]}
              </VideoTitle>
            </StyledItem>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default YouTubeDisplay;