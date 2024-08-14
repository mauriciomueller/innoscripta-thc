"use client";

import { Fragment } from "react";
import { useSearchContext } from "@/contexts/searchContext";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

dayjs.locale("en");
const DATE_FORMAT_EN = "MM-DD-YYYY";

export const DateFilter: React.FC = () => {
  const { formik } = useSearchContext();
  return (
    <Fragment>
      <DatePicker
        label="From"
        value={formik.values.startDate ? dayjs(formik.values.startDate) : null}
        onChange={(newValue) => formik.setFieldValue("startDate", newValue)}
        maxDate={dayjs(formik.values.endDate) || dayjs()}
        slotProps={{
          textField: {
            error: !!formik.errors.startDate && formik.touched.startDate,
          },
        }}
      />
      <DatePicker
        label="To"
        value={formik.values.endDate ? dayjs(formik.values.endDate) : null}
        onChange={(newValue) => formik.setFieldValue("endDate", newValue)}
        minDate={dayjs(formik.values.startDate)}
        maxDate={dayjs()}
        slotProps={{
          textField: {
            error: !!formik.errors.endDate && formik.touched.endDate,
          },
        }}
      />
    </Fragment>
  );
};
