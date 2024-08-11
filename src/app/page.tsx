import { HomeContent } from "@/components/HomeContent";
import { NewsProvider } from "@/contexts/newsContext";

const Home = () => {
  return (
    <NewsProvider>
      <HomeContent />
    </NewsProvider>
  );
};

export default Home;
