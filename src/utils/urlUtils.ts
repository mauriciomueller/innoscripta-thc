export function buildApiUrl(baseUrl: string, queryParams: Record<string, string | number | boolean | undefined>): string {
  const queryString = new URLSearchParams(
    Object.entries(queryParams)
      .filter(([, value]) => value !== undefined && value !== null)
      .reduce((acc, [key, value]) => ({ ...acc, [key]: String(value) }), {} as Record<string, string>)
  ).toString();
  return queryString ? `${baseUrl}?${queryString}` : baseUrl;
}
