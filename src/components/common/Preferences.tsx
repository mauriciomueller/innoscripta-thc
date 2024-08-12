"use client";

import { Button, IconButton } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Fragment } from "react";

export const PreferencesButton: React.FC = () => {
  const theme = useTheme();
  const isMediumUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Fragment>
      {isMediumUp ? (
        <Button
          startIcon={<TuneIcon />}
          variant="contained"
          color="primary"
          className="gap-1 items-center justify-center"
        >
          Preferences
        </Button>
      ) : (
        <IconButton edge="start" color="inherit" aria-label="menu">
          <TuneIcon />
        </IconButton>
      )}
    </Fragment>
  );
};
