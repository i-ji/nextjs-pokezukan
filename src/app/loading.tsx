import React from "react";
import { FaSearch } from "react-icons/fa";
import LoadingIndex from "@/features/index/LoadingIndex";
import Header from "@/components/header/Header";

const loading = () => {
  return (
    <>
      <div className="font-bold text-2xl sm:text-3xl my-10 text-center flex items-center justify-center gap-5">
        <Header />
        <FaSearch className="text-white font-normal" />
      </div>

      <div className="text-white max-w-[768px] mx-auto bg-blue-500">
        <LoadingIndex />
      </div>
    </>
  );
};

export default loading;
