const ColorBox = ({ hex, name }) => {
  const copyTextToClipBoard = (event) => {
    const text = event.currentTarget.textContent;
    console.log(text);
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("wrote to clipboard");
      })
      .catch((err) => {
        console.log("unable to write to clipboard");
      });
  };
  return (
    <div
      style={{
        backgroundColor: hex,
        width: "10rem",
        height: "5rem",
        boxShadow: "0px 0px .5rem  rgba(0,0,0,.3)",
        borderRadius: ".5rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={copyTextToClipBoard}>
      <span>{name}</span>
      <span>{hex}</span>
    </div>
  );
};

export default ColorBox;
