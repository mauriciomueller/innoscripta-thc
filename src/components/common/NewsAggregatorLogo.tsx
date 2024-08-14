import NewspaperIcon from "@mui/icons-material/Newspaper";
import { PROJECT_NAME } from "@/constants/global";
import Link from "next/link";

export const NewsAggregatorLogo: React.FC = () => {
  return (
    <h1 className="font-semibold mb-0 text-3xl text-gradient">
      <Link href="/" className="flex items-center gap-3">
        <NewspaperIcon fontSize="inherit" /> {PROJECT_NAME}
      </Link>
    </h1>
  );
};
