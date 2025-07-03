"use client";

import Index from "@/features/index/Index";
import Header from "@/components/header/Header";
import { FaSearch } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import { Input } from "@/components/ui/input";
import { PokeAll } from "@/utils/types";
import { toTop } from "@/utils/utils";
import { useHomeIndexState } from "@/utils/hooks/HomeIndex/useHomeIndexState";

interface HomeIndex {
  pokes: PokeAll[];
}

const HomeIndex = ({ pokes }: HomeIndex) => {
  const { isSearch, inputRef, inputText, applyPoke, searchPoke, toggleSearch } =
    useHomeIndexState(pokes);

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
