import { News } from "@/services/apiTransformDataService";
import { useFormik } from "formik";

export type FeedContextType = {
  state: State;
  formik: ReturnType<typeof useFormik<Preferences>>;
  resetPreferences: () => void;
  isPreferencesOpen: boolean;
  setIsPreferencesOpen: (isOpen: boolean) => void;
};

export type State = {
  news: News[];
  sourceCounts: { [key: string]: number };
  preferences: Preferences;
  isLoading: boolean;
  isFetching: boolean;
  isFetched: boolean;
  error: Error | null;
};

export type Preferences = {
  keyword: string;
  startDate: string;
  endDate: string;
  author: string;
  category: string;
  sources: string[];
};