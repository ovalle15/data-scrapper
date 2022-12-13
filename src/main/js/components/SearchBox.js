import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { FormControl, InputLabel, OutlinedInput, Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";

const SearchBox = ({ onClickHandler, isLoading }) => {
    const [inputValue, setInputValue] = useState("");

    const modifyString = () => {
        const re =
            /(~|`|!|@|#|$|%|^|&|\*|\(|\)|{|}|\[|\]|;|:|\"|'|<|,|\.|>|\?|\/|\\|\||-|_|\+|=)/g;
        const valList = inputValue.replace(re, " ").split(" ");
        const v = valList.filter((word) => !!word);
        console.log("final --> " + v.join("+"));
        return v.join("+");
    };
    const updateState = (e) => {
        setInputValue(e.target.value);
    };

    const localOnClick = () => {
        const queryAsString = modifyString();
        return onClickHandler(queryAsString);
    };

    return (
        <Box>
            <FormControl margin="dense" fullWidth sx={{ m: 1 }}>
                <InputLabel> Terms </InputLabel>
                <OutlinedInput
                    value={inputValue}
                    onChange={updateState}
                    label="Terms"
                />
            </FormControl>
            <LoadingButton
                loading={isLoading}
                sx={{ m: 1 }}
                variant="outlined"
                size="large"
                onClick={localOnClick}
            >
                Search
            </LoadingButton>
        </Box>
    );
};

export default SearchBox;
