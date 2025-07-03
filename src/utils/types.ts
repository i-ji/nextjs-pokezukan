export interface PokeAll {
  id: number;
  name: string;
  img: string;
}

export type PokeInfo = {
  id: number;
  name: string;
  img: string;
  category: string;
  height: number;
  weight: number;
  types: {
    type1: string;
    type2: string | undefined;
  };
  desc: string;
};
