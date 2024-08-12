"use client";

import { TextField } from "@mui/material";
import { useNewsContext } from "@/contexts/newsContext";
import { Fragment } from "react";

const getTodayDate = () => {
  const today = new Date();
  return today.toISOString().split("T")[0];
};

export const DateFilter: React.FC = () => {
  const { formik } = useNewsContext();
  const today = getTodayDate();

  return (
    <Fragment>
      <TextField
        label="Start Date"
        type="date"
        name="startDate"
        value={formik.values.startDate || ""}
        onChange={(e) => {
          formik.setFieldValue("startDate", e.target.value);
          if (formik.values.endDate && e.target.value > formik.values.endDate) {
            formik.setFieldValue("endDate", e.target.value);
          }
        }}
        variant="outlined"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          max: formik.values.endDate || today,
        }}
      />
      <TextField
        label="End Date"
        type="date"
        name="endDate"
        value={formik.values.endDate || ""}
        onChange={formik.handleChange}
        variant="outlined"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          min: formik.values.startDate || undefined,
          max: today,
        }}
      />
    </Fragment>
  );
};
