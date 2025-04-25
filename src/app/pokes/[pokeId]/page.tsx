import React from "react";
import Detail from "@/features/show/Detail";
import BackIndex from "@/components/backIndex/BackIndex";
import { getAllPokes, getAssignedPoke } from "@/app/api/api";
import Header from "@/components/header/Header";
import { notFound } from "next/navigation";

interface PokeType {
  params: Promise<{ pokeId: string }>;
}

export async function generateStaticParams() {
  const pokes = await getAllPokes();

  return pokes.map((poke) => ({
    pokeId: String(poke.id),
  }));
}

// 個別のポケモンを取得
const getPoke = async (params: { pokeId: string }) => {
  const poke = await getAssignedPoke(params.pokeId);
  if (poke === undefined || poke.id > 151) {
    notFound();
  }
  return poke;
};

// タイトルの設定
export async function generateMetadata({ params }: PokeType) {
  const resolvedParams = await params;
  const poke = await getPoke(resolvedParams);

  return {
    title: `ポケモン図鑑 - ${poke.name}`,
  };
}

export default async function Page({ params }: PokeType) {
  const resolvedParams = await params;
  const poke = await getPoke(resolvedParams);

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
}
