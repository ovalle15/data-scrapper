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

