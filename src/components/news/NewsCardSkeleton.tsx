import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const NewsCardSkeleton: React.FC = () => {
  return (
    <li className="bg-white rounded-3xl p-8 flex flex-col h-full border">
      <Skeleton
        width="100%"
        height={120}
        className="skeleton-rounded-xl mb-8"
      />

      <Skeleton
        height={16}
        count={3}
        width="100%"
        className="skeleton-rounded-xl"
      />
      <Skeleton
        height={36}
        width="100%"
        style={{ marginTop: "auto" }}
        className="skeleton-rounded-xl"
      />
    </li>
  );
};
