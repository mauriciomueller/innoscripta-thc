import sanitizeHtml from 'sanitize-html';

import { NewsApiResponse } from "@/app/api/newsapi/everything/everything.types";
import { TheGuardianSearchResponse } from "@/app/api/the-guardian/search/search.types";
import { NewYorkTimesArticleSearchResponse } from '@/app/api/new-york-times/article-search/articleSearch.types';

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

export function transformNewsApiData(data: NewsApiResponse): any[] {
  return data.articles.map((article: any) => {
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
  return data.response.docs.map((article: any) => {
    const mediaMetadata = article.media && article.media[0]?.['media-metadata'];
    const imageUrl = mediaMetadata && mediaMetadata[2]?.url ? mediaMetadata[2].url : null;

    const sanitizedArticle = sanitizeObject({
      title: article.title || article.headline?.main,
      description: article.abstract || article.snippet,
      link: article.url,
      image: imageUrl,
      source: "New York Times",
    });

    return sanitizedArticle;
  });
}

export function transformTheGuardianData(data: TheGuardianSearchResponse): any[] {
  return data.response.results.map((article: any) => {
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
