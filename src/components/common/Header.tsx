import { NewsAggregatorLogo } from "./NewsAggregatorLogo";
import { PreferencesButton } from "./Preferences";

const Header: React.FC = () => {
  return (
    <header className="pt-8 mb-6 flex justify-between">
      <NewsAggregatorLogo />
      <PreferencesButton />
    </header>
  );
};

export default Header;
