import React from "react";
import Link from "next/link";
import { IoMdArrowDroprightCircle } from "react-icons/io";

interface NextDetail {
  id: string;
}

const NextDetail = ({ id }: NextDetail) => {
  return (
    <div className={`text-white text-3xl ${id === "151" ? "hidden" : ""}`}>
      <Link href={`/pokes/${Number(id) + 1}`}>
        <IoMdArrowDroprightCircle />
      </Link>
    </div>
  );
};

export default NextDetail;
