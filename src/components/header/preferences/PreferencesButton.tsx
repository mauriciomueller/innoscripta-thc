"use client";

import React, { Fragment } from "react";
import { Button, IconButton } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useSearchContext } from "@/contexts/searchContext";
import { useFeedContext } from "@/contexts/feedContext";

export const PreferencesButton: React.FC = () => {
  const { setIsPreferencesOpen } = useFeedContext();
  const theme = useTheme();
  const isMediumUp = useMediaQuery(theme.breakpoints.up("md"));

  const handleClickOpenPreferences = () => {
    setIsPreferencesOpen(true);
  };

  return (
    <Fragment>
      {isMediumUp ? (
        <Button
          startIcon={<TuneIcon />}
          variant="contained"
          color="primary"
          className="gap-1 items-center justify-center"
          onClick={handleClickOpenPreferences}
        >
          Preferences
        </Button>
      ) : (
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleClickOpenPreferences}
        >
          <TuneIcon />
        </IconButton>
      )}
    </Fragment>
  );
};
