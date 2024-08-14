"use client";

import { Fragment } from "react";
import { useSearchContext } from "@/contexts/searchContext";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

dayjs.locale("en");

export const DateFilter: React.FC = () => {
  const { formik } = useSearchContext();

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
