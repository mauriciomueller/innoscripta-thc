"use client";

import { useState } from "react";
import { Button } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ImageNotSupportedIcon from "@mui/icons-material/ImageNotSupported";
import Link from "next/link";
import { News } from "@/contexts/newsContext.type";
import { LoadingIcon } from "../common/LoadingIcon";

interface NewsCardProps {
  article: News;
}

export const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <li className="group bg-white text-indigo-800 rounded-3xl p-8 transition-transform transform hover:scale-105 hover:shadow-lg hover:cursor-pointer">
      <Link
        href={article.link || "#"}
        passHref
        target="_blank"
        className="flex flex-col h-full"
      >
        <ImageWrapper
          image={article.image}
          title={article.title}
          isImageLoaded={isImageLoaded}
          setIsImageLoaded={setIsImageLoaded}
          source={article.source}
        />
        <h3>{article.title}</h3>
        <p className="flex-grow mb-8 text-gray-500">{article.description}</p>
        <ReadMoreButton />
      </Link>
    </li>
  );
};

interface ImageWrapperProps {
  image: string | null;
  title: string;
  isImageLoaded: boolean;
  setIsImageLoaded: (loaded: boolean) => void;
  source: string;
}

const ImageWrapper: React.FC<ImageWrapperProps> = ({
  image,
  title,
  isImageLoaded,
  setIsImageLoaded,
  source,
}) => {
  return (
    <div className="relative h-48 mb-4 rounded-2xl overflow-hidden group-hover:border-2 group-hover:border-indigo-600">
      {!isImageLoaded && image && <PlaceholderWithLoadingIcon />}
      {image ? (
        <img
          src={image}
          alt={title}
          className={`w-full h-48 object-cover transition-opacity duration-500 bg-gray-200 ${
            isImageLoaded ? "opacity-100" : "opacity-0"
          }`}
          loading="lazy"
          onLoad={() => setIsImageLoaded(true)}
        />
      ) : (
        <PlaceholderWithoutImage />
      )}
      <SourceBadge source={source} />
    </div>
  );
};

const PlaceholderWithLoadingIcon: React.FC = () => (
  <div className="flex items-center justify-center w-full h-48 bg-gray-200 animate-pulse text-4xl">
    <LoadingIcon />
  </div>
);

const PlaceholderWithoutImage: React.FC = () => (
  <div className="flex items-center justify-center w-full h-48 bg-gray-200 text-4xl">
    <ImageNotSupportedIcon />
  </div>
);

const SourceBadge: React.FC<{ source: string }> = ({ source }) => (
  <span className="absolute top-4 left-4 bg-indigo-800 text-white text-sm font-semibold px-4 py-1 rounded-full">
    {source || "Unknown"}
  </span>
);

const ReadMoreButton: React.FC = () => (
  <Button
    endIcon={<ArrowRightAltIcon />}
    variant="outlined"
    className="mt-auto transition-all group-hover:bg-indigo-100 group-hover:border-indigo-800 group-hover:text-indigo-800 group-hover:border-2"
  >
    Read more
  </Button>
);
