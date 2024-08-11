"use client";

import { TextField } from "@mui/material";
import { useNewsContext } from "@/contexts/newsContext";

export const DateFilter: React.FC = () => {
  const { formik } = useNewsContext();

  return (
    <TextField
      label="Date"
      type="date"
      name="date"
      value={formik.values.date}
      onChange={formik.handleChange}
      variant="outlined"
      fullWidth
      margin="normal"
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};
