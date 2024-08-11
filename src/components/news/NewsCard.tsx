"use client";

import { Button } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ImageNotSupportedIcon from "@mui/icons-material/ImageNotSupported";
import Link from "next/link";
import { News } from "@/contexts/newsContext";

export const NewsCard: React.FC<{ article: News }> = ({ article }) => {
  return (
    <li className="group bg-white text-indigo-800 rounded-3xl p-8 transition-transform transform hover:scale-105 hover:shadow-lg hover:cursor-pointer">
      <Link
        href={article.link || "#"}
        passHref={true}
        target="_blank"
        className="flex flex-col h-full"
      >
        <div className="relative h-48 mb-4 rounded-2xl overflow-hidden group-hover:border-2 group-hover:border-indigo-600">
          {article.image ? (
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-48 object-cover"
            />
          ) : (
            <div className="flex items-center justify-center w-full h-48 bg-gray-200">
              <ImageNotSupportedIcon
                className="text-gray-500"
                fontSize="large"
              />
            </div>
          )}
          <span className="absolute top-4 left-4 bg-indigo-800 text-white text-sm font-semibold px-4 py-1 rounded-full">
            {article.source || "Unknown"}
          </span>
        </div>
        <h3>{article.title}</h3>
        <p className="flex-grow mb-8 text-gray-500">{article.description}</p>
        <Button
          endIcon={<ArrowRightAltIcon />}
          variant="outlined"
          className="mt-auto transition-all group-hover:bg-indigo-100 group-hover:border-indigo-800 group-hover:text-indigo-800 group-hover:border-2"
        >
          Read more
        </Button>
      </Link>
    </li>
  );
};
