import Color from "color";
/**
 *
 * @param {string} hex
 * @returns object -> rgb attricbutes
 */
export const hexToRgb = (hex) => {
  if (hex.length < 3) throw "hex value should be at least 3 characters or more";

  return;
};

const rgbToHex = ([r, g, b]) => {
  let RR = r.toString(16).length == 1 ? "0" + r.toString(16) : r.toString(16);
  let GG = g.toString(16).length == 1 ? "0" + g.toString(16) : g.toString(16);
  let BB = b.toString(16).length == 1 ? "0" + b.toString(16) : b.toString(16);

  // console.log("shade", RR, GG, BB);
  return "#" + RR + GG + BB;
};

// formula for darkening a sRGB color is:
// r = r * shadeFactor
// g = g * shadeFactor
// b = b * shadeFactor
// the smaller the shadeFactor, the darker the color will be
const shade = ([currentR, currentG, currentB], shadeFactor) => {
  // const newR = currentR * (1 - shadeFactor);
  // const newG = currentG * (1 - shadeFactor);
  // const newB = currentB * (1 - shadeFactor);
  const newR = Math.floor(currentR * shadeFactor);
  const newG = Math.floor(currentG * shadeFactor);
  const newB = Math.floor(currentB * shadeFactor);

  // console.log("shade", newR, newG, newB);

  const toHex = rgbToHex([newR, newG, newB]);
  return toHex;
};

// formula for lightening a sRGB color is:
// r = r + ( tintFactor * (255 - r))
// g = g + ( tintFactor * (255 - g))
// b = b + ( tintFactor * (255 - b))
// the greater the tintFactor, the more light the color will be
const tint = ([currentR, currentG, currentB], tintFactor) => {
  const newR = Math.floor(currentR + tintFactor * (255 - currentR));
  const newG = Math.floor(currentG + tintFactor * (255 - currentG));
  const newB = Math.floor(currentB + tintFactor * (255 - currentB));

  // console.log("tint", newR, newG, newB);
  const toHex = rgbToHex([newR, newG, newB]);

  return toHex;
};

/**
 *
 * @param {array} rgb
 * @param {number} count
 * @returns original color plus count number of shades of the color as an array of hex values
 */
const getShades = ([r, g, b], count) => {
  const shades = [];
  const factor = 1 / (count + 1);
  for (let i = 1; i <= count + 1; i++) {
    const index = i;
    const shadeFactor = index * factor;
    // console.log("shadeFactor", shadeFactor);
    shades.push(shade([r, g, b], shadeFactor));
  }
  return shades;
};

/**
 *
 * @param {array} rgb
 * @param {number} count
 * @returns count number of tints as an array of hex values
 */

const getTints = ([r, g, b], count) => {
  const tints = [];
  const factor = 1 / (count + 1);

  for (let i = 1; i <= count; i++) {
    const index = i;
    const tintFactor = index * factor;
    // console.log("tintFactor", tintFactor);
    tints.push(tint([r, g, b], tintFactor));
  }
  return tints;
};

// const shade = ([r, g, b], percent) => {
//   let R = parseInt(r * ((100 + percent) / 100));
//   let G = parseInt(g * ((100 + percent) / 100));
//   let B = parseInt(b * ((100 + percent) / 100));

//   // console.log("shade", R, G, B);

//   R = R < 255 ? R : 255;
//   G = G < 255 ? G : 255;
//   B = B < 255 ? B : 255;

//   let RR = R.toString(16).length == 1 ? "0" + R.toString(16) : R.toString(16);
//   let GG = G.toString(16).length == 1 ? "0" + G.toString(16) : G.toString(16);
//   let BB = B.toString(16).length == 1 ? "0" + B.toString(16) : B.toString(16);

//   return "#" + RR + GG + BB;
// };

// const getShades = ([r, g, b], count) => {
//   const shades = [];
//   const percentFactor = 100 / count;

//   for (let i = 0; i < count; i++) {
//     const percent = percentFactor * i;
//     console.log("shade percentage", percent);
//     shades.push(shade([r, g, b], percent));
//   }
//   return shades;
// };

// const getTints = ([r, g, b], count) => {
//   const tints = [];
//   const percentFactor = 100 / count;

//   for (let i = 0; i < count; i++) {
//     const percent = -(percentFactor * i);
//     console.log("tint percentage", percent);

//     tints.push(shade([r, g, b], percent));
//   }
//   return tints;
// };

export const getColorPalette = ([r, g, b]) => {
  // console.log(r, g, b);
  return [
    ...getTints([r, g, b], 5).reverse(),
    ...getShades([r, g, b], 4).reverse(),
  ];
};

// export const getColorPalette = ([r, g, b]) => {
//   const color = Color.rgb([r, g, b]);
//   console.log(r, g, b);
//   return [...getShades(color, 4).reverse(), ...getTints(color, 5)];
// };
