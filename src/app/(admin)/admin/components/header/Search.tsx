"use client";

import { Box, IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const Search = () => {
  const [keyword, setKeyword] = useState<string>("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        maxWidth: 500,
      }}
    >
      <IconButton color="inherit">
        <SearchIcon />
      </IconButton>
      <TextField
        value={keyword}
        onChange={handleSearch}
        variant="standard"
        placeholder="Search..."
        fullWidth
        sx={{
          backgroundColor: "#fff",
          borderRadius: 1,
          "& .MuiOutlinedInput-root": {
            borderRadius: 1,
          },
        }}
      />
    </Box>
  );
};

export default Search;
