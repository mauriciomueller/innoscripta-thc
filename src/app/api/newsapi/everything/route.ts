import { NextResponse } from "next/server";
import { NewsApiResponse } from "./everything.types";
import { handleApiRequestService } from "@/services/handleApiRequestService";

export async function GET(request: Request): Promise<NextResponse<NewsApiResponse | { error: string }>> {
  return handleApiRequestService<NewsApiResponse>('newsApiEverything', request, {
    q: 'world'
  });
}
