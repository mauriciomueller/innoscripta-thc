"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useFormik } from "formik";
import { useQuery } from "@tanstack/react-query";
import * as Yup from "yup";
import Cookies from "js-cookie";
import { Filters, NewsContextType } from "./newsContext.type";
import { initialFilters } from "@/constants/global";
import { fetchAndCombineNewsService } from "@/services/fetchAndCombineNewsService";

const NEWS_FILTER_COOKIE_NAME = "newsFilters";

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

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedFilters = Cookies.get(NEWS_FILTER_COOKIE_NAME);
      if (storedFilters) {
        setFilters(JSON.parse(storedFilters));
      }
    }
  }, []);

  const formik = useFormik<Filters>({
    initialValues: filters,
    validationSchema: Yup.object({
      keyword: Yup.string(),
      startDate: Yup.date().nullable().max(Yup.ref("endDate")),
      endDate: Yup.date().nullable().min(Yup.ref("startDate")),
      category: Yup.string(),
      source: Yup.array().of(Yup.string()),
      author: Yup.string(),
    }),
    onSubmit: () => {
      const newFilters = formik.values;
      setFilters(newFilters);
      Cookies.set(NEWS_FILTER_COOKIE_NAME, JSON.stringify(newFilters), {
        expires: 7,
      });
      refetch();
    },
  });

  const resetFilter = () => {
    formik.resetForm();
    setFilters(initialFilters);
    Cookies.remove(NEWS_FILTER_COOKIE_NAME);
    refetch();
  };

  const { data, isLoading, error, refetch, isFetched, isFetching } = useQuery({
    queryKey: ["news", filters],
    queryFn: () => fetchAndCombineNewsService(filters),
    enabled: true,
    refetchOnWindowFocus: false,
  });

  return (
    <NewsContext.Provider
      value={{
        state: {
          news: data?.news || [],
          sourceCounts: data?.sourceCounts || {},
          filters: formik.values,
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
    </NewsContext.Provider>
  );
};
