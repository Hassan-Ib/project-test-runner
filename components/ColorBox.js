import {
  getColorPalette,
  copyToClipBoard,
  formatToTailwindColorObject,
} from "../utils";
import { IndividualColor } from "./IndividualColor";
import { ColorHeader } from "./ColorHeader";

const ColorBox = ({ color }) => {
  const colorName = color.color_name;

  const colorPalette = getColorPalette([color.r, color.g, color.b]);
  const tailwindColorObj = formatToTailwindColorObject(colorName, colorPalette);

  const colorPaletteString = `'${colorName.replace(" ", "-")}':${JSON.stringify(
    tailwindColorObj[colorName],
    null,
    3
  )}`;

  const copyTextToClipBoard = (event) => {
    const text = event.currentTarget.textContent;
    copyToClipBoard(colorPaletteString);
  };

  const colorPaletteList = [];
  for (let [key, value] of Object.entries(tailwindColorObj[colorName])) {
    colorPaletteList.push(
      <IndividualColor key={key} color={value} index={key} />
    );
  }

  return (
    <div
      style={{
        width: "12rem",
        boxShadow: "0px 0px .5rem  rgba(0,0,0,.3)",
        display: "flex",
        flexDirection: "column",
        textTransform: "capitalize",
        letterSpacing: "1px",
        borderRadius: ".2rem",
        overflow: "hidden",
      }}>
      <ColorHeader
        colorName={colorName}
        color={color.hex}
        copy={copyTextToClipBoard}
      />
      {colorPaletteList}
    </div>
  );
};

export default ColorBox;
