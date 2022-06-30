const copyToClipBoard = (data) => {
  navigator.clipboard
    .writeText(data)
    .then(() => {
      console.log("wrote to clipboard");
    })
    .catch((err) => {
      alert("Unable to copy to clipboard");
      console.log("unable to write to clipboard");
    });
};

export { copyToClipBoard };
