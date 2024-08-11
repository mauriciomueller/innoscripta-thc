import { LoadingIcon } from "@/components/common/LoadingIcon";

const Loading: React.FC<{ text?: string }> = ({ text = "Loading..." }) => {
  return (
    <div className="flex items-center justify-center gap-1">
      <LoadingIcon /> {text}
    </div>
  );
};

export default Loading;
