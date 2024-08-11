"use client";

import { TextField } from "@mui/material";
import { useState } from "react";

export const DateFilter: React.FC<{ onChange: (date: string) => void }> = ({
  onChange,
}) => {
  const [date, setDate] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDate(value);
    onChange(value);
  };

  return (
    <TextField
      label="Date"
      type="date"
      value={date}
      onChange={handleInputChange}
      variant="outlined"
      fullWidth
      margin="normal"
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};
