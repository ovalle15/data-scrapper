import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FormControl, InputLabel , OutlinedInput , Button} from '@mui/material';


const SearchBox = (props) => {
  const [inputValue, setInputValue] = useState("");

  const modifyString = () => {
    const re = /(~|`|!|@|#|$|%|^|&|\*|\(|\)|{|}|\[|\]|;|:|\"|'|<|,|\.|>|\?|\/|\\|\||-|_|\+|=)/g
    const valList = inputValue.replace(re," ").split(" ");
    const v = valList.filter(word => word.length > 0)
    console.log(v)
    return v
    // query.add(input)
  }

  const updateState = (e) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
  }

  const onClickHandler = (e) => {
    console.log("GOT CLICK");
    const m = modifyString();
    console.log(m);

    // fetch('http://localhost:8080/videos/', {
    //   method: 'POST',
    //   body: modifyString();
    // });
  }

    return (
      <Box>
        <FormControl fullWidth sx={{ m: 1}}>
            <InputLabel > Terms </InputLabel>
            <OutlinedInput
              // id="outlined-adornment-amount"
              value={inputValue}
              onChange={updateState}
              label="Terms"
            />
          </FormControl>
          <Button sx={{ m:1 }} variant="outlined" size="large" onClick = {onClickHandler}
            >
              Search
          </Button>
        </Box>
        // <Box
        //   component="form"
        //   sx={{
        //     '& > :not(style)': { m: 1, width: '80ch' },
        //   }}
        //   noValidate
        //   autoComplete="off"
        // >
        //   <TextField id="outlined-basic" label="Search" variant="outlined" />
        // </Box>
    );
  }

export default SearchBox;

/**
 * cat big small
 */