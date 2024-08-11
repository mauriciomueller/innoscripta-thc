import { fetchWithFallback } from "@/utils/fetchUtils";
import { combineNews } from "@/utils/combineNews";
import { Filters } from "@/contexts/newsContext";
import { buildApiConfigs } from "@/utils/buildApiConfigs";

export const fetchAndCombineNewsService = async (filters: Filters = {} as Filters): Promise<{ news: any[]; sourceCounts: { [key: string]: number } }> => {
  const apiConfigs = buildApiConfigs(filters);

  let allNews: any[] = [];
  let sourceCounts: { [key: string]: number } = {};

  for (const { url, transform } of apiConfigs) {
    try {
      const data = await fetchWithFallback(url);
      const articles = transform(data);
      const { news, sourceCounts: updatedSourceCounts } = combineNews(allNews, articles);

      allNews = news;
      sourceCounts = updatedSourceCounts;
    } catch (error) {
      console.error(`Error fetching data from ${url}:`, error);
    }
  }

  return { news: allNews, sourceCounts };
};

