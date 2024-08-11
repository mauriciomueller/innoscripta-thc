"use client";

import { useNewsContext } from "@/contexts/newsContext";
import { NewsCard } from "./NewsCard";
import { NewsListSkeleton } from "./NewsListSkeleton";
import { Alert, Button } from "@mui/material";
import { Fragment } from "react";

export const NewsList = () => {
  const { state, resetFilter } = useNewsContext();
  const { news, isLoading, error, isFetching, isFetched } = state;
  return (
    <Fragment>
      {error && (
        <Alert severity="error" className="flex items-center mb-8">
          An error occurred while loading news.
        </Alert>
      )}

      {!isFetching && !isLoading && isFetched && news.length === 0 && (
        <Alert severity="info" className="flex items-center mb-8">
          <div className="flex items-center gap-3">
            No news articles found for the selected filters, try changing them.{" "}
            <Button variant="contained" onClick={resetFilter}>
              reset filter
            </Button>
          </div>
        </Alert>
      )}

      <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {isLoading || isFetching ? (
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
