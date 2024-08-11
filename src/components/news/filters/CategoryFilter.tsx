"use client";

import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useNewsContext } from "@/contexts/newsContext";

const categories = [
  "Business",
  "Technology",
  "Entertainment",
  "Health",
  "Sports",
];

export const CategoryFilter: React.FC = () => {
  const { formik } = useNewsContext();

  const handleSelectChange = (event: any) => {
    const value = event.target.value;
    formik.setFieldValue("categories", [value]);
  };

  return (
    <FormControl variant="outlined" fullWidth margin="normal">
      <InputLabel>Category</InputLabel>
      <Select
        name="categories"
        value={formik.values.category[0] || ""}
        onChange={handleSelectChange}
        label="Category"
      >
        {categories.map((category) => (
          <MenuItem key={category} value={category}>
            {category}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
