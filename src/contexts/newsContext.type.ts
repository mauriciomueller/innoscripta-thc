import { useFormik } from "formik";

export type NewsContextType = {
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

export type News = {
  title: string;
  description: string;
  link: string;
  image: string;
  publishedAt: string;
  source: string;
  author: string;
  category: string;
};

export type Filters = {
  keyword: string;
  sources: string[];
  date: string;
  author: string;
  category: string;
};