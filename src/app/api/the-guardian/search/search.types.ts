export type TheGuardianSearchQueryParams = {
  'api-key'?: string; // API key for authentication
  q?: string; // Free text query
  query_fields?: string; // Specify indexed fields for the query
  section?: string; // Filter by section
  reference?: string; // Filter by reference
  reference_type?: string; // Filter by reference type
  tag?: string; // Filter by tag
  rights?: string; // Filter by rights
  ids?: string; // Filter by specific IDs
  production_office?: string; // Filter by production office
  lang?: string; // Filter by language
  'star-rating'?: number; // Filter by star rating
  'from-date'?: string; // Return content published on or after this date (format: YYYY-MM-DD)
  'to-date'?: string; // Return content published on or before this date (format: YYYY-MM-DD)
  'use-date'?: 'published' | 'first-publication' | 'newspaper-edition' | 'last-modified'; // Use specific date type for filtering
  page?: number; // Specify page number
  'page-size'?: number; // Number of items per page (1-50)
  'order-by'?: 'newest' | 'oldest' | 'relevance'; // Order results by specified field
  'order-date'?: 'published' | 'newspaper-edition' | 'last-modified'; // Order results by specified date
  'show-fields'?: string; // Fields to include in the response
  'show-tags'?: string; // Tags to include in the response
  'show-section'?: boolean; // Include associated metadata section
  'show-blocks'?: string; // Include associated blocks
  'show-elements'?: string; // Include associated media elements
  'show-references'?: string; // Include associated reference data
  'show-rights'?: string; // Include associated rights
};

export type TheGuardianSearchResponse = {
  response: {
    status: string; // Status of the response (e.g., "ok")
    userTier: string; // User tier (e.g., "developer")
    total: number; // Total number of results available for the search
    startIndex: number; // Starting index of the results returned
    pageSize: number; // Number of items returned in this call
    currentPage: number; // Current page number
    pages: number; // Total number of pages
    orderBy: string; // Sort order used (e.g., "newest")
    results: TheGuardianArticle[]; // Array of articles
  };
};

export type TheGuardianArticle = {
  id: string; // Path to content
  type: string; // Type of content (e.g., "article")
  sectionId: string; // ID of the section
  sectionName: string; // Name of the section
  webPublicationDate: string; // Date and time of publication (ISO 8601 format)
  webTitle: string; // Title of the content
  webUrl: string; // URL of the HTML content
  apiUrl: string; // URL of the raw content (API endpoint)
  isHosted: boolean; // Indicates if the content is hosted
  pillarId: string; // ID of the pillar
  pillarName: string; // Name of the pillar
};