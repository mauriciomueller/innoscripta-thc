import { apisConfig } from "@/constants/global";
import { NextResponse } from "next/server";

import { handleApiRequest } from "@/utils/handleApiRequest";
import { NewsApiResponse } from "../../newsapi/everything/everything.types";

export async function GET(
  request: Request,
  { params }: { params: { year: string, month: string } }
): Promise<NextResponse<NewsApiResponse | { error: string }>> {
  return handleApiRequest<NewsApiResponse>('newYorkTimesMostPopular', request, {});
}
