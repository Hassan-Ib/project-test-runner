const formatToTailwindColorObject = (name, colors) => {
  const colorObject = {};
  for (let i = 0; i < colors.length; i++) {
    if (i === 0) {
      colorObject[50] = colors[i];
    } else {
      colorObject[i * 100] = colors[i];
    }
  }
  return {
    [name]: {
      ...colorObject,
    },
  };
};

export { formatToTailwindColorObject };
