import dayjs from "dayjs";
import { Filters } from "@/contexts/searchContext.type";
import { initialFilters } from "@/constants/global";

export const getFiltersFromQueryParams = (searchParams: URLSearchParams): Filters => {
  const query = Object.fromEntries(searchParams.entries());
  return {
    ...initialFilters,
    ...query,
    sources: query.sources ? query.sources.split(",") : [],
  };
};

export const updateQueryParams = (router: any, values: Filters) => {
  const query = new URLSearchParams();

  if (values.keyword) query.append("keyword", values.keyword);
  if (values.startDate)
    query.append("startDate", dayjs(values.startDate).format("YYYY-MM-DD"));
  if (values.endDate)
    query.append("endDate", dayjs(values.endDate).format("YYYY-MM-DD"));
  if (values.category) query.append("category", values.category);
  if (values.sources?.length)
    query.append("sources", values.sources.join(","));

  router.push(`/search?${query.toString()}`);
};
