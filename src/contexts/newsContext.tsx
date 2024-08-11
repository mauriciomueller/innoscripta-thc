"use client";

import React, { createContext, useContext, useReducer, useEffect } from "react";
import { reducer, initialState } from "@/reducers/newsReducer";
import { NewsActions } from "@/actions/newsActions";
import { useQuery } from "@tanstack/react-query";
import { fetchAndCombineNewsService } from "@/services/fetchAndCombineNewsService";

type NewsContextType = {
  state: State;
  dispatch: React.Dispatch<NewsActions>;
  setKeywordFilter: (keyword: string) => void;
  setCategoryFilter: (categories: string[]) => void;
  setSourceFilter: (sources: string[]) => void;
  setDateFilter: (date: string) => void;
  setAuthorFilter: (author: string) => void;
};

type State = {
  news: News[];
  sourceCounts: { [key: string]: number };
  filters: Filters;
  isLoading: boolean;
  error: Error | null;
};

export type News = {
  title: string;
  description: string;
  link: string;
  image: string;
  publishedAt: string;
  source: string;
  author: string;
  category: string;
};

export type Filters = {
  keyword: string;
  source: string[];
  date: string;
  author: string;
  categories: string[];
};

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
  const [state, dispatch] = useReducer(reducer, initialState);

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["news", state.filters],
    queryFn: () => fetchAndCombineNewsService(state.filters),
    enabled: !!state.filters.keyword,
  });

  useEffect(() => {
    if (state.filters) {
      refetch();
    }
  }, [state.filters, refetch]);

  useEffect(() => {
    if (data) {
      dispatch({ type: "UPDATE_NEWS", payload: data });
    }
  }, [data]);

  const setKeywordFilter = (keyword: string) => {
    dispatch({ type: "SET_KEYWORD", payload: keyword });
  };

  const setCategoryFilter = (categories: string[]) => {
    dispatch({ type: "SET_CATEGORIES", payload: categories });
  };

  const setSourceFilter = (sources: string[]) => {
    dispatch({ type: "SET_SOURCE", payload: sources });
  };

  const setDateFilter = (date: string) => {
    dispatch({ type: "SET_DATE", payload: date });
  };

  const setAuthorFilter = (author: string) => {
    dispatch({ type: "SET_AUTHOR", payload: author });
  };

  return (
    <NewsContext.Provider
      value={{
        state: { ...state, isLoading, error },
        dispatch,
        setKeywordFilter,
        setCategoryFilter,
        setSourceFilter,
        setDateFilter,
        setAuthorFilter,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};
