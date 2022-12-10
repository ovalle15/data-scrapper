import { LoadingButton } from "@mui/lab";
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import React, { useState } from 'react';



const SplitVideo = ({isLoadingBtt}) => {
  // const [isLoadingBtt, setIsLoadingBtt] = useState(false);
  const [key, updateKey] = useState("");

  const SplitFileOnClick = (value) => {
    if (value && !isLoadingBtt){
      console.log(" KEY on SplitFileOnClick  --> " , value);
      // setIsLoadingBtt(true)
      return fetch('http://localhost:9000/split', {
        method: 'POST',
        body: value
      })
      .then(response => {
        console.log("SplitFileOnClick res 1st block:");
        // setIsLoadingBtt(false)
        return response.blob();
      })
      .then(data => {
        console.log("SplitFileOnClick res 2nd block:", data);
        // setIsLoadingBtt(false)
        return data;
      });
    }
    else {
      console.log("Key is undefined !!! " + key)
      // setIsLoadingBtt(false)
    }
  }

  const updateKeyToFetch = (e) => {
    const value = (e || {}).target.value;
    updateKey(value)
    SplitFileOnClick(value);
  }

  return (
    <LoadingButton
      size="small"
      variant="outlined"
      color="secondary"
      value={key}
      loading={isLoadingBtt}
      onClick={updateKeyToFetch}
      startIcon={<VideoLibraryIcon  size="large" />}
      >
      Scene Detect
    </LoadingButton>
  )

}

export default SplitVideo;