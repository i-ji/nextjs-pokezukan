import React from "react";
import Image from "next/image";
import { getAllPokes } from "@/app/api/route";
import { typeTranlate } from "@/app/utils";

interface Detail {
  id: string;
}

const Detail = async ({ id }: Detail) => {
  const pokes = await getAllPokes();
  const pokeNow = Number(id) - 1;

  return (
    <>
      <div className="flex items-center sm:gap-10 w-full">
        <div className="w-2/5">
          <Image
            src={pokes[pokeNow].img}
            alt={pokes[pokeNow].name}
            height={200}
            width={200}
            className="w-full"
          />
          <div className="w-full text-center pb-5 text-xl">
            No.{pokes[pokeNow].id}
          </div>
        </div>

        <ul className="sm:text-xl space-y-1 sm:space-y-3 md:space-y-5 mt-10 translate-x-1/3 sm:translate-x-0">
          <li className="">{pokes[pokeNow].name}</li>
          <li>{pokes[pokeNow].category}</li>
          <li>
            <span className="mr-2">
              {typeTranlate(pokes[pokeNow].types.type1)}
            </span>
            <span>{typeTranlate(pokes[pokeNow].types.type2!)}</span>
          </li>
          <li>{pokes[pokeNow].name}</li>
          <li>たかさ ㅤ{pokes[pokeNow].height / 10}m</li>
          <li>おもさ ㅤ{pokes[pokeNow].weight / 10}kg</li>
        </ul>
      </div>

      <div className="mx-10 sm:mx-20 mt-5 pt-5 pb-10 border-t border-white">
        <p>{pokes[pokeNow].desc}</p>
      </div>
    </>
  );
};

export default Detail;
