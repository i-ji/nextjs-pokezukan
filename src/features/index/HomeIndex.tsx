"use client";

import React, { useState } from "react";
import Index from "@/features/index/Index";
import { FaSearch } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import { Input } from "@/components/ui/input";
import { PokeAll } from "@/app/types";
import { hiraToKana } from "@/app/utils";

interface HomeIndex {
  pokes: PokeAll[];
}

const HomeIndex = ({ pokes }: HomeIndex) => {
  const [isSearch, setIsSearch] = useState(false);
  // アイコンの切り替え
  const toggleSearch = (bool: boolean) => {
    if (bool) {
      setIsSearch(true);
    } else {
      setIsSearch(false);
    }
  };

  const [inputText, setInputText] = useState("");
  const [applyPoke, setApplyPoke] = useState(pokes);

  // 検索の処理
  const searchPoke = (letter: string) => {
    setInputText(letter);

    setApplyPoke(
      pokes.filter((poke) => {
        return poke.name.includes(hiraToKana(letter));
      })
    );
  };

  return (
    <>
      <div className="font-bold text-3xl my-10 flex items-center justify-center gap-5">
        {isSearch ? (
          <Input
            className="border border-white rounded-full w-[46%] text-white"
            value={inputText}
            onChange={(e) => searchPoke(e.target.value)}
          />
        ) : (
          <h1 className="text-red-500 leading-10">ポケモン図鑑 カントー地方</h1>
        )}

        {isSearch ? (
          <IoHomeSharp
            className="text-white font-normal cursor-pointer"
            onClick={() => toggleSearch(false)}
          />
        ) : (
          <FaSearch
            className="text-white font-normal cursor-pointer"
            onClick={() => toggleSearch(true)}
          />
        )}
      </div>

      <Index pokes={applyPoke} />
    </>
  );
};

export default HomeIndex;
