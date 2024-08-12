import { NextResponse } from "next/server";
import { apisConfig } from "@/constants/global";
import { fetchFromExternalApiService } from "./fetchFromExternalApiService";

type QueryParams = { [key: string]: string | number | boolean | undefined };

export async function handleApiRequestService<T>(
  apiName: keyof typeof apisConfig,
  request: Request,
  config: QueryParams
): Promise<NextResponse<T | { error: string }>> {
  const { searchParams } = new URL(request.url);

  const queryParams: QueryParams = {
    ...Object.fromEntries(searchParams.entries()),
    ...config,
  };

  console.log('queryParams:', queryParams);

  try {
    const data = await fetchFromExternalApiService<T>(String(apiName), queryParams as T);
    return NextResponse.json(data);
  } catch (error: unknown) {
    console.error(`Failed to fetch data from ${apiName} API`, error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
