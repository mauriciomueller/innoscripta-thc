import { NextResponse } from "next/server";

import { NewsApiResponse } from "../../newsapi/everything/everything.types";
import { handleApiRequestService } from "@/services/handleApiRequestService";

export async function GET(
  request: Request,
  { params }: { params: { year: string, month: string } }
): Promise<NextResponse<NewsApiResponse | { error: string }>> {
  return handleApiRequestService<NewsApiResponse>('newYorkTimesArticleSearch', request, {});
}
