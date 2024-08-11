import { NextResponse } from "next/server";
import { NewsApiTopHeadlinesResponse } from "./topHeadlines.types";
import { handleApiRequest } from "@/utils/handleApiRequest";

export async function GET(request: Request): Promise<NextResponse<NewsApiTopHeadlinesResponse | { error: string }>> {
  return handleApiRequest('newsApiTopHeadlines', request, 
    {
      country: 'us'
    },
  );
}
