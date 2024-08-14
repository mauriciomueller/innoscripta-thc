"use client";

import {
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  Slide,
  Toolbar,
  Typography,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { forwardRef } from "react";
import TuneIcon from "@mui/icons-material/Tune";
import CloseIcon from "@mui/icons-material/Close";
import { useFeedContext } from "@/contexts/feedContext";
import { PreferencesForm } from "./PreferencesForm";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export const PreferencesDialog: React.FC = () => {
  const { isPreferencesOpen, setIsPreferencesOpen } = useFeedContext();

  const handleClosePreferencesDialog = () => {
    setIsPreferencesOpen(false);
  };

  return (
    <Dialog
      open={isPreferencesOpen}
      onClose={handleClosePreferencesDialog}
      maxWidth="sm"
      fullScreen
      TransitionComponent={Transition}
      sx={{
        width: "100%",
        maxWidth: "500px",
        height: "100%",
        right: 0,
        left: "auto",
        "& .MuiDialog-paper": {
          backgroundColor: "transparent",
        },
      }}
    >
      <div className="relative text-white py-3 bg-indigo-800">
        <Toolbar className="flex justify-between">
          <Typography
            className="flex items-center gap-2"
            variant="h6"
            component="div"
          >
            <TuneIcon />
            Preferences
          </Typography>
          <DialogActions>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClosePreferencesDialog}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </DialogActions>
        </Toolbar>
      </div>
      <DialogContent className="bg-gray-900">
        <PreferencesForm />
      </DialogContent>
    </Dialog>
  );
};
