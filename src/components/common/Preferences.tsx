import { Button, IconButton } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import { Fragment } from "react";

export const PreferencesButton: React.FC = () => {
  return (
    <Fragment>
      <Button
        startIcon={<TuneIcon />}
        variant="contained"
        color="primary"
        className="hidden md:flex md:gap-1 items-center justify-center"
      >
        Preferences
      </Button>

      <IconButton
        edge="start"
        className="block md:hidden"
        color="inherit"
        aria-label="menu"
      >
        <TuneIcon />
      </IconButton>
    </Fragment>
  );
};
