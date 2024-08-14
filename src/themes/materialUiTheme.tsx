"use client";

import { createTheme } from "@mui/material/styles";

const indigo600 = "#4f46e5";
const indigo500 = "#6366f1";
const indigo400 = "#818cf8";
const gray900 = "#111827";
const gray800 = "#1f2937";
const gray700 = "#374151";
const white = "#ffffff";

export const materialUiTheme = createTheme({
  palette: {
    primary: {
      main: "#3730a3",
    },
    secondary: {
      main: "#f50057",
    },
    text: {
      primary: white,
    },
    background: {
      paper: gray800,
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
          fontSize: "1.2rem",
          borderRadius: "1rem",
          "& .MuiInputBase-input": {
            color: white,
          },
          "& .MuiInputLabel-root": {
            color: white,
            "&.Mui-focused": {
              color: white,
            },
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: indigo600,
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: indigo600,
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: white,
            },
          "& .MuiInputBase-input::placeholder": {
            color: "rgba(255, 255, 255, 0.7)",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontSize: "1.2rem",
          borderRadius: "1rem",
          color: white,
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: indigo600,
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: indigo600,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: white,
          },
        },
        input: {
          color: white,
          "&::placeholder": {
            color: "rgba(255, 255, 255, 0.7)",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "1.2rem",
          color: white,
          "&.Mui-focused": {
            color: white,
          },
          "&.MuiFormLabel-filled": {
            color: white,
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          fontSize: "1.2rem",
          borderRadius: "1rem",
          color: white,
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: indigo600,
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: indigo600,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: white,
          },
          "&.Mui-selected": {
            color: indigo500,
          },
        },
        icon: {
          color: white,
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: white,
          fontSize: "1.2rem",
          "&.Mui-checked": {
            color: indigo400,
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: "1.2rem",
          "&:hover": {
            backgroundColor: indigo500,
          },
          "&.Mui-selected": {
            backgroundColor: gray900,
            "&:hover": {
              backgroundColor: indigo500,
            },
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          fontSize: "1.2rem",
          borderRadius: "1rem",
          backgroundColor: gray800,
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          fontSize: "1.2rem",
          padding: 0,
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        container: {
          fontSize: "1.2rem",
          padding: "0 8px",
          marginBottom: "1rem",
          borderRadius: "1rem",
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          fontSize: "1.2rem",
          marginTop: 0,
          marginBottom: 0,
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          fontSize: "1.2rem",
          borderRadius: "1.4rem",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          fontSize: "1.2rem",
          color: indigo500,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontSize: "1.2rem",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          color: white,
          fontWeight: "bold",
          fontSize: "1rem",
          borderColor: white,
          transition: "background-color 0.3s, color 0.3s",
          "& .MuiChip-deleteIcon": {
            color: white,
          },
          "& .MuiChip-deleteIcon:hover ~ &": {
            backgroundColor: "var(--color-secondary)",
            color: white,
            borderColor: "var(--color-secondary)",
          },
          "& .MuiChip-deleteIcon:hover": {
            color: "var(--color-secondary)",
          },
        },
      },
    },
  },
});
