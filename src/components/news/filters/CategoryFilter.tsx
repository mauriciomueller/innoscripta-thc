import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import { useNewsContext } from "@/contexts/newsContext";
import { unifiedCategories } from "@/utils/categoryMappings";

export const CategoryFilter: React.FC = () => {
  const { formik } = useNewsContext();

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
