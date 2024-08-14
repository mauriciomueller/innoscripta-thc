"use client";

import { useSearchContext } from "@/contexts/searchContext";
import { TextField } from "@mui/material";

export const KeywordFilter: React.FC = () => {
  const { formik } = useSearchContext();

  return (
    <TextField
      label="Keyword"
      name="keyword"
      value={formik.values.keyword}
      onChange={formik.handleChange}
      variant="outlined"
      fullWidth
      margin="normal"
      error={formik.touched.keyword && Boolean(formik.errors.keyword)}
      helperText={formik.touched.keyword && formik.errors.keyword}
    />
  );
};
