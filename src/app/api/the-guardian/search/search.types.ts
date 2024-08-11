export type TheGuardianSearchResponse = {
  response: {
    status: string;
    userTier: string;
    total: number;
    startIndex: number;
    pageSize: number;
    currentPage: number;
    pages: number;
    orderBy: string;
    results: TheGuardianSearchArticle[];
  };
};

export type TheGuardianSearchArticle = {
  id: string;
  type: string;
  sectionId: string;
  sectionName: string;
  webPublicationDate: string;
  webTitle: string;
  webUrl: string;
  apiUrl: string;
  fields: {
    headline: string;
    trailText: string;
    starRating: string;
    shortUrl: string;
    thumbnail: string;
  };
  tags: TheGuardianTag[];
  isHosted: boolean;
  pillarId: string;
  pillarName: string;
};

type TheGuardianTag = {
  id: string;
  type: string;
  webTitle: string;
  webUrl: string;
  apiUrl: string;
  references: any[];
  bio: string;
  bylineImageUrl: string;
  bylineLargeImageUrl: string;
  firstName: string;
  lastName: string;
  twitterHandle: string;
};

export type TheGuardianSearchQueryParams = {
  'api-key'?: string;
  q?: string;
  section?: string;
  'from-date'?: string;
  'to-date'?: string;
  'page-size'?: number;
  page?: number;
  'order-by'?: 'newest' | 'oldest' | 'relevance';
  'show-fields'?: string;
  'show-tags'?: string;
  'show-elements'?: string;
  'show-blocks'?: string;
};
