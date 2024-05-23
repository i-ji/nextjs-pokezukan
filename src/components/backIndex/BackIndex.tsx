import React from "react";
import Link from "next/link";
import NextDetail from "@/components/moveDetail/NextDetail";
import PrevDetail from "../moveDetail/PrevDetail";

interface BackIndex {
  id: string;
}

const BackIndex = ({ id }: BackIndex) => {
  return (
    <div className="flex items-center justify-center gap-10 w-full">
      <div className="text-white text-xl mt-10 ">
        <PrevDetail id={id} />
      </div>

      <div className="text-white w-20 text-center text-xl mt-10">
        <Link href="/">もどる</Link>
      </div>

      <div className="text-white text-xl mt-10">
        <NextDetail id={id} />
      </div>
    </div>
  );
};

export default BackIndex;
