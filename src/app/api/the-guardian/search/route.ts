import { NextResponse } from "next/server";

import { handleApiRequest } from "@/utils/handleApiRequest";
import { TheGuardianSearchResponse } from "./search.types";

export async function GET(request: Request): Promise<NextResponse<TheGuardianSearchResponse | { error: string }>> {
  return handleApiRequest('theGuardianSearch', request, {
      'show-tags': "contributor",
      'show-fields': "starRating,headline,trailText,thumbnail,short-url",
      'from-date': '2023-01-01',
      'to-date': '2023-12-31',
      'order-by': 'newest',
      'page-size': 100,
    },
  );
}
