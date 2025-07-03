import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PokeAll } from "@/utils/types";

interface Index {
  pokes: PokeAll[];
}

const Index = ({ pokes }: Index) => {
  return (
    <ul className="w-full flex flex-wrap justify-between items-center bg-blue-500 pt-[120px]">
      {pokes.map((poke: PokeAll) => {
        return (
          <li
            key={poke.id}
            className="w-1/2 sm:w-1/3 h-[200px] text-center cursor-pointer hover:bg-blue-400 transition duration-500 ease-in-out"
          >
            <Link href={`pokes/${poke.id}`}>
              <div className="w-full">
                <Image
                  src={poke.img}
                  alt={poke.name}
                  width={60}
                  height={60}
                  className="mx-auto w-3/5"
                  priority
                />
              </div>
              <span>{poke.name}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Index;
