"use client";

import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

const categories = [
  "Business",
  "Technology",
  "Entertainment",
  "Health",
  "Sports",
];

export const CategoryFilter: React.FC<{
  onChange: (category: string) => void;
}> = ({ onChange }) => {
  const [category, setCategory] = useState("");

  const handleSelectChange = (e: any) => {
    const value = e.target.value;
    setCategory(value);
    onChange(value);
  };

  return (
    <FormControl variant="outlined" fullWidth margin="normal">
      <InputLabel>Category</InputLabel>
      <Select value={category} onChange={handleSelectChange} label="Category">
        <MenuItem value="">All Categories</MenuItem>
        {categories.map((cat) => (
          <MenuItem key={cat} value={cat}>
            {cat}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
