import { COLORAPI_BASE_URL } from "./base_urls";
import axios from "axios";
const BASE_URL = "/api/v1";

const uploadImage = async (formData) => {
  const url = BASE_URL + "/colorgen";
  return axios
    .post(url, formData, { "Content-Type": "application/json" })
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};

const getMonochromeColors = async (
  color = "ADD8E6",
  { colorFormat = "hex", mode = "monochrome" } = {}
) => {
  const QUERY = `scheme?${colorFormat}=${color}&mode=${mode}&count=9`;
  const url = COLORAPI_BASE_URL + QUERY;
  console.log(url);
  return fetch(url)
    .then((res) => res.json())
    .catch((err) => {
      throw err;
    });
};

export { default as uploadImageToCloud } from "./uploadImageToCloud";
export { uploadImage, getMonochromeColors };
