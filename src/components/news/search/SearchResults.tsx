"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { NewsCard } from "@/components/news/NewsCard";
import { NewsListSkeleton } from "@/components/news/NewsListSkeleton";
import { useSearchContext } from "@/contexts/searchContext";
import { Alert, Button } from "@mui/material";

export const SearchResults = () => {
  const { state, resetFilter } = useSearchContext();
  const { news, isLoading, error, isFetching, isFetched } = state;
  const router = useRouter();
  const searchParams = useSearchParams();

  return (
    <>
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
    </>
  );
};
