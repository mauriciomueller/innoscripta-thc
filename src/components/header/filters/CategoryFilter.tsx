"use client";

import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import { unifiedCategories } from "@/utils/categoryMappings";
import { useSearchContext } from "@/contexts/searchContext";

export const CategoryFilter: React.FC = () => {
  const { formik } = useSearchContext();

  return (
    <FormControl variant="outlined" fullWidth margin="normal">
      <InputLabel>Category</InputLabel>
      <Select
        name="category"
        value={formik.values.category || ""}
        onChange={formik.handleChange}
        label="Category"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {unifiedCategories.map((category) => (
          <MenuItem key={category} value={category}>
            {category}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
