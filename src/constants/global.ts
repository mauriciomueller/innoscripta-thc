import { Filters } from "@/contexts/newsContext.type";

export const PROJECT_NAME = process.env.PROJECT_NAME || "News Aggregator";
export const PROJECT_URL = process.env.PROJECT_URL || "http://localhost:3000";
const NEWSAPI_API_KEY = process.env.NEWSAPI_API_KEY || "";
const NEW_YORK_TIMES_API_KEY = process.env.NEW_YORK_TIMES_API_KEY || "";
const THE_GUARDIAN_API_KEY = process.env.THE_GUARDIAN_API_KEY || "";

const NEWS_API_V2_URL = "https://newsapi.org/v2";
const NEW_YORK_TIMES_API_URL = "https://api.nytimes.com/svc";
const THE_GUARDIAN_API_URL = "https://content.guardianapis.com";

type ApisConfig = {
  [key: string]: {
    url: string;
    apiKey: string;
    apiKeyName: string;
    internalUrl: string;
  };
};

export const initialFilters: Filters = {
  keyword: "",
  date: "",
  category: "",
  sources: ["NewsAPI", "New York Times", "The Guardian"],
  author: "",
};

export const apisConfig: ApisConfig = {
  'newsApiEverything': {
    'url': `${NEWS_API_V2_URL}/everything`,
    'apiKey': NEWSAPI_API_KEY,
    'apiKeyName': 'apiKey',
    'internalUrl': `${PROJECT_URL}/api/newsapi/everything`,
  },
  'newsApiTopHeadlines': {
    'url': `${NEWS_API_V2_URL}/top-headlines`,
    'apiKey': NEWSAPI_API_KEY,
    'apiKeyName': 'apiKey',
    'internalUrl': `${PROJECT_URL}/api/newsapi/top-head`
  },
  'newYorkTimesArticleSearch': {
    'url': `${NEW_YORK_TIMES_API_URL}/search/v2/articlesearch.json`,
    'apiKey': NEW_YORK_TIMES_API_KEY,
    'apiKeyName': 'api-key',
    'internalUrl': `${PROJECT_URL}/api/new-york-times/article-search`,
  },
  'theGuardianSearch': {
    'url': `${THE_GUARDIAN_API_URL}/search`,
    'apiKey': THE_GUARDIAN_API_KEY,
    'apiKeyName': 'api-key',
    'internalUrl': `${PROJECT_URL}/api/the-guardian/search`,
  }
}
