import { Filters } from "@/components/news/filters/Filters";
import News from "@/components/news/News";
import { NewsProvider } from "@/contexts/newsContext";
import { Suspense } from "react";
import Loading from "./loading";

const Home = () => {
  return (
    <NewsProvider>
      <Filters />
      <Suspense fallback={<Loading />}>
        <News />
      </Suspense>
    </NewsProvider>
  );
};

export default Home;
