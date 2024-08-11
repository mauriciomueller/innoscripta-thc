"use client";

import { useNewsContext } from "@/contexts/newsContext";
import { LoadingIcon } from "../common/LoadingIcon";

export const NewsSourcesInfo = () => {
  const { state } = useNewsContext();
  const { news, sourceCounts, isLoading } = state;

  return (
    <section className="flex mb-8 bg-indigo-950 rounded-3xl items-center justify-center px-8 py-4">
      <h4 className="mb-0 border-r border-indigo-900 pr-4 text-lg text-indigo-200 text-right mr-4 w-6/12 md:w-3/12">
        We found {news.length} {news.length === 1 ? "article" : "articles"} from
        the following sources
      </h4>
      <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 text-lg overflow-auto w-6/12 md:w-9/12">
        {Object.entries(sourceCounts).map(([source, count]) => (
          <li key={source} className="text-white flex gap-2 w-auto p-0">
            <strong className="text-indigo-400">{source}:</strong>
            {isLoading ? <LoadingIcon /> : count}{" "}
            {count === 1 ? "article" : "articles"}
          </li>
        ))}
      </ul>
    </section>
  );
};
