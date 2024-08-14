import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const NewsCardSkeleton: React.FC = () => {
  return (
    <li className="border-gray-800 rounded-3xl p-8 flex flex-col h-full border">
      <Skeleton
        width="100%"
        height={120}
        baseColor="#1f2937"
        highlightColor="#2f3e52"
        className="skeleton-rounded-xl mb-6"
      />

      <div className="mb-6">
        <Skeleton
          height={22}
          count={2}
          width="100%"
          baseColor="#4f46e5"
          highlightColor="#6366f1"
          className="skeleton-rounded-xl mb-4"
        />
      </div>
      <div className="mb-6">
        <Skeleton
          height={12}
          width="100%"
          count={4}
          baseColor="#cacbd0"
          highlightColor="#929ba4"
          style={{ marginTop: "auto" }}
          className="skeleton-rounded-xl mb-3"
        />
      </div>
      <Skeleton
        height={36}
        width="100%"
        baseColor="#4f46e5"
        highlightColor="#6366f1"
        className="skeleton-rounded-xl"
      />
    </li>
  );
};
