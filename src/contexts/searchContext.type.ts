import { News } from "@/services/apiTransformDataService";
import { useFormik } from "formik";

export type SearchContextType = {
  state: State;
  formik: ReturnType<typeof useFormik<Filters>>;
  resetFilter: () => void;
};

export type State = {
  news: News[];
  sourceCounts: { [key: string]: number };
  filters: Filters;
  isLoading: boolean;
  isFetching: boolean;
  isFetched: boolean;
  error: Error | null;
};

export type Filters = {
  keyword: string;
  sources: string[];
  startDate: string;
  endDate: string;
  author: string;
  category: string;
};