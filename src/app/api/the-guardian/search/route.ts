import { NextResponse } from "next/server";

import { TheGuardianSearchResponse } from "./search.types";
import { handleApiRequestService } from "@/services/handleApiRequestService";

export async function GET(request: Request): Promise<NextResponse<TheGuardianSearchResponse | { error: string }>> {
  return handleApiRequestService('theGuardianSearch', request, {
      'show-tags': "contributor",
      'show-fields': "starRating,headline,trailText,thumbnail,short-url",
      'order-by': 'newest',
      'page-size': 100,
    },
  );
}
