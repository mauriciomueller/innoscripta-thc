import { NewYorkTimesQueryParams } from "@/app/api/new-york-times/most-popular/mostPopular.types";
import { EverythingQueryParams } from "@/app/api/newsapi/everything/everything.types";
import { TheGuardianSearchQueryParams } from "@/app/api/the-guardian/search/search.types";
import { buildApiUrl } from "./urlUtils";
import { apisConfig } from "@/constants/global";
import { transformNewsApiData, transformNytApiData, transformTheGuardianData } from "@/services/apiTransformDataService";
import { Filters } from "@/contexts/newsContext";

export const buildApiConfigs = (filters: Filters) => {
  const { keyword } = filters;

  const newsApiParams: EverythingQueryParams = {
    q: keyword || "world",
  };

  const nytApiParams: NewYorkTimesQueryParams = {};

  const theGuardianApiParams: TheGuardianSearchQueryParams = {};

  return [
    {
      url: buildApiUrl(apisConfig.newsApiEverything.internalUrl, newsApiParams),
      transform: transformNewsApiData,
    },
    {
      url: buildApiUrl(apisConfig.newYorkTimesMostPopular.internalUrl, nytApiParams),
      transform: transformNytApiData,
    },
    {
      url: buildApiUrl(apisConfig.theGuardianSearch.internalUrl, theGuardianApiParams),
      transform: transformTheGuardianData,
    },
  ];
};