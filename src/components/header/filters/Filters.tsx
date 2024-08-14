"use client";

import { DateFilter } from "./DateFilter";
import { CategoryFilter } from "./CategoryFilter";
import { SourceFilter } from "./SourceFilter";
import { KeywordFilter } from "./KeywordsFilter";
import { Button } from "@mui/material";
import { SelectedFiltersBar } from "./filtersBar/SelectedFiltersBar";
import { useSearchContext } from "@/contexts/searchContext";

export const Filters: React.FC = () => {
  const { formik } = useSearchContext();

  return (
    <div className="flex flex-col">
      <SelectedFiltersBar />
      <form
        onSubmit={formik.handleSubmit}
        className={
          "border border-indigo-600 transition-all duration-300 rounded-b-3xl mb-8 p-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-6"
        }
      >
        <KeywordFilter />
        <DateFilter />
        <CategoryFilter />
        <SourceFilter />
        <Button
          className="col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-1 h-[47.38px]"
          type="submit"
          variant="contained"
        >
          Search
        </Button>
      </form>
    </div>
  );
};
