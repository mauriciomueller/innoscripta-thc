import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { fetchAndCombineNewsService } from "@/services/fetchAndCombineNewsService";
import { initialFilters } from "@/constants/global";
import { SearchResultsInfo } from "@/components/news/search/SearchResultsInfo";
import { SearchResults } from "@/components/news/search/SearchResults";
import SearchIcon from "@mui/icons-material/Search";

export default async function SearchPage() {
  const queryClient = new QueryClient();

  // Prefetch news data on the server
  await queryClient.prefetchQuery({
    queryKey: ["searchFilters", initialFilters],
    queryFn: () => fetchAndCombineNewsService(initialFilters),
  });

  // Dehydrate the state for use on the client, including errors
  const dehydratedState = dehydrate(queryClient, {
    shouldDehydrateQuery: () => true,
  });

  return (
    <HydrationBoundary state={dehydratedState}>
      <h1 className="pl-4 flex items-center gap-2">
        <SearchIcon fontSize="inherit" /> Search Results
      </h1>
      <SearchResultsInfo />
      <SearchResults />
    </HydrationBoundary>
  );
}
