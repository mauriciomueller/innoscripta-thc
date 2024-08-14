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

import { toast } from "react-toastify";
import { useFeedContext } from "@/contexts/feedContext";
import { sources } from "@/constants/global";

export const SourcePreferences: React.FC = () => {
  const { formik } = useFeedContext();

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
        {sources.map((source) => (
          <MenuItem key={source} value={source}>
            <Checkbox
              checked={formik.values.sources.indexOf(source) > -1}
              className="text-white"
            />
            <ListItemText primary={source} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
