import { Filters } from "@/contexts/searchContext.type";
import { Preferences } from "@/contexts/feedContext.type";
import { combineNews } from "@/utils/combineNews";
import { buildApiConfigs } from "@/utils/buildApiConfigs";
import { fetchFromInternalApiService } from "@/services/fetchFromInternalApiService";

type ApiConfig = {
  url: string;
  transform: (data: any) => any[];
};

export const fetchAndCombineNewsService = async (
  params: Filters | Preferences
): Promise<{ news: any[]; sourceCounts: { [key: string]: number } }> => {
  const apiConfigs: ApiConfig[] = buildApiConfigs(params);

  let allNews: any[] = [];
  let sourceCounts: { [key: string]: number } = {};

  for (const { url, transform } of apiConfigs) {
    try {
      const data = await fetchFromInternalApiService(url);
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
