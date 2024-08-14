import { NextRequest, NextResponse } from 'next/server';
import { initialFilters } from '@/constants/global';

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();

  // Check if the "sources" query parameter is missing
  if (!url.searchParams.has('sources')) {
    url.searchParams.set('sources', initialFilters.sources.join(','));
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/search',
};