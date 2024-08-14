"use client";

import { createContext, useContext, useState } from "react";
import { FeedContextType, Preferences } from "./feedContext.type";
import * as Yup from "yup";
import { useFormik } from "formik";
import Cookies from "js-cookie";
import { useQuery } from "@tanstack/react-query";
import { fetchFeedService } from "@/services/fetchFeedService";
import { sources } from "@/constants/global";

const FeedContext = createContext<FeedContextType | undefined>(undefined);

export const useFeedContext = (): FeedContextType => {
  const context = useContext(FeedContext);
  if (!context) {
    throw new Error("useFeedContext must be used within a FeedProvider");
  }
  return context;
};

const preferencesInitialValues: Preferences = {
  keyword: "",
  startDate: "",
  endDate: "",
  sources: sources,
  category: "",
  author: "",
};

const PREFERENCES_COOKIE_NAME = "preferences";

export const FeedProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [preferences, setPreferences] = useState<Preferences>(() => {
    const storedPreferences = Cookies.get(PREFERENCES_COOKIE_NAME);
    if (storedPreferences) {
      const parsedPreferences = JSON.parse(storedPreferences);
      if (parsedPreferences.sources.length === 0) {
        parsedPreferences.sources = preferencesInitialValues.sources;
      }
      return parsedPreferences;
    }
    return preferencesInitialValues;
  });

  const [isPreferencesOpen, setIsPreferencesOpen] = useState<boolean>(false);

  const formik = useFormik<Preferences>({
    initialValues: preferences,
    validationSchema: Yup.object({
      sources: Yup.array().of(Yup.string()),
      categories: Yup.string(),
      author: Yup.string(),
    }),
    onSubmit: (values: Preferences) => {
      setPreferences(values);
      Cookies.set(PREFERENCES_COOKIE_NAME, JSON.stringify(values), {
        expires: 7,
      });
      setIsPreferencesOpen(false);
    },
  });

  const resetPreferences = () => {
    formik.resetForm();
    Cookies.remove(PREFERENCES_COOKIE_NAME);
    setPreferences(preferencesInitialValues);
  };

  const { data, isLoading, error, isFetched, isFetching } = useQuery({
    queryKey: ["preferences", preferences],
    queryFn: () => fetchFeedService(preferences),
    enabled: !!preferences,
    refetchOnWindowFocus: false,
  });

  return (
    <FeedContext.Provider
      value={{
        state: {
          news: data?.news || [],
          sourceCounts: data?.sourceCounts || {},
          preferences: formik.values,
          isLoading,
          error,
          isFetching,
          isFetched,
        },
        formik,
        resetPreferences,
        isPreferencesOpen,
        setIsPreferencesOpen,
      }}
    >
      {children}
    </FeedContext.Provider>
  );
};
