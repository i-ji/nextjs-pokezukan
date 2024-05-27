"use client";

import React, { useEffect, useRef, useState } from "react";
import Index from "@/features/index/Index";
import { FaSearch } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import { Input } from "@/components/ui/input";
import { PokeAll } from "@/app/types";
import { hiraToKana } from "@/app/utils";
import Header from "@/components/header/Header";

interface HomeIndex {
  pokes: PokeAll[];
}

const HomeIndex = ({ pokes }: HomeIndex) => {
  const [isSearch, setIsSearch] = useState(false);

  // フォーカスを当てる
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current!.focus();
    }
  }, [isSearch]);

  // アイコンの切り替え
  const toggleSearch = (bool: boolean) => {
    if (bool) {
      setIsSearch(true);
    } else {
      setInputText("");
      setApplyPoke(pokes);
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

  //　一番上に戻る処理
  const toTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="font-bold text-2xl sm:text-3xl w-full">
        <div className=" flex items-center justify-center gap-5 fixed top-0 bg-black max-w-[768px] py-10 w-full">
          {isSearch ? (
            <Input
              className="border border-white rounded-full w-[293px] sm:w-[367px] text-white"
              value={inputText}
              onChange={(e) => searchPoke(e.target.value)}
              ref={inputRef}
            />
          ) : (
            <div className="cursor-pointer" onClick={toTop}>
              <Header />
            </div>
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
      </div>
      <Index pokes={applyPoke} />
    </>
  );
};

export default HomeIndex;
