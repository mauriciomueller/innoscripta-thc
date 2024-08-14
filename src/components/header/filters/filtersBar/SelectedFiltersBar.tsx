"use client";

import Chip from "@mui/material/Chip";
import { Tooltip } from "@mui/material";
import { useSearchContext } from "@/contexts/searchContext";
import dayjs from "dayjs";

export const SelectedFiltersBar: React.FC = () => {
  const { formik, state } = useSearchContext();
  const { filters } = state;
  const { keyword, startDate, endDate, category, sources } = filters;

  let filtersBar = [];

  if (keyword) {
    filtersBar.push({ label: `Keyword: ${keyword}`, key: "keyword" });
  }

  if (startDate || endDate) {
    const formattedStartDate = startDate
      ? dayjs(startDate).format("MM/DD/YYYY")
      : "N/A";
    const formattedEndDate = endDate
      ? dayjs(endDate).format("MM/DD/YYYY")
      : "N/A";
    filtersBar.push({
      label: `Date: ${formattedStartDate} to ${formattedEndDate}`,
      key: "dateRange",
    });
  }

  if (category)
    filtersBar.push({ label: `Category: ${category}`, key: "category" });

  if (sources.length) {
    filtersBar.push({
      label: `Sources: ${sources.join(", ")}`,
      key: "sources",
    });
  }

  const handleDelete = (key: string) => {
    switch (key) {
      case "keyword":
        formik.setFieldValue("keyword", "");
        break;
      case "dateRange":
        formik.setFieldValue("startDate", "");
        formik.setFieldValue("endDate", "");
        break;
      case "category":
        formik.setFieldValue("category", "");
        break;
      default:
        break;
    }

    formik.submitForm(); // Re-submit the form to refetch data
  };

  return (
    <div className="bg-indigo-800 text-white p-4 rounded-t-3xl flex flex-wrap gap-2">
      {filtersBar.map((filter) => {
        const chip = (
          <Chip
            key={filter.key}
            label={filter.label}
            variant="outlined"
            onDelete={
              filter.key !== "sources"
                ? () => handleDelete(filter.key)
                : undefined
            } // Skip onDelete for sources
          />
        );

        return filter.key === "sources" ? (
          <Tooltip title="Sources filter cannot be removed" key={filter.key}>
            {chip}
          </Tooltip>
        ) : (
          chip
        );
      })}
    </div>
  );
};
