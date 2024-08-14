import { Filters } from "@/contexts/searchContext.type";
import { fetchAndCombineNewsService } from "./fetchAndCombineNewsService";

export const fetchSearchServices = async (
  filters: Filters
): Promise<{ news: any[]; sourceCounts: { [key: string]: number } }> => {
  return fetchAndCombineNewsService(filters);
};
