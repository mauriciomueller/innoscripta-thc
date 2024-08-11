import { Fragment } from "react";
import { NewsCardSkeleton } from "./NewsCardSkeleton";

export const NewsListSkeleton = () => (
  <Fragment>
    {[...Array(20)].map((_, index) => (
      <NewsCardSkeleton key={index} />
    ))}
  </Fragment>
);
