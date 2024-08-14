import React from "react";
import { NewsAggregatorLogo } from "../common/NewsAggregatorLogo";
import { Filters } from "./filters/Filters";
import { PreferencesButton } from "./preferences/PreferencesButton";
import { PreferencesDialog } from "./preferences/PreferencesDialog";

const Header: React.FC = React.memo(() => {
  return (
    <header className="pt-8 mb-8 flex flex-col gap-10">
      <div className="flex justify-between px-8 items-center">
        <NewsAggregatorLogo />
        <PreferencesButton />
        <PreferencesDialog />
      </div>
      <Filters />
    </header>
  );
});

export default Header;
