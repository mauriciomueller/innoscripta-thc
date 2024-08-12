import { NextResponse } from "next/server";
import { NewsApiTopHeadlinesResponse } from "./topHeadlines.types";
import { handleApiRequestService } from "@/services/handleApiRequestService";

export async function GET(request: Request): Promise<NextResponse<NewsApiTopHeadlinesResponse | { error: string }>> {
  return handleApiRequestService('newsApiTopHeadlines', request,
    {
      country: 'us'
    },
  );
}
