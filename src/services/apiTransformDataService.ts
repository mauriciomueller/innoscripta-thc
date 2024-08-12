import sanitizeHtml from 'sanitize-html';

import { TheGuardianSearchResponse } from "@/app/api/the-guardian/search/search.types";
import { NewYorkTimesArticleSearchResponse } from '@/app/api/new-york-times/article-search/articleSearch.types';
import { NewsApiTopHeadlinesResponse } from '@/app/api/newsapi/top-headlines/topHeadlines.types';

const sanitizeOptions = {
  allowedTags: [],
  allowedAttributes: {},
};

function sanitizeObject(obj: Record<string, any>): Record<string, any> {
  const sanitizedObj: Record<string, any> = {};

  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      sanitizedObj[key] = sanitizeHtml(obj[key], sanitizeOptions);
    } else {
      sanitizedObj[key] = obj[key];
    }
  }

  return sanitizedObj;
}

export function transformNewsApiData(data: NewsApiTopHeadlinesResponse): any[] {
  const { articles } = data;
  return articles.map((article) => {
    const sanitizedArticle = sanitizeObject({
      title: article.title,
      description: article.description,
      link: article.url,
      image: article.urlToImage,
      source: "NewsAPI",
    });

    return sanitizedArticle;
  });
}

export function transformNewYorkTimesApiData(data: NewYorkTimesArticleSearchResponse): any[] {
  const articles = data.response.docs;
  return articles.map((article) => {
    const mediaMetadata = article.multimedia && article.multimedia[0];
    const imageUrl = mediaMetadata ? `https://www.nytimes.com/${mediaMetadata.url}` : "";

    const sanitizedArticle = sanitizeObject({
      title: article.headline?.main || "",
      description: article.snippet || "",
      link: article.web_url || "#",
      image: imageUrl || "",
      source: "New York Times",
    });

    return sanitizedArticle;
  });
}

export function transformTheGuardianData(data: TheGuardianSearchResponse): any[] {
  const articles = data.response.results;
  return articles.map((article: any) => {
    const sanitizedArticle = sanitizeObject({
      title: article.webTitle,
      description: article.fields?.trailText || "",
      link: article.webUrl,
      image: article.fields?.thumbnail,
      source: "The Guardian",
    });

    return sanitizedArticle;
  });
}
