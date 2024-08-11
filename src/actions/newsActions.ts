import { News } from "@/contexts/newsContext.type";

export type NewsActions =
  | { type: "SET_KEYWORD"; payload: string }
  | { type: "SET_CATEGORIES"; payload: string[] }
  | { type: "SET_SOURCE"; payload: string[] }
  | { type: "SET_DATE"; payload: string }
  | { type: "SET_AUTHOR"; payload: string }
  | { type: "SET_NEWS"; payload: News[] }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_ERROR"; payload: string | null }
  | { type: "UPDATE_NEWS"; payload: { news: News[]; sourceCounts: { [key: string]: number } } };
