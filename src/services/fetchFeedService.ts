import { Preferences } from "@/contexts/feedContext.type";
import { fetchAndCombineNewsService } from "./fetchAndCombineNewsService";
import { News } from "./apiTransformDataService";


export const fetchFeedService = async (
  preferences: Preferences
): Promise<{ news: News[]; sourceCounts: { [key: string]: number } }> => {
  const updatedPreferences = {
    ...preferences,
  };
  return fetchAndCombineNewsService(updatedPreferences);
};
