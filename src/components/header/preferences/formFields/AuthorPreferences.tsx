"use client";

import React from "react";
import { useFeedContext } from "@/contexts/feedContext";
import { Alert, TextField } from "@mui/material";

export const AuthorPreferences: React.FC = () => {
  const { formik } = useFeedContext();
  const { sources } = formik.values;

  return (
    <div>
      <TextField
        fullWidth
        id="author"
        name="author"
        label="Author"
        placeholder="Enter author"
        variant="outlined"
        margin="normal"
        onChange={formik.handleChange}
        value={formik.values.author}
      />
      {sources.includes("NewsAPI") && (
        <Alert severity="info" className="flex items-center py-0 mt-4">
          NewsAPI does support author filtering
        </Alert>
      )}
    </div>
  );
};
