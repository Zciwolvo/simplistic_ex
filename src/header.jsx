import React from "react";

import "./App.scss";

import fb from "./icons/fb.svg";
import insta from "./icons/in.svg";
import tw from "./icons/tw.svg";
import yt from "./icons/yt.svg";

const MainHeader = ({ setCattegory, setIndex }) => {
  return (
    <div className="App">
      <div className="header">
        <h1>Your Name</h1>
        <div className="row">
          <img className="icons" src={fb} alt={"img"} />
          <img className="icons" src={insta} alt={"img"} />
          <img className="icons" src={tw} alt={"img"} />
          <img className="icons" src={yt} alt={"img"} />
        </div>
      </div>
      <div className="subheader">
        <p onClick={() => setIndex(0)}>Projects</p>
        <p onClick={() => setIndex(1)}>About</p>
        <p onClick={() => setIndex(2)}>Contact</p>
      </div>
    </div>
  );
};

export default MainHeader;
