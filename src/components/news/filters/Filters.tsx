"use client";

import React from "react";

import { DateFilter } from "./DateFilter";
import { CategoryFilter } from "./CategoryFilter";
import { SourceFilter } from "./SourceFilter";
import { useNewsContext } from "@/contexts/newsContext";
import { KeywordFilter } from "./KeywordsFilter";
import { Button } from "@mui/material";

export const Filters: React.FC = () => {
  const { formik } = useNewsContext();

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="bg-white rounded-3xl p-8 mb-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-6"
    >
      <KeywordFilter />
      <DateFilter />
      <CategoryFilter />
      <SourceFilter />
      <Button
        className="col-span-1 sm:col-span-2 lg:col-span-1 h-[47.38px]"
        type="submit"
        variant="contained"
      >
        Search
      </Button>
    </form>
  );
};
