import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import * as Api from "../Api";
import { ColorBox } from "../components";
import { getImageColorExtract } from "../utils/mock-data";

export default function IndexPage() {
  const [file, setFile] = useState(null);
  const [src, setSrc] = useState(null);
  const [previewError, setPreviewError] = useState(null);
  const [hexColors, setHexColors] = useState([]);
  const formRef = React.useRef();
  const onImageSlected = async (event) => {
    const input = event.currentTarget;

    const files = input.files;

    if (files.length < 1) {
      setPreviewError("NO FILE SELECTED");
      return;
    }
    const url = URL.createObjectURL(files[0]);

    setFile(files[0]);
    setSrc(url);
    formRef.current.requestSubmit();
  };

  const submitForm = async (event) => {
    event.preventDefault();
    if (!file) {
      setPreviewError("please select an image");
      return;
    }
    const reader = new FileReader();
    reader.addEventListener("load", async function () {
      const formData = {
        data: reader.result,
      };
      // const result = await Api.uploadImage(formData);
      const result = getImageColorExtract();

      const imageColors = result.data.image_colors.map((color) => {
        const {
          r,
          g,
          b,
          closest_palette_color: color_name,
          html_code: hex,
        } = color;
        return {
          r,
          g,
          b,
          color_name,
          hex,
        };
      });
      setHexColors(imageColors.slice(0, 4));
      // console.log(result.data.image_colors);
    });

    reader.readAsDataURL(file);
  };

  return (
    <div>
      <section>
        <section>
          {src && (
            <img src={src} alt="upload" className={styles.upload_image} />
          )}
        </section>
        <form ref={formRef} onSubmit={submitForm}>
          <label htmlFor="image" className={styles.image_label}>
            upload image
          </label>
          <input
            onChange={onImageSlected}
            id="image"
            name="image"
            type="file"
            accept="image/*"
            className={styles.image_input}
          />
          {previewError && (
            <span className={styles.preview_error}>{previewError}</span>
          )}
        </form>
      </section>
      <section>
        <button>fetch color</button>
      </section>
      {hexColors.length >= 1 && (
        <div className={styles.color_box_container}>
          {hexColors.map((hexColor, key) => (
            <ColorBox key={key} hex={hexColor.hex} name={hexColor.color_name} />
          ))}
        </div>
      )}
    </div>
  );
}
