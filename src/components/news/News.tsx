import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

import { NewsSourcesInfo } from "./NewsSourcesInfo";
import { NewsList } from "./NewsList";
import { fetchAndCombineNewsService } from "@/services/fetchAndCombineNewsService";
import { initialFilters } from "@/constants/global";

export default async function News() {
  const queryClient = new QueryClient();

  // Prefetch news data on the server
  await queryClient.prefetchQuery({
    queryKey: ["news", initialFilters],
    queryFn: () => fetchAndCombineNewsService(initialFilters),
  });

  // Dehydrate the state for use on the client, including errors
  const dehydratedState = dehydrate(queryClient, {
    shouldDehydrateQuery: () => true,
  });

  return (
    <HydrationBoundary state={dehydratedState}>
      <NewsSourcesInfo />
      <NewsList />
    </HydrationBoundary>
  );
}
