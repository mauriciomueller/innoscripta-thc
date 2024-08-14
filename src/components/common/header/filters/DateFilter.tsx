"use client";

import { Fragment } from "react";
import { useSearchContext } from "@/contexts/searchContext";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";

dayjs.locale("en");
const DATE_FORMAT_EN = "MM-DD-YYYY";

export const DateFilter: React.FC = () => {
  const { formik } = useSearchContext();

  const handleStartDateChange = (date: Dayjs | null) => {
    formik.setFieldValue(
      "startDate",
      date ? date.format(DATE_FORMAT_EN) : null
    );
    if (date && formik.values.endDate && date.isAfter(formik.values.endDate)) {
      formik.setFieldValue("endDate", date.format(DATE_FORMAT_EN));
    }
  };

  const handleEndDateChange = (date: Dayjs | null) => {
    formik.setFieldValue("endDate", date ? date.format(DATE_FORMAT_EN) : null);
  };

  return (
    <Fragment>
      <DatePicker
        label="From"
        value={formik.values.startDate ? dayjs(formik.values.startDate) : null}
        onChange={(newValue) => formik.setFieldValue("startDate", newValue)}
        maxDate={dayjs(formik.values.endDate)}
      />
      <DatePicker
        label="To"
        value={formik.values.endDate ? dayjs(formik.values.endDate) : null}
        onChange={(newValue) => formik.setFieldValue("endDate", newValue)}
        minDate={dayjs(formik.values.startDate)}
      />
    </Fragment>
  );
};
