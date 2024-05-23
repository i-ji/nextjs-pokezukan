import React from "react";
import Detail from "@/features/show/Detail";
import BackIndex from "@/components/backIndex/BackIndex";
import LoadingDetail from "@/features/show/LoadingDetail";
// import LoadingIndex from "@/features/index/LoadingIndex";

interface Props {
  params: {
    pokeId: string;
  };
}

const Poke = (props: Props) => {
  const id = props.params.pokeId;
  return (
    <>
      <div className="text-white max-w-[800px] mx-auto mt-[120px] bg-blue-500">
        <Detail id={id} />
      </div>

      <BackIndex id={id} />

      {/* <div className="text-white max-w-[800px] mx-auto mt-[116px] bg-blue-500">
        <LoadingIndex />
      </div> */}
    </>
  );
};

export default Poke;
