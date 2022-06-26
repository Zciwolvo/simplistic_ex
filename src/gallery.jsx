import React, { useState } from "react";

import "./grid.scss";
import Popup from "./popup";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("./gallery/art", false, /\.(png|jpe?g|)$/)
);

const photos = importAll(
  require.context("./gallery/photos", false, /\.(png|jpe?g|)$/)
);

const Gallery = ({ cattegory, setCattegory }) => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState();

  const OpenPopup = (image) => {
    setOpen(true);
    setImage(image);
  };

  const Col1 = [1, 4, 7, 10, 13, 16, 19];
  const Col2 = [2, 5, 8, 11, 14, 17, 20];
  const Col3 = [3, 6, 9, 12, 15, 18];

  return (
    <>
      <div className="subheader" style={{ marginBottom: "1em" }}>
        <p onClick={() => setCattegory(true)}>Paintings</p>
        <p onClick={() => setCattegory(false)}>Photography</p>
      </div>
      {cattegory ? (
        <div
          className="gridrow"
          onClick={() => {
            if (open) setOpen(false);
          }}
        >
          <Popup setOpen={setOpen} open={open} image={image} />
          <div className="column">
            {Col1.map((image) => (
              <img
                src={images[`${image}.jpg`]}
                onClick={() => OpenPopup(images[`${image}.jpg`])}
                alt={"img"}
              />
            ))}
          </div>
          <div className="column">
            {Col2.map((image) => (
              <img
                src={images[`${image}.jpg`]}
                onClick={() => OpenPopup(images[`${image}.jpg`])}
                alt={"img"}
              />
            ))}
          </div>
          <div className="column">
            {Col3.map((image) => (
              <img
                src={images[`${image}.jpg`]}
                onClick={() => OpenPopup(images[`${image}.jpg`])}
                alt={"img"}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="gridrow">
          <div className="column">
            {Col1.map((image) => (
              <img
                src={photos[`${image}.jpg`]}
                onClick={() => OpenPopup(photos[`${image}.jpg`])}
                alt={"img"}
              />
            ))}
          </div>
          <div className="column">
            {Col2.map((image) => (
              <img
                src={photos[`${image}.jpg`]}
                onClick={() => OpenPopup(photos[`${image}.jpg`])}
                alt={"img"}
              />
            ))}
          </div>
          <div className="column">
            {Col3.map((image) => (
              <img
                src={photos[`${image}.jpg`]}
                onClick={() => OpenPopup(photos[`${image}.jpg`])}
                alt={"img"}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
