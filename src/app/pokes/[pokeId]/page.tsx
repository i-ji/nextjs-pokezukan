import React from "react";
import Detail from "@/features/show/Detail";
import BackIndex from "@/components/backIndex/BackIndex";
import { getAssignedPoke } from "@/app/api/api";
import Header from "@/components/header/Header";
import { notFound } from "next/navigation";

interface Props {
  params: {
    pokeId: string;
  };
}

// 個別のポケモンを取得
const getPoke = async (id: string) => {
  const poke = await getAssignedPoke(id);
  if (poke === undefined || poke.id > 151) {
    notFound();
  }
  return poke;
};

// タイトルの設定
export async function generateMetadata(props: Props) {
  const poke = await getPoke(props.params.pokeId);

  return {
    title: `ポケモン図鑑 - ${poke.name}`,
  };
}

//
const Poke = async (props: Props) => {
  const poke = await getPoke(props.params.pokeId);

  return (
    <>
      <div className="font-bold text-2xl sm:text-3xl my-10 text-center">
        <Header />
      </div>

      <div className="text-white max-w-[768px] mx-auto bg-blue-500">
        <Detail id={String(poke.id)} poke={poke} />
      </div>

      <BackIndex id={String(poke.id)} />
    </>
  );
};

export default Poke;
