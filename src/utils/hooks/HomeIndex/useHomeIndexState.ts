import { useState, useRef, useEffect } from "react";
import { hiraToKana } from "@/utils/utils";
import { PokeAll } from "@/utils/types";

export const useHomeIndexState = (pokes: PokeAll[]) => {
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
    setIsSearch(bool);
    if (!bool) {
      setInputText("");
      setApplyPoke(pokes);
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

  return { isSearch, inputRef, inputText, applyPoke, searchPoke, toggleSearch };
};
