export async function fetchFromInternalApiService(url: string): Promise<any | null> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error(`Failed to fetch from ${url}: ${response.statusText}`);
      return null;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching from ${url}:`, error);
    return null;
  }
}
