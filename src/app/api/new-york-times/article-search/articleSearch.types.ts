export type NewYorkTimesArticleSearchQueryParams = {
  'api-key'?: string;
  q?: string; // Query
  begin_date?: string; // Begin date in the format YYYYMMDD
  end_date?: string; // End date in the format YYYYMMDD
  facet?: boolean; // Whether to show facet counts
  facet_fields?: string; // Comma-separated list of facet fields
  facet_filter?: boolean; // Whether to use facet counts with filters
  fl?: string; // Comma-separated list of fields to return
  fq?: string; // Filter query
  page?: number; // Page number (0 ≤ value ≤ 100)
  sort?: 'newest' | 'oldest' | 'relevance'; // Sort order
};

export type NewYorkTimesArticleSearchResponse = {
  status: string;
  copyright: string;
  response: {
    docs: NewYorkTimesArticleSearchArticle[]; // Array of articles
    meta: {
      hits: number; // Number of results
      offset: number; // Offset for pagination
      time: number; // Time taken for the query
    };
  };
};

export type NewYorkTimesArticleSearchArticle = {
  web_url: string; // Article URL
  snippet: string; // Short snippet of the article
  print_page?: number; // Page number in print
  print_section?: string; // Section in print
  source: string; // Source of the article
  multimedia: NewYorkTimesArticleSearchMultimedia[]; // Array of multimedia objects
  headline: {
    main: string; // Main headline
    kicker?: string; // Secondary headline
  };
  keywords: { name: string; value: string }[]; // Array of keywords
  pub_date: string; // Publication date
  document_type: string; // Type of document (article, multimedia, etc.)
  news_desk?: string; // News desk responsible for the article
  section_name?: string; // Section name
  byline: {
    original?: string; // Original byline
    person?: { firstname: string; lastname: string; organization: string }[]; // Array of people involved
  };
  type_of_material?: string; // Type of material (News, Op-Ed, etc.)
  _id: string; // Unique identifier
  word_count?: number; // Word count
  uri: string; // URI identifier
};

export type NewYorkTimesArticleSearchMultimedia = {
  rank: number; // Rank of the media
  subtype: string; // Subtype of the media
  caption?: string; // Caption of the media
  credit?: string; // Credit of the media
  type: string; // Type of the media
  url: string; // URL of the media
  height: number; // Height of the media
  width: number; // Width of the media
  legacy: {
    xlarge: string; // URL of the media
    xlargewidth: number; // Width of the media
    xlargeheight: number; // Height of the media
  };
  subType: string; // Subtype of the media
  crop_name: string; // Crop name of the media
};

export type NewYorkTimesArticleSearchMediaMetadata = {
  url: string; // URL of the media
  format: string; // Format of the media (Standard Thumbnail, Large, etc.)
  height: number; // Height of the media
  width: number; // Width of the media
};
