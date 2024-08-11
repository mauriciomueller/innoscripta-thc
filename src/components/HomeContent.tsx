import { Filters } from "@/components/news/filters/Filters";
import { Fragment } from "react";
import News from "./news/News";

export const HomeContent = () => {
  return (
    <Fragment>
      <Filters />
      <News />
    </Fragment>
  );
};
