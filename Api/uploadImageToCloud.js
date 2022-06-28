import axios from "axios";
const base_url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload`;

const uploadImageToCloud = (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", process.env.NEXT_PUBLIC_UPLOAD_PRESET);
  formData.append("cloud_name", process.env.NEXT_PUBLIC_CLOUD_NAME);
  return axios
    .post(base_url, formData)
    .then((res) => res)
    .catch((err) => {
      throw err;
      return;
    });
};

export default uploadImageToCloud;
