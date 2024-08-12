// Unified categories that represent the common categories across different sources.
export const unifiedCategories: string[] = [
  "Business",
  "Entertainment",
  "Health",
  "Science",
  "Sports",
  "Technology",
  "World",
  "Politics",
  "Arts",
  "Books",
  "Fashion",
  "Food",
  "Travel",
  "Environment",
  "Opinion",
  "Education",
  "Movies",
  "Style",
  "Real Estate",
  "Local",
  "Music",
  "Gaming",
  "Stage",
];

// Mapping from unified categories to each news source's specific categories.
export const categoryMapping: Record<string, Record<string, string>> = {
  Business: {
    guardian: "Business",
    newsapi: "business",
    nyt: "Business",
  },
  Entertainment: {
    guardian: "Culture", // Closest match
    newsapi: "entertainment",
    nyt: "Arts", // Closest match
  },
  Health: {
    guardian: "Life and style",
    newsapi: "health",
    nyt: "Health",
  },
  Science: {
    guardian: "Science",
    newsapi: "science",
    nyt: "Science",
  },
  Sports: {
    guardian: "Sport",
    newsapi: "sports",
    nyt: "Sports",
  },
  Technology: {
    guardian: "Technology",
    newsapi: "technology",
    nyt: "Technology",
  },
  World: {
    guardian: "World news",
    newsapi: "general",
    nyt: "World",
  },
  Politics: {
    guardian: "Politics",
    newsapi: "general", // Closest match
    nyt: "Politics",
  },
  Arts: {
    guardian: "Art and design",
    newsapi: "entertainment", // Closest match
    nyt: "Arts",
  },
  Books: {
    guardian: "Books",
    newsapi: "general", // Closest match
    nyt: "Books",
  },
  Fashion: {
    guardian: "Fashion",
    newsapi: "general", // Closest match
    nyt: "Fashion & Style",
  },
  Food: {
    guardian: "Food",
    newsapi: "general", // Closest match
    nyt: "Food",
  },
  Travel: {
    guardian: "Travel",
    newsapi: "general", // Closest match
    nyt: "Travel",
  },
  Environment: {
    guardian: "Environment",
    newsapi: "general", // Closest match
    nyt: "Environment", // Note: This might need to be under "Science" in some contexts.
  },
  Opinion: {
    guardian: "Opinion",
    newsapi: "general", // Closest match
    nyt: "Opinion",
  },
  Education: {
    guardian: "Education",
    newsapi: "general", // Closest match
    nyt: "Education",
  },
  Movies: {
    guardian: "Film",
    newsapi: "entertainment", // Closest match
    nyt: "Movies",
  },
  Style: {
    guardian: "Life and style", // Closest match
    newsapi: "general", // Closest match
    nyt: "Style",
  },
  Real_Estate: {
    guardian: "Property", // Closest match
    newsapi: "general", // Closest match
    nyt: "Real Estate",
  },
  Local: {
    guardian: "Local",
    newsapi: "general", // Closest match
    nyt: "N.Y. / Region",
  },
  Music: {
    guardian: "Music",
    newsapi: "entertainment", // Closest match
    nyt: "Arts", // Closest match
  },
  Gaming: {
    guardian: "Games",
    newsapi: "entertainment", // Closest match
    nyt: "Crosswords & Games", // Closest match
  },
  Stage: {
    guardian: "Stage",
    newsapi: "entertainment", // Closest match
    nyt: "Theater", // Closest match
  },
};

// Function to map a unified category to a specific source category.
export const mapCategoryToSource = (
  category: string,
  source: "guardian" | "newsapi" | "nyt"
): string | null => {
  const sourceMapping = categoryMapping[category];
  if (sourceMapping) {
    return sourceMapping[source] || null;
  }
  return null;
};
