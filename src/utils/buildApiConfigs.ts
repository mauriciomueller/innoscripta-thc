import { TheGuardianSearchQueryParams } from "@/app/api/the-guardian/search/search.types";
import { buildApiUrl } from "./urlUtils";
import { apisConfig } from "@/constants/global";
import { transformNewsApiData, transformNewYorkTimesApiData, transformTheGuardianData } from "@/services/apiTransformDataService";
import { NewsApiTopHeadlinesCategory, NewsApiTopHeadlinesQueryParams } from "@/app/api/newsapi/top-headlines/topHeadlines.types";
import { NewYorkTimesArticleSearchQueryParams } from "@/app/api/new-york-times/article-search/articleSearch.types";
import { mapCategoryToSource } from "@/utils/categoryMappings";
import { Filters } from "@/contexts/searchContext.type";
import { Preferences } from "@/contexts/feedContext.type";

type ApiConfig = {
  url: string;
  transform: (data: any) => any[];
};

export const buildApiConfigs = (filters: Filters | Preferences): ApiConfig[] => {
  const { keyword, startDate, endDate, category, sources, author } = filters;

  const apiConfigs: ApiConfig[] = [];

  // Map categories for each source
  const categoryMappings = mapCategoryMappings(category);

  // Build configurations for each source
  if (sources.includes("NewsAPI") && canUseNewsApi(startDate, endDate, author)) {
    apiConfigs.push(createNewsApiConfig(keyword, categoryMappings.newsApiCategory, author, startDate, endDate));
  }

  if (sources.includes("New York Times")) {
    apiConfigs.push(createNytApiConfig(keyword, startDate, endDate, categoryMappings.nytCategory, author));
  }

  if (sources.includes("The Guardian")) {
    apiConfigs.push(createGuardianApiConfig(keyword, startDate, endDate, categoryMappings.guardianCategory, author));
  }

  return apiConfigs;
};

const mapCategoryMappings = (category: string) => ({
  newsApiCategory: mapCategoryToSource(category, "newsapi") as NewsApiTopHeadlinesCategory,
  nytCategory: mapCategoryToSource(category, "nyt") as string,
  guardianCategory: mapCategoryToSource(category, "guardian") as string,
});

const canUseNewsApi = (startDate?: string, endDate?: string, author?: string): boolean => {return !startDate && !endDate && !author};

const createNewsApiConfig = (
  keyword: string | undefined,
  category: NewsApiTopHeadlinesCategory | undefined,
  author: string | undefined,
  startDate: string | undefined,
  endDate: string | undefined
): ApiConfig => {
    const params: Partial<NewsApiTopHeadlinesQueryParams> = {};

  if (keyword) params.q = keyword;
  if (category) params.category = category;
  params.pageSize = 100;

  return {
    url: buildApiUrl(apisConfig.newsApiEverything.internalUrl, params),
    transform: transformNewsApiData,
  };
};

const createNytApiConfig = (
  keyword: string | undefined,
  startDate: string | undefined,
  endDate: string | undefined,
  category: string | undefined,
  author: string | undefined
): ApiConfig => {
  const params: Partial<NewYorkTimesArticleSearchQueryParams> = {};

  if (keyword) params.q = keyword;
  if (startDate) params.begin_date = formatDate(startDate);
  if (endDate) params.end_date = formatDate(endDate);
  if (category) params.fq = `section_name:("${category}")`;
  if (author) {
    if (params.fq) {
      params.fq += ` AND byline:("${author}")`;
    } else {
      params.fq = `byline:("${author}")`;
    }
  }

  return {
    url: buildApiUrl(apisConfig.newYorkTimesArticleSearch.internalUrl, params),
    transform: transformNewYorkTimesApiData,
  };
};

const createGuardianApiConfig = (
  keyword: string | undefined,
  startDate: string | undefined,
  endDate: string | undefined,
  category: string | undefined,
  author: string | undefined
): ApiConfig => {
  const params: Partial<TheGuardianSearchQueryParams> = {};

  if (keyword) params.q = keyword;
  if (startDate) params["from-date"] = startDate;
  if (endDate) params["to-date"] = endDate;
  if (category) params.section = category;
  if (author) params.tag = `type/contributor/${author}`;

  return {
    url: buildApiUrl(apisConfig.theGuardianSearch.internalUrl, params),
    transform: transformTheGuardianData,
  };
};

const formatDate = (date?: string): string | undefined => date?.replace(/-/g, "");
