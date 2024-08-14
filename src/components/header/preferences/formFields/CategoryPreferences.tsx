"use client";

import React from "react";
import { useFeedContext } from "@/contexts/feedContext";
import { BaseCategorySelect } from "../../BaseCategoriesSelect";

export const CategoryPreferences: React.FC = () => {
  const { formik } = useFeedContext();

  return <BaseCategorySelect formik={formik} />;
};
