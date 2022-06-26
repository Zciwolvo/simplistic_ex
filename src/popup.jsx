import React from "react";

const Popup = ({ setOpen, open, image }) => {
  return open ? (
    <div className="popup">
      <p
        onClick={() => setOpen(false)}
        style={{ top: "1em", right: "1em", cursor: "pointer", width: "auto" }}
      >
        X
      </p>
      <img src={image} alt="img" />
    </div>
  ) : (
    <></>
  );
};

export default Popup;
