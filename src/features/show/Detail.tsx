import React from "react";
import Image from "next/image";
import { getAssignedPoke } from "@/app/api/route";
import { typeTranlate } from "@/app/utils";
import { notFound } from "next/navigation";

interface Detail {
  id: string;
}

const Detail = async ({ id }: Detail) => {
  const poke = await getAssignedPoke(id);

  if (poke === undefined) {
    notFound();
  }

  return (
    <>
      <div className="flex items-center sm:gap-10 w-full">
        <div className="w-2/5">
          <Image
            src={poke.img}
            alt={poke.name}
            height={200}
            width={200}
            className="w-full"
          />
          <div className="w-full text-center pb-5 text-xl">No.{poke.id}</div>
        </div>

        <ul className="sm:text-xl space-y-1 sm:space-y-3 md:space-y-5 mt-10 translate-x-1/3 sm:translate-x-0">
          <li className="">{poke.name}</li>
          <li>{poke.category}</li>
          <li>
            <span className="mr-2">{typeTranlate(poke.types.type1)}</span>
            <span>{typeTranlate(poke.types.type2!)}</span>
          </li>
          <li>{poke.name}</li>
          <li>たかさ ㅤ{poke.height / 10}m</li>
          <li>おもさ ㅤ{poke.weight / 10}kg</li>
        </ul>
      </div>

      <div className="mx-10 sm:mx-20 mt-5 pt-5 pb-10 border-t border-white">
        <p>{poke.desc}</p>
      </div>
    </>
  );
};

export default Detail;
