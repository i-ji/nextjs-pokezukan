import React from "react";
import LoadingSkeleton from "@/features/show/LoadingDetail";

const loading = () => {
  return (
    <div className="text-white max-w-[800px] mx-auto mt-[120px] bg-blue-500">
      <LoadingSkeleton />
    </div>
  );
};

export default loading;
