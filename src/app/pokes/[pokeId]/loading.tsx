import React from "react";
import LoadingSkeleton from "@/features/show/LoadingDetail";
import Header from "@/components/header/Header";

const loading = () => {
  return (
    <>
      <div className="font-bold text-2xl sm:text-3xl my-10 text-center">
        <Header />
      </div>
      <div className="text-white max-w-[768px] mx-auto bg-blue-500">
        <LoadingSkeleton />
      </div>
    </>
  );
};

export default loading;
