import { NextResponse } from "next/server";
import { NewsApiResponse } from "./everything.types";
import { handleApiRequest } from "@/utils/handleApiRequest";

export async function GET(request: Request): Promise<NextResponse<NewsApiResponse | { error: string }>> {
  return handleApiRequest<NewsApiResponse>('newsApiEverything', request, {
    q: 'world'
  });
}
