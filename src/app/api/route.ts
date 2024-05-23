import axios from "axios";
import { PokeInfo } from "../types";

const ENDPOINT = "https://pokeapi.co/api/v2/pokemon";
const ENDPOINT_SPECIES = "https://pokeapi.co/api/v2/pokemon-species";

const num = 151;

// GET ENDPOINT
export const getAllPokes = async () => {
  let pokesInfo = [];

  for (let i = 1; i <= num; i++) {
    // 画像、高さ、重さを取得
    const res = await axios.get(`${ENDPOINT}/${i}`);
    const data = res.data;

    // 日本語の名前、分類、図鑑説明を取得
    const res_species = await axios.get(`${ENDPOINT_SPECIES}/${i}`);
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

    pokesInfo.push(pokeInfo);
  }
  return pokesInfo;
};
