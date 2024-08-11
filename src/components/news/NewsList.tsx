"use client";

import { useNewsContext } from "@/contexts/newsContext";
import { NewsCard } from "./NewsCard";
import { NewsListSkeleton } from "./NewsListSkeleton";
import { Alert } from "@mui/material";
import { Fragment } from "react";

export const NewsList = () => {
  const { state } = useNewsContext();
  const { news, isLoading, error } = state;

  return (
    <Fragment>
      {error && (
        <Alert severity="error" className="flex items-center mb-8">
          An error occurred while loading news
        </Alert>
      )}
      <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {isLoading ? (
          <NewsListSkeleton />
        ) : (
          news.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))
        )}
      </ul>
    </Fragment>
  );
};
