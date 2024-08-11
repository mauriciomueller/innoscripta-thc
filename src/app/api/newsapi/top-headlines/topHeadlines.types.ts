export type NewsApiTopHeadlinesQueryParams = {
  apiKey?: string
  q?: string;
  country?: NewsApiTopHeadlinesCountry;
  sources?: string;
  category?: NewsApiTopHeadlinesCategory | undefined;
  to?: string;
  language?: string;
  sortBy?: 'relevancy' | 'popularity' | 'publishedAt';
  pageSize?: number;
  page?: number;
}

export type NewsApiTopHeadlinesCategory = "business" | "entertainment" | "general" | "health" | "science" | "sports" | "technology";
type NewsApiTopHeadlinesCountry = "ae" | "ar" | "at" | "au" | "be" | "bg" | "br" | "ca" | "ch" | "cn" | "co" | "cu" | "cz" | "de" | "eg" | "fr" | "gb" | "gr" | "hk" | "hu" | "id" | "ie" | "il" | "in" | "it" | "jp" | "kr" | "lt" | "lv" | "ma" | "mx" | "my" | "ng" | "nl" | "no" | "nz" | "ph" | "pl" | "pt" | "ro" | "rs" | "ru" | "sa" | "se" | "sg" | "si" | "sk" | "th" | "tr" | "tw" | "ua" | "us" | "ve" | "za";

export type NewsApiTopHeadlinesResponse = {
  status: string;
  totalResults: number;
  articles: NewsApiTopHeadlinesArticle[];
}

export type NewsApiTopHeadlinesArticle = {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}