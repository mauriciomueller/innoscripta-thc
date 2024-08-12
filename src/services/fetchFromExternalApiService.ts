import { apisConfig } from "@/constants/global";

export async function fetchFromExternalApiService<T>(apiClient: string, queryParams?: T) {
  const { url, apiKeyName, apiKey } = apisConfig[apiClient];

  const queryParamsWithKey = {
    ...queryParams,
    [apiKeyName]: apiKey,
  };

  const queryString = queryParamsWithKey ? new URLSearchParams(queryParamsWithKey as any).toString() : '';
  const fetchUrl = queryString ? `${url}?${queryString}` : url;

  console.log('fetchUrl:', fetchUrl);

  const response = await fetch(fetchUrl, {
    headers: {
      'Content-Type': 'application/json'
    },
    next: {
      revalidate: 60 * 30, // 30 minutes
    }
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${apiClient}`);
  }

  return await response.json();
}
