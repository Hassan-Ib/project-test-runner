import Colorjs from "color";

export const IndividualColor = ({ color, index }) => {
  const colorjs = Colorjs(color);
  const isDarkColor = colorjs.isDark();
  return (
    <p
      style={{
        fontSize: "0.8rem",
        backgroundColor: color,
        padding: "1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: isDarkColor ? "white" : "black",
        textTransform: "uppercase",
      }}>
      <span>{index}</span> <span>{color}</span>
    </p>
  );
};
