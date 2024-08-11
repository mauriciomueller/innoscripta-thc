import { NextResponse } from "next/server";
import { fetchFromApi } from "@/utils/fetchFromApi";
import { apisConfig } from "@/constants/global";

type QueryParams = { [key: string]: string };

export async function handleApiRequest<T>(
  apiName: keyof typeof apisConfig,
  request: Request,
  config: QueryParams
): Promise<NextResponse<T | { error: string }>> {
  const { searchParams } = new URL(request.url);

  const queryParams: QueryParams = {
    ...Object.fromEntries(searchParams.entries()),
    ...config,
  };

  try {
    const data = await fetchFromApi<T>(String(apiName), queryParams as T);
    return NextResponse.json(data);
  } catch (error: unknown) {
    console.error(`Failed to fetch data from ${apiName} API`, error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
