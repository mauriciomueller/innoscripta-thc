"use client";

import { useState, useEffect } from "react";

import { KeywordFilter } from "./KeywordsFilter";
import { DateFilter } from "./DateFilter";
import { CategoryFilter } from "./CategoryFilter";
import { SourceFilter } from "./SourceFilter";

export const Filters: React.FC = () => {
  const [keyword, setKeyword] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [source, setSource] = useState({});
  const [news, setNews] = useState([]);

  const handleSearch = async () => {
    /*
    const filters = { keyword, date, category, source };
    const filteredNews = await fetchAndCombineNews(filters);
    setNews(filteredNews);
    */
  };

  useEffect(() => {
    handleSearch();
  }, [keyword, date, category, source]);

  return (
    <div className="bg-white rounded-3xl p-8 mb-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 ">
      <KeywordFilter onChange={setKeyword} />
      <DateFilter onChange={setDate} />
      <CategoryFilter onChange={setCategory} />
      <SourceFilter onChange={setSource} />
    </div>
  );
};
