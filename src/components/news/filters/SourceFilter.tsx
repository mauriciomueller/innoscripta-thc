"use client";

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Checkbox,
  ListItemText,
} from "@mui/material";
import { useNewsContext } from "@/contexts/newsContext";

const sources = ["NewsAPI", "New York Times", "The Guardian"];

export const SourceFilter: React.FC = () => {
  const { formik } = useNewsContext();

  const handleSelectChange = (event: any) => {
    const value = event.target.value;
    if (value.includes("All Sources")) {
      formik.setFieldValue(
        "source",
        formik.values.sources.length === sources.length ? [] : [...sources]
      );
    } else {
      formik.setFieldValue("source", value);
    }
  };

  return (
    <FormControl variant="outlined" fullWidth margin="normal">
      <InputLabel>Source</InputLabel>
      <Select
        name="source"
        multiple
        value={formik.values.sources}
        onChange={handleSelectChange}
        label="Source"
        renderValue={(selected) => (selected as string[]).join(", ")}
      >
        <MenuItem
          value="All Sources"
          className={`font-bold text-indigo-600 bg-indigo-100 hover:bg-indigo-200`}
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
