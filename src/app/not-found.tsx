import { Button } from "@mui/material";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";

const NotFound: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-2 text-center">
        <h2>404 | Not Found</h2>
        <p>Sorry, the page you are looking for does not exist.</p>

        <Button startIcon={<HomeIcon />} variant="contained" color="primary">
          <Link href="/">Go to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
