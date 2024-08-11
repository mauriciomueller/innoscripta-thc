"use client";

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Checkbox,
  ListItemText,
} from "@mui/material";
import { useState } from "react";

const sources = ["NewsAPI", "New York Times", "The Guardian"];

export const SourceFilter: React.FC<{
  onChange: (source: string[]) => void;
}> = ({ onChange }) => {
  const [selectedSources, setSelectedSources] = useState<string[]>([]);

  const handleSelectChange = (e: any) => {
    const value = e.target.value;
    setSelectedSources(value);
    onChange(value);
  };

  return (
    <FormControl variant="outlined" fullWidth margin="normal">
      <InputLabel>Source</InputLabel>
      <Select
        multiple
        value={selectedSources}
        onChange={handleSelectChange}
        label="Source"
        renderValue={(selected) => (selected as string[]).join(", ")}
      >
        <MenuItem value="">
          <em>All Sources</em>
        </MenuItem>
        {sources.map((src) => (
          <MenuItem key={src} value={src}>
            <Checkbox checked={selectedSources.indexOf(src) > -1} />
            <ListItemText primary={src} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
