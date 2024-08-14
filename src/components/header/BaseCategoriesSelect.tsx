import { Filters } from "@/contexts/searchContext.type";
import { unifiedCategories } from "@/utils/categoryMappings";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { FormikFormProps, FormikProps } from "formik";

type BaseCategorySelectProps = {
  formik: FormikProps<Filters>;
  className?: string;
};

export const BaseCategorySelect: React.FC<BaseCategorySelectProps> = ({
  formik,
  className = "",
}) => {
  return (
    <FormControl
      variant="outlined"
      fullWidth
      margin="normal"
      className={className}
    >
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
