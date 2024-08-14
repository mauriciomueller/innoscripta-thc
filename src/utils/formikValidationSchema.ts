import * as Yup from "yup";

export const validationSchema = Yup.object({
  keyword: Yup.string(),
  startDate: Yup.date().nullable().max(Yup.ref("endDate")),
  endDate: Yup.date().nullable().min(Yup.ref("startDate")),
  category: Yup.string(),
  sources: Yup.array().of(Yup.string()),
});
