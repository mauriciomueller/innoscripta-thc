import { apisConfig } from "@/constants/global";
import { NextResponse } from "next/server";
import { TheGuardianSearchResponse } from "./search.types";
import { handleApiRequest } from "@/utils/handleApiRequest";

export async function GET(request: Request): Promise<NextResponse<TheGuardianSearchResponse | { error: string }>> {
  return handleApiRequest('theGuardianSearch', request, {
      'show-tags': "contributor",
      'show-fields': "starRating,headline,trailText,thumbnail,short-url",
    },
  );
}
