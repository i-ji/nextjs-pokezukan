export const typeTranlate = (type: string | undefined) => {
  switch (type) {
    case "normal":
      return (type = "ノーマル");
    case "fighting":
      return (type = "かくとう");
    case "flying":
      return (type = "ひこう");
    case "poison":
      return (type = "どく");
    case "ground":
      return (type = "じめん");
    case "rock":
      return (type = "いわ");
    case "bug":
      return (type = "むし");
    case "ghost":
      return (type = "ゴースト");
    case "steel":
      return (type = "はがね");
    case "fire":
      return (type = "ほのお");
    case "water":
      return (type = "みず");
    case "grass":
      return (type = "くさ");
    case "electric":
      return (type = "でんき");
    case "psychic":
      return (type = "エスパー");
    case "ice":
      return (type = "こおり");
    case "dragon":
      return (type = "ドラゴン");
    case "dark":
      return (type = "あく");
    case "fairy":
      return (type = "フェアリー");
    case "stellar":
      return (type = "ステラ");
    case undefined:
      return (type = "");
    default:
      return (type = "miss type");
  }
};

export function hiraToKana(str: string) {
  return str.replace(/[\u3041-\u3096]/g, function (match) {
    var chr = match.charCodeAt(0) + 0x60;
    return String.fromCharCode(chr);
  });
}

//　一番上に戻る処理
export const toTop = () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
};
