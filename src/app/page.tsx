import HomeIndex from "@/features/index/HomeIndex";
import { getAllPokes } from "@/app/api/api";

export default async function Home() {
  const pokes = await getAllPokes();

  return (
    <div className="max-w-[768px] mx-auto">
      <HomeIndex pokes={pokes} />
    </div>
  );
}
