import React, { useState } from "react";
import styled from "styled-components";
import { LoadingButton } from "@mui/lab";
import {
    FormControl, //
    InputLabel,
    OutlinedInput,
    Button,
} from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { colorHexCodes } from "../styles/styleVars";

const StyledLoadingButton = styled(LoadingButton)`
    background-color: ${(props) =>
        props.theme ? `${colorHexCodes.white} !important` : ""};
    border: solid 2px
        ${(props) =>
            props.theme ? `${colorHexCodes.cranberryRed} !important` : ""};
    color: ${(props) =>
        props.theme && !props.loading
            ? `${colorHexCodes.cranberryRed} !important`
            : ""};
`;

const SearchBox = ({
    onClickHandler, //
    isLoading,
}) => {
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
            <StyledLoadingButton
                loading={isLoading}
                sx={{ m: 1 }}
                variant="outlined"
                size="large"
                onClick={localOnClick}
            >
                Search
            </StyledLoadingButton>
        </Box>
    );
};

export default SearchBox;
