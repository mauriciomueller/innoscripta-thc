import { NewsActions } from "@/actions/newsActions";
import { Filters, News } from "@/contexts/newsContext.type";

export type State = {
  news: News[];
  sourceCounts: { [key: string]: number };
  filters: Filters;
  isLoading: boolean;
  error: string | null;
};

export const initialState: State = {
  news: [],
  sourceCounts: {},
  filters: {
    keyword: "",
    categories: [],
    source: [],
    date: "",
    author: "",
  },
  isLoading: false,
  error: null,
};

export function reducer(state: State, action: NewsActions): State {
  switch (action.type) {
    case "SET_KEYWORD":
      return {
        ...state,
        filters: { ...state.filters, keyword: action.payload },
      };
    case "SET_CATEGORIES":
      return {
        ...state,
        filters: { ...state.filters, categories: action.payload },
      };
    case "SET_SOURCE":
      return {
        ...state,
        filters: { ...state.filters, source: action.payload },
      };
    case "SET_DATE":
      return {
        ...state,
        filters: { ...state.filters, date: action.payload },
      };
    case "SET_AUTHOR":
      return {
        ...state,
        filters: { ...state.filters, author: action.payload },
      };
    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    case "UPDATE_NEWS":
      return {
        ...state,
        news: action.payload.news,
        sourceCounts: action.payload.sourceCounts,
      };
    default:
      return state;
  }
}
