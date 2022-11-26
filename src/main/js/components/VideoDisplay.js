import React from 'react';
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary
}));

function YouTubeDisplay (videoMap) {
  // const embedIdList = [];
  // for (const key in videoMap) {
  //   embedIdList.push({ [key]: videoMap[key] });
  // }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Object.keys(videoMap).map((key, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item href={`https://www.youtube.com/embed/${key}`}>
              {videoMap[key]}
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
  // <div className="responsive-video-class">
  //   <iframe
  //   width="560"
  //   height="315"
  //   title={`${title}`}
  //   src={`https://www.youtube.com/embed/${embedId}`}
  //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  //   allowFullScreen
  //   />
  // </div>
// );
// YouTubeDisplay.PropTypes = {
//   embedId: ReactPropTypes.string.isRequired
// };

export default YouTubeDisplay;