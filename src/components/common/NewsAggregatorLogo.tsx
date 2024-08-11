import PublicIcon from "@mui/icons-material/Public";
import { PROJECT_NAME } from "@/constants/global";

export const NewsAggregatorLogo: React.FC = () => {
  return (
    <h1 className="flex items-center gap-3 font-semibold mb-0 text-3xl">
      <PublicIcon fontSize="inherit" />{" "}
      <span className="text-gradient">{PROJECT_NAME}</span>
    </h1>
  );
};
