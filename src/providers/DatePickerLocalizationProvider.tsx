"use client";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const DatePickerLocalizationProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {children}
    </LocalizationProvider>
  );
};

export default DatePickerLocalizationProvider;
