"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useFormik } from "formik";
import { useQuery } from "@tanstack/react-query";
import { Filters, SearchContextType } from "./searchContext.type";
import { initialFilters } from "@/constants/global";
import { validationSchema } from "@/utils/formikValidationSchema";
import { toast } from "react-toastify";
import {
  getFiltersFromQueryParams,
  updateQueryParams,
} from "@/utils/filterUtils";
import { fetchSearchServices } from "@/services/fetchSearchServices";

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const useSearchContext = (): SearchContextType => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearchContext must be used within a SearchProvider");
  }
  return context;
};

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState<Filters>(() =>
    getFiltersFromQueryParams(searchParams)
  );

  const formik = useFormik<Filters>({
    initialValues: filters,
    validationSchema,
    onSubmit: (values) => {
      setFilters(values);
      refetch();
      updateQueryParams(router, values);
    },
  });

  const resetFilter = () => {
    formik.resetForm();
    setFilters(initialFilters);
    updateQueryParams(router, initialFilters);
    refetch();
  };

  const { data, isLoading, error, refetch, isFetched, isFetching } = useQuery({
    queryKey: ["searchFilters", filters],
    queryFn: () => fetchSearchServices(filters),
    enabled: true,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    const updatedFilters = getFiltersFromQueryParams(searchParams);
    if (updatedFilters.sources.length === 0) {
      updatedFilters.sources = initialFilters.sources;
    }
    setFilters(updatedFilters);
    formik.setValues(updatedFilters, false);
  }, [searchParams]);

  useEffect(() => {
    if (formik.submitCount > 0) {
      if (
        (formik.errors.startDate && formik.touched.startDate) ||
        (formik.errors.endDate && formik.touched.endDate)
      ) {
        toast.error(`Verify from and to dates, both must be selected.`);
      }
    }

    if (error) {
      toast.error(`An error occurred while fetching news: ${error.message}`);
    }
  }, [formik.errors, formik.touched, formik.submitCount, error]);

  return (
    <SearchContext.Provider
      value={{
        state: {
          news: data?.news || [],
          sourceCounts: data?.sourceCounts || {},
          filters,
          isLoading,
          error,
          isFetching,
          isFetched,
        },
        formik,
        resetFilter,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
