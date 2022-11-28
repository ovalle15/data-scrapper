import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FormControl, InputLabel , OutlinedInput , Button} from '@mui/material';


const SearchBox = ({ setVideos, onClickHandler }) => {
  const [inputValue, setInputValue] = useState("");

  const modifyString = () => {
    const re = /(~|`|!|@|#|$|%|^|&|\*|\(|\)|{|}|\[|\]|;|:|\"|'|<|,|\.|>|\?|\/|\\|\||-|_|\+|=)/g
    const valList = inputValue.replace(re, " ").split(" ");
    // console.log(valList)
    const v = valList.filter(word => !!word )
    console.log("final --> " + v.join("+"))
    return v.join("+")
  }

  const updateState = (e) => {
    setInputValue(e.target.value);
    // console.log(e.target.value);
  }

  // const onClickHandler = async (e) => {
  //   // console.log("GOT CLICK");
  //   const queryAsString = modifyString();
  //   // // console.log(m);

  //   await fetch('http://localhost:9000/videos', {
  //       method: 'POST',
  //       body: queryAsString
  //     })
  //     .then(response => response.json())
  //     .then(data => {
  //       if ((data || {}).length > 0) {
  //         console.log("SearchBox: data ==>", data);

  //         setVideos(data);
  //       }
  //     });

  //     // await fetch('http://localhost:9000/videos')
  //     //   .then((response) => {
  //     //     const contentType = response.headers.get('content-type');
  //     //     if (!contentType || !contentType.includes('application/json')) {
  //     //       throw new TypeError("Oops, we haven't got JSON!");
  //     //     }
  //     //     return response.json();
  //     //   })
  //     //   .then((data) => {
  //     //     console.log("data ====> ", data)
  //     //     try {
  //     //       setVideos(data)
  //     //       console.log("data has been processed", { data })
  //     //     } catch {
  //     //       console.log("Error in setBody")
  //     //     }
  //     //   })
  //     //   .catch((error) => console.error(error));

  // }

  const localOnClick = () => {
    const queryAsString = modifyString();

    return onClickHandler(queryAsString);
  }

    return (
      <Box>
        <FormControl fullWidth sx={{ m: 1}}>
            <InputLabel > Terms </InputLabel>
            <OutlinedInput
              value={inputValue}
              onChange={updateState}
              label="Terms"
            />
          </FormControl>
          <Button
            sx={{ m:1 }}
            variant="outlined"
            size="large"
            onClick={localOnClick}
          >
              Search
          </Button>
        </Box>
    );
  }

export default SearchBox;

/**
 * cat big small
 */