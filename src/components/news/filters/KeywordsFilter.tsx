"use client";

import { TextField } from "@mui/material";
import { useState } from "react";

export const KeywordFilter: React.FC<{
  onChange: (keyword: string) => void;
}> = ({ onChange }) => {
  const [keyword, setKeyword] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setKeyword(value);
    onChange(value);
  };

  return (
    <TextField
      label="Keyword"
      value={keyword}
      onChange={handleInputChange}
      variant="outlined"
      fullWidth
      margin="normal"
    />
  );
};
