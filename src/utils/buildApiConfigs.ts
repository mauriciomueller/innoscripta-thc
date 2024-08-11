import { TheGuardianSearchQueryParams } from "@/app/api/the-guardian/search/search.types";
import { buildApiUrl } from "./urlUtils";
import { apisConfig } from "@/constants/global";
import { transformNewsApiData, transformNewYorkTimesApiData, transformTheGuardianData } from "@/services/apiTransformDataService";
import { Filters } from "@/contexts/newsContext.type";
import { NewsApiTopHeadlinesCategory, NewsApiTopHeadlinesQueryParams } from "@/app/api/newsapi/top-headlines/topHeadlines.types";
import { NewYorkTimesArticleSearchQueryParams } from "@/app/api/new-york-times/article-search/articleSearch.types";

export const buildApiConfigs = (filters: Filters) => {
  const { keyword, date, category, sources } = filters;

  const newsApiTopHeadlinesParams: NewsApiTopHeadlinesQueryParams = {
    q: keyword || undefined,
    language: "en",
    category: category as NewsApiTopHeadlinesCategory || undefined,
    pageSize: 100,
  };

  const newYorkTimesArticleSearchApiParams: NewYorkTimesArticleSearchQueryParams = {
    q: keyword || undefined,
    "begin_date": date || undefined,
    "end_date": date || undefined,
    "fq": category ? `section_name:("${category}")` : undefined,
  };

  const theGuardianSearchApiParams: TheGuardianSearchQueryParams = {
    q: keyword || undefined,
    "from-date": date || undefined,
    "to-date": date || undefined,
    section: category || undefined,
  };

  return [
    {
      url: buildApiUrl(apisConfig.newsApiEverything.internalUrl, newsApiTopHeadlinesParams),
      transform: transformNewsApiData,
    },
    {
      url: buildApiUrl(apisConfig.newYorkTimesArticleSearch.internalUrl, newYorkTimesArticleSearchApiParams),
      transform: transformNewYorkTimesApiData,
    },
    {
      url: buildApiUrl(apisConfig.theGuardianSearch.internalUrl, theGuardianSearchApiParams),
      transform: transformTheGuardianData,
    },
  ];
};
