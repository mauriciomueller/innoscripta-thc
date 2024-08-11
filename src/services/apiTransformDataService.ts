import { NewYorkTimesResponse } from "@/app/api/new-york-times/most-popular/mostPopular.types";
import { NewsApiResponse } from "@/app/api/newsapi/everything/everything.types";
import { TheGuardianSearchResponse } from "@/app/api/the-guardian/search/search.types";

export function transformNewsApiData(data: NewsApiResponse): any[] {
  return data.articles.map((article: any) => ({
    title: article.title,
    description: article.description,
    link: article.url,
    image: article.urlToImage,
    source: "NewsAPI",
  }));
}

export function transformNytApiData(data: NewYorkTimesResponse): any[] {
  return data.results.map((article: any) => {
    const mediaMetadata = article.media && article.media[0]?.['media-metadata'];
    const imageUrl = mediaMetadata && mediaMetadata[2]?.url
      ? mediaMetadata[2].url
      : null;

    return {
      title: article.title || article.headline?.main,
      description: article.abstract || article.snippet,
      link: article.web_url,
      image: imageUrl,
      source: "New York Times",
    };
  });
}

export function transformTheGuardianData(data: TheGuardianSearchResponse): any[] {
  return data.response.results.map((article: any) => ({
    title: article.webTitle,
    description: article.fields?.trailText || "",
    link: article.webUrl,
    image: article.fields?.thumbnail,
    source: "The Guardian",
  }));
}
