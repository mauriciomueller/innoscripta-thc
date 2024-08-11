import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

import { NewsSourcesInfo } from "./NewsSourcesInfo";
import { NewsList } from "./NewsList";
import { fetchAndCombineNewsService } from "@/services/fetchAndCombineNewsService";

export default async function News() {
  const queryClient = new QueryClient();

  // Prefetch news data on the server
  await queryClient.prefetchQuery({
    queryKey: [
      "news",
      {
        keyword: "",
        categories: [],
        source: [],
        date: "",
        author: "",
      },
    ],
    queryFn: () => fetchAndCombineNewsService(),
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
