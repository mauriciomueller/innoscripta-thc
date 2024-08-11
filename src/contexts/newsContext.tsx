"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useFormik } from "formik";
import { useQuery } from "@tanstack/react-query";
import { fetchAndCombineNewsService } from "@/services/fetchAndCombineNewsService";
import * as Yup from "yup";
import { Filters, NewsContextType } from "./newsContext.type";
import { initialFilters } from "@/constants/global";

const NewsContext = createContext<NewsContextType | undefined>(undefined);

export const useNewsContext = () => {
  const context = useContext(NewsContext);
  if (!context) {
    throw new Error("useNewsContext must be used within a NewsProvider");
  }
  return context;
};

export const NewsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [filters, setFilters] = useState<Filters>(initialFilters);

  const formik = useFormik<Filters>({
    initialValues: initialFilters,
    validationSchema: Yup.object({
      keyword: Yup.string(),
      date: Yup.string(),
      category: Yup.string(),
      source: Yup.array().of(Yup.string()),
      author: Yup.string(),
    }),
    onSubmit: () => {
      setFilters(formik.values);
      refetch();
    },
  });

  const resetFilter = () => {
    formik.resetForm();
    setFilters(initialFilters);
    refetch();
  };

  const { data, isLoading, error, refetch, isFetching, isFetched } = useQuery({
    queryKey: ["news", filters],
    queryFn: () => fetchAndCombineNewsService(filters),
    enabled: false, // Disable auto-fetch on mount
  });

  useEffect(() => {
    refetch(); // Manually trigger prefetch
  }, []);

  return (
    <NewsContext.Provider
      value={{
        state: {
          news: data?.news || [],
          sourceCounts: data?.sourceCounts || {},
          filters: formik.values,
          isLoading,
          isFetching,
          isFetched,
          error,
        },
        formik,
        resetFilter,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};
