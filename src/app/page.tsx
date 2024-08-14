import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { Suspense } from "react";
import { fetchFeedService } from "@/services/fetchFeedService";
import { initialFilters } from "@/constants/global";
import { NewsFeed } from "@/components/news/feed/NewsFeed";
import { NewsListSkeleton } from "@/components/news/NewsListSkeleton";

export default async function Home() {
  const queryClient = new QueryClient();

  // Prefetch the news data on the server
  await queryClient.prefetchQuery({
    queryKey: ["news", initialFilters],
    queryFn: () => fetchFeedService(initialFilters),
  });

  // Dehydrate the state for use on the client, including errors
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <Suspense fallback={<NewsListSkeleton />}>
        <NewsFeed />
      </Suspense>
    </HydrationBoundary>
  );
}
