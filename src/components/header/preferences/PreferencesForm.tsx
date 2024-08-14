"use client";

import { useFeedContext } from "@/contexts/feedContext";
import { SourcePreferences } from "./formFields/SourcePreferences";
import { AuthorPreferences } from "./formFields/AuthorPreferences";
import { CategoryPreferences } from "./formFields/CategoryPreferences";
import { Button } from "@mui/material";

export const PreferencesForm: React.FC = () => {
  const { formik } = useFeedContext();

  return (
    <form onSubmit={formik.handleSubmit} className="pt-6">
      <p className="mb-10 px-2">
        Customize your preferences to get the latest news on your feed:
      </p>

      <div className="flex flex-col gap-8">
        <SourcePreferences />
        <AuthorPreferences />
        <CategoryPreferences />
        <Button type="submit" variant="contained" color="primary">
          Save preferences
        </Button>
      </div>
    </form>
  );
};
