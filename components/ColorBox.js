import {
  getColorPalette,
  copyToClipBoard,
  formatToTailwindColorObject,
} from "../utils";

const ColorBox = ({ color }) => {
  const colorPalette = getColorPalette([color.r, color.g, color.b]);
  const tailwindColorObj = formatToTailwindColorObject(
    color.color_name,
    colorPalette
  );
  const colorPaletteString = JSON.stringify(tailwindColorObj, null, 2);
  const copyTextToClipBoard = (event) => {
    const text = event.currentTarget.textContent;
    copyToClipBoard(colorPaletteString);
  };

  const colorPaletteList = [];
  for (let [key, value] of Object.entries(tailwindColorObj[color.color_name])) {
    colorPaletteList.push(
      <IndividualColor key={key} color={value} index={key} />
    );
  }

  return (
    <div
      style={{
        backgroundColor: color.hex,
        width: "15rem",
        // height: "5rem",
        boxShadow: "0px 0px .5rem  rgba(0,0,0,.3)",
        borderRadius: ".5rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        textTransform: "capitalize",
        letterSpacing: "1px",
        padding: "1rem",
      }}
      onClick={copyTextToClipBoard}>
      <span>{color.color_name}</span>
      <span>{color.hex}</span>
      <div
        style={{
          width: "100%",
          display: "flex",
          textTransform: "none",
          flexDirection: "column",
          // gap: "2rem",
        }}>
        {colorPaletteList}
      </div>
    </div>
  );
};

export default ColorBox;

const IndividualColor = ({ color, index }) => {
  return (
    <p
      style={{
        backgroundColor: color,
        padding: "1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        textTransform: "uppercase",
      }}>
      <span>{index}</span> <span>{color}</span>
    </p>
  );
};
