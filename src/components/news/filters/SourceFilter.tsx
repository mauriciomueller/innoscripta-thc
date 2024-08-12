"use client";

import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Checkbox,
  ListItemText,
} from "@mui/material";
import { useNewsContext } from "@/contexts/newsContext";
import { toast } from "react-toastify";

const sources = ["NewsAPI", "New York Times", "The Guardian"];

export const SourceFilter: React.FC = () => {
  const { formik } = useNewsContext();

  const handleSelectChange = (event: any) => {
    const value = event.target.value;
    const currentSources = formik.values.sources;

    if (value.includes("All Sources")) {
      if (currentSources.length === sources.length) {
        // If all sources are already selected, do nothing
        return;
      } else {
        // Otherwise, select all sources
        formik.setFieldValue("sources", [...sources]);
      }
    } else {
      if (value.length === 0) {
        // Trigger a toast notification when trying to deselect the last source
        toast.error("At least one source must remain selected.");
        return;
      }
      formik.setFieldValue("sources", value);
    }
  };

  return (
    <FormControl variant="outlined" fullWidth margin="normal">
      <InputLabel>Source</InputLabel>
      <Select
        name="sources"
        multiple
        value={formik.values.sources}
        onChange={handleSelectChange}
        label="Source"
        renderValue={(selected) => (selected as string[]).join(", ")}
      >
        <MenuItem
          value="All Sources"
          className="font-bold text-indigo-600 bg-indigo-100 hover:bg-indigo-200"
        >
          <Checkbox
            checked={formik.values.sources.length === sources.length}
            className="text-indigo-600"
          />
          <ListItemText primary="Select All Sources" />
        </MenuItem>
        {sources.map((source) => (
          <MenuItem key={source} value={source}>
            <Checkbox checked={formik.values.sources.indexOf(source) > -1} />
            <ListItemText primary={source} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
