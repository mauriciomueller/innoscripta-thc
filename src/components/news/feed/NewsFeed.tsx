"use client";

import { NewsCard } from "@/components/news/NewsCard";
import { NewsListSkeleton } from "@/components/news/NewsListSkeleton";
import { Alert, Button } from "@mui/material";
import { useFeedContext } from "@/contexts/feedContext";
import FeedIcon from "@mui/icons-material/Feed";
import { Fragment } from "react";

export const NewsFeed: React.FC = () => {
  const { state, resetPreferences } = useFeedContext();
  const { news, isLoading, error, isFetching, isFetched } = state;

  return (
    <Fragment>
      <h1 className="flex items-center gap-3">
        <FeedIcon fontSize="inherit" /> Your feed
      </h1>
      {error && (
        <Alert severity="error" className="flex items-center mb-8">
          An error occurred while loading the news feed.
        </Alert>
      )}

      {!isFetching && !isLoading && isFetched && news.length === 0 && (
        <Alert severity="info" className="flex items-center mb-8">
          <div className="flex items-center gap-3">
            No news articles found for your feed, try changing the preferences.{" "}
            <Button variant="contained" onClick={resetPreferences}>
              Reset Preferences
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
