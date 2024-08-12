import { TheGuardianSearchQueryParams } from "@/app/api/the-guardian/search/search.types";
import { buildApiUrl } from "./urlUtils";
import { apisConfig } from "@/constants/global";
import { transformNewsApiData, transformNewYorkTimesApiData, transformTheGuardianData } from "@/services/apiTransformDataService";
import { Filters } from "@/contexts/newsContext.type";
import { NewsApiTopHeadlinesCategory, NewsApiTopHeadlinesQueryParams } from "@/app/api/newsapi/top-headlines/topHeadlines.types";
import { NewYorkTimesArticleSearchQueryParams } from "@/app/api/new-york-times/article-search/articleSearch.types";
import { mapCategoryToSource } from "@/utils/categoryMappings";

type ApiConfig = {
  url: string;
  transform: (data: any) => any[];
}

export const buildApiConfigs = (filters: Filters): ApiConfig[] => {
  const { keyword, startDate, endDate, category, sources } = filters;

  const apiConfigs: ApiConfig[] = [];

  // Map categories for each source
  const categoryMappings = mapCategoryMappings(category);

  // Build configurations for each source
  if (sources.includes("NewsAPI") && canUseNewsApi(startDate, endDate)) {
    apiConfigs.push(createNewsApiConfig(keyword, categoryMappings.newsApiCategory));
  }

  if (sources.includes("New York Times")) {
    apiConfigs.push(createNytApiConfig(keyword, startDate, endDate, categoryMappings.nytCategory));
  }

  if (sources.includes("The Guardian")) {
    apiConfigs.push(createGuardianApiConfig(keyword, startDate, endDate, categoryMappings.guardianCategory));
  }

  return apiConfigs;
};

const mapCategoryMappings = (category: string) => ({
  newsApiCategory: mapCategoryToSource(category, 'newsapi') as NewsApiTopHeadlinesCategory,
  nytCategory: mapCategoryToSource(category, 'nyt') as string,
  guardianCategory: mapCategoryToSource(category, 'guardian') as string,
});

const canUseNewsApi = (startDate?: string, endDate?: string) => !startDate && !endDate;

const createNewsApiConfig = (keyword: string | undefined, category: NewsApiTopHeadlinesCategory | undefined): ApiConfig => {
  const params: NewsApiTopHeadlinesQueryParams = {
    q: keyword || undefined,
    language: "en",
    category: category || undefined,
    pageSize: 100,
  };

  return {
    url: buildApiUrl(apisConfig.newsApiTopHeadlines.internalUrl, params),
    transform: transformNewsApiData,
  };
};

const createNytApiConfig = (
  keyword: string | undefined,
  startDate: string | undefined,
  endDate: string | undefined,
  category: string | undefined
): ApiConfig => {
  const params: NewYorkTimesArticleSearchQueryParams = {
    q: keyword || undefined,
    "begin_date": formatDate(startDate),
    "end_date": formatDate(endDate),
    "fq": category ? `section_name:("${category}")` : undefined,
  };

  return {
    url: buildApiUrl(apisConfig.newYorkTimesArticleSearch.internalUrl, params),
    transform: transformNewYorkTimesApiData,
  };
};

const createGuardianApiConfig = (
  keyword: string | undefined,
  startDate: string | undefined,
  endDate: string | undefined,
  category: string | undefined
): ApiConfig => {
  const params: TheGuardianSearchQueryParams = {
    q: keyword || undefined,
    "from-date": startDate || undefined,
    "to-date": endDate || undefined,
    section: category || undefined,
  };

  return {
    url: buildApiUrl(apisConfig.theGuardianSearch.internalUrl, params),
    transform: transformTheGuardianData,
  };
};

const formatDate = (date?: string): string | undefined => date?.replace(/-/g, '');
