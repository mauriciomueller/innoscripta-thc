"use client";

import { createTheme } from "@mui/material/styles";

export const materialUiTheme = createTheme({
  palette: {
    primary: {
      main: "#3730a3",
    },
    secondary: {
      main: "#f50057",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "1rem",
          padding: "5px 20px",
          fontSize: "1.2rem",
          fontWeight: "bold",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: "1rem",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "1rem",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "1rem",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        container: {
          padding: "0 8px",
          marginBottom: "1rem",
          borderRadius: "1rem",
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          marginTop: 0,
          marginBottom: 0,
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: "1.4rem",
        },
      },
    },
  },
});
