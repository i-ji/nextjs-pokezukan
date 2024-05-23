import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const LoadingSkeleton = () => {
  return (
    <>
      <div className="flex items-center w-full">
        <div className="w-2/5">
          <Skeleton className="w-3/5 h-[120px] sm:h-[200px] rounded-3xl m-10 bg-gray-200" />
          <div className="w-full text-center pb-5 text-xl">
            <Skeleton className="w-1/4 h-6 ml-16 sm:ml-24 rounded-3xl bg-gray-200" />
          </div>
        </div>

        <ul className="space-y-4 md:space-y-6 mt-10">
          <li>
            <Skeleton className="w-28 h-4 ml-14 rounded-3xl bg-gray-200" />
          </li>
          <li>
            <Skeleton className="w-32 h-4 ml-14 rounded-3xl bg-gray-200" />
          </li>
          <li>
            <Skeleton className="w-20 h-4 ml-14 rounded-3xl bg-gray-200" />
          </li>
          <li>
            <Skeleton className="w-28 h-4 ml-14 rounded-3xl bg-gray-200" />
          </li>
          <li>
            <Skeleton className="w-32 h-4 ml-14 rounded-3xl bg-gray-200" />
          </li>
          <li>
            <Skeleton className="w-32 h-4 ml-14 rounded-3xl bg-gray-200" />
          </li>
        </ul>
      </div>
      <div className="mx-10 mt-5 pt-5 pb-10 border-t border-white space-y-3 sm:space-y-5">
        <Skeleton className="w-full h-4 rounded-3xl bg-gray-200" />
        <Skeleton className="w-full sm:w-3/5 h-4 rounded-3xl bg-gray-200" />
        <Skeleton className="w-3/5 h-4 rounded-3xl bg-gray-200 sm:hidden" />
      </div>
    </>
  );
};

export default LoadingSkeleton;
