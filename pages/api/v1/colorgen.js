import axios from "axios";
import { IMAGGA_BASE_URL } from "../../../Api/base_urls";
import FormData from "form-data";

const generateColor = async (req, res) => {
  try {
    const {
      method,
      body: { data: image },
    } = req;
    if (method !== "POST") {
      res.status(405).json({
        error: { message: "request method not allowed for this resource" },
      });
    }
    if (!image) {
      return res
        .status(400)
        .send(
          "image data must be present to process this request, please provide image"
        );
    }

    const url = IMAGGA_BASE_URL + "colors";
    const body = new FormData();
    body.append("image_base64", image);
    const options = {
      auth: {
        username: process.env.IMAGGA_KEY,
        password: process.env.IMAGGA_SECRET,
      },
    };

    const result = await axios.post(url, body, options);
    // console.log("imagga server response result", result.data);
    return res.status(200).json({ data: result.data.result.colors });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      data: error,
    });
  }
};

export default generateColor;
