import axios from "axios";
import { PokeInfo, PokeAll } from "../../utils/types";

const ENDPOINT = "https://pokeapi.co/api/v2/pokemon";
const ENDPOINT_SPECIES = "https://pokeapi.co/api/v2/pokemon-species";

const num = 151;

// 全てのポケモンを取得
export const getAllPokes = async () => {
  let pokesInfo = [] as PokeAll[];

  for (let i = 1; i <= num; i++) {
    try {
      // 画像、高さ、重さを取得
      const res = await axios.get(`${ENDPOINT}/${i}`);
      const data = res.data;

      // 日本語の名前、分類、図鑑説明を取得
      const res_species = await axios.get(`${ENDPOINT_SPECIES}/${i}`);
      const data_species = res_species.data;

      const pokeInfo: PokeAll = {
        id: data.id,
        name: data_species.names[0].name,
        img: data.sprites.front_default,
      };

      pokesInfo.push(pokeInfo);
    } catch (error) {
      console.error("GETリクエストが失敗しました", error);
    }
  }
  return pokesInfo;
};

// 個別のポケモンを取得
export const getAssignedPoke = async (id: string) => {
  try {
    // 画像、タイプ、高さ、重さを取得
    const res = await axios.get(`${ENDPOINT}/${id}`);
    const data = res.data;

    // 日本語の名前、分類、図鑑説明を取得
    const res_species = await axios.get(`${ENDPOINT_SPECIES}/${id}`);
    const data_species = res_species.data;

    const pokeInfo: PokeInfo = {
      id: data.id,
      name: data_species.names[0].name,
      img: data.sprites.front_default,
      category: data_species.genera[0].genus,
      height: data.height,
      weight: data.weight,
      types: {
        type1: data.types[0].type.name,
        type2: data.types[1] ? data.types[1].type.name : undefined,
      },
      desc: data_species.flavor_text_entries[22].flavor_text,
    };

    return pokeInfo;
  } catch (error) {
    console.error("GETリクエストが失敗しました", error);
  }
};
