import Image from "next/image";
import HomeIndex from "@/features/index/HomeIndex";
import { getAllPokes } from "@/app/api/route";

export default async function Home() {
  const pokes = await getAllPokes();

  return (
    <div className="max-w-[800px] mx-auto">
      <HomeIndex pokes={pokes} />
    </div>
  );
}
