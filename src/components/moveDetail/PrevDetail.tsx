import React from "react";
import Link from "next/link";
import { IoMdArrowDropleftCircle } from "react-icons/io";

interface PrevDetail {
  id: string;
}

const PrevDetail = ({ id }: PrevDetail) => {
  return (
    <div className={`text-white text-3xl ${id === "1" ? "hidden" : ""}`}>
      <Link href={`/pokes/${Number(id) - 1}`}>
        <IoMdArrowDropleftCircle />
      </Link>
    </div>
  );
};

export default PrevDetail;
